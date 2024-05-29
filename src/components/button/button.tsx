"use client";
import { VariantProps, cva } from "class-variance-authority";
import cx from "classnames";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
  [
    "relative",
    "disabled:cursor-not-allowed",
    "bg-lime-200",
    "font-text",
    "ease-in-out transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-primary",
          "hover:text-white hover:bg-primary hover:from-primary hover:to-blue hover:from-60%",
        ],
        secondary: ["bg-lime-50", "text-primary", "hover:bg-lime-400"],
        social: ["bg-opacity-0", "hover:text-white hover:bg-primary"],
      },
      size: {
        default: ["text-lg", "py-2", "px-8"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...rest }, ref) => (
    <button
      ref={ref}
      className={twMerge(cx(variants({ variant, size, className })))}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
