import { MouseEvent, ReactNode } from "react";

export default function Button({
    children,
    onClick = undefined,
    variant = "default", // "default" | "accent" | "background" | "border"
    outlined = false,
    filled = false,
    className = "",
  }: {
    children: ReactNode | string,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    variant?: string,
    outlined?: boolean,
    filled?: boolean,
    className?: string,
  }) {
    const base = "px-3 py-2 rounded-lg text-sm transition-colors duration-150 cursor-pointer";
    let classes = base;
  
    if (variant === "default") {
      classes += " text-fg hover:text-fg-muted";
    }
  
    if (variant === "background") {
      classes += " bg-fg text-on-fg hover:bg-fg-muted";
    }
  
    if (variant === "border") {
      classes += " bg-bg text-on-bg border border-surface-border hover:border-fg";
    }
  
    if (variant === "accent") {
      if (filled) {
        classes += " bg-accent-1-500 text-on-fg hover:bg-accent-1-700";
      } else if (outlined) {
        classes +=
          " border border-accent-1-500 bg-bg hover:border-accent-1-700 hover:text-accent-1-700";
      } else {
        classes += " text-accent-1-500 hover:text-accent-1-700";
      }
    }

    return (
      <button className={`${classes} ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  