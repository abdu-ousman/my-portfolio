import { useState } from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';

// Fine teal threads that continue the portrait's signature arcs across the whole panel.
// Every path overshoots the viewBox and the layer is feathered by a mask, so nothing has a visible start, end or edge.
const fan = (n, f) => Array.from({ length: n }, (_, k) => f(k));
const THREADS = [
  // Main bundle: sweeps in from beyond the lower-left, gently fans open behind the portrait and leaves past the right edge.
  ...fan(10, (k) => ({
    d: `M-220 ${690 + k * 13} C 180 ${790 + k * 8}, 520 ${470 - k * 9}, 800 ${400 - k * 14} S 1180 ${250 - k * 12}, 1420 ${250 - k * 20}`,
    o: 0.9 - k * 0.07,
  })),
  // Counter-sweep: a sparser, fainter bundle drifting down through the right side.
  ...fan(4, (k) => ({
    d: `M${380 + k * 30} -160 C ${520 + k * 20} 160, 760 ${300 + k * 6}, 980 ${400 + k * 14} S 1250 ${620 + k * 12}, 1340 ${960 + k * 20}`,
    o: 0.6 - k * 0.1,
    w: k === 1,
  })),
];



// A deliberately restrained opening panel, inspired by the supplied reference.
// Original portrait and background paths are preserved so the owner's public assets work unchanged.
export const Hero = () => {
  const [portraitMissing, setPortraitMissing] = useState(false);
  const [backgroundMissing, setBackgroundMissing] = useState(false);
  return (
    <section id="hero" className="minimal-hero" aria-labelledby="hero-name">
      <div className="minimal-hero-grain" aria-hidden="true" />
      <svg className="minimal-hero-threads" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        {THREADS.map((t, i) => (
          <path key={i} d={t.d} fill="none" vectorEffect="non-scaling-stroke" strokeWidth="1"
            stroke={t.w ? 'rgba(255,255,255,1)' : 'rgba(31,205,184,1)'} strokeOpacity={t.o} />
        ))}
      </svg>
      {!backgroundMissing && (
        <img className="minimal-hero-background" src="/hero-bg-3.jpg" alt="" aria-hidden="true"
          onError={() => setBackgroundMissing(true)} />
      )}
      <div className="minimal-hero-inner">
        <div className="minimal-hero-copy">
          <div className="minimal-hero-eyebrow">INDEPENDENT DEVELOPER · ETHIOPIA</div>
          <h1 id="hero-name">Hi, I'm<br/><span>Abdurahman<span className="minimal-hero-dot">.</span></span></h1>
          <p className="minimal-hero-role">Full-stack MERN developer<span className="minimal-hero-role-sub">Academic English editor</span></p>
          <div className="minimal-hero-actions">
            <a className="minimal-hero-primary" href="#projects">Selected work <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="minimal-hero-secondary" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="minimal-hero-art" aria-label="Portfolio portrait and visual signature">
          <div className="minimal-hero-signature" aria-hidden="true"><span className="signature-arc one"/><span className="signature-arc two"/><span className="signature-arc three"/></div>
          <div className="minimal-hero-portrait">
            {portraitMissing ? (
              <span className="minimal-hero-initials" role="img" aria-label="Abdurahman Usman">AU</span>
            ) : (
              <img src="/profile-pic-9.png" alt="Portrait of Abdurahman Usman" onError={() => setPortraitMissing(true)} />
            )}
          </div>
          <span className="minimal-hero-art-label" aria-hidden="true">DESIGN / DEVELOPMENT / PROBLEM SOLVING</span>
        </div>
      </div>
      <div className="minimal-hero-bottom">
        <span className="minimal-hero-stack">REACT <i/> NODE.JS <i/> EXPRESS <i/> MONGODB</span>
        <a className="minimal-hero-linkedin" href="https://www.linkedin.com/in/abdurahman-ousman/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" title="LinkedIn"><Linkedin size={19} aria-hidden="true" /></a>
      </div>
    </section>
  );
};
