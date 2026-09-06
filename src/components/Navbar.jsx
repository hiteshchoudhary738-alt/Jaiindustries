import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Flashlight, Phone, Award, Building2, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === 'torch';

  return (
    <>
      {/* Top Helpline Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-amber-400" /> Govt Empanelled PM Surya Ghar Vendor</span>
            <span className="hidden md:flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-400" /> ISO 9001:2015 Certified Manufacturing</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a href="tel:+919828104233" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> Sales: +91 9828104233 / +91 9783588201
            </a>
            <a href="https://wa.me/919828104233" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-700/40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Official Company Logo - ALWAYS "JAI INDUSTRIES" */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-12 w-auto bg-white p-1 rounded-xl shadow-md border border-slate-200 flex items-center justify-center overflow-hidden transition-all group-hover:scale-105">
              <img src="/assets/company_logo.png" alt="Jai Industries Official Logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight block leading-none font-heading text-white">
                JAI <span className={isNight ? 'text-sky-400' : 'text-amber-400'}>INDUSTRIES</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase block mt-0.5 text-slate-300">
                Solar Modules & Torch Manufacturing
              </span>
            </div>
          </a>

          {/* Nav Links - High Contrast Text */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-200">
            <a href="#panel-explorer" className="hover:text-amber-400 transition-colors">Panel Tech</a>
            <a href="#subsidy-section" className="hover:text-amber-400 transition-colors">PM Surya Ghar Subsidy</a>
            <a href="#product-showcase" className="hover:text-amber-400 transition-colors">Products</a>
            <a href="#contact-section" className="hover:text-amber-400 transition-colors">Factory Lead Portal</a>
          </nav>

          {/* Day vs Night Switcher */}
          <div className="flex items-center gap-3">
            <div className="toggle-switch-container flex items-center p-1 rounded-full border border-slate-700/60">
              <button
                onClick={() => toggleTheme('solar')}
                className={`toggle-btn flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${!isNight ? 'active text-slate-950' : 'text-slate-300'}`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline"> Solar (Day)</span>
              </button>
              <button
                onClick={() => toggleTheme('torch')}
                className={`toggle-btn flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${isNight ? 'active text-slate-950' : 'text-slate-300'}`}
              >
                <Flashlight className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline"> Torch (Night)</span>
              </button>
            </div>

            <a
              href="#contact-section"
              className={`hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 shadow-md transition-all transform hover:-translate-y-0.5 ${isNight ? 'bg-sky-400 hover:bg-sky-300' : 'bg-amber-400 hover:bg-amber-300'}`}
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>
    </>
  );
}
