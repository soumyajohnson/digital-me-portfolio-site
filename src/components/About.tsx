
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate frontend developer with 5+ years of experience creating 
              modern web applications. I specialize in React, TypeScript, and responsive design.
              My background in both design and development allows me to bridge the gap 
              between aesthetics and functionality.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring new hiking trails, experimenting 
              with photography, or contributing to open source projects. I believe in building 
              applications that are not just visually appealing but also accessible and 
              user-friendly.
            </p>
            <Button asChild className="rounded-full" size="lg">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
          <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-secondary border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Personal Info</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Name:</strong> John Doe</li>
                      <li><strong>Age:</strong> 28 years</li>
                      <li><strong>Location:</strong> San Francisco, CA</li>
                      <li><strong>Nationality:</strong> American</li>
                      <li><strong>Languages:</strong> English, Spanish</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Contact Details</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Email:</strong> john.doe@example.com</li>
                      <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                      <li><strong>Website:</strong> johndoe.com</li>
                      <li><strong>LinkedIn:</strong> linkedin.com/in/johndoe</li>
                      <li><strong>GitHub:</strong> github.com/johndoe</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1 md:col-span-2 bg-gradient-to-r from-primary/10 to-primary/5 border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Looking for a dedicated developer?</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance work or full-time positions.
                  If you have a project that needs some attention or a team that needs
                  a new member, feel free to reach out!
                </p>
                <div className="flex gap-4 items-center">
                  <Button asChild variant="default" size="sm">
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <a href="tel:+15551234567" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Phone className="h-4 w-4" /> +1 (555) 123-4567
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
