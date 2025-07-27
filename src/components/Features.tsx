import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mic, Users, Shield, Phone, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversaciones en Tiempo Real",
      description: "Chatea con tu terapeuta de IA instantáneamente por texto. Obtén apoyo inmediato cuando lo necesites.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Mic,
      title: "Sesiones de Terapia por Voz",
      description: "Habla naturalmente con IA de voz avanzada que entiende emociones y responde con empatía.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5"
    },
    {
      icon: BarChart3,
      title: "Seguimiento del Estado de Ánimo",
      description: "Chequeos diarios del estado de ánimo y diario te ayudan a entender patrones y rastrear tu progreso.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "Avatares de IA Personalizables",
      description: "Elige una personalidad de IA que coincida con tus preferencias para la experiencia más cómoda.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5"
    },
    {
      icon: Shield,
      title: "Seguridad Psicológica",
      description: "Protocolos de seguridad integrados aseguran que siempre estés protegido con supervisión profesional.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Phone,
      title: "Apoyo en Crisis",
      description: "Redirección inmediata a líneas de ayuda para suicidio y terapeutas humanos cuando necesites ayuda urgente.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Todo lo que necesitas para una mejor salud mental
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Funciones poderosas diseñadas para apoyar tu viaje hacia el bienestar emocional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-primary/10 bg-gradient-to-br ${feature.gradient} hover:-translate-y-1`}>
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Disponible 24/7
            </h3>
            <p className="text-muted-foreground">
              Tu terapeuta de IA nunca duerme. Obtén apoyo cuando lo necesites, día o noche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;