import { Reveal } from "@/components/Reveal";
import { Code2, Gauge, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean code",
    description: "Readable, maintainable code that is easier to extend and debug.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Responsive experiences that stay focused on speed and usability.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Clear communication, thoughtful handoffs, and a team-first mindset.",
  },
  {
    icon: Lightbulb,
    title: "Continuous growth",
    description: "Learning through building, feedback, iteration, and real problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-primary/6 blur-[90px]" />
      <div className="container mx-auto px-6 relative z-10 grid items-start gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <span className="section-kicker">About me</span>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Curious by nature. <span className="font-serif font-normal italic text-primary">Builder</span> by choice.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I build MERN applications for practical needs—from learning and assessment tools such as Quizana School and Quizana University to the Rose Oils business management app. I also work as an English lecturer at Werabe University and offer academic English editing. I care about how interfaces read, how data moves, and how the product holds together.
          </p>
          <div className="mt-8 border-l-2 border-primary/60 pl-5 text-lg font-medium leading-7 text-foreground/90">
            “Growth happens when you build, break, fix, and build again.”
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              delay={index * 90}
              className="card-lift glass min-h-52 rounded-[1.6rem] p-6 sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/15 bg-primary/8">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground/60">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
