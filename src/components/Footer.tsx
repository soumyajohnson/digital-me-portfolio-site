
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-code font-bold text-primary mb-4">SJ<span className="text-foreground">.dev</span></h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              A passionate frontend developer focused on creating beautiful and
              functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/soumyajohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/soumya-johnson-80a379155/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:soumyajohnson97@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">&lt;about/&gt;</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">&lt;skills/&gt;</a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">&lt;experience/&gt;</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">&lt;projects/&gt;</a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">&lt;education/&gt;</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">&lt;contact/&gt;</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Harrisburg, Pennsylvania, USA</li>
              <li>
                <a href="mailto:soumyajohnson97@gmail.com" className="hover:text-primary transition-colors">
                  soumyajohnson97@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+17176481821" className="hover:text-primary transition-colors">
                  +1 (717) 648-1821
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Soumya Johnson. All rights reserved.</p>
          <p className="text-sm mt-2">
            Designed and built with <span className="text-primary">❤️</span> using React, TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
