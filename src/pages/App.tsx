import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MessageCircle, User, Send, Brain } from "lucide-react";

const AppPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy tu terapeuta con IA. ¿Cómo te sientes hoy?", sender: "bot" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const personalityQuestions = [
    {
      id: 1,
      question: "¿Te consideras una persona extrovertida?",
      options: ["Muy en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Muy de acuerdo"]
    },
    {
      id: 2,
      question: "¿Prefieres actividades organizadas y planificadas?",
      options: ["Muy en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Muy de acuerdo"]
    },
    {
      id: 3,
      question: "¿Te preocupas frecuentemente por el futuro?",
      options: ["Muy en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Muy de acuerdo"]
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: "user" }]);
      setNewMessage("");
      
      // Simulamos respuesta del bot después de un delay
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          text: "Entiendo cómo te sientes. ¿Puedes contarme más sobre eso?", 
          sender: "bot" 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Tu Espacio de <span className="text-primary">Bienestar</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Conecta con tu terapeuta IA y descubre más sobre tu personalidad
          </p>
        </div>

        <Tabs defaultValue="chat" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat Terapéutico
            </TabsTrigger>
            <TabsTrigger value="personality" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Test de Personalidad
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Chat con tu Terapeuta IA
                </CardTitle>
                <CardDescription>
                  Un espacio seguro para expresar tus pensamientos y sentimientos
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-muted/10">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-card-foreground border"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.sender === "bot" && (
                            <Brain className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          )}
                          {message.sender === "user" && (
                            <User className="w-4 h-4 mt-1 flex-shrink-0" />
                          )}
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t bg-background">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Escribe tu mensaje..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="personality">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Test de Personalidad
                </CardTitle>
                <CardDescription>
                  Descubre más sobre tu personalidad y patrones de comportamiento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {personalityQuestions.map((question, index) => (
                  <div key={question.id} className="space-y-3">
                    <h3 className="font-medium text-foreground">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                      {question.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          variant="outline"
                          className="text-xs p-2 h-auto whitespace-normal hover:bg-primary/10 hover:border-primary/30"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 border-t">
                  <Button className="w-full sm:w-auto" size="lg">
                    Obtener Resultados
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AppPage;