import React from "react";
import { motion } from "framer-motion";
import {
    ArrowDownRight,
    ArrowUpRight,
    BarChart3,
    Bell,
    ChevronDown,
    CreditCard,
    DownloadIcon,
    LayoutDashboard,
    Package,
    Settings,
    ShoppingCart,
    TrendingUp,
    Users,
} from "lucide-react";

// Other components
const Sidebar = () => {
    return <aside className="hidden w-52 shrink-0 border-r bg-sidebar p-3 md:block">
        <img src="logo.png" alt="Logo" className="h-4 ml-2 mt-2 mb-7" />

        <div className="space-y-1">
            <p className="px-2 pb-2 text-[9px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                Workspace
            </p>

            {[
                {
                    label: "Dashboard",
                    icon: LayoutDashboard,
                    active: true,
                },
                {
                    label: "Inventory",
                    icon: Package,
                },
                {
                    label: "Sales",
                    icon: ShoppingCart,
                },
                {
                    label: "Customers",
                    icon: Users,
                },
                {
                    label: "Reports",
                    icon: BarChart3,
                },
            ].map(({ label, icon: Icon, active }) => (
                <div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium ${active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/60"
                        }`}
                >
                    <Icon className="size-3.5" />
                    {label}
                </div>
            ))}
        </div>

        <div className="mt-8 space-y-1">
            <p className="px-2 pb-2 text-[9px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                System
            </p>

            <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-sidebar-foreground/60">
                <CreditCard className="size-3.5" />
                Billing
            </div>

            <div className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs text-sidebar-foreground/60">
                <Settings className="size-3.5" />
                Settings
            </div>
        </div>

        <div className="mt-auto pt-32">
            <div className="rounded-[8px] bg-sidebar-accent p-3">
                <p className="text-[10px] font-semibold text-sidebar-accent-foreground">
                    Business Plan
                </p>
                <p className="mt-1 text-[9px] text-sidebar-foreground/60">
                    68% of storage used
                </p>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-sidebar-border">
                    <div className="h-full w-[68%] rounded-full bg-primary" />
                </div>
            </div>
        </div>
    </aside>
}

const Header = () => {
    return <header className="flex h-14 items-center justify-between border-b border-border px-5">
        <h1 className="text-sm font-medium">
            Good morning, Darren Christian
        </h1>

        <div className="flex items-center gap-2">
            <button className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground">
                <Bell className="size-3.5" />
            </button>

            <div className="flex items-center gap-2 border-l border-border pl-3">
                <div className="flex size-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    DC
                </div>
                <span className="hidden text-xs font-medium sm:block">
                    Darren Christian
                </span>
            </div>
        </div>
    </header>
}

const MetricCard = ({
    label,
    value,
    change,
    positive = true,
    icon: Icon,
}: {
    label: string;
    value: string;
    change: string;
    positive?: boolean;
    icon: React.ElementType;
}) => {
    return (
        <div className="rounded-sm bg-card p-4 border">
            <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                    {label}
                </span>

                <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <Icon className="size-4" />
                </div>
            </div>

            <div className="mb-1 text-xl font-semibold tracking-tight text-card-foreground">
                {value}
            </div>

            <div
                className={`flex items-center gap-1 text-xs font-medium ${positive ? "text-chart-2" : "text-destructive"}`}
            >
                {positive ? (
                    <ArrowUpRight className="size-3.5" />
                ) : (
                    <ArrowDownRight className="size-3.5" />
                )}

                {change}
                <span className="font-normal text-muted-foreground">
                    vs last month
                </span>
            </div>
        </div>
    );
}

const SalesChart = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

    return (
        <div className="rounded-sm bg-card p-5 border">
            <div className="mb-5 flex items-start justify-between">
                <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                        Sales Performance
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Revenue generated over the last 7 months
                    </p>
                </div>

                <button className="flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted">
                    2026
                    <ChevronDown className="size-3" />
                </button>
            </div>

            <div className="relative h-48">
                <div className="absolute inset-0 flex flex-col justify-between">
                    {[40, 30, 20, 10, 0].map((value) => (
                        <div
                            key={value}
                            className="flex items-center gap-3 text-[10px] text-muted-foreground"
                        >
                            <span className="w-7 text-right">{value}M</span>
                            <div className="h-px flex-1 border-t border-dashed border-border" />
                        </div>
                    ))}
                </div>

                <svg
                    viewBox="0 0 700 180"
                    preserveAspectRatio="none"
                    className="absolute inset-x-10 top-0 h-[calc(100%-20px)] w-[calc(100%-40px)] overflow-visible"
                >
                    <path
                        d="M0 145 C45 137 65 128 105 132 S165 118 210 122 S270 104 315 108 S370 87 420 93 S480 67 525 76 S590 43 640 52 S675 32 700 35 L700 180 L0 180 Z"
                        className="fill-primary opacity-[0.08]"
                    />

                    <motion.path
                        d="M0 145 C45 137 65 128 105 132 S165 118 210 122 S270 104 315 108 S370 87 420 93 S480 67 525 76 S590 43 640 52 S675 32 700 35"
                        fill="none"
                        className="stroke-primary"
                        strokeWidth="2.5"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />

                    <circle
                        cx="700"
                        cy="35"
                        r="4"
                        className="fill-card stroke-primary"
                        strokeWidth="2"
                    />
                </svg>

                <div className="absolute bottom-0 left-10 right-0 flex justify-between">
                    {months.map((month) => (
                        <span
                            key={month}
                            className="text-[10px] text-muted-foreground"
                        >
                            {month}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const RecentTransactions = () => {
    const transactions = [
        {
            name: "Product A",
            category: "Inventory sale",
            amount: "+Rp2.4M",
            positive: true,
        },
        {
            name: "Product B",
            category: "Supplier payment",
            amount: "-Rp800K",
            positive: false,
        },
        {
            name: "Product C",
            category: "Inventory sale",
            amount: "+Rp1.7M",
            positive: true,
        },
    ];

    return (
        <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                        Recent Transactions
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Latest business activity
                    </p>
                </div>

                <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-semibold text-accent-foreground">
                    3 new
                </span>
            </div>

            <div className="space-y-1">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.name}
                        className="flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-muted"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                                <ShoppingCart className="size-4 text-muted-foreground" />
                            </div>

                            <div>
                                <p className="text-xs font-medium text-card-foreground">
                                    {transaction.name}
                                </p>
                                <p className="mt-0.5 text-[10px] text-muted-foreground">
                                    {transaction.category}
                                </p>
                            </div>
                        </div>

                        <span
                            className={`text-xs font-semibold ${transaction.positive
                                ? "text-chart-2"
                                : "text-destructive"
                                }`}
                        >
                            {transaction.amount}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const AiForecast = () => {
    return (
        <div className="relative overflow-hidden rounded-sm border border-primary/20 bg-accent p-5">
            <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold text-accent-foreground">
                            AI Forecast
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                            Business intelligence
                        </p>
                    </div>

                    <span className="rounded-full bg-primary px-2 py-1 text-[9px] font-bold text-primary-foreground">
                        PRO
                    </span>
                </div>

                <div className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
                    +18%
                </div>

                <p className="max-w-[240px] text-xs leading-relaxed text-muted-foreground">
                    Predicted income growth next month based on your current sales
                    velocity.
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
                    <TrendingUp className="size-3.5" />
                    Positive growth trajectory
                </div>
            </div>
        </div>
    );
}

// Main component
export const DashboardMockup = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden rounded-2xl border bg-background shadow-2xl"
        >
            <div className="flex">
                <Sidebar />
                <main className="min-w-0 flex-1 h-150 overflow-hidden">
                    <Header />
                    <div className="space-y-4 p-5">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-wider text-primary">
                                    Overview
                                </p>
                                <h2 className="mt-1 text-lg font-semibold tracking-tight">
                                    Executive Dashboard
                                </h2>
                            </div>

                            <button className="flex items-center gap-2 rounded-lg bg-linear-to-b from-[#38BDF8] to-primary px-3 py-2 text-[10px] font-semibold text-primary-foreground shadow-sm">
                                <DownloadIcon className="size-3" />
                                Export Report
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                            <MetricCard
                                label="Revenue"
                                value="Rp24.5M"
                                change="+14.2%"
                                icon={TrendingUp}
                            />

                            <MetricCard
                                label="Profit"
                                value="Rp8.2M"
                                change="+8.5%"
                                icon={BarChart3}
                            />

                            <MetricCard
                                label="Products"
                                value="1,284"
                                change="+6.4%"
                                icon={Package}
                            />

                            <MetricCard
                                label="Customers"
                                value="482"
                                change="+12.1%"
                                icon={Users}
                            />
                        </div>

                        <div className="grid gap-4 xl:grid-cols-[1.7fr_0.8fr]">
                            <SalesChart />
                            <AiForecast />
                        </div>

                        <RecentTransactions />
                    </div>
                </main>
            </div>
        </motion.div>
    );
}