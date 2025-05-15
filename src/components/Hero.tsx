
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            Available for hire
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Hi, I'm <span className="text-primary">John Doe</span>
            <span className="block mt-2">Frontend Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
            I create exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button asChild className="rounded-full" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
              alt="John Doe" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDownIcon className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
