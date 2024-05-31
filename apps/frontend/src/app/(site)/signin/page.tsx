"use client";
import SignButton from "@/components/signButton/SignButton";
import SignInput from "@/components/signButton/SignInput";
import React, { useState } from "react";

type SigninProps = {};

const SigninPage: React.FC<SigninProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 h-3/5 bg-white text-black rounded-2xl">
        <div>
          <div>
            <p className="font-medium text-4xl">MUSIC</p>
          </div>
          <div>
            <p className="font-medium text-2xl">email</p>
          </div>
          <div>
            <SignInput onChange={setEmail} value={email} />
          </div>
          <div>
            <p className="font-medium text-2xl">PASSWORD</p>
          </div>
          <div>
            <SignInput onChange={setPassword} value={password} />
          </div>
          <div>
            <SignButton onSubmit={onSubmit}>
              <p className="font-medium text-2xl">SIGN IN</p>
            </SignButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
