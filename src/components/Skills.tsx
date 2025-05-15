
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "CSS/SCSS", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 60 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "Docker", level: 50 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've acquired and honed these skills over the years through professional work,
            personal projects, and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-6 pb-2 border-b">
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">Next.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="h-12 w-12 mb-2" />
            <span className="text-sm font-medium">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
