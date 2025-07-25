import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mic, Users, Shield, Phone, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Conversations",
      description: "Chat with your AI therapist instantly via text. Get immediate support whenever you need it.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Mic,
      title: "Voice Therapy Sessions",
      description: "Talk naturally with advanced voice AI that understands emotions and responds with empathy.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5"
    },
    {
      icon: BarChart3,
      title: "Mood Tracking",
      description: "Daily mood check-ins and journaling help you understand patterns and track your progress.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "Customizable AI Avatars",
      description: "Choose an AI personality that matches your preferences for the most comfortable experience.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5"
    },
    {
      icon: Shield,
      title: "Psychological Safety",
      description: "Built-in safety protocols ensure you're always protected with professional oversight.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "Immediate redirection to suicide hotlines and human therapists when you need urgent help.",
      gradient: "from-accent-foreground/20 to-accent-foreground/5"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Everything you need for better mental health
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to support your journey to emotional wellbeing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-primary/10 bg-gradient-to-br ${feature.gradient} hover:-translate-y-1`}>
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Available 24/7
            </h3>
            <p className="text-muted-foreground">
              Your AI therapist never sleeps. Get support whenever you need it, day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;