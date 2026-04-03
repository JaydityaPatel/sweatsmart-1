export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(6, 12, 26, 0.95)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(0,245,160,0.06)',
      padding: '48px 0',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'linear-gradient(135deg, #00F5A0, #00c8ff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Manrope,sans-serif', fontWeight: 900, fontSize: 15, color: '#002e1e'
            }}>F</div>
            <span style={{ fontFamily: 'Manrope,sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#e8f4ff' }}>FitAI</span>
          </div>

          {/* Tagline */}
          <p style={{ fontFamily: 'Inter,sans-serif', color: '#4a5a6a', fontSize: '0.85rem', fontStyle: 'italic' }}>
            Elevate your fitness journey.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {/* Twitter/X */}
            <a href="#" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,245,160,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5a6a', textDecoration: 'none', transition: 'all 0.2s', fontSize: '0.9rem' }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,160,0.4)'; (e.currentTarget as HTMLElement).style.color = '#00F5A0'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,160,0.12)'; (e.currentTarget as HTMLElement).style.color = '#4a5a6a'; }}
            >𝕏</a>
            {/* GitHub */}
            <a href="#" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,245,160,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5a6a', textDecoration: 'none', transition: 'all 0.2s', fontSize: '0.75rem' }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,160,0.4)'; (e.currentTarget as HTMLElement).style.color = '#00F5A0'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,160,0.12)'; (e.currentTarget as HTMLElement).style.color = '#4a5a6a'; }}
            >GH</a>
            {/* LinkedIn */}
            <a href="#" style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(0,245,160,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5a6a', textDecoration: 'none', transition: 'all 0.2s', fontSize: '0.75rem' }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,160,0.4)'; (e.currentTarget as HTMLElement).style.color = '#00F5A0'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,245,160,0.12)'; (e.currentTarget as HTMLElement).style.color = '#4a5a6a'; }}
            >in</a>
          </div>

          {/* Copyright */}
          <p style={{ fontFamily: 'Inter,sans-serif', color: '#2e3f52', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} FitAI Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
