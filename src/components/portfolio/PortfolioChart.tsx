import React, { useState } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data1W = [
  { time: "Mon", value: 2600.00 },
  { time: "Tue", value: 2640.50 },
  { time: "Wed", value: 2685.20 },
  { time: "Thu", value: 2730.00 },
  { time: "Fri", value: 2790.80 },
  { time: "Sat", value: 2815.00 },
  { time: "Sun", value: 2845.20 },
];

const data1M = [
  { time: "Week 1", value: 2200.00 },
  { time: "Week 2", value: 2380.50 },
  { time: "Week 3", value: 2540.00 },
  { time: "Week 4", value: 2845.20 },
];

const data3M = [
  { time: "Jun", value: 1800.00 },
  { time: "Jul", value: 2250.00 },
  { time: "Aug", value: 2845.20 },
];

const data1Y = [
  { time: "Q1", value: 1200.00 },
  { time: "Q2", value: 1750.00 },
  { time: "Q3", value: 2300.00 },
  { time: "Q4", value: 2845.20 },
];

export const PortfolioChart: React.FC = () => {
  const [filter, setFilter] = useState<"1W" | "1M" | "3M" | "1Y">("1M");

  const chartData = {
    "1W": data1W,
    "1M": data1M,
    "3M": data3M,
    "1Y": data1Y,
  }[filter];

  return (
    <div className="w-full space-y-4">
      {/* Time filters */}
      <div className="flex items-center justify-between">
        <div className="text-xs font-mono text-neutral-400">PERFORMANCE CURVE</div>
        <div className="flex gap-1 p-1 rounded-xl bg-[#14141c] border border-white/[0.08]">
          {(["1W", "1M", "3M", "1Y"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={"px-3 py-1 rounded-lg text-xs font-mono transition-all " + (filter === tab ? "bg-[#FF3B30] text-white font-bold shadow-[0_0_12px_rgba(255,59,48,0.5)]" : "text-neutral-400 hover:text-white")}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Area Chart */}
      <div className="h-[260px] w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRedGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF3B30" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FF3B30" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              stroke="#52525b"
              fontSize={11}
              fontFamily="JetBrains Mono"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#52525b"
              fontSize={11}
              fontFamily="JetBrains Mono"
              tickLine={false}
              axisLine={false}
              domain={["dataMin - 100", "dataMax + 100"]}
              tickFormatter={(val) => "₹" + val}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#14141c] border border-[#FF3B30]/40 p-2.5 rounded-xl shadow-xl font-mono text-xs">
                      <div className="text-neutral-400">{payload[0].payload.time}</div>
                      <div className="text-white font-bold text-sm text-[#FF453A]">
                        ₹{Number(payload[0].value).toFixed(2)}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#FF3B30"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRedGlow)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
