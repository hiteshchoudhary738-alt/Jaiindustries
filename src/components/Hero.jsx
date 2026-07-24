import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Calculator, Cpu, ShoppingCart, PackageCheck } from 'lucide-react';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={theme === 'torch' ? '/assets/torch_hero_bg.jpg' : '/assets/solar_hero_bg.jpg'}
          alt="Jai Industries Hero Ambient Background"
          className="w-full h-full object-cover scale-105 transition-all duration-700"
        />
        <div className={`absolute inset-0 ${theme === 'torch' ? 'bg-gradient-to-tr from-slate-950 via-slate-950/90 to-sky-900/40' : 'bg-gradient-to-tr from-slate-950/85 via-slate-900/70 to-amber-600/35'}`}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-semibold mb-6 border border-amber-400/40 text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>
            {theme === 'torch'
              ? '🔦 Heavy-Duty 1200+ Lumens Flashlight Manufacturing'
              : '🏛️ PM Surya Ghar Govt Direct Subsidy Up to ₹78,000'}
          </span>
        </div>

        {/* Headlines */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 font-heading drop-shadow-lg">
          {theme === 'torch' ? (
            <>Unbreakable Rechargeable Torches Built for <span className="text-sky-400">Farm Night Watch</span> & Field Work</>
          ) : (
            <>Power Your Home & Farm with <span className="text-amber-400">Zero Electricity Bills</span> – Claim Up to ₹78,000</>
          )}
        </h1>

        <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow">
          {theme === 'torch'
            ? 'High-lumens, 18-hour continuous battery backup, dual solar/AC charging, and drop-proof ABS body engineered for agricultural night irrigation & emergency responders.'
            : 'Jai Industries engineers MNRE-approved DCR Solar Modules & Heavy-Duty Rechargeable Agricultural Torches. Built in India for total reliability day & night.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {theme === 'torch' ? (
            <>
              <a
                href="#product-showcase"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-slate-950 bg-sky-400 hover:bg-sky-300 text-base shadow-xl shadow-sky-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-5 h-5" /> <span>Order Bulk Torches</span>
              </a>
              <a
                href="#contact-section"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white glass-panel hover:bg-white/20 text-base transition-all flex items-center justify-center gap-3"
              >
                <PackageCheck className="w-5 h-5" /> <span>Request Factory Dealer Quote</span>
              </a>
            </>
          ) : (
            <>
              <a
                href="#subsidy-section"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 text-base shadow-xl shadow-amber-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Calculator className="w-5 h-5" /> <span>Calculate Solar Subsidy</span>
              </a>
              <a
                href="#panel-explorer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white glass-panel hover:bg-white/20 text-base transition-all flex items-center justify-center gap-3"
              >
                <Cpu className="w-5 h-5" /> <span>Explore Panel Layers</span>
              </a>
            </>
          )}
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-panel p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">15,000+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Solar Installs Done</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading">₹78,000</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Max Central Subsidy</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-heading">1200+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Torch Lumen Output</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">25 Years</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Linear Power Output</div>
          </div>
        </div>

      </div>
    </section>
  );
}
