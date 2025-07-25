import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, DollarSign, Shield } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Millions struggle in silence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            1 in 4 people experience mental health challenges, but traditional therapy is often 
            out of reach due to cost, long waiting lists, stigma, or simply not knowing where to start.
          </p>
        </div>
        
        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
            <CardHeader className="text-center">
              <DollarSign className="w-12 h-12 mx-auto text-destructive mb-2" />
              <CardTitle className="text-destructive">Too Expensive</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">$100-200 per session puts therapy out of reach for many</p>
            </CardContent>
          </Card>
          
          <Card className="border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 mx-auto text-destructive mb-2" />
              <CardTitle className="text-destructive">Long Wait Times</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Weeks or months to get an appointment when you need help now</p>
            </CardContent>
          </Card>
          
          <Card className="border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 mx-auto text-destructive mb-2" />
              <CardTitle className="text-destructive">Fear & Stigma</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Shame and judgment prevent people from seeking help</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Solution */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/20 rounded-3xl p-8 md:p-12">
            <Heart className="w-16 h-16 mx-auto text-primary mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              MindMate AI changes everything
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your always-available, judgment-free AI therapist. Talk anytime, anywhere. 
              Start healing today with the support you deserve, when you need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;