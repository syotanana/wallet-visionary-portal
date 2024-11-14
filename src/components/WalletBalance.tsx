import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { name: "Jan", value: 5400 },
  { name: "Feb", value: 5900 },
  { name: "Mar", value: 5700 },
  { name: "Apr", value: 6200 },
  { name: "May", value: 6100 },
  { name: "Jun", value: 6287 },
];

const WalletBalance = () => {
  return (
    <div className="glass-card rounded-2xl p-6 mb-6 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Total Balance</p>
          <h2 className="text-4xl font-bold">$6,287.83</h2>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Deposit
          </button>
          <button className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors">
            Withdraw
          </button>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#888", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#9b87f5"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WalletBalance;