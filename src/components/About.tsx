import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, User, Mail, Code } from "lucide-react";
const About = () => {
  return <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 font-code">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hello! I'm <span className="text-primary font-medium">John Doe</span>, a passionate frontend developer based in 
                San Francisco with 5+ years of experience specializing in building exceptional digital experiences.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in web development started during college when I built my first website for a local business. 
                Since then, I've worked with agencies, startups, and established companies to create 
                user-friendly and performant web applications.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I enjoy transforming complex problems into simple, beautiful and intuitive designs. 
                When I'm not coding or pushing pixels, you'll find me hiking, reading sci-fi novels, 
                or exploring new coffee shops in the city.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href="/resume.pdf" download className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-primary relative z-10">
                <img alt="John Doe" src="/lovable-uploads/765bd477-8051-4a5e-93fa-727131f13515.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="absolute w-full h-full bg-secondary/30 rounded-xl -top-4 -right-4"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="w-20 h-20 bg-primary/20 rounded-full absolute -top-10 -left-10 blur-xl"></div>
                <div className="w-20 h-20 bg-primary/20 rounded-full absolute -bottom-10 -right-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <Card className="bg-secondary/20 border-none shadow-lg shadow-black/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">
                I love bringing ideas to life in the browser, creating responsive and interactive user interfaces.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/20 border-none shadow-lg shadow-black/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">User Experience</h3>
              <p className="text-muted-foreground">
                I focus on creating intuitive UIs with seamless navigation and delightful interactions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/20 border-none shadow-lg shadow-black/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Communication</h3>
              <p className="text-muted-foreground">
                I value clear communication and collaboration to ensure projects run smoothly from start to finish.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;