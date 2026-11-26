import { ArrowUpRight, ArrowRight, Code2, Layers3, Wrench, FilePenLine, Gauge, Users, Lightbulb, Linkedin } from 'lucide-react';
import { ContactForm } from './Contact';
import { contactInfo } from './contactInfo';

const offerings = [
  {name:'React & responsive interfaces', hint:'01 / FRONTEND', description:'Build responsive pages, dashboards, forms, and intuitive frontend features.', icon:Code2},
  {name:'MERN full-stack development', hint:'02 / WEB APPS', description:'Create and extend Node.js/Express APIs, MongoDB models, and connected web features.', icon:Layers3},
  {name:'Bug fixing & improvements', hint:'03 / SUPPORT', description:'Troubleshoot React issues, improve existing workflows, and refine mobile layouts.', icon:Wrench},
  {name:'Academic English editing', hint:'04 / LANGUAGE', description:'Proofread research writing for grammar, clarity, coherence, and academic tone.', icon:FilePenLine},
];

const highlights = [
  {title:'Clean code', hint:'01', description:'Readable, maintainable code that is easier to extend and debug.', icon:Code2},
  {title:'Performance', hint:'02', description:'Responsive experiences that stay focused on speed and usability.', icon:Gauge},
  {title:'Collaboration', hint:'03', description:'Clear communication, thoughtful handoffs, and a team-first mindset.', icon:Users},
  {title:'Continuous growth', hint:'04', description:'Learning through building, feedback, iteration, and real problems.', icon:Lightbulb},
];

export function MinimalAbout(){
  return (
    <section id="about" className="studio-view studio-about studio-scroll" aria-labelledby="about-title">
      <div className="studio-about-main">
        <span className="studio-eyebrow">02 / ABOUT ME</span>
        <h2 id="about-title" className="studio-title">Curious by nature.<br/><span>Builder by choice.</span></h2>
        <p className="studio-brief">I build MERN applications for practical needs—from learning and assessment tools such as Quizana School and Quizana University to the Rose Oils business management app. I also work as an English lecturer at Werabe University and offer academic English editing. I care about how interfaces read, how data moves, and how the product holds together.</p>
        <a href="#projects" className="studio-text-action">See the work <ArrowRight size={18} aria-hidden="true"/></a>
      </div>
      <div className="studio-about-grid">
        {highlights.map((item)=>{const Icon=item.icon;return (
          <article key={item.title} className="studio-service-tile studio-about-card">
            <span className="studio-tile-top"><Icon size={23} strokeWidth={1.65} aria-hidden="true"/><span>{item.hint}</span></span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );})}
      </div>
    </section>
  );
}

export function MinimalServices(){
  return (
    <section id="services" className="studio-view studio-services studio-scroll" aria-labelledby="services-title">
      <div className="studio-services-head"><span className="studio-eyebrow">04 / WHAT I CAN HELP WITH</span><h2 id="services-title" className="studio-title">Made to <span>work.</span></h2><p>Different challenges. One thoughtful approach.</p></div>
      <div className="studio-service-grid">
        {offerings.map((item)=>{const {name,hint,description}=item;const Icon=item.icon;return (
          <article key={name} className="studio-service-tile">
            <span className="studio-tile-top"><Icon size={23} strokeWidth={1.65} aria-hidden="true"/><span>{hint}</span></span>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href="#contact">Discuss a project <ArrowUpRight size={15} aria-hidden="true"/></a>
          </article>
        );})}
      </div>
    </section>
  );
}

export function MinimalContact(){
  return (
    <section id="contact" className="studio-view studio-contact studio-scroll" aria-labelledby="contact-title">
      <div className="studio-contact-copy">
        <span className="studio-eyebrow">05 / GET IN TOUCH</span>
        <h2 id="contact-title" className="studio-title">Have an idea?<br/><span>Let's make it real.</span></h2>
        <p className="studio-contact-avail"><i aria-hidden="true"/>Open to remote collaborations</p>
        <p>A project to start, a bug to solve, or writing to polish.</p>
        <ul className="studio-contact-list">
          {contactInfo.map((item)=>{
            const {label,value,href}=item;const Icon=item.icon;
            const inner=<><Icon size={20} aria-hidden="true"/><span><small>{label}</small>{value}</span></>;
            return <li key={label}>{href?<a className="studio-contact-row" href={href}>{inner}</a>:<div className="studio-contact-row">{inner}</div>}</li>;
          })}
          <li><a className="studio-contact-row" href="https://www.linkedin.com/in/abdurahman-ousman/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} aria-hidden="true"/><span><small>LinkedIn</small>abdurahman-ousman <ArrowUpRight size={13} aria-hidden="true"/></span></a></li>
        </ul>
      </div>
      <ContactForm/>
    </section>
  );
}
