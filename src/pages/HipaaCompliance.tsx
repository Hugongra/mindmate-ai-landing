import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const HipaaCompliancePage = () => {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "Protección de Datos",
      description: "Todos los datos están encriptados end-to-end y almacenados de forma segura"
    },
    {
      icon: Lock,
      title: "Acceso Controlado",
      description: "Solo personal autorizado puede acceder a información de salud protegida"
    },
    {
      icon: Eye,
      title: "Auditoría Continua",
      description: "Monitoreamos y registramos todos los accesos a datos de salud"
    },
    {
      icon: FileText,
      title: "Políticas Estrictas",
      description: "Cumplimos con todas las regulaciones HIPAA y estándares de la industria"
    }
  ];

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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">Cumplimiento HIPAA</h1>
            <p className="text-lg text-muted-foreground">
              Tu privacidad y seguridad son nuestra máxima prioridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="border-primary/10">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">¿Qué es HIPAA?</h2>
              <p className="text-muted-foreground">
                La Ley de Portabilidad y Responsabilidad del Seguro de Salud (HIPAA) es una ley federal que 
                protege la información de salud personal sensible de los pacientes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Nuestro Compromiso</h2>
              <p className="text-muted-foreground">
                MindMate AI está diseñado para cumplir con los estándares HIPAA, garantizando que toda la 
                información de salud protegida (PHI) se maneje con el más alto nivel de seguridad y confidencialidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Medidas de Seguridad</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Encriptación de datos en tránsito y en reposo</li>
                <li>• Autenticación multifactor para acceso administrativo</li>
                <li>• Auditorías regulares de seguridad</li>
                <li>• Capacitación continua del personal en privacidad</li>
                <li>• Acuerdos de asociado comercial con todos los proveedores</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Tus Derechos</h2>
              <p className="text-muted-foreground">
                Bajo HIPAA, tienes derecho a acceder, corregir y controlar cómo se usa tu información de salud. 
                Si tienes preguntas sobre nuestras prácticas de privacidad, no dudes en contactarnos.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HipaaCompliancePage;