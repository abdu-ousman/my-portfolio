import React, { useEffect, useState } from 'react';
import { Navbar } from '@/layout/Navbar';
import { Hero } from '@/sections/Hero';
import { MinimalAbout, MinimalServices, MinimalContact } from '@/sections/MinimalViews';
import { Projects } from '@/sections/Projects';
import Footer from './layout/Footer';
import { FitView } from './components/FitView';
import { Modal } from './components/Modal';
import './viewport.css';

const pages = ['hero','about','projects','services','contact'];
const titles = {hero:'Home',about:'About',projects:'Projects',services:'Services',contact:'Contact'};
const readPage = () => {
  const id = window.location.hash.replace('#','').split('/')[0];
  return pages.includes(id) ? id : 'hero';
};

export default function App() {
  const [page,setPage] = useState(readPage);
  const [showFooter,setShowFooter] = useState(false);
  useEffect(()=>{
    const update=()=>setPage(readPage());
    window.addEventListener('hashchange',update);
    return ()=>window.removeEventListener('hashchange',update);
  },[]);
  useEffect(()=>{
    const onKey=(e)=>{
      const tag=e.target?.tagName;
      // Never change page while a dialog is open or while typing
      if(['INPUT','TEXTAREA','SELECT'].includes(tag) || e.target?.isContentEditable || document.querySelector('[aria-modal="true"]')) return;
      if(e.key==='ArrowRight' || e.key==='PageDown') {
        const index=pages.indexOf(page);window.location.hash=pages[Math.min(pages.length-1,index+1)];
      }
      if(e.key==='ArrowLeft' || e.key==='PageUp') {
        const index=pages.indexOf(page);window.location.hash=pages[Math.max(0,index-1)];
      }
    };
    window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[page]);
  useEffect(()=>{document.title = page==='hero' ? 'Abdurahman Usman | Full-Stack MERN Developer & Academic English Editor' : `${titles[page]} | Abdurahman Usman`;},[page]);
  const views={hero:<Hero/>,about:<MinimalAbout/>,projects:<Projects/>,services:<MinimalServices/>,contact:<MinimalContact/>};
  return <div className="portfolio-screen-shell">
    <a href="#main" className="skip-link" onClick={e=>{e.preventDefault();document.getElementById('main')?.focus();}}>Skip to content</a>
    <Navbar activePage={page}/>
    <main id="main" className={`portfolio-stage portfolio-stage--${page}`} tabIndex={-1} aria-label={`${titles[page]} section`}>
      <FitView key={page} compact={page==='hero'} noScale={['about','projects','services','contact'].includes(page)}>{views[page]}</FitView>
    </main>
    <div className="viewport-status"><span>AU / 2026</span><span>{String(pages.indexOf(page)+1).padStart(2,'0')} / 05</span><button type="button" onClick={()=>setShowFooter(true)}>Info & links</button></div>
    {showFooter && <Modal onClose={()=>setShowFooter(false)} label="Info and links" className="viewport-footer-panel" closeOnHashLink><button className="viewport-modal-close" onClick={()=>setShowFooter(false)}>Close ×</button><Footer/></Modal>}
  </div>;
}
