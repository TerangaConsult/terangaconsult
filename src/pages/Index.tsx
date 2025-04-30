
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Bookmark, Search, Globe, BarChart2, Award } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import ChallengesSection from '@/components/sections/ChallengesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ResultsSection from '@/components/sections/ResultsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CtaSection from '@/components/sections/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <AdvantagesSection />
      <ResultsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
