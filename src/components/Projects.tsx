
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    title: "Voice-Based CBT Therapist for the Visually Impaired Using DistilBERT",
    description: "Engineered a voice-driven CBT chatbot leveraging DistilBERT for cognitive distortion classification and GPT-4 for therapeutic response generation, enhancing accessible mental health support for visually impaired individuals.",
    image: "https://images.unsplash.com/photo-1633419798822-8c42c97d09e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxMHx8dmlkZW8lMjBhbmFseXNpc3xlbnwwfHx8fDE2OTA0NjcwNDh8MA&auto=format&fit=crop&w=500&q=60",
    tags: ["Python", "LLM", "AI", "NLP", "Mental Health"],
    liveLink: "#",
    repoLink: "#",
    date: "Jun'27 - Apr'25"
  },
  {
    title: "EmotiCare - Multilingual Voice-Interactive Mental Health Assistant",
    description: "Engineered a React–Flask application integrating Web Speech API and OpenAI GPT for real-time speech-to-text, NLP-driven response generation, and text-to-speech output; designed for accessible, bilingual therapeutic interactions.",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHw5fHxtZW50YWwlMjBoZWFsdGh8ZW58MHx8fHwxNjkwNDY3MTIzfMA&auto=format&fit=crop&w=500&q=60",
    tags: ["NLP", "OpenAI", "Speech Recognition", "Flask API", "React JS"],
    liveLink: "#",
    repoLink: "#",
    date: "Jun'27 - Apr'25"
  },
  {
    title: "Real-Time Object Detection Using Vision to Aid People With Visual Agnosia",
    description: "Developed a real-time object detection system using YOLOv8, fine-tuned on a custom dataset, to assist individuals with visual agnosia by identifying objects and providing on-screen operational instructions for improved usability.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxvYmplY3QlMjBkZXRlY3Rpb258ZW58MHx8fHwxNjkwNDY3MTgzfMA&auto=format&fit=crop&w=500&q=60",
    tags: ["Computer Vision", "Deep Learning", "Object Detection", "YOLOV8"],
    liveLink: "#",
    repoLink: "#",
    date: "Aug'24 - Dec'24"
  },
  // {
  //   title: "Delivery Impact Day Dashboard",
  //   description: "Led a team of 25 volunteers to build applications for the visually challenged. Contributed to Deloitte's global initiative of offering tech solutions for accessibility.",
  //   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHw0fHx2b2x1bnRlZXJ8ZW58MHx8fHwxNjkwNDY3MjUyfMA&auto=format&fit=crop&w=500&q=60",
  //   tags: ["Accessibility", "Team Leadership", "Web Applications"],
  //   liveLink: "#",
  //   repoLink: "#",
  //   date: "Jun'22 - May'23"
  // }
];

// Research publications
const publications = [
  {
    title: "A fully convolutional deep neural network for lung tumor identification",
    venue: "International Journal of Applied Engineering Research (IJAER)",
    date: "Jan'20 - May'20",
    description: "Developed a revolutionary deep learning approach to accurately identify lung cancer from medical images with higher than average accuracy."
  },
  {
    title: "A Novel Approach to Understand the Future of Chatbots for Medical Assistance.",
    venue: "International Journal of Engineering and Advanced Technology (IJEAT)",
    date: "Jul'18 - Dec'18",
    description: "Conducted an AI-based medical chatting, integrating NLP and AME to process text into sentences with increased comprehension."
  },
  {
    title: "Chatbot as a Personal Assistant",
    venue: "International Journal of Applied Engineering Research (IJAER)",
    date: "Jan'18 - May'18",
    description: "Developed an AI-powered interactive persona as a personal assistant, integrating unique presentation and using NLP and design AI."
  },
    {
    title: "Home Security System",
    venue: "International Journal of Applied Engineering Research (IJAER)",
    date: "Jul'18 - Dec'18",
    description: "Developed an IoT-enabled home security system using facial recognition and real-time visitor authentication."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 font-code">Projects & Research</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects and research publications I've worked on that showcase my 
            skills in computer science, AI, and accessibility solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="project-card bg-card border-none overflow-hidden shadow-lg shadow-black/20">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 relative z-20 -mt-8">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-xs text-primary mb-2">{project.date}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/50 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t border-border flex justify-between">
                <Button asChild variant="ghost" size="sm" className="hover:bg-secondary/30 hover:text-primary">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="hover:bg-secondary/30 hover:text-primary">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mt-16 mb-8 text-center">Research Publications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, idx) => (
            <Card key={idx} className="bg-card border-none overflow-hidden shadow-lg shadow-black/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                <p className="text-xs text-primary mb-2">{pub.venue} | {pub.date}</p>
                <p className="text-muted-foreground text-sm">
                  {pub.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="https://github.com/soumyaj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Code className="h-5 w-5" /> View All Projects
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
