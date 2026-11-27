import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
const CV={href:'/Abdurahman_Usman_CV.pdf',file:'Abdurahman_Usman_CV.pdf'};
const links=[{href:'#hero',label:'Home'},{href:'#about',label:'About'},{href:'#projects',label:'Projects'},{href:'#services',label:'Services'},{href:'#contact',label:'Contact'}];
export const Navbar=({activePage='hero'})=>{
 const [open,setOpen]=useState(false);
 return <>
  <aside className="viewport-rail" aria-label="Portfolio navigation">
    <a href="#hero" className="viewport-brand" aria-label="Go to home"><span>AU<span className="text-primary">.</span></span><small>MERN DEVELOPER</small></a>
    <nav className="viewport-nav">{links.map(link=><a key={link.href} href={link.href} className={activePage===link.href.slice(1)?'active':''} aria-current={activePage===link.href.slice(1)?'page':undefined}>{link.label}</a>)}</nav>
    <div className="viewport-rail-actions">
      <a className="viewport-rail-contact" href="#contact">Let's talk <ArrowUpRight size={14} aria-hidden="true"/></a>
      <a className="viewport-rail-cv" href={CV.href} download={CV.file} aria-label="Download CV as PDF">Download CV <Download size={14} aria-hidden="true"/></a>
    </div>
    <span className="viewport-rail-bottom">© Abdurahman</span>
  </aside>
  <div className="viewport-mobile-bar"><a href="#hero" className="viewport-mobile-brand">Abdurahman<span>.</span></a><button aria-expanded={open} aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div>
  {open&&<nav className="viewport-mobile-drawer" aria-label="Mobile navigation">{links.map(link=><a onClick={()=>setOpen(false)} href={link.href} key={link.href} className={activePage===link.href.slice(1)?'active':''}>{link.label}</a>)}
    <div className="viewport-drawer-divider" role="separator"/>
    <a onClick={()=>setOpen(false)} href="#contact" className="viewport-drawer-action">Let's talk <ArrowUpRight size={15} aria-hidden="true"/></a>
    <a onClick={()=>setOpen(false)} href={CV.href} download={CV.file} className="viewport-drawer-action cv" aria-label="Download CV as PDF">Download CV <Download size={15} aria-hidden="true"/></a>
  </nav>}
 </>;
};
