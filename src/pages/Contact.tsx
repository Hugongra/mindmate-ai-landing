import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email de Soporte",
      description: "Para preguntas generales y soporte técnico",
      contact: "soporte@mindmate-ai.com",
      response: "Respuesta en 24 horas"
    },
    {
      icon: MessageCircle,
      title: "Chat en Vivo",
      description: "Habla directamente con nuestro equipo",
      contact: "Disponible en la app",
      response: "Respuesta inmediata"
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Para consultas urgentes o comerciales",
      contact: "+34 900 123 456",
      response: "Lun-Vie 9:00-18:00"
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
              Contáctanos
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes preguntas? Estamos aquí para ayudarte. Elige la forma de contacto que prefieras.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-primary/10 bg-gradient-to-br from-card to-secondary/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Envíanos un Mensaje
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Completa el formulario y te responderemos lo antes posible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nombre *
                      </label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Asunto *
                    </label>
                    <Input placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensaje *
                    </label>
                    <Textarea 
                      placeholder="Describe tu consulta o problema..." 
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    Enviar Mensaje
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obligatorios. Responderemos en un plazo máximo de 24 horas.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Otras Formas de Contacto
              </h2>
              
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {method.description}
                        </p>
                        <p className="text-primary font-medium mb-1">
                          {method.contact}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {method.response}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Office Info */}
              <Card className="border-primary/10 bg-gradient-to-br from-card to-secondary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Oficina Principal
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Visitanos en nuestra oficina principal
                      </p>
                      <p className="text-primary font-medium mb-1">
                        Calle de la Innovación, 123
                      </p>
                      <p className="text-primary font-medium mb-1">
                        28001 Madrid, España
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Lunes a Viernes: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                ¿Buscas Respuestas Rápidas?
              </h2>
              <p className="text-muted-foreground mb-6">
                Muchas preguntas tienen respuesta inmediata en nuestro centro de ayuda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="border-primary text-primary">
                  <Link to="/help-center">
                    Ver Preguntas Frecuentes
                  </Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-primary to-primary/80">
                  <Link to="/help-center">
                    Centro de Ayuda
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;