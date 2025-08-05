import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppPage from "./pages/App";
import NotFound from "./pages/NotFound";
import HowItWorksPage from "./pages/HowItWorks";
import FeaturesPage from "./pages/Features";
import PricingPage from "./pages/Pricing";
import SafetyPage from "./pages/Safety";
import HelpCenterPage from "./pages/HelpCenter";
import CrisisResourcesPage from "./pages/CrisisResources";
import ContactPage from "./pages/Contact";
import CommunityPage from "./pages/Community";
import OurTeamPage from "./pages/OurTeam";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfServicePage from "./pages/TermsOfService";
import CookiePolicyPage from "./pages/CookiePolicy";
import HipaaCompliancePage from "./pages/HipaaCompliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/crisis-resources" element={<CrisisResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/hipaa-compliance" element={<HipaaCompliancePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
