"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATES_DATA } from "@/data/portfolioData";
import { CertificateItem } from "@/lib/types";
import { Modal } from "../ui/Modal";
import { ExternalLink, Maximize2, Sparkles, ShieldCheck } from "lucide-react";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3 flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> Verified Credentials
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Professional <span className="text-primary italic">Certifications</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
          Accredited credentials from leading cloud providers and tech organizations.
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATES_DATA.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => setSelectedCert(cert)}
            className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 group cursor-pointer shadow-xl flex flex-col justify-between"
          >
            {/* Image Preview Box */}
            <div className="relative h-44 w-full bg-surface-container-low overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-tertiary">
                {cert.category}
              </span>

              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Info Body */}
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-mono text-primary font-bold mb-1">
                {cert.issuer}
              </span>
              <h3 className="text-base font-bold text-on-background line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="flex justify-between items-center text-xs text-on-surface-variant font-mono mt-auto pt-3 border-t border-white/10">
                <span>Issued: {cert.issueDate}</span>
                <span className="text-tertiary flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedCert && (
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
        >
          <div className="space-y-6">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-surface-container-low border border-white/10">
              <div>
                <span className="block text-xs font-mono text-on-surface-variant uppercase">Issuer</span>
                <span className="font-bold text-primary text-base">{selectedCert.issuer}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-on-surface-variant uppercase">Credential ID</span>
                <span className="font-mono text-sm text-on-background">{selectedCert.credentialId}</span>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10">
              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-on-primary font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2"
              >
                Verify Credential Online <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
