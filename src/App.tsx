import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowItWorksPage from "./pages/HowItWorks";
import FeaturesPage from "./pages/Features";
import PricingPage from "./pages/Pricing";
import SafetyPage from "./pages/Safety";
import HelpCenterPage from "./pages/HelpCenter";
import CrisisResourcesPage from "./pages/CrisisResources";
import ContactPage from "./pages/Contact";
import CommunityPage from "./pages/Community";
import AboutPage from "./pages/About";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/crisis-resources" element={<CrisisResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
