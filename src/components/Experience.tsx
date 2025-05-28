
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "SAP Commerce Cloud Developer",
    company: "Deloitte, Hyderabad, India",
    duration: "Oct'21 - July'24",
    description: "As a backend developer within the SAP Commerce Cloud (Hybris) ecosystem, I engineered scalable, high-performance solutions powering enterprise-grade e-commerce platforms. I contributed to the end-to-end development lifecycle, from refining business requirements and grooming feature stories to implementing critical functionality and resolving production-level issues. My work spanned multiple successful production releases, where I also led deployment and go-live operations to ensure seamless rollout. Additionally, I played a strategic role in Hybris platform upgrades, driving version transitions with zero downtime and improved system resilience.",
    achievements: [    ]
  },
  {
    role: "AEM Front-End Developer",
    company: "Infosys Ltd, Pune, India",
    duration: "Oct'20 - Oct'21",
    description: "In my tenure as an AEM Developer, I was responsible for crafting and deploying dynamic, interactive forms and user-facing components within the Adobe Experience Manager framework. I focused on optimizing frontend performance while ensuring seamless integration with backend services and enterprise systems. My efforts contributed to multiple production deployments, where I collaborated with cross-functional teams to deliver user-centric, accessible web experiences that aligned with both brand identity and technical excellence.",
    achievements: [    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Infosys Ltd, Mysore, India",
    duration: "Jan'20 - Apr'20",
    description: "As a full stack development intern, I architected and delivered a fully operational e-commerce application, demonstrating hands-on expertise across the entire development stack. Leveraging Java and Spring Boot for backend services, AngularJS for a responsive frontend, and MySQL for robust data management, I built a cohesive and intuitive platform. This experience not only deepened my technical proficiency, but also strengthened my ability to design scalable, maintainable solutions with a focus on performance, usability, and modern design principles",
    achievements: []
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
