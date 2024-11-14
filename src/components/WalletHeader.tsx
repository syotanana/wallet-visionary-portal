import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const WalletHeader = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center mb-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        <p className="text-muted-foreground">Manage your crypto assets</p>
      </div>
      <Button variant="ghost" size="icon" onClick={handleLogout}>
        <LogOut className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default WalletHeader;