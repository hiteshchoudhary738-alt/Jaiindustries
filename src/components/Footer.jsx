import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-auto bg-white p-1 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
              <img src="/assets/company_logo.png" alt="Jai Industries Logo" className="h-full w-auto object-contain" />
            </div>
            <span className="text-lg font-black text-white font-heading">JAI INDUSTRIES</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4">
            Leading Indian manufacturer of DCR Solar Modules, Turnkey Solar EPC, Agricultural Pumps, and Heavy-Duty Rechargeable Torches.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Solar Energy Solutions</h4>
          <ul className="space-y-2">
            <li><a href="#panel-explorer" className="hover:text-amber-400">DCR Solar Panels (MNRE)</a></li>
            <li><a href="#panel-explorer" className="hover:text-amber-400">TOPCon Solar Modules</a></li>
            <li><a href="#subsidy-section" className="hover:text-amber-400">PM Surya Ghar Subsidy Guide</a></li>
            <li><a href="#product-showcase" className="hover:text-amber-400">PM-KUSUM Farm Solar Pumps</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Torch & Lighting Division</h4>
          <ul className="space-y-2">
            <li><a href="#product-showcase" className="hover:text-amber-400">1200+ Lumens Rechargeable Torches</a></li>
            <li><a href="#product-showcase" className="hover:text-amber-400">Solar + AC Dual Charging Torches</a></li>
            <li><a href="#product-showcase" className="hover:text-amber-400">Agricultural Night Watch Tools</a></li>
            <li><a href="#contact-section" className="hover:text-amber-400">Bulk Dealer & Distributor Orders</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Factory Address & Support</h4>
          <p className="leading-relaxed mb-2 flex items-start gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Jai Industries, New Bus Stand Bali, Bali Dist. Pali, Rajasthan, India.</span>
          </p>
          <p className="mb-2 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" /> info@jaiindustries.com
          </p>
          <p className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-amber-400 shrink-0" /> Helpline: +91 9828104233
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 flex flex-wrap justify-between items-center text-[11px] text-slate-500">
        <div>© 2026 Jai Industries. All rights reserved. Empanelled Vendor for PM Surya Ghar Yojana.</div>
        <div>Build by Hitesh.</div>
      </div>
    </footer>
  );
}
