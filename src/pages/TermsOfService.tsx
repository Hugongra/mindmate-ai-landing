import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfServicePage = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-8">Términos de Servicio</h1>
          <p className="text-muted-foreground">Última actualización: Enero 2024</p>
          
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground">
              Al acceder y utilizar MindMate AI, aceptas cumplir con estos términos de servicio y todas las leyes aplicables.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Descripción del Servicio</h2>
            <p className="text-muted-foreground">
              MindMate AI proporciona apoyo de salud mental a través de inteligencia artificial. No sustituye el tratamiento médico profesional.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Limitaciones de Responsabilidad</h2>
            <p className="text-muted-foreground">
              MindMate AI no se hace responsable de decisiones tomadas basadas en la información proporcionada por la IA. 
              En caso de emergencia, contacta servicios de emergencia inmediatamente.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Uso Aceptable</h2>
            <p className="text-muted-foreground">
              Te comprometes a usar el servicio de manera responsable y no para fines ilegales o dañinos.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;