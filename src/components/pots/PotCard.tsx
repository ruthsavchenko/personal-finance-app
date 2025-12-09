"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { DotsThreeOutine } from "@/assets/icons/dots-three-outline";

export function PotCard({
    pot,
    onAdd,
    onWithdraw,
    onEdit,
    onDelete,
}: {
    pot: {
        id: number;
        name: string;
        saved: number;
        goal: number;
        color: string;
    };
    onAdd: () => void;
    onWithdraw: () => void;
    onEdit: () => void;
    onDelete: () => void;
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const percent = Math.round((pot.saved / pot.goal) * 100);

    return (
        <div className="bg-white rounded-xl p-300 relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-200">
                    <div className="w-200 h-200 rounded-full" style={{ backgroundColor: pot.color }} />
                    <h3 className="text-preset-2 text-grey-900">{pot.name}</h3>
                </div>

                <div className="relative">
                    <button onClick={() => setMenuOpen((prev) => !prev)} className="p-0 cursor-pointer">
                        <DotsThreeOutine className="text-grey-300" />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-[114px] bg-white rounded-xl py-150 px-250 gap-150 z-20 shadow-[0px_4px_24px_0px_#00000040]">
                            <div
                                className="text-preset-4 text-grey-900 hover:cursor-pointer"
                                onClick={() => {
                                    setMenuOpen(false);
                                    onEdit();
                                }}
                            >
                                Edit Pot
                            </div>
                            <div className="h-px bg-grey-100 my-2" />
                            <div
                                className="text-preset-4 text-red hover:cursor-pointer"
                                onClick={() => {
                                    setMenuOpen(false);
                                    onDelete();
                                }}
                            >
                                Delete Pot
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between mt-5">
                <span className="text-gray-500 text-sm">Total Saved</span>
                <span className="text-2xl font-semibold">${pot.saved.toFixed(2)}</span>
            </div>

            <div className="mt-4">
                <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                        className="h-2 rounded-full transition-all"
                        style={{
                            width: `${percent}%`,
                            backgroundColor: pot.color,
                        }}
                    />
                </div>

                <div className="flex justify-between text-sm mt-1">
                    <span style={{ color: pot.color }}>{percent}%</span>
                    <span className="text-gray-500">Target of ${pot.goal}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
                <Button variant="secondary" onClick={onAdd}>
                    + Add Money
                </Button>
                <Button variant="secondary" onClick={onWithdraw}>
                    Withdraw
                </Button>
            </div>
        </div>
    );
}
