
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const [text, setText] = useState("");
  const fullText = "Computer Science Engineer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 border border-primary/30 rounded-full px-4 py-2 bg-secondary/30">
          <span className="text-sm font-code text-primary">Welcome to my portfolio</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Soumya Johnson</span>
        </h1>
        
        <div className="h-12 mb-8">
          <span className="text-xl md:text-3xl font-code inline-block overflow-hidden border-r-2 border-primary whitespace-nowrap animate-cursor-blink">
            {text}
          </span>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          "Turning bugs into features since 2020." 
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <a href="/resume.pdf" download className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="https://github.com/soumyajohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/soumya-johnson-80a379155/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <button 
            onClick={() => {
              navigator.clipboard.writeText('soumyajohnson97@gmail.com');
              toast({
                title: "Email copied!",
                description: "soumyajohnson97@gmail.com has been copied to clipboard",
              });
            }}
            className="bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
            aria-label="Copy Email"
          >
            <Mail className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-10 w-10 text-primary" />
      </a>
      
      {/* Code background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-5">
        <pre className="text-xs md:text-sm font-code text-primary">
          {`
function Portfolio() {
  const [isAwesome, setIsAwesome] = useState(true);
  
  useEffect(() => {
    document.title = "Soumya Johnson | Computer Science Engineer";
  }, []);

  const skills = ["Java", "Python", "C/C++", "JavaScript", "React", "SAP"];
  
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills skills={skills} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
          `}
        </pre>
      </div>
    </section>
  );
};

export default Hero;
