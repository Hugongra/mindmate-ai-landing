import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Globe, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CrisisResourcesPage = () => {
  const emergencyContacts = [
    {
      icon: Phone,
      title: "Línea de Prevención del Suicidio",
      number: "024",
      description: "Línea gratuita 24/7 para prevención del suicidio y crisis emocionales",
      available: "24 horas, 7 días a la semana"
    },
    {
      icon: Phone,
      title: "Emergencias Generales",
      number: "112", 
      description: "Número de emergencias para situaciones que requieren atención inmediata",
      available: "24 horas, 7 días a la semana"
    },
    {
      icon: MessageCircle,
      title: "Chat de Crisis Online",
      number: "www.telefonodelaesperanza.org",
      description: "Chat online gratuito con voluntarios especializados",
      available: "Todos los días de 10:00 a 24:00"
    }
  ];

  const warningSignsPersonal = [
    "Pensamientos recurrentes sobre la muerte o el suicidio",
    "Sentimientos intensos de desesperanza o vacío",
    "Aislamiento extremo de familiares y amigos",
    "Cambios drásticos en el comportamiento o personalidad",
    "Abuso de sustancias como forma de escape",
    "Regalar posesiones importantes o despedirse"
  ];

  const warningSignsOthers = [
    "Hablar sobre querer morir o matarse",
    "Buscar métodos para suicidarse",
    "Hablar sobre sentirse atrapado o con dolor insoportable",
    "Aumento del uso de alcohol o drogas",
    "Actuar de manera ansiosa o agitada",
    "Alejarse de familia y amigos"
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
              Recursos de Crisis
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Si tú o alguien que conoces está en crisis, hay ayuda disponible. No estás solo.
            </p>
          </div>

          {/* Emergency Alert */}
          <div className="bg-gradient-to-br from-destructive/10 to-orange/5 rounded-2xl p-6 sm:p-8 border-2 border-destructive/20 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-destructive mb-4">
                ⚠️ Si es una emergencia, actúa ahora
              </h2>
              <p className="text-muted-foreground mb-6">
                Si estás considerando hacerte daño o tienes pensamientos suicidas, busca ayuda inmediata:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Button className="bg-destructive hover:bg-destructive/90 text-white font-bold">
                  <a href="tel:024" className="flex items-center gap-2">
                    📞 Llamar 024
                  </a>
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
                  <a href="tel:112" className="flex items-center gap-2">
                    🚨 Llamar 112
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Contactos de Emergencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-destructive/20 to-orange/20 rounded-xl flex items-center justify-center mb-4">
                      <contact.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {contact.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="text-2xl font-bold text-primary">
                      {contact.number}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {contact.description}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{contact.available}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Warning Signs */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-primary/10 bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Señales de Alerta en Ti Mismo
                </CardTitle>
                <p className="text-muted-foreground">
                  Si experimentas alguno de estos síntomas, busca ayuda:
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {warningSignsPersonal.map((sign, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/10 bg-gradient-to-br from-card to-secondary/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Señales de Alerta en Otros
                </CardTitle>
                <p className="text-muted-foreground">
                  Cómo reconocer si alguien puede estar en riesgo:
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {warningSignsOthers.map((sign, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* How to Help */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Cómo Ayudar a Alguien en Crisis
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">QUÉ HACER:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Escucha sin juzgar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Toma en serio sus sentimientos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Ayúdale a buscar ayuda profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Mantente en contacto</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">QUÉ NO HACER:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">No minimices sus sentimientos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">No prometas guardar secretos sobre autolesión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">No dejes a la persona sola si hay riesgo inmediato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">No trates de ser terapeuta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Recursos Adicionales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Button variant="outline" className="border-primary text-primary">
                <Globe className="w-4 h-4 mr-2" />
                Teléfono de la Esperanza
              </Button>
              <Button variant="outline" className="border-primary text-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat de Ayuda
              </Button>
              <Button variant="outline" className="border-primary text-primary">
                <Phone className="w-4 h-4 mr-2" />
                Más Recursos
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CrisisResourcesPage;