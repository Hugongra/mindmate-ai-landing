import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mindmate.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Peaceful AI therapy environment"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
          Habla. Siente. <span className="text-primary">Sana.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Tu terapeuta con IA — siempre aquí cuando necesites a alguien con quien hablar.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl w-full sm:w-auto"
          >
            Iniciar Sesión Gratuita
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/5 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-xl w-full sm:w-auto"
            asChild
          >
            <a href="#how-it-works">Cómo Funciona</a>
          </Button>
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 opacity-75">
          Sin registro requerido • Empieza a hablar en segundos
        </p>
      </div>
    </section>
  );
};

export default Hero;