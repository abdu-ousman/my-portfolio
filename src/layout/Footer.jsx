import { Linkedin } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  // { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abdurahman-ousman/" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="group inline-flex items-center gap-2.5 font-bold tracking-tight hover:text-primary transition-colors"
              aria-label="Back to top"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-xs font-bold text-primary transition-transform group-hover:-rotate-3">
                AU
              </span>
              <span className="text-xl">
                abdurahman<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {currentYear} Abdurahman Usman. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank" rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
