import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Assessments from "@/components/Assessments";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Assessments />
      <Features />
      <Pricing />
      <Trust />
      <Footer />
    </div>
  );
};

export default Index;