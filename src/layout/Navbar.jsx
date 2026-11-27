import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links=[{href:'#hero',label:'Home'},{href:'#about',label:'About'},{href:'#projects',label:'Projects'},{href:'#services',label:'Services'},{href:'#contact',label:'Contact'}];
export const Navbar=({activePage='hero'})=>{
 const [open,setOpen]=useState(false);
 return <>
  <aside className="viewport-rail" aria-label="Portfolio navigation">
    <a href="#hero" className="viewport-brand" aria-label="Go to home"><span>AU<span className="text-primary">.</span></span><small>MERN DEVELOPER</small></a>
    <nav className="viewport-nav">{links.map(link=><a key={link.href} href={link.href} className={activePage===link.href.slice(1)?'active':''} aria-current={activePage===link.href.slice(1)?'page':undefined}>{link.label}</a>)}</nav>
    <a className="viewport-rail-contact" href="#contact">Let's talk <ArrowUpRight size={14}/></a>
    <span className="viewport-rail-bottom">© Abdurahman</span>
  </aside>
  <div className="viewport-mobile-bar"><a href="#hero" className="viewport-mobile-brand">Abdurahman<span>.</span></a><button aria-expanded={open} aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div>
  {open&&<nav className="viewport-mobile-drawer" aria-label="Mobile navigation">{links.map(link=><a onClick={()=>setOpen(false)} href={link.href} key={link.href} className={activePage===link.href.slice(1)?'active':''}>{link.label}</a>)}</nav>}
 </>;
};
