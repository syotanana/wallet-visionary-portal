import { Bell, CreditCard, Settings } from "lucide-react";

const WalletHeader = () => {
  return (
    <header className="flex items-center justify-between mb-8 animate-fade-in">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Wallet</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-secondary rounded-full transition-colors">
          <CreditCard className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-secondary rounded-full transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-secondary rounded-full transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default WalletHeader;