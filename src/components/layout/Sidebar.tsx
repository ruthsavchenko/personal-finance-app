"use client";

import { ArrowsDownUp } from "@/assets/icons/arrows-down-up";
import { ChartDonut } from "@/assets/icons/chart-donut";
import { House } from "@/assets/icons/house";
import { JarFill } from "@/assets/icons/jar-fill";
import { Receipt } from "@/assets/icons/receipt";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Overview", href: "/dashboard", icon: House },
    // { label: "Transactions", href: "/transactions", icon: ArrowsDownUp },
    // { label: "Budgets", href: "/budgets", icon: ChartDonut },
    { label: "Pots", href: "/pots", icon: JarFill },
    // { label: "Recurring bills", href: "/bills", icon: Receipt },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-[300px] min-h-screen bg-grey-900 rounded-r-2xl flex flex-col gap-300 pb-300">
            <Link href="/" className="py-500 px-400">
                <Image src="/logo.png" alt="Finance" width={121} height={22} />
            </Link>

            <nav className="flex flex-col gap-50 pr-300">
                {navItems.map((item) => {
                    const active = pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-400 py-200 rounded-r-xl text-preset-3 flex items-center gap-200 transition-colors duration-200 duration-300 border-l-4 group",
                                active
                                    ? "bg-beige-100 text-grey-900 border-green"
                                    : "text-grey-300 hover:text-grey-100 border-transparent"
                            )}
                        >
                            {Icon && (
                                <Icon
                                    size={24}
                                    className={cn(active ? "text-green" : "text-grey-300 group-hover:text-grey-100")}
                                />
                            )}
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
