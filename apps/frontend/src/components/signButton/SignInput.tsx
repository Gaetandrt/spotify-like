import { on } from "events";
import React from "react";

type SigninProps = {
  onChange: (value: string) => void;
  value: string;
};

function SignInput({ onChange: onChange, value }: SigninProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
    value={value}
      type="email"
      className="border-2 border-black"
      onChange={handleChange}
    />
  );
}

export default SignInput;
