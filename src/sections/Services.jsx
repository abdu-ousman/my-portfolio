import { Reveal } from "@/components/Reveal";
import { Code2, Database, Wrench, FilePenLine, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Code2, title: "React & responsive interfaces", desc: "Build responsive pages, dashboards, forms, and intuitive frontend features." },
  { icon: Database, title: "MERN full-stack development", desc: "Create and extend Node.js/Express APIs, MongoDB models, and connected web features." },
  { icon: Wrench, title: "Bug fixing & improvements", desc: "Troubleshoot React issues, improve existing workflows, and refine mobile layouts." },
  { icon: FilePenLine, title: "Academic English editing", desc: "Proofread research writing for grammar, clarity, coherence, and academic tone." },
];

export const Services = () => (
  <section id="services" className="relative overflow-hidden py-24 md:py-28">
    <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="mb-12 md:mb-16 max-w-3xl">
        <span className="section-kicker">How I can help</span>
        <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[1.07]">The work I <span className="font-serif italic font-normal text-primary">do for clients.</span></h2>
        <p className="mt-5 text-muted-foreground leading-7">From small React fixes to complete business and educational tools, with clear scope and communication.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal as="article" key={service.title} delay={i * 80} className="glass soft-card-hover rounded-[1.6rem] p-6 sm:p-7 flex flex-col min-h-64">
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10"><service.icon className="w-5 h-5 text-primary" /></span>
              <span className="text-xs text-muted-foreground">0{i+1}</span>
            </div>
            <h3 className="mt-7 text-xl font-semibold leading-6">{service.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-6 flex-1">{service.desc}</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline">Discuss a project <ArrowUpRight size={16}/></a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
