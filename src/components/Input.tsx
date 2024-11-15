import React, { ChangeEvent, type FC } from "react";

interface InputTypes {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  className?: string;
  value: string;
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  maxLength?: number;
}

const Input: FC<InputTypes> = ({ ...args }) => {
  return <input {...args} />;
};

export default Input;
