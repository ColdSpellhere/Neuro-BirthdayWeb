import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium tracking-[0.01em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-[linear-gradient(100deg,#2ed5ff_0%,#63e6ff_48%,#8fdfff_100%)] bg-[length:200%_100%] bg-[position:0%_50%] text-slate-950 hover:bg-[position:100%_50%] shadow-[0_10px_24px_rgba(53,224,255,0.3)]": variant === "default",
          "bg-white/0 text-slate-200 hover:bg-white/8 hover:text-white": variant === "ghost",
          "border border-cyan-300/60 text-cyan-200 bg-cyan-300/5 hover:bg-cyan-300/12": variant === "outline",
        },
        {
          "h-10 px-4 py-2": size === "default",
          "h-9 rounded-lg px-3": size === "sm",
          "h-11 rounded-xl px-8": size === "lg",
        },
        className
      )}
      {...props}
    />
  )
}
