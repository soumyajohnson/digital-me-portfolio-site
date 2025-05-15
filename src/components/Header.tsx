
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 shadow-md backdrop-blur-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#hero" className="text-xl font-display font-bold text-foreground">
          John Doe
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#education" className="text-foreground/80 hover:text-primary transition-colors">
            Education
          </a>
        </nav>
        <div>
          <Button asChild variant="outline" className="rounded-full">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
