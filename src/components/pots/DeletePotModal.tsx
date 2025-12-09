import { Modal } from "@/components/ui/Modal";
import { Button } from "../ui/Button";

export function DeletePotModal({
    open,
    onClose,
    potName,
    onConfirm,
}: {
    open: boolean;
    onClose: () => void;
    potName: string;
    onConfirm: () => void;
}) {
    return (
        <Modal open={open} onClose={onClose} size="md">
            <div className="flex flex-col gap-250">
                <h2 className="text-preset-1 text-grey-900">Delete ‘{potName}’?</h2>

                <p className="text-grey-900 text-preset-4">
                    Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it
                    will be removed forever.
                </p>

                <Button variant="destroy" onClick={onConfirm}>
                    Yes, Confirm Deletion
                </Button>

                <div className="flex justify-center">
                    <Button variant="tertiary" onClick={onClose}>
                        No, Go Back
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
