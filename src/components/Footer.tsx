import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Final CTA */}
        <div className="mb-16">
          <Heart className="w-16 h-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Está bien empezar aquí.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Dar el primer paso hacia una mejor salud mental requiere valor. 
            Empieza con una conversación simple. No tienes que hacer esto solo.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl mb-3 sm:mb-4 w-full sm:w-auto"
          >
            Pruébalo Ahora – Sin Registro Necesario
          </Button>
          
          <p className="text-xs sm:text-sm text-muted-foreground">
            Empieza a hablar en menos de 30 segundos
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="border-t border-primary/10 pt-8 sm:pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left mb-6 sm:mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How it works</Link></li>
                <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/safety" className="hover:text-primary transition-colors">Safety</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link to="/help-center" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/crisis-resources" className="hover:text-primary transition-colors">Crisis Resources</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/our-team" className="hover:text-primary transition-colors">Our Team</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><Link to="/hipaa-compliance" className="hover:text-primary transition-colors">HIPAA Compliance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-primary/10 gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="font-semibold text-foreground text-sm sm:text-base">MindMate AI</span>
            </div>
            
            <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 MindMate AI. All rights reserved.</p>
              <p className="mt-1">
                Si estás en crisis, llama al 
                <a href="tel:024" className="text-primary hover:underline ml-1">024</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;