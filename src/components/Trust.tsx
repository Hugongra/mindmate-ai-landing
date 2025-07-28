import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lock, Award, Heart } from "lucide-react";

const Trust = () => {
  const trustItems = [
    {
      icon: Users,
      title: "Equipo de Expertos",
      description: "Construido por ingenieros de IA, terapeutas licenciados y científicos cognitivos con décadas de experiencia combinada.",
      details: ["Investigadores de IA nivel PhD", "Psicólogos clínicos licenciados", "Especialistas en terapia cognitivo-conductual"]
    },
    {
      icon: Award,
      title: "Basado en Evidencia",
      description: "Nuestra IA está entrenada en enfoques terapéuticos probados incluyendo TCC, TDC y técnicas de mindfulness.",
      details: ["Investigación revisada por pares", "Estudios de validación clínica", "Protocolos de mejora continua"]
    },
    {
      icon: Heart,
      title: "Supervisión Humana",
      description: "Terapeutas licenciados monitorean las interacciones de IA y proporcionan intervención en crisis cuando es necesario.",
      details: ["Soporte humano de respaldo 24/7", "Supervisión profesional licenciada", "Protocolos de escalamiento fluidos"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Construido con confianza y experiencia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu salud mental merece los más altos estándares de cuidado, privacidad y supervisión profesional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {trustItems.map((item, index) => (
            <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {item.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications & Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Tasa de satisfacción del usuario</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Monitoreo profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;