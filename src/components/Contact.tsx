import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { openWhatsApp, DISPLAY_PHONE, LOCAL_PHONE } from '../utils/whatsapp';
import { ContactFormState } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Building2,
  User,
  DollarSign,
  FileText,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: 'Mobile App Development',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const validate = () => {
    if (!formData.fullName.trim()) return 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) return 'Valid Email address is required.';
    if (!formData.phone.trim() || formData.phone.length < 7) return 'Valid Phone/WhatsApp number is required.';
    if (!formData.message.trim()) return 'Please describe your project requirements.';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setLoading(true);
    setErrorMsg('');

    // Simulate fast dispatch
    setTimeout(() => {
      setLoading(false);
      setSuccessMsg(true);

      // Offer immediate WhatsApp dispatch option
      const msg = `Hello Bynarixa Tech Solutions! I submitted a website project inquiry:
- Name: ${formData.fullName}
- Company: ${formData.company || 'N/A'}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Budget: ${formData.budget}
- Requirements: ${formData.message}`;

      openWhatsApp(msg);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>Get In Touch With Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Engineer Your <span className="text-gradient">Next Product</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind or need an architecture review? Reach out directly to our engineering team or send us a WhatsApp message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800">
                Official Company Contact
              </h3>

              {/* Phone / WhatsApp */}
              <div
                onClick={() => openWhatsApp('Hello Bynarixa Tech Solutions!')}
                className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 cursor-pointer hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">
                    Phone & WhatsApp Direct
                  </div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {LOCAL_PHONE} ({DISPLAY_PHONE})
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    Tap to Chat Instantly on WhatsApp →
                  </div>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700 hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">
                    Official Email
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Response within 2 hours</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">
                    Headquarters Location
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {COMPANY_INFO.location}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{COMPANY_INFO.address}</div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">
                    Business Working Hours
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    {COMPANY_INFO.businessHours}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">24/7 SLA Server Emergency Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Start Your Project Consultation
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill out the form below for an NDA, quote estimate, and sprint roadmap.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-cyan-300 font-bold">
                    NDA Included
                  </span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950 dark:text-emerald-100">
                    Project Request Submitted!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you {formData.fullName}. Our lead solutions architect is reviewing your requirements and will reach out within 2 hours.
                  </p>
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Hello Bynarixa Tech Solutions! I submitted a form inquiry for ${formData.service}. Let's chat!`
                      )
                    }
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open Chat on WhatsApp Now</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-500" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-blue-500" />
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Health Corp"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-500" />
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="s.jenkins@acmehealth.com"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-500" />
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 555 019 2831"
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-blue-500" />
                        Service Category
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Android App Development">Android App Development</option>
                        <option value="iOS App Development">iOS App Development</option>
                        <option value="Flutter Development">Flutter Cross-Platform</option>
                        <option value="React Native Development">React Native Mobile</option>
                        <option value="Custom Web Applications">Custom Web Applications</option>
                        <option value="Enterprise Software / ERP">Enterprise ERP / CRM</option>
                        <option value="SaaS Development">SaaS Platform</option>
                        <option value="AI Integration">AI Integration & RAG</option>
                        <option value="UI/UX Design">UI/UX Design Systems</option>
                        <option value="Cloud Deployment & DevOps">Cloud Deployment & DevOps</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-blue-500" />
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="< $3,000">&lt; $3,000 (MVP Sprint)</option>
                        <option value="$3,000 - $7,000">$3,000 - $7,000 (Standard)</option>
                        <option value="$7,000 - $15,000">$7,000 - $15,000 (Cross-Platform)</option>
                        <option value="$15,000+">$15,000+ (Enterprise System)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Project Requirements & Goals *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your app concept, target users, desired features, or key integrations..."
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry & Connect on WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
