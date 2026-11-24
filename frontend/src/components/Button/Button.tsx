import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonSize = "s" | "m" | "l";
type ButtonShape = "rounded" | "circle";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  shape?: ButtonShape;
  isLoading?: boolean;
  selected?: boolean;
  onClick: () => void;
}

export function Button({
  size = "m",
  isLoading = false,
  shape = "rounded",
  selected = false,
  onClick,
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-pressed={selected}
      className={[
        styles.btn,
        styles[size],
        styles[shape],
        `${selected ? styles.selected : ""} `,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
