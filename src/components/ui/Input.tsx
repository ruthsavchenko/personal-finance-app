import React from "react";
import { cn } from "@/lib/cn";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
    label?: string;
    helperText?: string;
    error?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    fullWidth?: boolean;
}

export function Input({ label, helperText, error, prefix, suffix, fullWidth, className, ...props }: InputProps) {
    return (
        <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

            <div
                className={cn(
                    "flex items-center gap-2 rounded-xl border bg-white px-3 py-2 transition-all",
                    error ? "border-red-400" : "border-gray-300 hover:border-gray-400 focus-within:border-gray-500",
                    fullWidth && "w-full"
                )}
            >
                {prefix && <div className="text-gray-500">{prefix}</div>}

                <input
                    className={cn("w-full outline-none text-gray-900 placeholder:text-gray-400", className)}
                    {...props}
                />

                {suffix && <div className="text-gray-500">{suffix}</div>}
            </div>

            {helperText && <p className={cn("text-xs self-end", error ? "text-red-500" : "text-gray-500")}>{helperText}</p>}
        </div>
    );
}
