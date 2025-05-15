
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    duration: "Jan 2022 - Present",
    description: "Led the frontend development team in building a modern SaaS platform using React, TypeScript, and Tailwind CSS. Implemented CI/CD pipelines, reduced bundle size by 40%, and improved load times by 30%. Mentored junior developers and conducted code reviews.",
    achievements: [
      "Revamped the entire UI/UX, resulting in a 25% increase in user engagement",
      "Led the migration from class components to functional components with hooks",
      "Created a design system and component library used across multiple projects"
    ]
  },
  {
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    duration: "Jun 2019 - Dec 2021",
    description: "Developed and maintained multiple client-facing applications. Created responsive web designs and implemented frontend architecture. Worked closely with UI/UX designers to implement pixel-perfect interfaces.",
    achievements: [
      "Built a real-time dashboard that reduced reporting time by 60%",
      "Integrated payment gateways in the e-commerce platform",
      "Optimized frontend performance, improving Google Lighthouse score from 65 to 95"
    ]
  },
  {
    role: "Junior Web Developer",
    company: "WebCreators Co.",
    duration: "Aug 2017 - May 2019",
    description: "Participated in the development of responsive websites for various clients. Created and maintained WordPress themes and plugins. Collaborated with the design team to implement visual elements.",
    achievements: [
      "Built 15+ responsive websites for clients across different industries",
      "Developed a custom WordPress plugin for enhanced SEO capabilities",
      "Reduced average page load time by 40% through optimization techniques"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Throughout my career, I've had the opportunity to work with various companies
            and teams, enhancing my skills and contributing to meaningful projects.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 relative`}>
                <div className="md:w-1/2">
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow">
                          {exp.description}
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.achievements.map((achievement, achIdx) => (
                            <li key={achIdx} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 z-10 items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
