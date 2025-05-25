import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C/C++" },
      { name: "JavaScript" },
      { name: "HTML/CSS" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React" },
      { name: "Express.js" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "SAP Commerce Cloud" },
      { name: "NLP" },
      { name: "Git/GitHub" },
      { name: "MongoDB/SQL" },
      { name: "Docker" },
    ],
  },
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="overflow-hidden bg-card border-none shadow-lg shadow-black/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-6 pb-2 border-b border-border">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
