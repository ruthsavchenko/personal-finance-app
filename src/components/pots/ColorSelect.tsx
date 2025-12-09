import { Select } from "../ui/Select";

type ColorSelectProps = {
    value: string;
    onChange: (value: string) => void;
};

const colors = [
    { label: "Red", value: "red", color: "#ff5b5b" },
    { label: "Blue", value: "blue", color: "#3b82f6" },
    { label: "Green", value: "green", color: "#22c55e" },
];

export function ColorSelect({ value, onChange }: ColorSelectProps) {
    return (
        <Select
            label="Theme"
            options={colors}
            value={value}
            onChange={onChange}
            placeholder="Select theme"
            renderOption={(opt) => (
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: opt.color }} />
                    {opt.label}
                </div>
            )}
            renderValue={(opt) =>
                opt ? (
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: opt.color }} />
                        {opt.label}
                    </div>
                ) : (
                    "Select color"
                )
            }
        />
    );
}
