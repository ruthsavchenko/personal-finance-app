"use client";

import { useState, useMemo } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function PotTransactionModal({
    open,
    onConfirm,
    onClose,
    potName,
    currentAmount,
    goalAmount,
    type,
}: {
    open: boolean;
    onConfirm: () => void;
    onClose: () => void;
    potName: string;
    currentAmount: number;
    goalAmount: number;
    type: "add" | "withdraw";
}) {
    const [amount, setAmount] = useState("");

    const newAmount = useMemo(() => {
        const parsed = parseFloat(amount);
        if (isNaN(parsed)) return currentAmount;
        return type === "add" ? currentAmount + parsed : Math.max(0, currentAmount - parsed);
    }, [amount, currentAmount, type]);

    const percent = Math.min((newAmount / goalAmount) * 100, 100);
    const title = type === "add" ? `Add to ‘${potName}’` : `Withdraw from ‘${potName}’`;
    const buttonLabel = type === "add" ? "Confirm Addition" : "Confirm Withdrawal";

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col gap-6">
                <h2 className="text-preset-1 text-grey-900">{title}</h2>

                <p className="text-preset-4 text-grey-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet nibh nec urna. In nisi
                    neque, aliquet.
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-grey-500 text-preset-4">New Amount</span>
                    <span className="text-preset-1 text-grey-900">${newAmount.toFixed(2)}</span>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="w-full bg-beige-100 h-100 rounded-full">
                        <div
                            className={cn("h-100 rounded-full transition-all", type === "add" ? "bg-green" : "bg-red")}
                            style={{ width: `${percent}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className={cn("text-preset-5-bold", type === "add" ? "text-green" : "text-red")}>
                            {percent.toFixed(2)}%
                        </span>
                        <span className="text-grey-500 text-preset-5">Target of ${goalAmount}</span>
                    </div>
                </div>

                <Input
                    label={type === "add" ? "Amount to Add" : "Amount to Withdraw"}
                    prefix={<span className="text-beige-500">$</span>}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    fullWidth
                />

                <Button onClick={onConfirm}>{buttonLabel}</Button>
            </div>
        </Modal>
    );
}
