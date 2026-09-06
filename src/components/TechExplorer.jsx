import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Layers, ChevronRight, Eye } from 'lucide-react';

// SOLAR PANEL DATA
const solarPanelTabs = {
  dcr: {
    name: '🇮🇳 DCR Subsidy Approved',
    tag: 'DCR Compliant Panel',
    description: 'MNRE-approved domestic solar cells manufactured in India. Mandated for central government PM Surya Ghar DBT subsidies up to ₹78,000.'
  },
  topcon: {
    name: '⚡ TOPCon High (>22.5%)',
    tag: 'N-Type TOPCon Cell',
    description: 'Tunnel Oxide Passivated Contact technology offering ultra-high efficiency, zero Light Induced Degradation (LID), and superior thermal coefficient.'
  },
  bifacial: {
    name: '🔄 Bifacial Dual-Glass',
    tag: 'Bifacial Double Glass',
    description: 'Generates power from both front direct sunlight and rear ground albedo absorption. Ideal for elevated agricultural farm solar pumps.'
  },
  nondcr: {
    name: '🏢 Commercial Non-DCR',
    tag: 'Commercial Standard',
    description: 'High-density multi-busbar modules for commercial factories and off-grid agricultural setups looking for maximum ROI.'
  }
};

const solarLayersData = {
  1: {
    title: '3.2mm Toughened ARC Tempered Glass',
    description: 'High-transmittance low-iron glass coated with anti-reflective nanostructures. Delivers 94.2% light transmission while resisting 25mm hail strikes at 110 km/h.',
    metric1: '94.2% Transmittance',
    metric2: 'Hailproof Class 4',
    code: 'Layer 1 of 5',
    image: '/assets/layer1_arc_glass.jpg'
  },
  2: {
    title: 'High-EVA Encapsulant Film',
    description: 'Cross-linked Polyethylene Vinyl Acetate (EVA) film offering total PID-free encapsulation, sealing solar cells against humidity, dust, and electrical degradation.',
    metric1: 'PID-Free Sealing',
    metric2: '>90% Gel Content',
    code: 'Layer 2 of 5',
    image: '/assets/layer2_eva_film.jpg'
  },
  3: {
    title: 'Grade-A Solar Cell Matrix',
    description: 'Precision-sorted silicon solar cells with 16-busbar micro-wire ribbon interconnections. Engineered for maximum current extraction even during overcast weather.',
    metric1: '>22.5% Wafer Efficiency',
    metric2: '16 Micro Busbars',
    code: 'Layer 3 of 5',
    image: '/assets/layer3_cell_matrix.jpg'
  },
  4: {
    title: 'Fluoropolymer Backsheet / Dual Glass',
    description: 'High-dielectric weather-resistant backsheet or secondary 2.0mm tempered glass barrier ensuring 25-year structural resistance against moisture and UV breakdown.',
    metric1: '1500V Insulation',
    metric2: 'Zero Ingress',
    code: 'Layer 4 of 5',
    image: '/assets/layer4_backsheet.jpg'
  },
  5: {
    title: 'Anodized Frame & IP68 Junction Box',
    description: 'Corrosion-resistant anodized aluminum alloy frame combined with an IP68-rated waterproof junction box containing high-current bypass diodes for heat dissipation.',
    metric1: 'IP68 Waterproof',
    metric2: 'Bypass Diode Shield',
    code: 'Layer 5 of 5',
    image: '/assets/layer5_junction_box.jpg'
  }
};

// RECHARGEABLE TORCH DATA
const torchModelTabs = {
  pro_x1: {
    name: ' Jai Plus',
    tag: 'Waterproof Night Specialist',
    description: 'Flagship agricultural torch featuring dual solar panel charging, 1200+ lumens spotlight, and 18-hour continuous battery backup for farm night irrigation.'
  },
  turbobeam: {
    name: ' Jai Lite',
    tag: 'Ultra-Long 1000m Throw',
    description: 'High-intensity searchlight built with deep aluminum reflector cup, throwing a focused 1500 lumens beam up to 1000 meters across pitch black fields.'
  },
  // fieldguard: {
  //   name: ' Jai Field-Guard IP65',
  //   tag: 'Waterproof Night Specialist',
  //   description: 'Rugged rubberized water-sealed body engineered specifically for heavy rainfall, muddy farm tracks, and emergency rescue operations.'
  // },
  // toughhawk: {
  //   name: ' Jai Tough-Hawk Alloy',
  //   tag: 'Drop-Proof Reinforced Alloy',
  //   description: 'Military-grade aircraft aluminum shell resistant to 3-meter drops, heavy impact, and extreme farm field wear and tear.'
  // }
};

const torchLayersData = {
  1: {
    title: 'Optical Convex Lens & Polished Reflector',
    description: 'Precision-ground convex glass lens paired with a high-reflection polished aluminum cup, focusing light into an ultra-sharp 800m spot beam.',
    metric1: '99% Light Transmission',
    metric2: 'Scratch-Proof Lens',
    code: 'Hardware Layer 1 of 5',
    image: '/assets/torch_layer1_lens.jpg'
  },
  2: {
    title: 'High-Lumen CREE LED Emitter Core',
    description: 'Industrial-grade high-power CREE LED chip mounted on a thick copper heat sink PCB, maintaining stable 1200+ lumens output without overheating.',
    metric1: '1200+ Lumens Output',
    metric2: '50,000 Hrs Lifespan',
    code: 'Hardware Layer 2 of 5',
    image: '/assets/torch_layer2_led.jpg'
  },
  3: {
    title: 'Smart Microcontroller PCB & Circuit',
    description: 'Advanced electronic control unit providing PWM multi-mode dimming (High, Eco, Strobe), short-circuit defense, and intelligent overcharge protection.',
    metric1: 'PWM Smart Dimming',
    metric2: 'Overcharge Shield',
    code: 'Hardware Layer 3 of 5',
    image: '/assets/torch_layer3_pcb.jpg'
  },
  4: {
    title: 'High-Capacity Lithium-Ion Battery Bank',
    description: 'Integrated 10,000 mAh A-grade lithium battery pack with secondary top-mounted solar charging strip, ensuring up to 18 hours of continuous night backup.',
    metric1: '10,000 mAh Cell Bank',
    metric2: '18-Hr Night Backup',
    code: 'Hardware Layer 4 of 5',
    image: '/assets/torch_layer4_battery.jpg'
  },
  5: {
    title: 'Reinforced ABS & Rubber Gasket Casing',
    description: 'Heavy-duty impact-resistant ABS body lined with IP65 silicone O-ring seals and non-slip rubber grip, built to withstand 3-meter drops and heavy rain.',
    metric1: 'IP65 Waterproof',
    metric2: '3-Meter Drop Proof',
    code: 'Hardware Layer 5 of 5',
    image: '/assets/torch_layer5_casing.jpg'
  }
};

export default function TechExplorer() {
  const { theme } = useTheme();
  const isNight = theme === 'torch';

  const modelTabs = isNight ? torchModelTabs : solarPanelTabs;
  const layersData = isNight ? torchLayersData : solarLayersData;

  const [selectedModel, setSelectedModel] = useState(isNight ? 'pro_x1' : 'dcr');
  const [activeLayer, setActiveLayer] = useState(1);

  const currentModel = modelTabs[selectedModel] || Object.values(modelTabs)[0];
  const currentLayer = layersData[activeLayer] || layersData[1];

  return (
    <section id="panel-explorer" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold border mb-3 ${isNight ? 'bg-sky-500/20 text-sky-400 border-sky-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30'}`}>
          <Layers className="w-3.5 h-3.5" />
          {isNight ? 'Torch Hardware Architecture Explorer' : 'Solar Panel Architecture Explorer'}
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading mt-2 text-white">
          {isNight ? (
            <>Inside Our Heavy-Duty Torches: <span className="text-sky-400">5-Layer Hardware Inspector</span></>
          ) : (
            <>Inside Our Solar Panels: <span className="text-amber-400">5-Layer Visual Inspector</span></>
          )}
        </h2>

        <p className="mt-3 text-base sm:text-lg text-slate-300">
          {isNight ? (
            'Select any of the 5 hardware layers below to inspect our drop-proof casing, LED optics, battery bank, and electronic circuit board.'
          ) : (
            'Select any of the 5 layers below to visually inspect the exact material components and manufacturing precision.'
          )}
        </p>

        {/* Dynamic Model Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 glass-panel rounded-2xl border border-slate-700/60">
          {Object.keys(modelTabs).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedModel(key)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedModel === key
                  ? isNight
                    ? 'bg-sky-400 text-slate-950 shadow-md font-extrabold'
                    : 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {modelTabs[key].name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left 5-Layer Selection Stack */}
        <div className="lg:col-span-6 space-y-3">
          {Object.keys(layersData).map((key) => {
            const index = parseInt(key, 10);
            const layer = layersData[index];
            const isActive = activeLayer === index;
            return (
              <div
                key={index}
                onClick={() => setActiveLayer(index)}
                className={`layer-card glass-panel p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  isActive
                    ? isNight
                      ? 'active-layer border-sky-400 bg-sky-400 text-slate-950 shadow-xl scale-[1.02]'
                      : 'active-layer border-amber-400 bg-amber-400 text-slate-950 shadow-xl scale-[1.02]'
                    : isNight
                    ? 'text-white hover:border-sky-400 border-slate-800'
                    : 'text-white hover:border-amber-400 border-slate-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl font-black flex items-center justify-center text-sm ${
                    isActive
                      ? 'bg-slate-950 text-white'
                      : isNight
                      ? 'bg-sky-500/20 text-sky-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    L{index}
                  </div>
                  <div>
                    <h4 className={`font-bold text-base ${isActive ? 'text-slate-950' : 'text-white'}`}>{layer.title}</h4>
                    <p className={`text-xs ${isActive ? 'text-slate-900 font-medium' : 'text-slate-300'}`}>{layer.metric1}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${isActive ? 'bg-slate-950 text-white' : 'bg-slate-800/80 text-slate-300'}`}>
                    {isActive ? 'Inspecting' : 'Click to View'}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Dynamic Hardware Inspector Card */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/60 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${isNight ? 'bg-sky-400 text-slate-950' : 'bg-amber-400 text-slate-950'}`}>
              <Eye className="w-3.5 h-3.5" /> {currentModel.tag}
            </span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${isNight ? 'bg-slate-900 text-sky-400 border border-sky-400/30' : 'bg-slate-900 text-amber-400 border border-amber-400/30'}`}>
              {currentLayer.code}
            </span>
          </div>

          <div className="mb-6">
            {/* Layer Specific Image */}
            <div className="relative group overflow-hidden rounded-2xl mb-6 shadow-xl border border-slate-700/50">
              <img
                src={currentLayer.image}
                alt={currentLayer.title}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute bottom-3 left-3 backdrop-blur-md px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 ${isNight ? 'bg-slate-950/80 border-sky-400/40 text-sky-400' : 'bg-slate-950/80 border-amber-400/40 text-amber-400'}`}>
                <span>Visualizing: {currentLayer.title}</span>
              </div>
            </div>

            <h3 className="text-2xl font-black font-heading mb-2 text-white">{currentLayer.title}</h3>
            <p className="text-sm leading-relaxed text-slate-300">{currentLayer.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-700/40">
            <div>
              <div className="text-xs font-medium text-slate-400">Primary Specification</div>
              <div className={`text-lg font-bold font-heading ${isNight ? 'text-sky-400' : 'text-amber-400'}`}>{currentLayer.metric1}</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">Quality Standard</div>
              <div className="text-lg font-bold text-emerald-400 font-heading">{currentLayer.metric2}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
