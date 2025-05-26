import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, User, Mail, Code, Brain, Layers, Users, Lightbulb } from "lucide-react";
const About = () => {
  return <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 font-code">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="order-2 md:order-1 md:col-span-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hey there! I'm <span className="text-primary font-medium">Soumya Johnson</span> — a Computer Science grad student at Penn State who enjoys turning caffeine into code and complex problems into clean, scalable solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Over the past few years, I've built everything from e-commerce platforms that handle millions of users to voice-based AI tools that can detect negative thoughts (yes, even your inner saboteur). My work spans frontend, backend, and the kind of machine learning models that make computers seem... oddly empathetic.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My projects often revolve around making tech more accessible, bilingual, and actually helpful — like a mental health assistant that speaks your language or a real-time object detection system for individuals with visual agnosia. I've also published research on AI-powered medical chatbots and neural networks for lung tumor identification — because why not teach machines to care and diagnose?
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not busy building things that think, talk, or see, you'll probably find me jamming to music like it's my side hustle, experimenting in the kitchen (success rate varies), planning my next escape across the globe, or rating new cuisines like a one-woman Michelin guide — all while pretending I don't have 32 tabs open.
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <Card className="bg-secondary/20 border-none shadow-lg shadow-black/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Applied AI</h3>
              <p className="text-muted-foreground">
                I use machine learning and NLP not just to analyze data but to build tools that actually understand people, from cognitive distortion classifiers to AI-powered assistants.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/20 border-none shadow-lg shadow-black/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                From APIs to UI, I build seamless, scalable systems that users (and developers) enjoy working with.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/20 border-none shadow-lg shadow-black/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility-First Design</h3>
              <p className="text-muted-foreground">
                I design with everyone in mind, creating multilingual, voice-friendly, and inclusive experiences that go beyond checkboxes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-none shadow-lg shadow-black/20">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
              <p className="text-muted-foreground">
                I turn vague ideas and messy requirements into polished products, often faster than the coffee kicks in.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;
