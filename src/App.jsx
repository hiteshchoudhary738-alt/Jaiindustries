import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechExplorer from './components/TechExplorer';
import SubsidyCalculator from './components/SubsidyCalculator';
import ProductShowcase from './components/ProductShowcase';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-500">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <TechExplorer />
          <SubsidyCalculator />
          <ProductShowcase />
          <LeadForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
