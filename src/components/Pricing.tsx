import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Empieza a sanar hoy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que funcione para ti. Actualiza o baja de categoría en cualquier momento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  <span className="text-foreground">Protocolos de seguridad incluidos</span>
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
          <Card className="border-primary bg-gradient-to-br from-primary/5 to-accent/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
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
                  <span className="text-foreground font-medium">Personalidades de IA personalizadas</span>
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
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Todos los planes incluyen nuestros protocolos de seguridad y funciones de apoyo en crisis
          </p>
          <p className="text-xs text-muted-foreground">
            Cancela en cualquier momento • Sin tarifas ocultas • Tus datos permanecen privados
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;