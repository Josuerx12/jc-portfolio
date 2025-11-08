import React from "react";

export interface ButtonCTAProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  variant?: "primary" | "secondary";
}

const ButtonCTA = ({
  variant = "primary",
  rounded = true,
  className,
  ...otherProps
}: ButtonCTAProps) => {
  const baseStyles =
    "px-6 py-2 font-semibold text-white cursor-pointer duration-200 ease-in-out";
  const roundedStyles = rounded ? "rounded-full" : "rounded-md";
  const variantStyles =
    variant === "secondary"
      ? "bg-secondary hover:bg-secondary/80"
      : "border border-primary hover:bg-primary/80";

  return (
    <button
      {...otherProps}
      className={`${baseStyles} ${roundedStyles} ${variantStyles} ${
        className || ""
      }`}
    />
  );
};

export default ButtonCTA;
