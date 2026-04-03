import { useState } from 'react';

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10, 15, 30, 0.6)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(0, 245, 160, 0.06)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: 'linear-gradient(135deg, #00F5A0, #00c8ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Manrope, sans-serif', fontWeight: 900, fontSize: 17, color: '#002e1e',
            boxShadow: '0 0 20px rgba(0,245,160,0.3)'
          }}>F</div>
          <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#e8f4ff', letterSpacing: '-0.02em' }}>
            FitAI
          </span>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['Home', 'Features', 'How It Works'].map(link => (
            <a key={link} href="#"
              style={{
                color: hovered === link ? '#00F5A0' : '#8a9bb0',
                fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.9rem',
                textDecoration: 'none', transition: 'color 0.2s ease',
                paddingBottom: 2,
                borderBottom: hovered === link ? '1px solid rgba(0,245,160,0.6)' : '1px solid transparent',
              }}
              onMouseOver={() => setHovered(link)}
              onMouseOut={() => setHovered(null)}
            >{link}</a>
          ))}
          {/* Gradient border login button */}
          <button style={{
            position: 'relative', padding: '0.55rem 1.5rem',
            borderRadius: 9999, cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.88rem',
            color: '#00F5A0', background: 'rgba(0,245,160,0.04)',
            border: '1px solid rgba(0,245,160,0.3)',
            transition: 'all 0.25s ease',
            boxShadow: hovered === 'login' ? '0 0 16px rgba(0,245,160,0.2)' : 'none',
          }}
            onMouseOver={() => setHovered('login')}
            onMouseOut={() => setHovered(null)}
          >Login</button>
        </div>
      </div>
    </nav>
  );
}
