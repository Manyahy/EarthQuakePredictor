
import { Shield } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold tracking-tight">QuakeWatchGuard</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="link" 
            className="text-slate-200 hover:text-white"
            onClick={() => navigate("/")}
          >
            Dashboard
          </Button>
          <Button 
            variant="link" 
            className="text-slate-200 hover:text-white"
            onClick={() => navigate("/predictions")}
          >
            Predictions
          </Button>
          <Button 
            variant="link" 
            className="text-slate-200 hover:text-white"
            onClick={() => navigate("/alerts")}
          >
            Alerts
          </Button>
          <Button 
            variant="link" 
            className="text-slate-200 hover:text-white"
            onClick={() => navigate("/about")}
          >
            About
          </Button>
        </nav>

        <div className="flex items-center">
          <Button variant="destructive" className="flex items-center space-x-1">
            <span>Emergency Alert</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
