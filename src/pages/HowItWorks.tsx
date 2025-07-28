import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, MessageCircle, TrendingUp, Lightbulb, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
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
      <main className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cómo Funciona MindMate AI
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Tu viaje hacia una mejor salud mental comienza con estos simples pasos. 
              Nuestro proceso está diseñado para ser intuitivo y efectivo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-muted to-muted/90 border-muted-foreground/20">
                <CardHeader className="text-center pb-4">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 border border-primary/10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              ¿Listo para comenzar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a miles de personas que ya están mejorando su salud mental con MindMate AI. 
              El primer paso es siempre el más importante.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowItWorksPage;