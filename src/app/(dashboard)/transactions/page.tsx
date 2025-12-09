"use client";

import { MagnifyingGlass } from "@/assets/icons/magnifying-glass";
import Header from "@/components/layout/Header";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useMemo, useState } from "react";

const mockTransactions = [
    { id: 1, name: "Groceries", category: "Food", date: "Nov 20", amount: -45.2 },
    { id: 2, name: "Salary", category: "Income", date: "Nov 20", amount: 2400 },
    { id: 3, name: "Netflix", category: "Subscription", date: "Nov 19", amount: -12.99 },
    { id: 4, name: "Taxi", category: "Transport", date: "Nov 19", amount: -8 },
];

export default function TransactionsPage() {
    const [search, setSearch] = useState("");

    const filteredTransactions = useMemo(() => {
        if (!search.trim()) return mockTransactions;
        const q = search.toLowerCase();

        return mockTransactions.filter(
            (t) =>
                t.name.toLowerCase().includes(q) ||
                t.category.toLowerCase().includes(q) ||
                t.date.toLowerCase().includes(q)
        );
    }, [search]);

    return (
        <>
            <Header title="Transactions" />

            <div className="p-400 flex flex-col gap-300 bg-white rounded-2xl m-400">
                <div className="flex justify-between items-center">
                    <Input
                        placeholder="Search transaction"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        suffix={<MagnifyingGlass />}
                    />
                    <div className="flex gap-300">
                        <div className="flex items-center gap-100">
                            <p>Sort by</p>
                            <Select
                                placeholder="Sort by Date"
                                onChange={() => {}}
                                options={[
                                    { label: "Date (newest)", value: "newest" },
                                    { label: "Date (oldest)", value: "oldest" },
                                    { label: "Amount (high)", value: "high" },
                                    { label: "Amount (low)", value: "low" },
                                ]}
                            />
                        </div>
                        <div className="flex items-center gap-100">
                            <p>Category</p>
                            <Select
                                onChange={() => {}}
                                options={[
                                    { label: "All Categories", value: "all" },
                                    { label: "Food", value: "food" },
                                    { label: "Transport", value: "transport" },
                                    { label: "Subscriptions", value: "subscriptions" },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                {/* List container */}
                <div className="">
                    <div className="flex flex-col divide-y">
                        {filteredTransactions.map((t) => (
                            <div key={t.id} className="flex items-center justify-between py-4">
                                {/* Left info */}
                                <div>
                                    <p className="font-medium">{t.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {t.category} • {t.date}
                                    </p>
                                </div>

                                {/* Amount */}
                                <p
                                    className={`text-lg font-semibold ${
                                        t.amount < 0 ? "text-red-500" : "text-green-600"
                                    }`}
                                >
                                    {t.amount < 0 ? "- " : "+ "}${Math.abs(t.amount)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
