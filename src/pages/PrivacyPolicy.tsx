import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
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
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-3xl font-bold text-foreground mb-8">Política de Privacidad</h1>
          <p className="text-muted-foreground">Última actualización: Enero 2024</p>
          
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground">
              Recopilamos información que nos proporcionas directamente, como evaluaciones psicológicas, 
              conversaciones con la IA, y datos de registro. Toda esta información está encriptada y protegida.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Cómo Usamos la Información</h2>
            <p className="text-muted-foreground">
              Utilizamos tu información únicamente para mejorar tu experiencia terapéutica, 
              proporcionar insights personalizados y garantizar tu seguridad.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Compartir Información</h2>
            <p className="text-muted-foreground">
              Nunca vendemos ni compartimos tu información personal con terceros, 
              excepto en casos de riesgo inmediato donde puede ser necesario contactar servicios de emergencia.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;