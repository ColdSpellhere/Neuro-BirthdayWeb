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
          "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:from-pink-500 hover:to-pink-400 shadow-[0_10px_24px_rgba(236,72,153,0.32)]": variant === "default",
          "bg-white/0 text-slate-200 hover:bg-white/8 hover:text-white": variant === "ghost",
          "border border-pink-400/70 text-pink-300 bg-pink-500/5 hover:bg-pink-500/12": variant === "outline",
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
