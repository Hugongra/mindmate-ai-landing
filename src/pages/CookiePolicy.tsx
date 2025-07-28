import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicyPage = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-8">Política de Cookies</h1>
          <p className="text-muted-foreground">Última actualización: Enero 2024</p>
          
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">¿Qué son las cookies?</h2>
            <p className="text-muted-foreground">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. 
              Nos ayudan a mejorar tu experiencia y recordar tus preferencias.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Tipos de cookies que utilizamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground">Cookies esenciales</h3>
                <p className="text-muted-foreground">Necesarias para el funcionamiento básico del sitio web.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Cookies de rendimiento</h3>
                <p className="text-muted-foreground">Nos ayudan a entender cómo interactúas con nuestro sitio web.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Cookies de preferencias</h3>
                <p className="text-muted-foreground">Recuerdan tus configuraciones y preferencias personalizadas.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Control de cookies</h2>
            <p className="text-muted-foreground">
              Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. 
              Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicyPage;