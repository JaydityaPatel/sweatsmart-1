import { useState } from 'react';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F5A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: 'Personalized Workout Plans',
    desc: 'AI-tailored routines that adapt to your goals, fitness level, and daily performance — updated after every session.',
    accent: '#00F5A0',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Smart Diet Recommendations',
    desc: 'Dynamic meal plans refreshed in real-time based on your reps, calories burned, and body composition trends.',
    accent: '#00c8ff',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00F5A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
      </svg>
    ),
    title: 'Real-Time Posture Correction',
    desc: 'Computer vision tracks your joints live and flags bad form before it leads to injury — zero delay.',
    accent: '#00F5A0',
  },
];

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" style={{ background: '#0a0f1e', padding: '100px 0', position: 'relative' }}>
      {/* Section glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,245,160,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Inter,sans-serif', color: '#00F5A0', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>Core Features</p>
          <h2 style={{ fontFamily: 'Manrope,sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#e8f4ff', letterSpacing: '-0.03em' }}>
            Everything You Need to Win
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                background: 'rgba(12, 22, 44, 0.7)',
                backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '1.5rem', padding: '36px 32px',
                border: `1px solid ${hovered === i ? f.accent + '30' : 'rgba(0,245,160,0.06)'}`,
                boxShadow: hovered === i ? `0 20px 60px rgba(0,245,160,0.1), 0 0 0 1px ${f.accent}20` : '0 4px 24px rgba(0,0,0,0.3)',
                transform: hovered === i ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseOver={() => setHovered(i)}
              onMouseOut={() => setHovered(null)}
            >
              {/* Icon box */}
              <div style={{
                width: 48, height: 48, borderRadius: '0.85rem',
                background: `rgba(${f.accent === '#00c8ff' ? '0,200,255' : '0,245,160'},0.08)`,
                border: `1px solid ${f.accent}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily: 'Manrope,sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#e8f4ff', marginBottom: 12, lineHeight: 1.3 }}>{f.title}</h3>
              <p style={{ fontFamily: 'Inter,sans-serif', color: '#6a7a8e', lineHeight: 1.75, fontSize: '0.9rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
