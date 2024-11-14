import WalletHeader from "@/components/WalletHeader";
import WalletBalance from "@/components/WalletBalance";
import AssetList from "@/components/AssetList";

const Index = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 py-8">
      <WalletHeader />
      <div className="space-y-4">
        <div className="flex gap-4 mb-6">
          <button className="nav-tab active">Crypto</button>
          <button className="nav-tab">NFTs</button>
        </div>
        <WalletBalance />
        <AssetList />
      </div>
    </div>
  );
};

export default Index;