import React from "react";

interface GlowingBadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "red" | "green" | "orange" | "default";
  className?: string;
}

export const GlowingBadge: React.FC<GlowingBadgeProps> = ({
  text,
  icon,
  variant = "red",
  className = "",
}) => {
  const variants = {
    red: {
      bg: "bg-[#FF3B30]/10 border-[#FF3B30]/30 text-[#FF453A]",
      dot: "bg-[#FF3B30] shadow-[0_0_8px_#FF3B30]",
    },
    green: {
      bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      dot: "bg-emerald-400 shadow-[0_0_8px_#10B981]",
    },
    orange: {
      bg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      dot: "bg-amber-400 shadow-[0_0_8px_#F59E0B]",
    },
    default: {
      bg: "bg-white/5 border-white/10 text-neutral-300",
      dot: "bg-neutral-400 shadow-[0_0_6px_#A3A3A3]",
    },
  }[variant];

  return (
    <div
      className={"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border backdrop-blur-md transition-colors " + variants.bg + " " + className}
    >
      {icon ? (
        icon
      ) : (
        <span className={"w-1.5 h-1.5 rounded-full animate-pulse " + variants.dot} />
      )}
      <span>{text}</span>
    </div>
  );
};
