import React, { type FC } from "react";

interface ButtonType {
  children: React.ReactNode;
  onClick(): void;
  className?: string;
}

const Button: FC<ButtonType> = ({ children, className, ...args }) => {
  return (
    <button
      {...args}
      className={`${className} cursor-pointer px-4 py-2 rounded-sm border text-xsm font-semibold md:text-sm`}
    >
      {children}
    </button>
  );
};

export default Button;
