import { motion } from "framer-motion";
import {
    AlertTriangle,
    BarChart3,
    Bell,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    CreditCard,
    Download,
    Filter,
    LayoutDashboard,
    MoreHorizontal,
    Package,
    Plus,
    Search,
    Settings,
    ShoppingCart,
    SlidersHorizontal,
    Tag,
    TrendingDown,
    TrendingUp,
    Users,
} from "lucide-react";

// Mock data
type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

interface Product {
    name: string;
    sku: string;
    category: string;
    price: string;
    stock: number;
    status: StockStatus;
    trend: "up" | "down";
    image: string;
}

const products: Product[] = [
    {
        name: "Product A",
        sku: "PRD-001",
        category: "Electronics",
        price: "Rp1.250.000",
        stock: 248,
        status: "In Stock",
        trend: "up",
        image: "A",
    },
    {
        name: "Product B",
        sku: "PRD-002",
        category: "Accessories",
        price: "Rp450.000",
        stock: 18,
        status: "Low Stock",
        trend: "down",
        image: "B",
    },
    {
        name: "Product C",
        sku: "PRD-003",
        category: "Electronics",
        price: "Rp875.000",
        stock: 142,
        status: "In Stock",
        trend: "up",
        image: "C",
    },
    {
        name: "Product D",
        sku: "PRD-004",
        category: "Office",
        price: "Rp320.000",
        stock: 0,
        status: "Out of Stock",
        trend: "down",
        image: "D",
    },
    {
        name: "Product E",
        sku: "PRD-005",
        category: "Accessories",
        price: "Rp680.000",
        stock: 74,
        status: "In Stock",
        trend: "up",
        image: "E",
    },
];

// Other components
const StatusBadge = ({ status }: { status: StockStatus }) => {
    const styles: Record<StockStatus, string> = {
        "In Stock": "bg-accent text-accent-foreground",
        "Low Stock": "bg-chart-3/15 text-chart-3",
        "Out of Stock": "bg-destructive/10 text-destructive",
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[9px] font-semibold ${styles[status]}`}
        >
            <span className="size-1.5 rounded-full bg-current" />
            {status}
        </span>
    );
}

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
                },
                {
                    label: "Inventory",
                    icon: Package,
                    active: true,
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
    return <header className="flex h-14 items-center justify-between border-b px-5">
        <h1 className="text-sm font-medium text-foreground">
            Inventory Management
        </h1>

        <div className="flex items-center gap-2">
            <button className="flex size-8 items-center justify-center rounded-lg border text-muted-foreground">
                <Bell className="size-3.5" />
            </button>

            <div className="flex items-center gap-2 border-l pl-3">
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

const InventoryMetric = ({
    label,
    value,
    description,
    icon: Icon,
    warning = false,
}: {
    label: string;
    value: string;
    description: string;
    icon: React.ElementType;
    warning?: boolean;
}) => {
    return (
        <div className="rounded-sm border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-medium text-muted-foreground">
                    {label}
                </span>

                <div
                    className={`flex size-8 items-center justify-center rounded-lg ${warning
                        ? "bg-chart-3/15 text-chart-3"
                        : "bg-muted text-muted-foreground"
                        }`}
                >
                    <Icon className="size-4" />
                </div>
            </div>

            <p className="text-xl font-semibold tracking-tight text-card-foreground">
                {value}
            </p>

            <p
                className={`mt-1 text-[10px] ${warning ? "text-chart-3" : "text-muted-foreground"
                    }`}
            >
                {description}
            </p>
        </div>
    );
}

const ProductRow = ({
    product,
}: {
    product: Product;
}) => {
    return (
        <tr className="border-b last:border-0">
            <td className="w-10 px-3 py-3">
                <input
                    type="checkbox"
                    className="size-3.5 rounded accent-primary"
                />
            </td>

            <td className="px-3 py-3">
                <div className="flex items-center gap-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-[10px] font-semibold text-muted-foreground">
                        {product.image}
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-card-foreground">
                            {product.name}
                        </p>
                        <p className="mt-0.5 text-[9px] text-muted-foreground">
                            {product.sku}
                        </p>
                    </div>
                </div>
            </td>

            <td className="px-3 py-3">
                <span className="text-[10px] text-muted-foreground">
                    {product.category}
                </span>
            </td>

            <td className="px-3 py-3">
                <span className="text-[10px] font-medium text-card-foreground">
                    {product.price}
                </span>
            </td>

            <td className="px-3 py-3">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-card-foreground">
                        {product.stock}
                    </span>

                    {product.trend === "up" ? (
                        <TrendingUp className="size-3 text-chart-2" />
                    ) : (
                        <TrendingDown className="size-3 text-destructive" />
                    )}
                </div>
            </td>

            <td className="px-3 py-3">
                <StatusBadge status={product.status} />
            </td>

            <td className="px-3 py-3 text-right">
                <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted">
                    <MoreHorizontal className="size-3.5" />
                </button>
            </td>
        </tr>
    );
}

// Main component
export function InventoryMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true }}
            aria-hidden="true"
            className="relative w-full overflow-hidden rounded-2xl border bg-background shadow-2xl mt-9 pointer-events-none"
        >
            <div className="flex">
                <Sidebar />
                <main className="min-w-0 flex-1 h-150 overflow-hidden">
                    <Header />
                    <div className="space-y-4 p-5">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-wider text-primary">
                                    Products
                                </p>
                                <h2 className="mt-1 text-lg font-semibold tracking-tight">
                                    Inventory Management
                                </h2>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Keep track of products, stock levels, and inventory value.
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex items-center gap-1.5 rounded-lg border bg-background px-3 py-2 text-[10px] font-medium text-muted-foreground">
                                    <Download className="size-3" />
                                    Export
                                </button>

                                <button className="flex items-center gap-2 rounded-lg bg-linear-to-b from-[#38BDF8] to-primary px-3 py-2 text-[10px] font-semibold text-primary-foreground shadow-sm">
                                    <Plus className="size-3.5" />
                                    Add Product
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                            <InventoryMetric
                                label="Total Products"
                                value="1,284"
                                description="+6.4% from last month"
                                icon={Package}
                            />

                            <InventoryMetric
                                label="Total Inventory Value"
                                value="Rp184.6M"
                                description="+11.8% from last month"
                                icon={Tag}
                            />

                            <InventoryMetric
                                label="Low Stock"
                                value="24"
                                description="Products need attention"
                                icon={AlertTriangle}
                                warning
                            />

                            <InventoryMetric
                                label="Out of Stock"
                                value="7"
                                description="Products unavailable"
                                icon={Package}
                                warning
                            />
                        </div>

                        <div className="rounded-sm border bg-card">
                            <div className="flex flex-col gap-3 border-b p-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="relative min-w-0 flex-1 sm:max-w-xs">
                                    <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />

                                    <input
                                        placeholder="Search products..."
                                        className="h-8 w-full rounded-lg border bg-input pl-8 pr-3 text-[10px] text-foreground outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[10px] font-medium text-muted-foreground">
                                        <Filter className="size-3" />
                                        Filter
                                    </button>

                                    <button className="flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-[10px] font-medium text-muted-foreground">
                                        <SlidersHorizontal className="size-3" />
                                        Columns
                                    </button>

                                    <button className="hidden h-8 items-center gap-1 rounded-lg border px-2.5 text-[10px] font-medium text-muted-foreground sm:flex">
                                        All Categories
                                        <ChevronDown className="size-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[700px] border-collapse">
                                    <thead>
                                        <tr className="border-b bg-muted/50">
                                            <th className="w-10 px-3 py-2.5">
                                                <input
                                                    type="checkbox"
                                                    className="size-3.5 rounded accent-primary"
                                                />
                                            </th>

                                            {[
                                                "Product",
                                                "Category",
                                                "Price",
                                                "Stock",
                                                "Status",
                                                "",
                                            ].map((heading) => (
                                                <th
                                                    key={heading}
                                                    className="px-3 py-2.5 text-left text-[9px] font-semibold uppercase tracking-wide text-muted-foreground"
                                                >
                                                    {heading}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {products.map((product) => (
                                            <ProductRow
                                                key={product.sku}
                                                product={product}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between border-t px-3 py-3">
                                <p className="text-[9px] text-muted-foreground">
                                    Showing <span className="font-medium text-foreground">1</span>{" "}
                                    to <span className="font-medium text-foreground">5</span> of{" "}
                                    <span className="font-medium text-foreground">1,284</span>{" "}
                                    products
                                </p>

                                <div className="flex items-center gap-1">
                                    <button className="flex size-7 items-center justify-center rounded-md border text-muted-foreground disabled:opacity-40">
                                        <ChevronLeft className="size-3" />
                                    </button>

                                    <button className="flex size-7 items-center justify-center rounded-md bg-primary text-[9px] font-semibold text-primary-foreground">
                                        1
                                    </button>

                                    <button className="flex size-7 items-center justify-center rounded-md border text-[9px] text-muted-foreground">
                                        2
                                    </button>

                                    <button className="flex size-7 items-center justify-center rounded-md border text-[9px] text-muted-foreground">
                                        3
                                    </button>

                                    <button className="flex size-7 items-center justify-center rounded-md border text-muted-foreground">
                                        <ChevronRight className="size-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </motion.div>
    );
}