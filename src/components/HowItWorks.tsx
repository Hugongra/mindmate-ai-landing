import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, MessageCircle, TrendingUp, Lightbulb, Users, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Evaluación Personalizada",
      description: "Completa el test de personalidad Big Five (el más usado clínicamente) junto con información básica sobre tu edad, género y necesidades específicas de salud mental.",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Empieza a Hablar",
      description: "Chatea con tu terapeuta de IA en cualquier momento por texto o voz. Comparte tus pensamientos, sentimientos y preocupaciones en un espacio seguro y sin juicios.",
      color: "text-accent-foreground"
    },
    {
      icon: TrendingUp,
      title: "Rastrea tu Progreso",
      description: "Chequeos diarios de estado de ánimo y prompts de diario te ayudan a monitorear el progreso e identificar patrones en tu salud mental.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Obtén Insights",
      description: "Recibe estrategias de afrontamiento personalizadas, ejercicios y perspectivas basadas en enfoques terapéuticos respaldados por evidencia.",
      color: "text-accent-foreground"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Cómo Funciona MindMate AI
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Inicia tu viaje de salud mental en solo unos pasos simples
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <Card key={index} className={`relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-muted to-muted/90 border-muted-foreground/20 ${
              (steps[index].title === "Rastrea tu Progreso" || steps[index].title === "Obtén Insights") ? "blur-[1px] opacity-75" : ""
            }`}>
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="relative">
                  {(steps[index].title === "Rastrea tu Progreso" || steps[index].title === "Obtén Insights") && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="text-xs bg-orange-700 text-white px-3 py-1 rounded-full font-medium">
                        pronto
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4 sm:px-6">
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-muted-foreground">
            ¿Listo para empezar? Toma menos de 2 minutos comenzar tu primera sesión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;