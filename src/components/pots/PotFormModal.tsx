"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ColorSelect } from "./ColorSelect";

type Mode = "add" | "edit";

export function PotFormModal({
    open,
    onClose,
    mode,
    initialData,
}: {
    open: boolean;
    onClose: () => void;
    mode: Mode;
    initialData?: {
        name: string;
        target: number;
        color: string;
    };
}) {
    const isEdit = mode === "edit";

    const [name, setName] = useState("");
    const [target, setTarget] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        if (isEdit && initialData) {
            setName(initialData.name);
            setTarget(String(initialData.target));
            setColor(initialData.color);
        }
    }, [isEdit, initialData]);

    const title = isEdit ? "Edit Pot" : "Add New Pot";
    const description = isEdit
        ? "If your saving targets change, feel free to update your pots."
        : "Create a pot to set savings targets. These can help keep you on track as you save for special purchases.";

    const buttonLabel = isEdit ? "Save Changes" : "Add Pot";

    const nameLimit = 30;
    const charsLeft = nameLimit - name.length;

    return (
        <Modal open={open} onClose={onClose}>
            <div className="flex flex-col gap-6">
                <h2 className="text-grey-900 text-preset-1">{title}</h2>
                <p className="text-grey-500 text-preset-4">{description}</p>
                <Input
                    label="Pot Name"
                    placeholder="e.g. Rainy Days"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    helperText={`${charsLeft} characters left`}
                    fullWidth
                />
                <Input
                    label="Target"
                    prefix={<span className="text-beige-500">$</span>}
                    placeholder="e.g. 2000"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    fullWidth
                />
                <ColorSelect value={color} onChange={setColor} />
                <Button>{buttonLabel}</Button>
            </div>
        </Modal>
    );
}
