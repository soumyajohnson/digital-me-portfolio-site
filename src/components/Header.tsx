import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-sm shadow-lg shadow-black/10 py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 rounded-none">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors mx- px-0">
            &lt;about/&gt;
          </a>
          <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">
            &lt;skills/&gt;
          </a>
          <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">
            &lt;experience/&gt;
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
            &lt;projects/&gt;
          </a>
          <a href="#education" className="text-foreground/80 hover:text-primary transition-colors">
            &lt;education/&gt;
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="py-2 px-4 hover:bg-secondary/30 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              &lt;about/&gt;
            </a>
            <a href="#skills" className="py-2 px-4 hover:bg-secondary/30 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              &lt;skills/&gt;
            </a>
            <a href="#experience" className="py-2 px-4 hover:bg-secondary/30 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              &lt;experience/&gt;
            </a>
            <a href="#projects" className="py-2 px-4 hover:bg-secondary/30 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              &lt;projects/&gt;
            </a>
            <a href="#education" className="py-2 px-4 hover:bg-secondary/30 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              &lt;education/&gt;
            </a>
            <a href="#contact" className="bg-primary text-primary-foreground py-2 px-4 rounded-md text-center" onClick={() => setMobileMenuOpen(false)}>
              Contact Me
            </a>
          </nav>
        </div>}
    </header>;
};
export default Header;