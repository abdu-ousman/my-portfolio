import { useState } from 'react';
import { ArrowUpRight, Download, Linkedin } from 'lucide-react';

// A deliberately restrained opening panel, inspired by the supplied reference.
// Original portrait and background paths are preserved so the owner's public assets work unchanged.
export const Hero = () => {
  const [portraitMissing, setPortraitMissing] = useState(false);
  const [backgroundMissing, setBackgroundMissing] = useState(false);
  return (
    <section id="hero" className="minimal-hero" aria-labelledby="hero-name">
      <div className="minimal-hero-grain" aria-hidden="true" />
      {!backgroundMissing && (
        <img className="minimal-hero-background" src="/hero-bg-3.jpg" alt="" aria-hidden="true"
          onError={() => setBackgroundMissing(true)} />
      )}
      <div className="minimal-hero-inner">
        <div className="minimal-hero-copy">
          <div className="minimal-hero-meta">
            <span className="minimal-hero-eyebrow">INDEPENDENT DEVELOPER · ETHIOPIA</span>
            <a className="minimal-hero-cv" href="/Abdurahman_Usman_CV.pdf" download="Abdurahman_Usman_CV.pdf" aria-label="Download CV as PDF" title="Download CV">CV <Download size={14} aria-hidden="true" /></a>
          </div>
          <h1 id="hero-name">Hi, I'm<br/><span>Abdurahman<span className="minimal-hero-dot">.</span></span></h1>
          <p className="minimal-hero-role">Full-stack MERN developer<span className="minimal-hero-role-sub">Academic English editor</span></p>
          <div className="minimal-hero-actions">
            <a className="minimal-hero-primary" href="#projects">Selected work <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="minimal-hero-secondary" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="minimal-hero-art" aria-label="Portfolio portrait and visual signature">
          <svg className="minimal-hero-signature" viewBox="0 0 720 520" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="hero-orbit-stroke" x1="0%" y1="90%" x2="100%" y2="10%">
                <stop offset="0%" stopColor="#4de4d2" stopOpacity=".76" />
                <stop offset="27%" stopColor="#4de4d2" stopOpacity=".23" />
                <stop offset="53%" stopColor="#37b9ae" stopOpacity=".10" />
                <stop offset="82%" stopColor="#66e9da" stopOpacity=".63" />
                <stop offset="100%" stopColor="#66e9da" stopOpacity=".14" />
              </linearGradient>
              <filter id="hero-orbit-halo" x="-40%" y="-60%" width="180%" height="220%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
            <g fill="none" transform="rotate(-19 360 260)">
              {Array.from({ length: 13 }, (_, i) => (
                <ellipse
                  key={i}
                  cx="360"
                  cy="260"
                  rx={232 + i * 17}
                  ry={69 + i * 8}
                  stroke="url(#hero-orbit-stroke)"
                  strokeWidth={i === 3 || i === 10 ? 1.55 : .8}
                  opacity={i % 3 === 0 ? .91 : .64}
                />
              ))}
              <ellipse cx="360" cy="260" rx="402" ry="149" stroke="#50e5d7"
                strokeWidth="5" opacity=".19" filter="url(#hero-orbit-halo)" />
            </g>
          </svg>
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
