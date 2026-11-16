
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
      disabled={disabled || isLoading}
      className={[styles.btn, styles[size], styles[shape], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}