import { Card } from "../ui/card";
import { Table } from "lucide-react";

export const SmartDecisionsIllustration = () => {
    return (
        <Card
            aria-hidden
            className="group/ai relative mt-9 overflow-hidden rounded-md mask-b-from-90% pointer-events-none"
        >
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs font-medium text-muted-foreground">
                        Income forecast
                    </div>

                    <div className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                        $3,240
                    </div>
                </div>

                <div className="rounded-md border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground">
                    AI prediction
                </div>
            </div>

            <div className="relative mt-6 h-24">
                <div className="absolute inset-x-0 bottom-3 border-t" />

                <svg
                    viewBox="0 0 300 80"
                    className="absolute inset-0 h-full w-full overflow-visible"
                    fill="none"
                >
                    <path
                        d="M0 62 C30 58, 42 42, 70 48 C95 54, 105 30, 135 36 C160 42, 175 22, 205 28"
                        stroke="#1e9df1"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    <path
                        d="M205 28 C230 20, 245 25, 265 14 C280 8, 290 12, 300 4"
                        stroke="#1e9df1"
                        strokeOpacity="0.45"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                    />

                    <circle
                        cx="300"
                        cy="4"
                        r="3.5"
                        fill="#1e9df1"
                        className="transition-transform duration-300 group-hover/ai:scale-125"
                    />
                </svg>

                <div className="absolute bottom-0 left-0 text-[8px] text-muted-foreground">
                    Today
                </div>

                <div className="absolute bottom-0 right-0 text-[8px] text-muted-foreground">
                    Forecast
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end">
                <div className="flex flex-row items-center gap-1.5 rounded-sm border border-green-500/20 px-2.5 py-1 text-[10px] font-medium text-green-500 transition-colors">
                    <Table className="size-2.5" />
                    Export to Excel
                </div>
            </div>
        </Card>
    );
};