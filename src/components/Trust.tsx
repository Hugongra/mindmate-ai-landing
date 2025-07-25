import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lock, Award, Heart } from "lucide-react";

const Trust = () => {
  const trustItems = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Built by AI engineers, licensed therapists, and cognitive scientists with decades of combined experience.",
      details: ["PhD-level AI researchers", "Licensed clinical psychologists", "Cognitive behavioral therapy specialists"]
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your conversations are encrypted end-to-end. We never sell your data or share it with third parties.",
      details: ["Bank-level encryption", "HIPAA-compliant infrastructure", "Your data never leaves secure servers"]
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "Our AI is trained on proven therapeutic approaches including CBT, DBT, and mindfulness techniques.",
      details: ["Peer-reviewed research", "Clinical validation studies", "Continuous improvement protocols"]
    },
    {
      icon: Heart,
      title: "Human Oversight",
      description: "Licensed therapists monitor AI interactions and provide crisis intervention when needed.",
      details: ["24/7 human backup support", "Licensed professional oversight", "Seamless escalation protocols"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built with trust and expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your mental health deserves the highest standards of care, privacy, and professional oversight.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trustItems.map((item, index) => (
            <Card key={index} className="border-primary/10 bg-gradient-to-br from-card to-secondary/30 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {item.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications & Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">Conversations facilitated</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">User satisfaction rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Professional monitoring</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            MindMate AI is not a replacement for professional therapy in crisis situations. 
            If you're having thoughts of self-harm, please contact emergency services or a crisis hotline immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;