import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { CaretRight } from "@/assets/icons/caret-right";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl transition-opacity transition-colors duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-gray-900 text-white hover:bg-gray-500 shadow-sm text-preset-4-bold p-200",
                secondary:
                    "bg-beige-100 text-gray-900 border border-transparent text-preset-4-bold p-200 hover:border-beige-500 hover:bg-white group",
                tertiary: "text-gray-500 hover:text-gray-900 group text-preset-4",
                destroy: "bg-red text-white hover:opacity-80 text-preset-4-bold p-200",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, children, ...props }: ButtonProps) {
    return (
        <button className={cn(buttonVariants({ variant }), className)} {...props}>
            <span className="flex items-center gap-150">
                {children}
                {variant === "tertiary" && (
                    <CaretRight className="w-4 h-4 text-gray-500 group-hover:text-gray-900 duration-300" />
                )}
            </span>
        </button>
    );
}
