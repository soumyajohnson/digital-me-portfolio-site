import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C", "C++", "JavaScript", "HTML", "XML", "CSS", "MySQL", "PostgreSQL"]
  },
  {
    category: "Frameworks and Libraries", 
    skills: ["Spring Boot", "AngularJS", "ReactJS", "PyTorch"]
  },
  {
    category: "E-Commerce Platforms",
    skills: ["SAP Commerce Cloud (Hybris)", "Adobe Experience Manager (AEM)", "HCL Commerce"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "JIRA", "Bitbucket", "Postman", "Visual Studio", "Jenkins", "Swagger"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 font-code">Skills</h2>
          <p className="text-sm text-primary italic">
            Hover to flip because tooltips are boring, and skill cards are more fun when they show off their secret side.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group perspective-1000 h-64">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <div className="w-8 h-8 bg-primary rounded-sm"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.category}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.skills.length} skills
                    </p>
                  </CardContent>
                </Card>
                
                {/* Back of card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-primary/5 border border-primary/20 shadow-lg">
                  <CardContent className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-primary mb-4 text-center">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
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
