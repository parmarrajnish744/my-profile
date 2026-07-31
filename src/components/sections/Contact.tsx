"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  AlertCircle
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#adc6ff", "#4cd7f6", "#d0bcff"],
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmittedSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3 flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> Get In Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Let&apos;s Build Something <span className="text-primary italic">Extraordinary</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
          Have a project in mind, need a full-stack consultant, or want to discuss full-time roles? Drop a line below!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & WhatsApp */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Quick Contact Card */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-on-background">Contact Details</h3>

            {/* Email item */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-on-surface-variant uppercase">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-on-background hover:text-primary transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                title="Copy Email"
              >
                {copiedField === "email" ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone item */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-on-surface-variant uppercase">Phone</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-on-background hover:text-tertiary transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                className="p-2 text-on-surface-variant hover:text-tertiary transition-colors"
                title="Copy Phone"
              >
                {copiedField === "phone" ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-mono text-on-surface-variant uppercase">Location</span>
                <span className="text-sm font-semibold text-on-background">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
            >
              <MessageSquare className="w-5 h-5" /> Chat via WhatsApp
            </a>
          </div>

          {/* Google Maps Location Card */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 h-48 relative">
            <iframe
              title="Manjalpur Vadodara Gujarat Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14768.618695028095!2d73.180295!3d22.272186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f2aa392683%3A0xb308a0d4c82c2b3e!2sManjalpur%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.9) invert(0.9) contrast(1.2)" }}
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-on-background mb-4">Send a Message</h3>

            {errorMsg && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </div>
            )}

            {submittedSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Thank you! Your message has been sent successfully. I will get back to you within 24 hours.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-on-surface-variant">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-on-surface-variant">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-on-surface-variant">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Consultation / Full-Time Role"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-on-surface-variant">
                Message *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(173,198,255,0.5)] active:scale-95 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
