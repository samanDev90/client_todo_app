import React, { type FC } from "react";

interface ButtonType {
  children: React.ReactNode;
  onClick(): void;
  className?: string;
  type: "button" | "submit";
}

const Button: FC<ButtonType> = ({ children, className, ...args }) => {
  return (
    <button
      {...args}
      className={`${className} cursor-pointer px-4 py-2 rounded-sm border text-sm font-semibold md:text-md`}
    >
      {children}
    </button>
  );
};

export default Button;
