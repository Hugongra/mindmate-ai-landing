import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Heart, 
  Zap, 
  Focus, 
  Users, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Lightbulb,
  Camera,
  Eye
} from "lucide-react";

const Assessments = () => {
  const [completedTests, setCompletedTests] = useState<string[]>([]);

  const testCategories = [
    {
      id: "personality",
      title: "Evaluación de Personalidad",
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
      tests: [
        {
          id: "big5",
          title: "Test Big Five",
          description: "Evalúa los cinco rasgos principales de personalidad reconocidos científicamente",
          duration: "10-15 min",
          questions: 44,
          type: "Personalidad"
        },
        {
          id: "general",
          title: "Evaluación General sobre Ti",
          description: "Cuestionario integral sobre tu vida, relaciones, trabajo y bienestar general",
          duration: "15-20 min",
          questions: 60,
          type: "General"
        }
      ]
    },
    {
      id: "mental-health",
      title: "Salud Mental",
      icon: Heart,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      tests: [
        {
          id: "depression",
          title: "Test de Depresión (PHQ-9)",
          description: "Cuestionario estándar para evaluar síntomas depresivos",
          duration: "5-7 min",
          questions: 9,
          type: "Depresión"
        },
        {
          id: "anxiety",
          title: "Test de Ansiedad (GAD-7)",
          description: "Evaluación de trastorno de ansiedad generalizada",
          duration: "3-5 min",
          questions: 7,
          type: "Ansiedad"
        },
        {
          id: "stress",
          title: "Escala de Estrés Percibido",
          description: "Mide tu nivel de estrés en el último mes",
          duration: "5-7 min",
          questions: 10,
          type: "Estrés"
        }
      ]
    },
    {
      id: "attention",
      title: "Atención y Concentración",
      icon: Focus,
      color: "text-accent-foreground",
      bgColor: "bg-accent/10",
      tests: [
        {
          id: "adhd",
          title: "Test de TDAH (ASRS-v1.1)",
          description: "Evaluación de síntomas de déficit de atención e hiperactividad",
          duration: "5-7 min",
          questions: 18,
          type: "TDAH"
        },
        {
          id: "attention",
          title: "Test de Atención y Concentración",
          description: "Evalúa tu capacidad de concentración y atención sostenida",
          duration: "10-12 min",
          questions: 25,
          type: "Atención"
        }
      ]
    },
    {
      id: "lifestyle",
      title: "Estilo de Vida y Bienestar",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      tests: [
        {
          id: "sleep",
          title: "Calidad del Sueño",
          description: "Evalúa tu calidad de sueño y patrones de descanso",
          duration: "5-7 min",
          questions: 15,
          type: "Sueño"
        },
        {
          id: "relationships",
          title: "Relaciones Interpersonales",
          description: "Analiza la calidad de tus relaciones sociales y familiares",
          duration: "8-10 min",
          questions: 20,
          type: "Relaciones"
        },
        {
          id: "selfesteem",
          title: "Autoestima",
          description: "Escala de autoestima de Rosenberg",
          duration: "3-5 min",
          questions: 10,
          type: "Autoestima"
        }
      ]
    },
    {
      id: "computer-vision",
      title: "Análisis Visual y Emocional",
      icon: Camera,
      color: "text-violet-600",
      bgColor: "bg-violet-100",
      tests: [
        {
          id: "emotion-detection",
          title: "Análisis de Emociones Facial",
          description: "Detecta y analiza emociones a través de expresiones faciales en tiempo real",
          duration: "2-3 min",
          questions: "Análisis visual",
          type: "Emociones"
        },
        {
          id: "micro-expressions",
          title: "Microexpresiones",
          description: "Analiza microexpresiones sutiles que revelan estados emocionales profundos",
          duration: "3-5 min",
          questions: "Análisis visual",
          type: "Microexpresiones"
        },
        {
          id: "stress-visual",
          title: "Indicadores Visuales de Estrés",
          description: "Detecta signos visuales de estrés y fatiga a través de la cámara",
          duration: "2-4 min",
          questions: "Análisis visual",
          type: "Estrés Visual"
        },
        {
          id: "wellbeing-tracking",
          title: "Seguimiento de Bienestar Visual",
          description: "Monitorea cambios en tu bienestar a través del análisis visual diario",
          duration: "1-2 min",
          questions: "Análisis visual",
          type: "Bienestar"
        }
      ]
    }
  ];

  const handleStartTest = (testId: string) => {
    // Aquí iría la lógica para iniciar el test específico
    console.log(`Iniciando test: ${testId}`);
  };

  const isTestCompleted = (testId: string) => completedTests.includes(testId);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Evaluaciones Psicológicas Completas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Realiza evaluaciones científicamente validadas para conocerte mejor y obtener 
            insights personalizados sobre tu salud mental y bienestar
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Científicamente validados</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span>Insights personalizados</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Resultados inmediatos</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="personality" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-8 h-auto">
            {testCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm p-3 sm:p-2 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <category.icon className="w-4 h-4" />
                <span className="text-center sm:text-left">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {testCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.tests.map((test) => (
                  <Card key={test.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                          <category.icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        {isTestCompleted(test.id) && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <CardTitle className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        {test.title}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit text-xs">
                        {test.type}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {test.description}
                      </p>
                      
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{test.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{test.questions} preguntas</span>
                        </div>
                      </div>

                      <Button 
                        onClick={() => handleStartTest(test.id)}
                        className="w-full text-sm sm:text-base"
                        variant={isTestCompleted(test.id) ? "outline" : "default"}
                      >
                        {isTestCompleted(test.id) ? "Ver Resultados" : "Comenzar Test"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              ¿Por qué realizar estas evaluaciones?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Autoconocimiento</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Comprende mejor tu personalidad, fortalezas y áreas de mejora
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Insights Personalizados</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Recibe recomendaciones específicas basadas en tus resultados
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Seguimiento del Progreso</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Monitorea tu evolución y bienestar a lo largo del tiempo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessments;