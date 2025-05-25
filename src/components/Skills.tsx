import { Card, CardContent } from "@/components/ui/card";

const allSkills = [
  "Java",
  "Python", 
  "C/C++",
  "JavaScript",
  "HTML/CSS",
  "React",
  "Express.js",
  "Spring Boot",
  "REST APIs",
  "GraphQL",
  "SAP Commerce Cloud",
  "NLP",
  "Git/GitHub",
  "MongoDB/SQL",
  "Docker"
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 font-code">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've acquired and honed these skills through professional work,
            research, and continuous learning in computer science and engineering.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {allSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/20 transition-colors shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-lg shadow-black/20 hover:bg-secondary/20 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">Java</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-lg shadow-black/20 hover:bg-secondary/20 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">Python</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-lg shadow-black/20 hover:bg-secondary/20 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">C/C++</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-lg shadow-black/20 hover:bg-secondary/20 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-lg shadow-black/20 hover:bg-secondary/20 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-lg shadow-black/20 hover:bg-secondary/20 transition-colors">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
