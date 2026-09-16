import { Card } from "../ui/card";
import { BarChart3 } from "lucide-react"

export const SalesIllustration = () => {
    const categories = [
        { label: 'Products', value: 82 },
        { label: 'Services', value: 64 },
        { label: 'Other', value: 38 },
    ];

    return (
        <Card
            aria-hidden
            className="group/sales relative mt-9 overflow-hidden rounded-md opacity-95"
        >
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs font-medium text-muted-foreground">
                        Sales overview
                    </div>

                    <div className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                        $8,420
                    </div>
                </div>

                <div className="rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground">
                    This month
                </div>
            </div>

            <div className="mt-6 grid grid-cols-[100px_1fr] items-center gap-5">
                <div className="relative mx-auto size-24">
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background:
                                'conic-gradient(#1e9df1 0deg 210deg, #e1eaef 210deg 290deg, #f0f3f4 290deg 360deg)',
                        }}
                    />

                    <div className="absolute inset-3 flex items-center justify-center rounded-full bg-card">
                        <div className="text-center">
                            <div className="text-sm font-semibold text-foreground">
                                72%
                            </div>
                            <div className="text-[8px] text-muted-foreground">
                                Direct
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {categories.map((category, index) => (
                        <div key={category.label}>
                            <div className="mb-1 flex items-center justify-between">
                                <span className="text-[9px] text-muted-foreground">
                                    {category.label}
                                </span>

                                <span className="text-[9px] font-medium text-foreground">
                                    {category.value}%
                                </span>
                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10">
                                <div
                                    className={[
                                        'h-full rounded-full transition-all duration-500',
                                        index === 0
                                            ? 'bg-linear-to-b from-[#38BDF8] to-primary group-hover/sales:w-[90%]'
                                            : 'bg-foreground/20',
                                    ].join(' ')}
                                    style={{ width: `${category.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-sm border bg-background p-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <BarChart3 className="size-3 text-primary" />
                </div>

                <div>
                    <div className="text-[10px] font-semibold text-foreground">
                        Sales insight
                    </div>

                    <p className="mt-0.5 text-[9px] leading-relaxed text-muted-foreground">
                        Your direct sales are driving most of this month's revenue.
                    </p>
                </div>
            </div>
        </Card>
    );
};