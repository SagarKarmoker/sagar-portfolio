import { cn } from "@/lib/utils"

export function TextHighlight({ children, className, color = "accent" }) {
    const colorMap = {
        accent: "bg-[hsl(24_55%_54%_/_0.2)]",
        secondary: "bg-[hsl(180_55%_25%_/_0.2)]",
        yellow: "bg-yellow-400/20",
    }

    return (
        <span
            className={cn(
                "inline-block rounded-sm px-0.5",
                colorMap[color] || colorMap.accent,
                className
            )}
        >
            {children}
        </span>
    )
}
