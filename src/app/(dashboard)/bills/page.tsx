import Header from "@/components/layout/Header";

export default function BillsPage() {
    const bills = [
        {
            id: 1,
            name: "Netflix",
            amount: 12.99,
            due: "Dec 05",
            status: "Upcoming",
        },
        {
            id: 2,
            name: "Internet",
            amount: 20,
            due: "Dec 10",
            status: "Upcoming",
        },
        {
            id: 3,
            name: "Gym Membership",
            amount: 35,
            due: "Dec 18",
            status: "Paid",
        },
    ];

    return (
        <>
            <Header title="Recurring bills" />
        </>
    );
}
