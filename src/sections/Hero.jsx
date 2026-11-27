import { useState } from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';

// A deliberately restrained opening panel, inspired by the supplied reference.
// Original portrait and background paths are preserved so the owner's public assets work unchanged.
export const Hero = () => {
  const [portraitMissing, setPortraitMissing] = useState(false);
  const [backgroundMissing, setBackgroundMissing] = useState(false);
  return (
    <section id="hero" className="minimal-hero" aria-labelledby="hero-name">
      <div className="minimal-hero-grain" aria-hidden="true" />
      <div className="minimal-hero-glow" aria-hidden="true" />
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
