import React from "react";
import { GlassCard } from "./GlassCard";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  isPositive?: boolean;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  isPositive = true,
  subtitle,
  icon,
  className = "",
}) => {
  return (
    <GlassCard className={`p-5 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
          {title}
        </span>
        {icon && <div className="text-[#FF3B30]">{icon}</div>}
      </div>

      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans">
          {value}
        </span>
        {trend && (
          <span
            className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
              isPositive
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-rose-500/15 text-rose-400"
            }`}
          >
            {trend}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="text-xs text-neutral-500 tracking-wide">{subtitle}</p>
      )}
    </GlassCard>
  );
};
