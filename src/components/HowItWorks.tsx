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
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cómo Funciona MindMate AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inicia tu viaje de salud mental en solo unos pasos simples
          </p>
        </div>
        
        {/* Big Five Test Section */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Test Big Five de Personalidad
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Utilizamos el modelo Big Five, el test de personalidad más usado clínicamente a nivel mundial. 
                Este evalúa cinco dimensiones fundamentales de tu personalidad para personalizar completamente 
                tu experiencia terapéutica.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Edad y género</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">5 minutos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&fit=crop"
                alt="Los 5 rasgos del Big Five: Apertura, Responsabilidad, Extroversión, Amabilidad, Neuroticismo"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/80">
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
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            ¿Listo para empezar? Toma menos de 2 minutos comenzar tu primera sesión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;