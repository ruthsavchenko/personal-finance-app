import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";

export default function BudgetsPage() {
    const budgets = [
        {
            id: 1,
            name: "Food",
            spent: 320,
            limit: 500,
        },
        {
            id: 2,
            name: "Transport",
            spent: 120,
            limit: 200,
        },
        {
            id: 3,
            name: "Entertainment",
            spent: 150,
            limit: 300,
        },
    ];

    return (
        <>
            <Header title="Budgets" actions={<Button>+ Add Budget</Button>} />
        </>
    );
}
