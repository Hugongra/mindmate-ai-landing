import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, AlertTriangle, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SafetyPage = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Protocolos de Seguridad Avanzados",
      description: "Sistemas automáticos de detección de crisis y escalamiento inmediato a profesionales humanos cuando es necesario."
    },
    {
      icon: Lock,
      title: "Encriptación de Extremo a Extremo", 
      description: "Todas tus conversaciones están protegidas con encriptación nivel bancario. Nunca almacenamos contenido sin cifrar."
    },
    {
      icon: AlertTriangle,
      title: "Detección de Crisis Automática",
      description: "Algoritmos especializados detectan señales de riesgo y activan protocolos de intervención inmediata."
    },
    {
      icon: Users,
      title: "Supervisión Profesional",
      description: "Terapeutas licenciados monitorean y supervisan todas las interacciones críticas las 24 horas del día."
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
              Seguridad y Protección
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Tu seguridad y bienestar son nuestra prioridad absoluta. Conoce todas las medidas 
              que implementamos para protegerte.
            </p>
          </div>

          {/* Safety Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Emergency Information */}
          <div className="bg-gradient-to-br from-destructive/5 to-orange/10 rounded-2xl p-8 border border-destructive/20 mb-16">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 mx-auto text-destructive mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                En Caso de Emergencia
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Si estás experimentando pensamientos de autolesión o suicidio, busca ayuda inmediata. 
                MindMate AI no reemplaza la atención médica profesional en situaciones de crisis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Button className="bg-destructive hover:bg-destructive/90 text-white">
                  <a href="tel:024" className="flex items-center gap-2">
                    📞 Línea 024
                  </a>
                </Button>
                <Button variant="outline" className="border-destructive text-destructive">
                  <a href="tel:112" className="flex items-center gap-2">
                    🚨 Emergencias 112
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* How We Protect You */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Cómo Te Protegemos
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Monitoreo Continuo:</strong> Algoritmos especializados analizan cada conversación en busca de señales de riesgo.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Escalamiento Automático:</strong> Conexión inmediata con profesionales humanos cuando es necesario.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Recursos de Crisis:</strong> Acceso directo a líneas de ayuda y servicios de emergencia.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Limitaciones Importantes
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    MindMate AI no puede diagnosticar condiciones de salud mental.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    No reemplaza la terapia profesional o atención médica especializada.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    En crisis severas, siempre recomendamos buscar ayuda profesional inmediata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SafetyPage;