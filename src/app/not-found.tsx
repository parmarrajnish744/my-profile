import Link from "next/link";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 text-center relative z-10">
      <div className="glass-card p-10 sm:p-16 rounded-3xl border border-white/10 max-w-xl shadow-2xl relative overflow-hidden flex flex-col items-center">
        {/* Glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-20 h-20 rounded-2xl bg-surface-container-high border border-white/10 flex items-center justify-center text-primary mb-6 shadow-lg">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-2 flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> 404 Error
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-on-background tracking-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-on-surface-variant text-base sm:text-lg mb-8 leading-relaxed">
          The requested technical URL or coordinate does not exist within Parmar Rajnesh&apos;s portfolio system.
        </p>

        <Link
          href="/"
          className="bg-primary text-on-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] active:scale-95 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Return to Main Portfolio
        </Link>
      </div>
    </div>
  );
}
