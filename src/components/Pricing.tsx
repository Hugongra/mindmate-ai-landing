import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start healing today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works for you. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="border-primary/20 bg-gradient-to-br from-card to-card/80 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Free</CardTitle>
              <div className="text-4xl font-bold text-primary mb-2">$0</div>
              <p className="text-muted-foreground">Get started with basic support</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">5 AI chat sessions per month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Basic mood tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Safety protocols included</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Community support</span>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 text-primary-foreground">
                Start Free
              </Button>
            </CardContent>
          </Card>
          
          {/* Premium Plan */}
          <Card className="border-primary bg-gradient-to-br from-primary/5 to-accent/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-primary/80 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              <Star className="w-4 h-4 inline mr-1" />
              Most Popular
            </div>
            
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Premium</CardTitle>
              <div className="text-4xl font-bold text-primary mb-2">$29</div>
              <p className="text-muted-foreground">per month</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Unlimited AI conversations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Voice therapy sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Advanced mood analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Personalized insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Custom AI personalities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">Priority support</span>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                Start 7-Day Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include our safety protocols and crisis support features
          </p>
          <p className="text-xs text-muted-foreground">
            Cancel anytime • No hidden fees • Your data stays private
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;