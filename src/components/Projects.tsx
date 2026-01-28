
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    title: "Auralis: Privacy-First Real-Time Voice AI Companion",
    description: "A production-grade, bilingual (English/Hindi) voice AI built for real-time emotional support. Designed with low-latency streaming, strong security, and privacy-by-design at its core, Auralis handles sensitive mental-health conversations using token-level AI streaming, encrypted storage, and full user data control-proving how AI systems can be both fast and responsible.",
    image: "https://images.unsplash.com/photo-1633419798822-8c42c97d09e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxMHx8dmlkZW8lMjBhbmFseXNpc3xlbnwwfHx8fDE2OTA0NjcwNDh8MA&auto=format&fit=crop&w=500&q=60",
    tags: ["Python", "STT/TTS", "WebSockets", "MongoDB", "JWT", "Flask API", "ReactJS"],
    liveLink: "#",
    repoLink: "https://github.com/soumyajohnson/emoticare",
    date: ""
  },
  {
    title: "AI-Powered Fake News Detector",
    description: "A full-stack credibility analysis platform that goes beyond simple “fake vs real” labels. It combines NLP models, explainable AI, and real-time social context (Reddit & Google News) to show why a claim is flagged — helping users make informed decisions instead of blind trust.",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHw5fHxtZW50YWwlMjBoZWFsdGh8ZW58MHx8fHwxNjkwNDY3MTIzfMA&auto=format&fit=crop&w=500&q=60",
    tags: ["Java", "Spring Boot", "NLP", "FastAPI", "Angular JS"],
    liveLink: "#",
    repoLink: "https://github.com/soumyajohnson/fake-news-detector",
    date: ""
  },
  {
    title: "Flowra: Convert text into interactive flowcharts",
    description: "Flowra transforms plain-English process descriptions into structured, interactive flowcharts. It combines AI-driven understanding with deterministic layout and manual editing, letting users generate, adjust, and refine process visuals in real time.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxvYmplY3QlMjBkZXRlY3Rpb258ZW58MHx8fHwxNjkwNDY3MTgzfMA&auto=format&fit=crop&w=500&q=60",
    tags: ["Next.js", "React Flow", "FastAPI", "Gemini", "Node.js"],
    liveLink: "#",
    repoLink: "https://github.com/soumyajohnson/summary-visualizer",
    date: ""
  },
  {
    title: "Brain Age Prediction using 3D MRI",
    description: "A deep-learning framework that predicts brain age from 3D MRI scans and analyzes the Brain Age Gap (BAG) as a biomarker for Alzheimer’s progression. Built with reproducible pipelines, model comparisons, and visual explanations (Grad-CAM), this project bridges medical imaging, ML, and interpretability.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxvYmplY3QlMjBkZXRlY3Rpb258ZW58MHx8fHwxNjkwNDY3MTgzfMA&auto=format&fit=crop&w=500&q=60",
    tags: ["Python", "PyTorch","Medical Imaging", "Deep Learning", "3D CNN", "Image Processing","Docker"],
    liveLink: "#",
    repoLink: "https://github.com/soumyajohnson/brain-age-prediction",
    date: ""
  },
  {
    title: "Cerebral Palsy Therapy Outcome Prediction",
    description: "An explainable ML system that predicts post-therapy outcomes for children with Cerebral Palsy using pre-therapy clinical data. Focused on interpretability and real-world clinical use, the model helps clinicians and caregivers make earlier, data-driven therapy decisions.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxvYmplY3QlMjBkZXRlY3Rpb258ZW58MHx8fHwxNjkwNDY3MTgzfMA&auto=format&fit=crop&w=500&q=60",
    tags: ["Python", "Ensemble Models", "Explainable ML", "XGBoost","Deep Neural Network"],
    liveLink: "#",
    repoLink: "https://github.com/soumyajohnson/cerebral-palsy-therapy-outcome-prediction",
    date: ""
  },
  {
    title: "Real-Time Object Detection Using Vision to Aid People With Visual Agnosia",
    description: "Developed a real-time object detection system using YOLOv8, fine-tuned on a custom dataset, to assist individuals with visual agnosia by identifying objects and providing on-screen operational instructions for improved usability.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxvYmplY3QlMjBkZXRlY3Rpb258ZW58MHx8fHwxNjkwNDY3MTgzfMA&auto=format&fit=crop&w=500&q=60",
    tags: ["Computer Vision", "Deep Learning", "Object Detection", "YOLOV8"],
    liveLink: "#",
    repoLink: "#",
    date: ""
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
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                <p className="text-xs text-primary mb-2">{project.date}</p>
                <p className="text-muted-foreground text-sm mb-4">
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
              <CardFooter className="px-6 py-4 border-t border-border flex justify-center">
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
            <a href="https://github.com/soumyajohnson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Code className="h-5 w-5" /> View All Projects
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
