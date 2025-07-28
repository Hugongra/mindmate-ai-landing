import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Users, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 sm:px-6 border-b border-primary/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>
          <div className="text-xl font-bold text-foreground">MindMate AI</div>
        </div>
      </header>

      <main className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre MindMate AI
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Democratizamos el acceso a la salud mental combinando inteligencia artificial avanzada 
              con supervisión profesional para ofrecer apoyo accesible las 24 horas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-primary/10 bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Hacer que el apoyo en salud mental sea accesible para todos, sin barreras de tiempo o costo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/10 bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <Brain className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Tecnología</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  IA entrenada en terapias validadas científicamente con supervisión profesional continua.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/10 bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Comunidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Miles de personas mejorando su bienestar mental con nuestro apoyo y comunidad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/10 bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Impacto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Resultados medibles en bienestar emocional respaldados por evidencia científica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;