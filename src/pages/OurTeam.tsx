import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OurTeamPage = () => {
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
              Nuestro Equipo
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce al equipo de expertos detrás de MindMate AI, combinando experiencia en tecnología, 
              investigación e ingeniería para revolucionar el acceso a la salud mental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Hugo González */}
            <Card className="text-center border-primary/10 bg-gradient-to-br from-card to-secondary/30 p-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary">HG</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Hugo González</h3>
              <p className="text-primary font-semibold mb-4">Founder & CEO</p>
              <div className="text-left space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Formación:</strong> BSc Computer Science & Business Analytics
                </p>
                <p className="text-sm text-muted-foreground">
                  Consultor estratégico y ingeniero de software con experiencia en consultoría tecnológica estratégica en Accenture para uno de los bancos más grandes del mundo y el banco líder en España.
                </p>
                <p className="text-sm text-muted-foreground">
                  Participó en el desarrollo de pruebas de concepto de algoritmos de minería donde construyó herramientas para reducir el costo computacional de los algoritmos de descifrado.
                </p>
                <p className="text-sm text-muted-foreground">
                  Actualmente cursando un doble grado en Ingeniería de Software y Business Analytics.
                </p>
              </div>
            </Card>

            {/* Javier Rius */}
            <Card className="text-center border-primary/10 bg-gradient-to-br from-card to-secondary/30 p-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary">JR</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Javier Rius</h3>
              <p className="text-primary font-semibold mb-4">Founder & CTO</p>
              <div className="text-left space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Formación:</strong> BEng Telecommunications Engineering y MSc en Ciberseguridad
                </p>
                <p className="text-sm text-muted-foreground">
                  Ingeniero de software senior con más de 5 años de experiencia en varias empresas, especializado en frameworks Spring y Angular.
                </p>
                <p className="text-sm text-muted-foreground">
                  Posee un título en Ingeniería de Telecomunicaciones de la Universidad Politécnica de Valencia y un máster en Ciberseguridad e Inteligencia Cibernética.
                </p>
              </div>
            </Card>

            {/* Uzziel Perez */}
            <Card className="text-center border-primary/10 bg-gradient-to-br from-card to-secondary/30 p-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary">UP</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Uzziel Perez</h3>
              <p className="text-primary font-semibold mb-4">Founding Engineer (Próximamente)</p>
              <div className="text-left space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Formación:</strong> PhD en Física e Investigador de IA
                </p>
                <p className="text-sm text-muted-foreground">
                  Ex-ingeniero de software del CERN y físico investigador con PhD en Física de la Universidad de Alabama.
                </p>
                <p className="text-sm text-muted-foreground">
                  Actualmente investigador postdoctoral en el experimento LHCb en La Sapienza, con especialización en física de partículas.
                </p>
                <p className="text-sm text-muted-foreground">
                  Ha desarrollado software científico en el CERN y tiene experiencia en educación STEAM a través de su trabajo en The Mind Museum.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurTeamPage;