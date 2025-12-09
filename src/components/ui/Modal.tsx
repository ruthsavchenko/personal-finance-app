"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { Close } from "@/assets/icons/close";

export const ModalSizeTypes = {
    sm: "sm",
    md: "md",
} as const;

export const modalSizeClasses = {
    [ModalSizeTypes.sm]: "max-w-[335px]",
    [ModalSizeTypes.md]: "max-w-[560px]",
};

export function Modal({
    open,
    onClose,
    children,
    size = "md",
}: {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: keyof typeof ModalSizeTypes;
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="absolute inset-0" onClick={onClose} />
            <div className={cn(modalSizeClasses[size], "relative bg-white rounded-2xl p-400 w-full z-10")}>
                <button onClick={onClose} className="absolute top-400 right-400 text-gray-500 cursor-pointer">
                    <Close />
                </button>

                {children}
            </div>
        </div>
    );
}
