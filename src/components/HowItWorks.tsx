import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, MessageCircle, TrendingUp, Lightbulb } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Personalized Onboarding",
      description: "Take a brief personality and mental health assessment to help your AI understand your unique needs and communication style.",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Start Talking",
      description: "Chat with your AI therapist anytime via text or voice. Share your thoughts, feelings, and concerns in a safe, judgment-free space.",
      color: "text-accent-foreground"
    },
    {
      icon: TrendingUp,
      title: "Track Your Journey",
      description: "Daily mood check-ins and journal prompts help you monitor progress and identify patterns in your mental health.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Get Insights",
      description: "Receive personalized coping strategies, exercises, and insights based on evidence-based therapeutic approaches.",
      color: "text-accent-foreground"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How MindMate AI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your mental health journey in just a few simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/80">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Ready to start? It takes less than 2 minutes to begin your first session.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;