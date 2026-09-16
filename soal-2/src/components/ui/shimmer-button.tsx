import React, { type CSSProperties } from "react";

export interface ShimmerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
    renderGlow?: boolean;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = "rgba(255, 255, 255, 0.9)",
            shimmerSize = "0.15em",
            shimmerDuration = "12s",
            borderRadius = "1.7rem",
            background = "linear-gradient(180deg, #38BDF8 0%, var(--primary, #1e9df1) 100%)",
            className = "",
            children,
            renderGlow = true,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                style={
                    {
                        "--spread": "90deg",
                        "--shimmer-color": shimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": background,
                    } as CSSProperties
                }
                className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-primary-foreground font-semibold shadow-md shadow-primary/20 hover:opacity-95 hover:shadow-lg hover:shadow-primary/30 [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-all duration-300 ease-in-out active:scale-[0.98] ${className}`}
                {...props}
            >
                {/* spark container */}
                <div
                    className="pointer-events-none -z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]"
                >
                    {/* spark */}
                    <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                        {/* spark before */}
                        <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                    </div>
                </div>

                {renderGlow && <div
                    className="pointer-events-none absolute inset-0 size-full rounded-[inherit] shadow-[inset_0_-6px_12px_rgba(255,255,255,0.25)] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-8px_16px_rgba(255,255,255,0.4)] group-active:shadow-[inset_0_-4px_8px_rgba(255,255,255,0.3)]"
                />}

                <div
                    className="pointer-events-none absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
                />

                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;