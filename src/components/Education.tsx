
import { Card, CardContent } from "@/components/ui/card";
import { Book, Calendar } from "lucide-react";

const education = [
  {
    degree: "M.S in Computer Science",
    institution: "Pennsylvania State University",
    duration: "2023 - 2025 (Expected)",
    description: "Current GPA: 3.67/4.0. Focusing on Machine Learning, AI applications, and Computer Vision. Conducting research on cognitive narrative classifiers and healthcare applications.",
    courses: ["Advanced Machine Learning", "Computer Vision", "Natural Language Processing", "Cloud Computing"]
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology, Chennai",
    duration: "2015 - 2019",
    description: "Graduated with a GPA of 9.1/10. Focused on software engineering and AI applications. Participated in multiple hackathons and research projects.",
    courses: ["Data Structures & Algorithms", "Artificial Intelligence", "Web Technologies", "Database Management"]
  }
];

const certifications = [
  {
    name: "AI Engineer",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "MS-AIE-12345"
  },
  {
    name: "SAP Commerce Cloud Developer",
    issuer: "SAP",
    date: "2022",
    credentialId: "SAP-CCD-98765"
  },
  {
    name: "Certified Python Professional",
    issuer: "Python Institute",
    date: "2021",
    credentialId: "PYP-54321"
  },
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2020",
    credentialId: "UD-FSWD-67890"
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional certifications have equipped me
            with the knowledge and credentials necessary for success in the computer science field.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-6 flex items-center gap-2">
              <Book className="h-5 w-5 text-primary" /> Academic Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <Card key={idx} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-3">{edu.duration}</p>
                        <p className="text-muted-foreground mb-4">{edu.description}</p>
                        <div>
                          <h5 className="text-sm font-bold mb-1">Relevant Coursework:</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, courseIdx) => (
                              <span
                                key={courseIdx}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-6 flex items-center gap-2">
              <Book className="h-5 w-5 text-primary" /> Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="bg-secondary border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-bold">{cert.name}</h4>
                    <p className="text-primary text-sm">{cert.issuer}</p>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Issued: {cert.date}</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-medium mb-6">Research Focus</h3>
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-none shadow-sm">
                <CardContent className="p-6">
                  <p className="mb-4">
                    My research interests include:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>AI applications in healthcare and accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>Computer vision for cognitive narrative understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>Natural language processing and conversational AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>Deep learning for medical image analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
