import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Calculator, Landmark } from 'lucide-react';

export default function SubsidyCalculator() {
  const { theme } = useTheme();
  const isNight = theme === 'torch';
  const [bill, setBill] = useState(4500);
  const [category, setCategory] = useState('residential');

  // Math derivations
  let kw = Math.ceil((bill / 7.5) / 120);
  if (kw < 1) kw = 1;
  if (kw > 10) kw = 10;

  const costPerKw = 60000;
  const totalCost = kw * costPerKw;

  let subsidy = 0;
  if (category === 'residential') {
    if (kw === 1) subsidy = 30000;
    else if (kw === 2) subsidy = 60000;
    else subsidy = 78000;
  } else if (category === 'agricultural') {
    subsidy = Math.min(kw * 25000, 75000);
  } else {
    subsidy = 0;
  }

  const netCost = totalCost - subsidy;
  const annualSavings = bill * 12 * 0.85;
  const paybackYears = (netCost / annualSavings).toFixed(1);

  return (
    <section id="subsidy-section" className={`py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-800 ${isNight ? 'bg-slate-950/80' : 'bg-slate-100/70'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 mb-3">
            <Landmark className="w-3.5 h-3.5" /> Official PM Surya Ghar Scheme
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-heading mt-2 ${isNight ? 'text-white' : 'text-slate-900'}`}>
            Get Up To <span className="text-amber-500">₹78,000 Central Govt Subsidy</span> Direct To Bank
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${isNight ? 'text-slate-300' : 'text-slate-700'}`}>
            Jai Industries is an empanelled manufacturer & installer under PM Surya Ghar: Muft Bijli Yojana. Check your exact eligibility and payback timeline below.
          </p>
        </div>

        {/* Subsidy Slabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 relative text-center">
            <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>1 kW Rooftop Solar</div>
            <div className="text-4xl font-black text-amber-500 font-heading mb-2">₹30,000</div>
            <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-700'}`}>Fixed Central Govt Subsidy</p>
            <div className={`mt-4 pt-4 border-t border-slate-700/50 text-xs ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>Ideal for small homes & light agricultural lights</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-amber-500/50 relative text-center shadow-lg shadow-amber-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase">Most Popular</div>
            <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>2 kW Rooftop Solar</div>
            <div className="text-4xl font-black text-amber-500 font-heading mb-2">₹60,000</div>
            <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-700'}`}>Fixed Central Govt Subsidy</p>
            <div className={`mt-4 pt-4 border-t border-slate-700/50 text-xs ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>Powers 2 ACs, Fans, Lights & Water Pump</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 relative text-center">
            <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>3 kW - 10 kW Rooftop Solar</div>
            <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 font-heading mb-2">₹78,000</div>
            <p className={`text-xs ${isNight ? 'text-slate-300' : 'text-slate-700'}`}>Maximum Capped Central Subsidy</p>
            <div className={`mt-4 pt-4 border-t border-slate-700/50 text-xs ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>Maximum savings for large homes & farmhouses</div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-700/60 max-w-4xl mx-auto shadow-2xl">
          <h3 className={`text-2xl font-black font-heading text-center mb-8 flex items-center justify-center gap-3 ${isNight ? 'text-white' : 'text-slate-900'}`}>
            <Calculator className="w-6 h-6 text-amber-500" /> Instant Solar Subsidy & Savings Calculator
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Controls */}
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-semibold mb-2 flex justify-between ${isNight ? 'text-slate-200' : 'text-slate-900'}`}>
                  <span>Average Monthly Electricity Bill (₹)</span>
                  <span className="text-amber-500 font-bold">₹{bill.toLocaleString('en-IN')} / month</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={bill}
                  onChange={(e) => setBill(parseInt(e.target.value, 10))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className={`flex justify-between text-[11px] font-medium mt-1 ${isNight ? 'text-slate-400' : 'text-slate-600'}`}>
                  <span>₹1,000</span>
                  <span>₹12,000</span>
                  <span>₹25,000+</span>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isNight ? 'text-slate-200' : 'text-slate-900'}`}>Connection Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:ring-2 focus:ring-amber-400 focus:outline-none ${isNight ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                >
                  <option value="residential">Residential Rooftop (PM Surya Ghar Eligible)</option>
                  <option value="agricultural">Agricultural / Farm Solar Pump</option>
                  <option value="commercial">Commercial Warehouse / Industrial Facility</option>
                </select>
              </div>
            </div>

            {/* Right Output */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 text-white">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-xs text-slate-400">Recommended Capacity:</span>
                <span className="text-base font-extrabold text-amber-400 font-heading">{kw} kW Solar System</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-xs text-slate-400">Total System Investment:</span>
                <span className="text-sm font-bold text-white">₹{totalCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-xs text-emerald-400 font-semibold">Govt Subsidy Credit (DBT):</span>
                <span className="text-lg font-black text-emerald-400 font-heading">
                  {subsidy > 0 ? `- ₹${subsidy.toLocaleString('en-IN')}` : 'No Central Subsidy'}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-slate-300 font-bold">Your Net Out-of-Pocket Cost:</span>
                <span className="text-xl font-black text-amber-400 font-heading">₹{netCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/30 text-center text-xs text-amber-300 font-semibold mt-3">
                ⚡ Estimated Investment Payback Horizon: ~{paybackYears} Years (25+ Yrs Free Power)
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
