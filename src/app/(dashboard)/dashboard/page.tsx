"use client";

import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { JarOutline } from "@/assets/icons/jar-outline";
import { cn } from "@/lib/cn";
import Image from "next/image";

const pots = [
    { name: "Savings", amount: 159 },
    { name: "Gift", amount: 40 },
    { name: "New Laptop", amount: 10 },
];

const transactions = [
    {
        id: 1,
        name: "Emma Richardson",
        amount: +75.5,
        date: "19 Aug 2024",
        icon: "/avatar-emma.png",
    },
    {
        id: 2,
        name: "Savory Bites Bistro",
        amount: -55.5,
        date: "19 Aug 2024",
        icon: "/avatar-bistro.png",
    },
    {
        id: 3,
        name: "Daniel Carter",
        amount: -42.3,
        date: "18 Aug 2024",
        icon: "/avatar-daniel.png",
    },
    {
        id: 4,
        name: "Sun Park",
        amount: +120,
        date: "17 Aug 2024",
        icon: "/avatar-sun.png",
    },
    {
        id: 5,
        name: "Urban Services Hub",
        amount: -65,
        date: "17 Aug 2024",
        icon: "/avatar-urban.png",
    },
];

export default function DashboardPage() {
    return (
        <>
            <Header title="Overview" />

            <div className="p-400 flex flex-col gap-300 bg-beige-100 min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-150">
                    <div className="bg-grey-900 text-white rounded-2xl p-300 space-y-150">
                        <p className="text-white text-preset-4">Current Balance</p>
                        <p className="text-preset-1">$4,836.00</p>
                    </div>

                    <div className="bg-white rounded-2xl p-300">
                        <p className="text-grey-500 text-preset-4">Income</p>
                        <p className="text-preset-1">$3,814.25</p>
                    </div>

                    <div className="bg-white rounded-2xl p-300">
                        <p className="text-grey-500 text-preset-4">Expenses</p>
                        <p className="text-preset-1">$1,700.50</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="gap-300 lg:col-span-3 flex flex-col">
                        <div className="bg-white rounded-2xl p-400 flex flex-col gap-250 col-span-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-preset-2 text-grey-900">Pots</h3>
                                <Button variant="tertiary">
                                    <Link href="/pots">See Details</Link>
                                </Button>
                            </div>

                            <div className="flex gap-150">
                                <div className="bg-beige-100 rounded-xl p-200 flex items-center gap-200 flex-1">
                                    <JarOutline className="text-green" size={40} />

                                    <div className="space-y-150">
                                        <p className="text-grey-500 text-preset-4">Total Saved</p>
                                        <p className="text-preset-1 text-grey-900">$850</p>
                                    </div>
                                </div>

                                {/* <div className="grid grid-cols-3 gap-200 text-sm text-grey-700 flex-1">
                                {pots.map((p) => (
                                    <div key={p.name} className="flex justify-between">
                                        <span>{p.name}</span>
                                        <span className="font-medium">${p.amount}</span>
                                    </div>
                                ))}
                            </div> */}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-400 flex-1 space-y-400">
                            <div className="flex justify-between items-center">
                                <h3 className="text-preset-2">Transactions</h3>
                                <Button variant="tertiary">
                                    <Link href="/transactions">View All</Link>
                                </Button>
                            </div>

                            <div className="flex flex-col gap-150">
                                {transactions.map((t) => (
                                    <div key={t.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-200">
                                            <Image src={t.icon} width={40} height={40} alt="user" />
                                            <p className="text-preset-4-bold">{t.name}</p>
                                        </div>

                                        <p
                                            className={cn(
                                                "text-preset-4-bold",
                                                t.amount < 0 ? "text-grey-900" : "text-green"
                                            )}
                                        >
                                            {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount).toFixed(2)}
                                            <p className="text-preset-5 text-grey-500">{t.date}</p>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-300">
                        <div className="bg-white rounded-2xl p-400 col-span-2 space-y-400">
                            <div className="flex justify-between items-center">
                                <h3 className="text-preset-2">Budgets</h3>

                                <Button variant="tertiary">
                                    <Link href="/budgets">See Details</Link>
                                </Button>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-48 h-48 bg-beige-100 rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Entertainment</span> <span>$50.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Bills</span> <span>$750.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Dining Out</span> <span>$75.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Personal Care</span> <span>$100.00</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-400 space-y-400">
                            <div className="flex justify-between items-center">
                                <h3 className="text-preset-2">Recurring Bills</h3>
                                <Button variant="tertiary">
                                    <Link href="/bills">See Details</Link>
                                </Button>
                            </div>

                            <div className="flex flex-col gap-150">
                                <div className="bg-beige-100 p-250 rounded-xl flex items-center justify-between">
                                    <p className="text-grey-500 text-preset-4">Paid Bills</p>
                                    <p className="text-grey-900 text-preset-4-bold">$190.00</p>
                                </div>

                                <div className="bg-beige-100 p-250 rounded-xl flex items-center justify-between">
                                    <p className="text-grey-500 text-preset-4">Total Upcoming</p>
                                    <p className="text-grey-900 text-preset-4-bold">$194.98</p>
                                </div>

                                <div className="bg-beige-100 p-250 rounded-xl flex items-center justify-between">
                                    <p className="text-grey-500 text-preset-4">Due Soon</p>
                                    <p className="text-grey-900 text-preset-4-bold">$59.98</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
