import { Phone, Mail, Facebook, Linkedin } from "lucide-react";

import MeventsLogo from "../assets/MeventsloggaBg.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Logo and Company Info */}
          <div className="flex-1 lg:max-w-2/3">
            <img
              src={MeventsLogo}
              alt="Mevents Logo"
              className="h-16 w-auto mb-4 rounded-2xl"
            />
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Mevents är din pålitliga partner för professionella ljud- och
              ljuslösningar. Vi skapar oförglömliga upplevelser genom teknisk
              excellens och kreativ vision.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  0702-066184
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  info@mevents.se
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2025 Mevents. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
