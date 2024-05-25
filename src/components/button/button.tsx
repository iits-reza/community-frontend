"use client";
import { VariantProps, cva } from "class-variance-authority";
import cx from "classnames";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva([], {
  variants: {
    variant: {
      primary: [],
      secondary: [],
    },
    size: {},
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
});

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
