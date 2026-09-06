import React, { useState } from 'react';
import { Send, ShieldCheck, Factory, Award, CheckCircle2, User, Phone, MapPin, Loader2, AlertCircle } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    type: 'Solar Rooftop (PM Surya Ghar Subsidy)',
    bill: '₹2,500 - ₹5,000'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to save inquiry to database.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMsg('Could not connect to backend server. Make sure database server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
            <Send className="w-3.5 h-3.5" /> Direct Factory Inquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading mt-2">
            Get Factory-Direct Price Quote & Free Site Assessment
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Fill in your requirements below. Our solar engineers and torch team will contact you within 2 hours.
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-700/60 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-bold">+91</span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full pl-14 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* City & Pincode */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">City & Pincode *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Jaipur, 302001"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Product Type */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Product Required *</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                >
                  <option value="Solar Rooftop (PM Surya Ghar Subsidy)">Solar Rooftop (PM Surya Ghar Subsidy)</option>
                  <option value="Farm Solar Water Pump (PM-KUSUM)">Farm Solar Water Pump (PM-KUSUM)</option>
                  <option value="Commercial Solar Plant">Commercial / Industrial Solar Plant</option>
                  <option value="Rechargeable Torches Bulk Purchase">Rechargeable Torches Bulk Purchase</option>
                </select>
              </div>
            </div>

            {/* Bill Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Average Monthly Electricity Bill (Optional)</label>
              <select
                value={formData.bill}
                onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
              >
                <option value="Below ₹2,500">Below ₹2,500 / month</option>
                <option value="₹2,500 - ₹5,000">₹2,500 - ₹5,000 / month</option>
                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000 / month</option>
                <option value="Above ₹10,000">Above ₹10,000 / month</option>
                <option value="Bulk Torch Inquiry">N/A (Bulk Torch Inquiry)</option>
              </select>
            </div>

            {/* Error Banner */}
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-xs font-semibold">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-base shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Saving Inquiry to PostgreSQL...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> <span>Submit Inquiry & Save Data</span>
                </>
              )}
            </button>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-400" /> 25-Year Linear Power Warranty</span>
              <span className="flex items-center gap-1.5"><Factory className="w-4 h-4 text-amber-400" /> Direct Factory Rates</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-emerald-400" /> Govt Empanelled Vendor</span>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <div className="glass-panel p-8 rounded-3xl max-w-md w-full border border-amber-500/40 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white font-heading mb-2">Inquiry Submitted!</h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Thank you {formData.name}! Our engineer will call +91 {formData.phone} shortly to schedule your free site assessment for "{formData.type}".
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-3 rounded-xl font-bold bg-amber-500 text-slate-950 text-sm"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
