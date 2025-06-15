
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-kloops-blue to-kloops-green flex items-center justify-center">
                <Heart className="h-3 w-3 text-white" />
              </div>
              <span className="text-lg font-poppins font-bold gradient-text">
                kloop.fund
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Quick help when you need it most. From ask to thank you in minutes.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How it works</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link to="/templates" className="hover:text-foreground transition-colors">Templates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-foreground transition-colors">Help center</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact us</Link></li>
              <li><Link to="/safety" className="hover:text-foreground transition-colors">Safety & security</Link></li>
              <li><Link to="/fees" className="hover:text-foreground transition-colors">Fees & costs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About us</Link></li>
              <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Kloop Fund Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
