import React, { useState, useEffect, useRef } from 'react';

/*
 * Reusable animated Lottie iframe wrapper with consistent glow/orbit styling.
 * Props:
 *  - src: Lottie host embed URL
 *  - label: small upper / lower corner label text
 *  - size: 'hero' | 'large' | 'medium' | 'small'
 *  - rounded: border radius size (default xl)
 *  - className: extra wrapper classes
 *  - lazy: if true, only mounts iframe when in view / hovered
 */
const sizeMap = {
  hero: 'h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px]',
  large: 'h-[320px] sm:h-[380px] md:h-[430px]',
  medium: 'h-56 sm:h-64',
  small: 'h-24 w-24',
};

const LottieFrame = ({
  src = 'https://lottie.host/embed/6eed80dc-7a32-4e1e-8ee7-7b9e3678feca/El25YvPRNL.lottie',
  label = 'GP',
  size = 'medium',
  rounded = 'rounded-2xl',
  className = '',
  lazy = true,
  orbit = false,
}) => {
  const [mounted, setMounted] = useState(!lazy);
  const ref = useRef(null);

  useEffect(() => {
    if (!lazy) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setMounted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [lazy]);

  return (
    <div ref={ref} className={`relative group ${rounded} overflow-hidden backdrop-blur-xl border border-cyan-700/30 bg-slate-900/30 shadow-[0_0_28px_-8px_rgba(14,165,233,0.35)] ${className}`}>
      {/* Layered glow & optional orbit ring */}
      <div className="pointer-events-none absolute -inset-[3px] rounded-[inherit]">
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-cyan-600/25 via-sky-500/15 to-blue-400/15 blur-xl animate-gradientShift" />
        <div className="absolute inset-0 rounded-[inherit] border border-cyan-500/10 animate-pulseOutline" />
        {orbit && (
          <div className="absolute -inset-8 rounded-full border border-cyan-500/10 opacity-50 animate-orbit before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-cyan-300/70" />
        )}
      </div>
      {mounted ? (
        <iframe
          src={src}
          title={label + '-animation'}
          className={`relative w-full ${sizeMap[size] || sizeMap.medium} opacity-90 group-hover:opacity-100 transition-opacity`}
          loading="lazy"
        />
      ) : (
        <div className={`flex items-center justify-center text-cyan-300/60 text-xs tracking-widest ${sizeMap[size]}`}>LOADING...</div>
      )}
      <div className="absolute top-2 right-3 text-[10px] uppercase tracking-widest text-sky-300/60">{label}</div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(56,189,248,0.12),transparent_60%)] mix-blend-overlay" />
    </div>
  );
};

export default LottieFrame;
