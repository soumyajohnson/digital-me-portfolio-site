
import { Card, CardContent } from "@/components/ui/card";
import { Book, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "2015 - 2017",
    description: "Specialized in Web Technologies and Human-Computer Interaction. Thesis focused on optimizing frontend performance for mobile web applications.",
    courses: ["Advanced Web Development", "User Experience Design", "Mobile Computing", "Data Visualization"]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of California, Berkeley",
    duration: "2011 - 2015",
    description: "Graduated with honors and received the Outstanding Student in Software Engineering award. Participated in multiple hackathons and coding competitions.",
    courses: ["Object-Oriented Programming", "Database Systems", "Web Development", "Software Engineering Principles"]
  }
];

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "AWS-DEV-12345"
  },
  {
    name: "Professional Frontend Developer",
    issuer: "Meta",
    date: "2021",
    credentialId: "MFD-98765"
  },
  {
    name: "Certified JavaScript Developer",
    issuer: "JavaScript Certification Board",
    date: "2020",
    credentialId: "JSD-54321"
  },
  {
    name: "Agile Project Management",
    issuer: "Scrum Alliance",
    date: "2019",
    credentialId: "APM-67890"
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
            with the knowledge and credentials necessary for success in the tech industry.
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
              <h3 className="text-2xl font-medium mb-6">Continuing Education</h3>
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-none shadow-sm">
                <CardContent className="p-6">
                  <p className="mb-4">
                    I'm committed to lifelong learning and continuously expand my skills through:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>Online courses on platforms like Coursera, Udemy, and Frontend Masters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>Tech conferences and workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>Industry webinars and meetups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-white text-xs">✓</span>
                      <span>Reading technical books and blogs</span>
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
