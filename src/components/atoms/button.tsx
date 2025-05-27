import React from "react";
import "./button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "green" | "red" | "blue" | "gradient";
};

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`button 
        ${variant === "green" ? "button--green" : ""}
        ${variant === "red" ? "button--red" : ""}
        ${variant === "blue" ? "button--blue" : ""}
        ${variant === "gradient" ? "button--gradient" : ""}        
        `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
