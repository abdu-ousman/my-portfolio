import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Abdurahman shows solid full-stack fundamentals and a strong willingness to grow.",
    author: "Ammar Mohammed",
    role: "Senior Full-stack Instructor, Mizan Institute of Technology",
  },
  {
    quote:
      "A motivated learner who consistently improves and contributes positively to team projects.",
    author: "Ahmed Mohammed",
    role: "Senior Full-stack Instructor, Mizan Institute of Technology",
  },
  {
    quote:
      "He writes organized code, communicates clearly, and always delivers on time.",
    author: "Abdulrahman Asfaw",
    role: "Project Teammate, Mizan Institute of Technology",
  },
  {
    quote:
      "Abdurahman is reliable and great at building clean, responsive React interfaces. A strong team player.",
    author: "Anwar Wudu",
    role: "Project Teammate, Mizan Institute of Technology",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const previous = () =>
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-14 md:mb-16">
          <Reveal>
            <span className="section-kicker">What people say</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A few words from{" "}
              <span className="font-serif italic font-normal text-primary">
                people I’ve worked with.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal className="max-w-4xl mx-auto">
          <div className="glass relative overflow-hidden p-7 sm:p-9 md:p-12 rounded-3xl glow-border">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            <blockquote aria-live="polite" className="text-xl sm:text-2xl md:text-[1.75rem] font-medium leading-relaxed mt-7 mb-8 max-w-3xl">
              “{active.quote}”
            </blockquote>

            <div className="border-t border-border/70 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {initials(active.author)}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">{active.author}</div>
                  <div className="text-sm text-muted-foreground mt-1 leading-5">
                    {active.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-border bg-surface/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border border-border bg-surface/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2" aria-label="Testimonial selector">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.author}
                type="button"
                onClick={() => setActiveIdx(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                aria-current={idx === activeIdx ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeIdx
                    ? "w-8 bg-primary"
                    : "w-3 bg-muted-foreground/25 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
