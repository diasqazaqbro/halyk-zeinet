import React, { InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  className?: string;
  classField?: string;
  children?: ReactNode;
}

const Input: React.FC<IInputProps> = ({
  className,
  classField,
  children,
  ...rest
}) => {
  return (
    <div className={cn(classField)}>
      <input
        autoComplete="off"
        className={cn(className, "outline-none w-full")}
        {...rest}
      />
      {children}
    </div>
  );
};

export default Input;
