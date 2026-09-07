import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'Adaptive Architecture',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory text-charcoal w-full max-w-xl rounded-3xl border border-sand shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="px-8 py-6 bg-sand/40 border-b border-sand flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-coral" />
            <span className="font-editorial text-2xl text-forest font-semibold">Initiate Dialogue</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-sand hover:bg-forest hover:text-ivory flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-8 space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-forest mx-auto" />
              <h3 className="font-editorial text-3xl text-forest font-light">Transmission Received</h3>
              <p className="text-sm text-charcoal/70 max-w-sm mx-auto">
                Thank you for reaching out to Aurelis. Our systems engineering lab will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-charcoal/70 uppercase mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dr. Aris Thorne"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-sand/30 border border-sand focus:border-forest focus:outline-none text-sm text-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-charcoal/70 uppercase mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-sand/30 border border-sand focus:border-forest focus:outline-none text-sm text-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-charcoal/70 uppercase mb-1">Area of Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-sand/30 border border-sand focus:border-forest focus:outline-none text-sm text-charcoal"
                >
                  <option value="Adaptive Architecture">Adaptive Architecture</option>
                  <option value="Living Interfaces">Living Interfaces</option>
                  <option value="Swarm Intelligence">Swarm Intelligence</option>
                  <option value="Bio-Synthetic Materials">Bio-Synthetic Materials</option>
                  <option value="General Partnership">General Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-charcoal/70 uppercase mb-1">Project Intent & Vision</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your environmental parameters, goals, or architectural scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-sand/30 border border-sand focus:border-forest focus:outline-none text-sm text-charcoal resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-forest text-ivory text-sm font-semibold tracking-wider uppercase hover:bg-forest-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <span>TRANSMIT MESSAGE</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
