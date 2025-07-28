import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Book, Video, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HelpCenterPage = () => {
  const helpCategories = [
    {
      icon: MessageCircle,
      title: "Primeros Pasos",
      description: "Aprende a usar MindMate AI desde cero"
    },
    {
      icon: Book,
      title: "Guías Completas",
      description: "Documentación detallada de todas las funciones"
    },
    {
      icon: Video,
      title: "Tutoriales en Video",
      description: "Videos explicativos paso a paso"
    },
    {
      icon: Mail,
      title: "Contacto Directo",
      description: "Habla con nuestro equipo de soporte"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo empiezo a usar MindMate AI?",
      answer: "Simplemente haz clic en 'Iniciar Sesión Gratuita' en la página principal. No necesitas registro, puedes comenzar a hablar inmediatamente. Te recomendamos completar la evaluación inicial para obtener una experiencia más personalizada."
    },
    {
      question: "¿Es seguro compartir información personal?",
      answer: "Sí, todas tus conversaciones están protegidas con encriptación de extremo a extremo. Nunca vendemos ni compartimos tus datos personales. Tenemos protocolos estrictos de privacidad y seguridad."
    },
    {
      question: "¿MindMate AI puede reemplazar a un terapeuta humano?",
      answer: "No, MindMate AI es una herramienta de apoyo que complementa, pero no reemplaza, la terapia profesional. Para condiciones serias de salud mental, siempre recomendamos consultar con un profesional licenciado."
    },
    {
      question: "¿Qué hago si tengo pensamientos de autolesión?",
      answer: "Si tienes pensamientos de autolesión o suicidio, busca ayuda inmediata. Llama al 024 (línea de prevención del suicidio) o al 112 en caso de emergencia. MindMate AI también puede conectarte con recursos de crisis."
    },
    {
      question: "¿Puedo usar MindMate AI en mi teléfono?",
      answer: "Sí, MindMate AI está optimizado para funcionar perfectamente en cualquier dispositivo: teléfonos, tablets y computadoras. Puedes acceder desde cualquier navegador web."
    },
    {
      question: "¿Cómo funciona el plan gratuito?",
      answer: "El plan gratuito incluye 5 sesiones de chat por mes, evaluaciones psicológicas básicas y acceso a la comunidad. Puedes actualizar a Premium en cualquier momento para conversaciones ilimitadas y funciones avanzadas."
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer: "Sí, puedes cancelar tu suscripción Premium en cualquier momento desde tu perfil. No hay contratos ni penalizaciones por cancelación anticipada."
    },
    {
      question: "¿En qué se basa la IA de MindMate?",
      answer: "Nuestra IA está entrenada en enfoques terapéuticos validados científicamente como Terapia Cognitivo-Conductual (TCC), Terapia Dialéctica Conductual (TDC) y técnicas de mindfulness, supervisados por terapeutas licenciados."
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
              Centro de Ayuda
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Encuentra respuestas a tus preguntas y aprende a aprovechar al máximo MindMate AI.
            </p>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-primary/10 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                ¿No encontraste lo que buscabas?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo de soporte está aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-primary/80">
                  Contactar Soporte
                </Button>
                <Button variant="outline" className="border-primary text-primary">
                  Enviar Feedback
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpCenterPage;