"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/cn";
import { CaretDown } from "@/assets/icons/caret-down";

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    options: Option[];
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    value?: string;
    fullWidth?: boolean;
    renderOption?: (opt: Option) => React.ReactNode;
    renderValue?: (opt: Option | undefined) => React.ReactNode;
}

export function Select({
    options,
    onChange,
    label,
    placeholder = "Select…",
    value,
    renderOption,
    renderValue,
}: SelectProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const selected = options.find((opt) => opt.value === value);

    return (
        <div className={cn("flex flex-col gap-1 relative")} ref={ref}>
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

            <div
                className={cn(
                    "flex items-center justify-between border rounded-xl bg-white px-3 py-2 cursor-pointer transition",
                    "border-gray-300 hover:border-gray-400"
                )}
                onClick={() => setOpen((p) => !p)}
            >
                <div className="text-gray-900">
                    {renderValue ? (
                        renderValue(selected)
                    ) : selected ? (
                        selected.label
                    ) : (
                        <span className="text-gray-400">{placeholder}</span>
                    )}
                </div>

                <CaretDown className="text-gray-600" />
            </div>

            {open && (
                <div
                    className={cn(
                        "mt-1 border border-gray-200 rounded-xl bg-white shadow-lg py-1 z-50",
                        "absolute left-0 right-0 top-full"
                    )}
                >
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            className={cn(
                                "px-3 py-2 cursor-pointer transition hover:bg-gray-100",
                                value === opt.value && "bg-gray-50"
                            )}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                        >
                            {renderOption ? renderOption(opt) : opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
