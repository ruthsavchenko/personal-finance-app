"use client";

import Header from "@/components/layout/Header";
import { AddPotModal } from "@/components/pots/AddPotModal";
import { AddToPotModal } from "@/components/pots/AddToPotModal";
import { DeletePotModal } from "@/components/pots/DeletePotModal";
import { EditPotModal } from "@/components/pots/EditPotModal";
import { PotCard } from "@/components/pots/PotCard";
import { WithdrawFromPotModal } from "@/components/pots/WithdrawFromPotModal";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const pots = [
    {
        id: 1,
        name: "New Laptop",
        saved: 850,
        goal: 2000,
        color: "#C94736",
    },
    {
        id: 2,
        name: "Vacation",
        saved: 1200,
        goal: 3000,
        color: "#82C9D7",
    },
    {
        id: 3,
        name: "Emergency Fund",
        saved: 400,
        goal: 1000,
        color: "#7F9161",
    },
];

export default function PotsPage() {
    const [addPotOpen, setAddPotOpen] = useState(false);
    const [selectedPot, setSelectedPot] = useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [openPotEdit, setOpenPotEdit] = useState(false);
    const [openWithdraw, setOpenWithdraw] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    return (
        <>
            <Header title="Pots" actions={<Button onClick={() => setAddPotOpen(true)}>+ Add New Pot</Button>} />

            <div className="p-8 text-gray-900 flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pots.map((pot) => {
                        const percent = Math.round((pot.saved / pot.goal) * 100);

                        return (
                            <PotCard
                                key={pot.id}
                                pot={pot}
                                onAdd={() => {
                                    setSelectedPot(pot);
                                    setOpenAdd(true);
                                }}
                                onWithdraw={() => {
                                    setSelectedPot(pot);
                                    setOpenWithdraw(true);
                                }}
                                onEdit={() => {
                                    setSelectedPot(pot);
                                    setOpenPotEdit(true);
                                }}
                                onDelete={() => {
                                    setSelectedPot(pot);
                                    setOpenDelete(true);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <AddPotModal open={addPotOpen} onClose={() => setAddPotOpen(false)} />
            <EditPotModal open={openPotEdit} onClose={() => setOpenPotEdit(false)} />
            <DeletePotModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                potName={selectedPot?.name}
                onConfirm={() => {}}
            />
            {selectedPot && (
                <>
                    <AddToPotModal
                        open={openAdd}
                        onClose={() => setOpenAdd(false)}
                        potName={selectedPot.name}
                        currentAmount={selectedPot.saved}
                        goalAmount={selectedPot.goal}
                    />

                    <WithdrawFromPotModal
                        open={openWithdraw}
                        onClose={() => setOpenWithdraw(false)}
                        potName={selectedPot.name}
                        currentAmount={selectedPot.saved}
                        goalAmount={selectedPot.goal}
                    />
                </>
            )}
        </>
    );
}
