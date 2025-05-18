
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior E-commerce Developer",
    company: "CGI, Hyderabad",
    duration: "Oct'21 - July'24",
    description: "Delivered over 30 production releases, designing new features and optimizing e-commerce platforms using SAP Cloud Commerce tools and data-supporting IoT device's revenue growth to $8.1 billion, a 10% increase year-over-year.",
    achievements: [
      "Enhanced user flows and E-Commerce websites, aligning designs to product and UI specifications, increasing traffic and user engagement",
      "Led production go-live events, ensuring seamless deployment and post-release issue resolution with 99% efficiency",
      "Mentored offshore teams, fostered collaboration and executed knowledge transfer sessions"
    ]
  },
  {
    role: "AEM Front-End Developer",
    company: "Optum, Hyderabad",
    duration: "Dec'20 - Oct'21",
    description: "Successfully delivered multiple production releases, creating and deploying interactive forms using AEM Forms achieving a 100% functionality delivery rate.",
    achievements: [
      "Integrated interactive forms with AEM platform",
      "Optimized front-end performance for improved user experience",
      "Collaborated with design and backend teams for seamless integration"
    ]
  },
  {
    role: "Teaching Assistantship",
    company: "Pennsylvania State University",
    duration: "Aug'24 - Present",
    description: "Supported faculty professor in developing course materials, facilitating lab sessions, and designing assignments to enhance the learning experience.",
    achievements: [
      "Provided guidance to students in OOP concepts",
      "Developed lab exercises for practical application",
      "Assisted in grading and providing feedback on assignments"
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
