
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">John Doe</h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              A passionate frontend developer focused on creating beautiful and
              functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:john.doe@example.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, California, USA</li>
              <li>
                <a href="mailto:john.doe@example.com" className="hover:text-white transition-colors">
                  john.doe@example.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} John Doe. All rights reserved.</p>
          <p className="text-sm mt-2">
            Designed and built with 💙 using React, TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
