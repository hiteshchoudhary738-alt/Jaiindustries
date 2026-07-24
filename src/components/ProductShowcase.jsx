import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Flashlight, Check, Star, ShoppingCart } from 'lucide-react';

export default function ProductShowcase() {
  const { theme } = useTheme();
  const isNight = theme === 'torch';
  const [lumens, setLumens] = useState(1200);
  const beamDist = Math.round((lumens / 1200) * 800);

  return (
    <section id="product-showcase" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30 mb-3">
          Factory Lineup
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading mt-2 text-white">
          Dual Industrial Product Divisions
        </h2>
        <p className="mt-3 text-base text-slate-300">
          From solar generation arrays to indestructible farm night-watch rechargeable torches.
        </p>
      </div>

      {/* Division 1: Solar */}
      <div className="mb-16">
        <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-slate-700/50 pb-3 text-white">
          <Sun className="w-6 h-6 text-amber-400" /> Division 1: Solar Power Systems & Farm Pumps
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-panel rounded-3xl overflow-hidden border border-slate-700/60 flex flex-col justify-between">
            <div>
              <img src="/assets/solar_hero_bg.jpg" alt="Farm Solar Pump" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 inline-block mb-3">PM-KUSUM Approved</div>
                <h4 className="text-xl font-extrabold font-heading mb-2 text-white">Agricultural Solar Pump Systems</h4>
                <p className="text-xs leading-relaxed mb-4 text-slate-300">3HP to 10HP AC/DC submersible solar pumping systems for zero-fuel farm irrigation.</p>
                <ul className="text-xs space-y-2 text-slate-200">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> High-Torque MPPT Solar Controller</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Stainless Steel Pump Body</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> 25-Year Panel Output Warranty</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a href="#contact-section" className="w-full py-3 rounded-xl font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs text-center block transition-all">Request Pump Quote</a>
            </div>
          </div>

          <div className="glass-panel rounded-3xl overflow-hidden border border-slate-700/60 flex flex-col justify-between">
            <div>
              <img src="/assets/solar_panel_tech.jpg" alt="Residential Solar" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 inline-block mb-3">PM Surya Ghar Empanelled</div>
                <h4 className="text-xl font-extrabold font-heading mb-2 text-white">On-Grid DCR Rooftop Solar</h4>
                <p className="text-xs leading-relaxed mb-4 text-slate-300">1kW to 10kW residential solar kits with DISCOM net-metering & ₹78k subsidy support.</p>
                <ul className="text-xs space-y-2 text-slate-200">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 540W+ Indian DCR Mono PERC Modules</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Heavy Galvanized Steel Mounting Frame</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Smart Mobile App Monitoring</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a href="#contact-section" className="w-full py-3 rounded-xl font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs text-center block transition-all">Claim Solar Subsidy</a>
            </div>
          </div>

          <div className="glass-panel rounded-3xl overflow-hidden border border-slate-700/60 flex flex-col justify-between">
            <div>
              <img src="/assets/solar_hero_bg.jpg" alt="Commercial Solar" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="px-3 py-1 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30 inline-block mb-3">Commercial & Industrial</div>
                <h4 className="text-xl font-extrabold font-heading mb-2 text-white">TOPCon High-Yield Plants</h4>
                <p className="text-xs leading-relaxed mb-4 text-slate-300">Turnkey 50kW to 1MW commercial solar installations for factories, cold storages & warehouses.</p>
                <ul className="text-xs space-y-2 text-slate-200">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-sky-400" /> &gt;22.5% TOPCon N-Type Efficiency</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-sky-400" /> Accelerated Depreciation Tax Benefits</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-sky-400" /> Zero Light-Induced Degradation (LID)</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a href="#contact-section" className="w-full py-3 rounded-xl font-bold bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs text-center block transition-all">Commercial EPC Consultation</a>
            </div>
          </div>

        </div>
      </div>

      {/* Division 2: Torches */}
      <div>
        <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-slate-700/50 pb-3 text-white">
          <Flashlight className="w-6 h-6 text-sky-400" /> Division 2: Heavy-Duty Rechargeable Agricultural Torches
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/60">
          <div className="lg:col-span-6">
            <img src="/assets/torch_product.jpg" alt="Jai Solar-Torch Pro X1" className="w-full h-72 object-cover rounded-2xl shadow-xl border border-slate-700/50" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-400 text-slate-950">Jai Solar-Torch Pro X1</span>
              <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> Rated #1 for Farm Night Watch
              </span>
            </div>

            <h4 className="text-2xl font-black font-heading text-white">
              1200+ Lumens High-Intensity Rechargeable Torch with Dual Solar/AC Charging
            </h4>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              Built specifically for farmers, night field irrigation, security guards, and tough industrial conditions. Reinforced ABS drop-proof body, 18-hour lithium-ion battery backup, and IP65 waterproofing.
            </p>

            {/* Interactive Lumen Slider */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="flex justify-between text-xs font-semibold mb-2 text-white">
                <span>Interactive Lumen Intensity Control</span>
                <span className="text-sky-400 font-bold">{lumens} Lumens ({beamDist}m Beam)</span>
              </div>
              <input
                type="range"
                min="300"
                max="1800"
                step="100"
                value={lumens}
                onChange={(e) => setLumens(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div
                className="lumen-beam-demo mt-3 flex items-center justify-end px-4 text-xs font-bold text-slate-950 h-16 rounded-xl"
                style={{
                  background: `radial-gradient(circle at 10% 50%, rgba(56, 189, 248, ${(lumens / 1800).toFixed(2)}) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)`
                }}
              >
                Focused Beam Distance: <span className="ml-1 font-extrabold text-white">{beamDist} Meters</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact-section" className="px-6 py-3 rounded-xl font-bold bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs shadow-lg transition-all flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" /> Order Bulk Torches (Factory Direct)
              </a>
              <a href="https://wa.me/919876543210?text=I%20want%20to%20order%20Jai%20Rechargeable%20Torches" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl font-bold border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 text-xs flex items-center gap-2 transition-all">
                Quick WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
