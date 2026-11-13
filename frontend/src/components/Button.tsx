
import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "s" | "m" | "l";
type ButtonShape = "rounded" | "circle";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "m",
  isLoading = false,
  shape = "rounded",
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      data-variant={variant}
      disabled={disabled || isLoading}
      className={[styles.btn, styles[size], styles[shape], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}