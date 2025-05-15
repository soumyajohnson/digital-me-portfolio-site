
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxMHx8ZWNvbW1lcmNlfGVufDB8fHx8MTY5MDQ2NzA0OHww&auto=format&fit=crop&w=500&q=60",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks with features like drag-and-drop organization, reminders, and collaborative workspaces.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHw5fHx0YXNrJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE2OTA0NjcxMjN8MA&auto=format&fit=crop&w=500&q=60",
    tags: ["TypeScript", "React", "Redux", "Firebase"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides current and forecasted weather data for locations worldwide, with interactive maps and graphs.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHx3ZWF0aGVyfGVufDB8fHx8MTY5MDQ2NzE4M3ww&auto=format&fit=crop&w=500&q=60",
    tags: ["React", "API Integration", "Chart.js", "Geolocation"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing multiple social media accounts, with analytics, content scheduling, and performance tracking.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHw0fHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE2OTA0NjcyNTJ8MA&auto=format&fit=crop&w=500&q=60",
    tags: ["Next.js", "Auth0", "REST APIs", "Recharts"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Blogging Platform",
    description: "A modern blogging platform with rich text editing, image uploads, categorization, and SEO optimization tools.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwxfHxibG9nZ2luZ3xlbnwwfHx8fDE2OTA0NjczMDl8MA&auto=format&fit=crop&w=500&q=60",
    tags: ["React", "Node.js", "MongoDB", "AWS S3"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Finance Tracker",
    description: "A personal finance application for tracking expenses, setting budgets, and visualizing spending patterns with interactive charts.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTsxfHNlYXJjaHwyfHxmaW5hbmNlfGVufDB8fHx8MTY5MDQ2NzM1OXww&auto=format&fit=crop&w=500&q=60",
    tags: ["TypeScript", "Chart.js", "Firebase", "PWA"],
    liveLink: "#",
    repoLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 font-code">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and expertise.
            Each project represents different challenges and solutions.
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
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Code className="h-5 w-5" /> View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
