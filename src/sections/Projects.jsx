import { ArrowUpRight, FileText, Images, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Modal } from "@/components/Modal";

const projects = [
  {
    id: "school", title: "Quizana School", kicker: "Secondary education · Learning & assessment",
    description: "A responsive learning platform with subject roadmaps, interactive practice, mock exams, and student progress views.",
    challenge: "Make structured learning and assessment easy for students to navigate across devices.",
    approach: "Developed roadmap-based navigation, interactive practice screens, student dashboards, and role-related workflows.",
    img: "/projects/school-desktop.webp", gallery: ["/projects/school-desktop.webp", "/projects/school-mobile.webp", "/projects/school-roadmap.webp", "/projects/school-practice.webp"],
    tags: ["React", "Node.js", "Express", "MongoDB"], link: "https://quizana-school.onrender.com", pdf: "/projects/quizana-school.pdf"
  },
  {
    id: "university", title: "Quizana University", kicker: "Higher education · Digital learning",
    description: "A university learning application with course roadmaps, learning resources, practice activities, and assessment workflows.",
    challenge: "Present course progress and learning activities clearly across desktop and mobile screens.",
    approach: "Built connected course and learning interfaces, roadmap views, and assessment experiences.",
    img: "/projects/university-desktop.webp", gallery: ["/projects/university-desktop.webp", "/projects/university-mobile.webp", "/projects/university-roadmap.webp", "/projects/university-practice.webp"],
    tags: ["React", "Node.js", "Express", "MongoDB"], link: "https://quizana.onrender.com", pdf: "/projects/quizana-university.pdf"
  },
  {
    id: "rose", phone: true, title: "Rose Oils", kicker: "Small business · Sales & inventory",
    description: "A mobile-first tool for sales, customer credit and payments, inventory, expenses, and business reports.",
    challenge: "Make everyday retail transactions, stock, and outstanding balances manageable from a phone.",
    approach: "Developed transaction-oriented interfaces, stock screens, business reports, and Amharic-friendly workflows.",
    img: "/projects/rose-home.webp", gallery: ["/projects/rose-home.webp", "/projects/rose-sales.webp", "/projects/rose-stock.webp", "/projects/rose-report.webp"],
    tags: ["React", "Node.js", "Express", "MongoDB"], link: "https://roseoils.onrender.com", pdf: "/projects/rose-oils.pdf"
  },
];

export const Projects = () => {
 const [current,setCurrent]=useState(()=>{const slug=window.location.hash.split('/')[1];const i=projects.findIndex(p=>p.id===slug);return i>=0?i:0;});
 const [expanded,setExpanded]=useState(false);
 const project=projects[current];
 // Keep the address bar in sync so a single project can be linked, e.g. /#projects/rose
 useEffect(()=>{window.history.replaceState(null,'',`#projects/${projects[current].id}`);},[current]);
 const previous=()=>{setCurrent(i=>(i+projects.length-1)%projects.length);setExpanded(false)};
 const next=()=>{setCurrent(i=>(i+1)%projects.length);setExpanded(false)};
 return <section id="projects" className={`viewport-projects-section project-theme project-theme--${project.id}`}>
   <div className="viewport-project-top"><div><span className="section-kicker">03 / Projects</span><h2>Selected <em>work.</em></h2></div><span className="viewport-project-counter">0{current+1} / 0{projects.length}</span></div>
   <article className="viewport-project-feature">
     <div className="viewport-project-image"><span className="project-image-watermark" aria-hidden="true">0{current+1}</span>
       <img key={project.id} src={project.img} alt={`${project.title} actual interface screenshot`} className={project.phone?'viewport-project-phone':''}/>
       <a href={project.link} target="_blank" rel="noopener noreferrer" className="viewport-project-live">Live application <ArrowUpRight size={15}/></a>
     </div>
     <div className="viewport-project-copy">
       <span className="viewport-project-kicker">{project.kicker}</span>
       <h3>{project.title}</h3>
       <p>{project.description}</p>
       <div className="viewport-project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
       <div className="viewport-project-actions"><button type="button" onClick={()=>setExpanded(true)}>Explore case study <Images size={16}/></button><a href={project.pdf} target="_blank" rel="noopener noreferrer">Portfolio PDF <FileText size={16}/></a></div>
     </div>
   </article>
   <div className="viewport-project-controls"><div className="viewport-project-pagination">{projects.map((item,i)=><button key={item.id} type="button" aria-label={`View ${item.title}`} aria-current={i===current?'true':undefined} className={i===current?'active':''} onClick={()=>{setCurrent(i);setExpanded(false)}} />)}</div><div className="viewport-project-arrows"><button type="button" onClick={previous} aria-label="Previous project"><ChevronLeft/></button><button type="button" onClick={next} aria-label="Next project"><ChevronRight/></button></div></div>
   {expanded&&<Modal onClose={()=>setExpanded(false)} label={`${project.title} case study`} className={`viewport-case-modal project-theme project-theme--${project.id}`}><button className="viewport-modal-close" onClick={()=>setExpanded(false)} aria-label="Close case study"><X size={18}/></button><span className="section-kicker">Project case study</span><h3>{project.title}</h3><div className="viewport-case-summary"><div><strong>The challenge</strong><p>{project.challenge}</p></div><div><strong>My work</strong><p>{project.approach}</p></div></div><div className="viewport-case-gallery">{project.gallery.map((src,i)=><a key={src} href={src} target="_blank" rel="noopener noreferrer" aria-label={`View screenshot ${i+1}`}><img src={src} alt={`${project.title} screenshot ${i+1}`}/></a>)}</div><div className="viewport-case-links"><a href={project.link} target="_blank" rel="noopener noreferrer">Visit live application <ExternalLink size={16}/></a><a href={project.pdf} target="_blank" rel="noopener noreferrer">Portfolio PDF <FileText size={16}/></a></div></Modal>}
 </section>;
};
