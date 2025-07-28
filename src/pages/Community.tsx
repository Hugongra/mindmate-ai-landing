import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Heart, Share2, ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityPage = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "Grupos de Apoyo",
      description: "Conecta con personas que enfrentan desafíos similares en grupos moderados y seguros.",
      members: "1,200+ miembros activos"
    },
    {
      icon: MessageCircle,
      title: "Foros de Discusión",
      description: "Participa en conversaciones sobre bienestar mental, técnicas de afrontamiento y más.",
      members: "500+ discusiones diarias"
    },
    {
      icon: Heart,
      title: "Red de Apoyo Mutuo",
      description: "Ofrece y recibe apoyo emocional de una comunidad comprensiva y empática.",
      members: "2,000+ personas ayudándose"
    },
    {
      icon: Share2,
      title: "Historias de Superación",
      description: "Comparte tu viaje y encuentra inspiración en las experiencias de otros miembros.",
      members: "150+ historias compartidas"
    }
  ];

  const testimonials = [
    {
      name: "María José",
      role: "Miembro desde hace 6 meses",
      comment: "La comunidad me ha ayudado a no sentirme sola en mi proceso de recuperación. Siempre hay alguien dispuesto a escuchar.",
      rating: 5
    },
    {
      name: "Carlos R.",
      role: "Moderador de grupo",
      comment: "Poder ayudar a otros mientras trabajo en mi propio bienestar ha sido una experiencia transformadora.",
      rating: 5
    },
    {
      name: "Ana L.",
      role: "Miembro activo",
      comment: "Los consejos prácticos que he encontrado aquí han complementado perfectamente mi terapia con MindMate AI.",
      rating: 5
    }
  ];

  const groups = [
    {
      name: "Ansiedad y Estrés",
      members: 450,
      description: "Estrategias para manejar la ansiedad diaria",
      active: true
    },
    {
      name: "Depresión y Recuperación",
      members: 320,
      description: "Apoyo mutuo en el camino hacia la recuperación",
      active: true
    },
    {
      name: "Mindfulness y Meditación",
      members: 180,
      description: "Práctica compartida de mindfulness",
      active: false
    },
    {
      name: "Relaciones Saludables",
      members: 240,
      description: "Construyendo vínculos positivos",
      active: true
    },
    {
      name: "Autoestima y Confianza",
      members: 290,
      description: "Fortaleciendo la confianza personal",
      active: false
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
              Comunidad MindMate
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Únete a una comunidad de apoyo donde puedes conectar, compartir y crecer junto a otros 
              en su viaje hacia el bienestar mental.
            </p>
          </div>

          {/* Community Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {communityFeatures.map((feature, index) => (
              <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </CardTitle>
                      <p className="text-xs text-primary font-medium">
                        {feature.members}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Available Groups */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Grupos de Apoyo Disponibles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group, index) => (
                <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {group.name}
                      </CardTitle>
                      <Badge variant={group.active ? "default" : "secondary"} className="text-xs">
                        {group.active ? "Activo" : "Pronto"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {group.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{group.members} miembros</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full" 
                      variant={group.active ? "default" : "outline"}
                      disabled={!group.active}
                    >
                      {group.active ? "Unirse al Grupo" : "Próximamente"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Experiencias de Nuestra Comunidad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-primary/10 bg-gradient-to-br from-primary/5 to-accent/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Normas de la Comunidad
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Qué Esperamos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Respeto y empatía hacia todos los miembros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Confidencialidad de lo compartido en grupos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Apoyo constructivo y sin juicios</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">No Toleramos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Discriminación o acoso de cualquier tipo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Consejos médicos no profesionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">Spam o contenido comercial no autorizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Join CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                ¿Listo para Unirte a Nuestra Comunidad?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Forma parte de una red de apoyo donde puedes encontrar comprensión, 
                compartir experiencias y crecer junto a otros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-primary/80">
                  Unirse a la Comunidad
                </Button>
                <Button variant="outline" className="border-primary text-primary">
                  Explorar Grupos
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Gratis para todos los usuarios registrados de MindMate AI
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommunityPage;