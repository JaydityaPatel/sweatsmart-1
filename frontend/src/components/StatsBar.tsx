import { useState } from 'react';

const stats = [
  { value: '10k+', label: 'Active Users' },
  { value: '98%', label: 'Accuracy Rate' },
  { value: '4', label: 'Exercises' },
  { value: 'Live', label: 'Real-Time AI' },
];

export default function StatsBar() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: 'rgba(8, 18, 36, 0.9)', padding: '52px 0', borderTop: '1px solid rgba(0,245,160,0.05)', borderBottom: '1px solid rgba(0,245,160,0.05)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={s.label}
              style={{
                textAlign: 'center', padding: '8px 0',
                borderRight: i < stats.length - 1 ? '1px solid rgba(0,245,160,0.08)' : 'none',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'transform 0.25s ease',
                cursor: 'default',
              }}
              onMouseOver={() => setHovered(i)}
              onMouseOut={() => setHovered(null)}
            >
              <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 900, fontSize: '3.2rem', color: '#00F5A0', lineHeight: 1, letterSpacing: '-0.03em', textShadow: hovered === i ? '0 0 30px rgba(0,245,160,0.4)' : 'none', transition: 'text-shadow 0.25s ease' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', color: '#4a5a6a', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 8 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
