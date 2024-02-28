// Button.tsx

import React from "react";

export interface ButtonProps {
  category: "large" | "medium" | "small";
  type: "primary" | "secondary";
  variation: "default" | "hover" | "icon" | "disabled" | "disabled-icon";
  text?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  category,
  type,
  variation,
  text = "Button",
  icon,
  disabled = false,
}) => {
  const buttonClass = `button ${category} ${type} ${variation}`;

  return (
    <button className={buttonClass} disabled={disabled}>
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
