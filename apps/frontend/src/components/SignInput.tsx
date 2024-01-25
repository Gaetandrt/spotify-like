import { on } from "events";
import React from "react";

type SigninProps = {
  onChange: (value: string) => void;
};

function SignInput({ onChange: onChange }: SigninProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
      type="email"
      className="border-2 border-black"
      onChange={handleChange}
    />
  );
}

export default SignInput;
