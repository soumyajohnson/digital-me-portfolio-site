
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend or email service
    // For this example, we'll just show a success toast
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
            I'm currently available for freelance work and full-time positions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-display">Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('soumyajohnson97@gmail.com');
                      toast({
                        title: "Email copied!",
                        description: "soumyajohnson97@gmail.com has been copied to clipboard",
                      });
                    }}
                    className="rounded-full bg-primary/10 p-3 flex-shrink-0 hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </button>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a href="mailto:soumyajohnson97@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      soumyajohnson97@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href="tel:+17176481821" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (717) 648-1821
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Harrisburg, Pennsylvania, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/soumya-johnson-80a379155/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0A66C2] text-white p-3 hover:opacity-90 transition-opacity"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/soumyajohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#181717] text-white p-3 hover:opacity-90 transition-opacity"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#1DA1F2] text-white p-3 hover:opacity-90 transition-opacity"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Availability</h3>
                <p className="mb-4">
                  I'm currently available for freelance projects and open to full-time positions.
                  My typical response time is within 24 hours.
                </p>
                <div className="flex items-center gap-1">
                  <span className="inline-block h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-sm font-medium">Available for new opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
