import { Card } from '../ui/card';
import { TrendingUp } from 'lucide-react';

export const ProfitIllustration = () => {
    const bars = [38, 52, 44, 68, 58, 76, 88];

    return (
        <Card
            aria-hidden
            className="group/profit relative mt-9 overflow-hidden rounded-md mask-b-from-90% pointer-events-none"
        >
            <div className="flex items-start justify-between">
                <div>
                    <div className="text-xs font-medium text-muted-foreground">
                        Total profit
                    </div>

                    <div className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                        $2,840
                    </div>
                </div>

                <div className="flex items-center gap-1 rounded-full text-green-500 bg-green-500/10 px-2 py-1 text-[10px] font-semibold">
                    <TrendingUp className="size-3" />
                    18.4%
                </div>
            </div>

            <div className="mt-6">
                <div className="relative flex h-28 items-end gap-2">
                    <div className="pointer-events-none absolute inset-x-0 top-0 border-t border-border" />
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-border/60" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-border" />

                    {bars.map((height, index) => (
                        <div
                            key={index}
                            className="relative z-10 flex h-full flex-1 items-end"
                        >
                            <div
                                className={[
                                    'w-full rounded-t-sm transition-all duration-300 ease-out',
                                    index === bars.length - 1
                                        ? 'bg-linear-to-b from-[#38BDF8] to-primary group-hover/profit:opacity-100'
                                        : 'bg-foreground/10 group-hover/profit:bg-foreground/15',
                                ].join(' ')}
                                style={{ height: `${height}%` }}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-2 flex justify-between text-[9px] text-muted-foreground">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-3">
                <span className="text-[10px] text-muted-foreground">
                    This week
                </span>

                <span className="text-xs font-semibold text-foreground">
                    $684.20
                </span>
            </div>
        </Card>
    );
};