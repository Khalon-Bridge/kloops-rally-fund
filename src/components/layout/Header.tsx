import { Button } from "@/components/ui/button";
import { Heart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-kloops-blue to-kloops-green flex items-center justify-center">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-poppins font-bold gradient-text">
            kloops.fund
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </Link>
          <Link to="/success-stories" className="text-muted-foreground hover:text-foreground transition-colors">
            Success stories
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Log in
          </Button>
          <Button 
            onClick={() => navigate('/create')}
            className="bg-kloops-blue hover:bg-kloops-blue/90 font-medium"
          >
            Start a kloop
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
