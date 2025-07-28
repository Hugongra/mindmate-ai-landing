import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, DollarSign, Shield } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Millones luchan en silencio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            1 de cada 4 personas experimentan desafíos de salud mental, pero la terapia tradicional está frecuentemente 
            fuera de alcance debido al costo, largas listas de espera, estigma, o simplemente no saber por dónde empezar.
          </p>
        </div>
        
        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
            <CardHeader className="text-center">
              <DollarSign className="w-12 h-12 mx-auto text-destructive mb-2" />
              <CardTitle className="text-destructive">Muy Costoso</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">50-150 euros por sesión pone la terapia fuera del alcance de muchos</p>
            </CardContent>
          </Card>
          
          <Card className="border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 mx-auto text-destructive mb-2" />
              <CardTitle className="text-destructive">Largas Esperas</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Semanas o meses para conseguir una cita cuando necesitas ayuda ahora</p>
            </CardContent>
          </Card>
          
          <Card className="border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 mx-auto text-destructive mb-2" />
              <CardTitle className="text-destructive">Miedo y Estigma</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">La vergüenza y el juicio impiden a las personas buscar ayuda</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Solution */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/20 rounded-3xl p-8 md:p-12">
            <Heart className="w-16 h-16 mx-auto text-primary mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              MindMate AI lo cambia todo
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tu terapeuta de IA siempre disponible y libre de juicios. Habla en cualquier momento, en cualquier lugar. 
              Empieza a sanar hoy con el apoyo que mereces, cuando más lo necesites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;