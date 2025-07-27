import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

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
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl mb-4"
          >
            Pruébalo Ahora – Sin Registro Necesario
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Empieza a hablar en menos de 30 segundos
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="border-t border-primary/10 pt-12">
          <div className="grid md:grid-cols-4 gap-8 text-left mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Crisis Resources</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/10">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">MindMate AI</span>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 MindMate AI. All rights reserved.</p>
              <p className="mt-1">
                If you're in crisis, call 
                <a href="tel:988" className="text-primary hover:underline ml-1">988 (Suicide & Crisis Lifeline)</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;