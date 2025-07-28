import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mic, Users, BarChart3, Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversaciones en Tiempo Real",
      description: "Chatea con tu terapeuta de IA instantáneamente por texto. Obtén apoyo inmediato cuando lo necesites, sin esperas ni citas.",
      gradient: "from-primary/20 to-primary/5",
      available: true
    },
    {
      icon: Mic,
      title: "Sesiones de Terapia por Voz",
      description: "Habla naturalmente con IA de voz avanzada que entiende emociones y responde con empatía genuina.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5",
      available: false
    },
    {
      icon: BarChart3,
      title: "Seguimiento del Estado de Ánimo",
      description: "Chequeos diarios del estado de ánimo y diario te ayudan a entender patrones y rastrear tu progreso a lo largo del tiempo.",
      gradient: "from-primary/20 to-primary/5",
      available: false
    },
    {
      icon: Users,
      title: "Avatares de IA Personalizables",
      description: "Elige una personalidad de IA que coincida con tus preferencias para la experiencia terapéutica más cómoda.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5",
      available: false
    },
    {
      icon: Eye,
      title: "Detección de Emociones por Visión",
      description: "Análisis avanzado de emociones mediante visión por computadora para un seguimiento más preciso de tu estado emocional.",
      gradient: "from-primary/20 to-primary/5",
      available: false
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
              Características Poderosas
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre todas las herramientas y funcionalidades que MindMate AI ofrece 
              para apoyar tu viaje hacia el bienestar emocional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-primary/10 bg-gradient-to-br ${feature.gradient} hover:-translate-y-1 relative ${
                !feature.available ? "blur-[1px] opacity-75" : ""
              }`}>
                <CardHeader className="text-center pb-4">
                  {!feature.available && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="text-xs bg-orange-700 text-white px-3 py-1 rounded-full font-medium">
                        pronto
                      </span>
                    </div>
                  )}
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Disponible 24/7
              </h2>
              <p className="text-muted-foreground mb-6">
                Tu terapeuta de IA nunca duerme. Obtén apoyo cuando lo necesites, día o noche, 
                sin limitaciones de horarios o citas.
              </p>
              <Button className="bg-gradient-to-r from-primary to-primary/80">
                Comenzar Ahora
              </Button>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Basado en Ciencia
              </h2>
              <p className="text-muted-foreground mb-6">
                Todas nuestras funciones están basadas en enfoques terapéuticos validados 
                científicamente como TCC, TDC y técnicas de mindfulness.
              </p>
              <Button variant="outline" className="border-primary text-primary">
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage;