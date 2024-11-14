import { Bitcoin, Wallet } from "lucide-react";

const assets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: "0.118 BTC",
    value: "$2,258.93",
    icon: <Bitcoin className="text-orange-400" />,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: "1.43 ETH",
    value: "$1,858.08",
    icon: <Wallet className="text-blue-400" />,
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    amount: "387.14 USDT",
    value: "$387.14",
    icon: <Wallet className="text-green-400" />,
  },
];

const AssetList = () => {
  return (
    <div className="glass-card rounded-2xl p-4 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Assets</h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          See All
        </button>
      </div>
      <div className="space-y-2">
        {assets.map((asset) => (
          <div key={asset.symbol} className="asset-item">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                {asset.icon}
              </div>
              <div>
                <p className="font-medium">{asset.name}</p>
                <p className="text-sm text-muted-foreground">{asset.amount}</p>
              </div>
            </div>
            <p className="font-medium">{asset.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetList;