import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  intensity?: "low" | "medium" | "high";
  bordered?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowOnHover = true,
  intensity = "medium",
  bordered = true,
  ...props
}) => {
  const bgStyles = {
    low: "bg-[#0e0e12]/60 backdrop-blur-md",
    medium: "bg-[#121217]/75 backdrop-blur-xl",
    high: "bg-[#16161d]/85 backdrop-blur-2xl",
  }[intensity];

  return (
    <motion.div
      whileHover={glowOnHover ? { y: -4, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
      className={`
        relative rounded-2xl overflow-hidden transition-all duration-300
        ${bgStyles}
        ${bordered ? "border border-white/[0.08] hover:border-[#FF3B30]/40" : ""}
        ${glowOnHover ? "hover:shadow-[0_0_30px_-5px_rgba(255,59,48,0.25)]" : ""}
        ${className}
      `}
      {...props}
    >
      {/* Subtle top inner highlight reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
