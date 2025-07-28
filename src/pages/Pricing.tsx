import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 border-b border-primary/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>
          <div className="text-xl font-bold text-foreground">MindMate AI</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Planes y Precios
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades. Puedes cambiar o cancelar en cualquier momento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
            {/* Free Plan */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/80 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Gratuito</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">0€</div>
                <p className="text-muted-foreground">Empieza con apoyo básico</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">5 sesiones de chat de IA por mes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Seguimiento básico del estado de ánimo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Acceso a evaluaciones psicológicas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Soporte de la comunidad</span>
                  </div>
                </div>
                
                <Button className="w-full mt-8 bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground">
                  Empezar Gratis
                </Button>
              </CardContent>
            </Card>
            
            {/* Premium Plan */}
            <Card className="border-primary bg-gradient-to-br from-primary/5 to-accent/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden transform scale-105">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-primary/80 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                <Star className="w-4 h-4 inline mr-1" />
                Más Popular
              </div>
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Premium</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">15€</div>
                <p className="text-muted-foreground">por mes</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Conversaciones ilimitadas de IA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Sesiones de terapia por voz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Análisis avanzado del estado de ánimo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Insights personalizados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Detección de emociones visual</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Soporte prioritario</span>
                  </div>
                </div>
                
                <Button className="w-full mt-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  Iniciar Prueba Gratuita de 7 Días
                </Button>
              </CardContent>
            </Card>
            
            {/* Annual Plan */}
            <Card className="border-accent bg-gradient-to-br from-accent/10 to-primary/5 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-accent to-accent/80 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                15% OFF
              </div>
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Premium Anual</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">153€</div>
                <p className="text-muted-foreground">por año</p>
                <p className="text-sm text-accent font-medium">12.75€/mes equivalente</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Todas las funciones Premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">Acceso prioritario a nuevas funciones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">2 meses gratis incluidos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Descuento del 15%</span>
                  </div>
                </div>
                
                <Button className="w-full mt-8 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Suscribirse Anual
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Todos los planes incluyen acceso completo a evaluaciones psicológicas y funciones de bienestar
            </p>
            <p className="text-xs text-muted-foreground">
              Cancela en cualquier momento • Sin tarifas ocultas • Tus datos permanecen privados
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;