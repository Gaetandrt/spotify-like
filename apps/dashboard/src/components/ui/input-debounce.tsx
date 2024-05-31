import * as React from "react";
import { useDebounce } from "use-debounce";
import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  debounceDelay?: number;
  onDebounce: (value: string) => void;
}

const InputDebounce = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onDebounce, debounceDelay = 450, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || "");
    const [debouncedValue] = useDebounce(value, debounceDelay);

    React.useEffect(() => {
      if (debouncedValue !== props.value) {
        onDebounce(String(debouncedValue));
      }
    }, [debouncedValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

InputDebounce.displayName = "InputDebounce";

export { InputDebounce };
