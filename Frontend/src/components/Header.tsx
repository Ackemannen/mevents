import { Button } from "@/components/ui/button";
import { MailIcon, Menu, Phone, PhoneIcon, X } from "lucide-react";
import logoT from "../assets/MeventsloggaTr.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const sectionId = target.getAttribute("href")!.slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.8)] backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logoT} alt="Mevents Logo" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-black hover:text-red-600 transition-colors font-bold"
            >
              Hem
            </a>
            <a
              href="#about"
              className="text-black hover:text-red-600 transition-colors font-bold"
            >
              Om oss
            </a>
            <a
              href="#contact"
              className="text-black hover:text-red-600 transition-colors font-bold"
            >
              Kontakt
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="items-center space-x-2 text-sm text-gray-700 hidden lg:flex">
              <Phone className="h-4 w-4" />
              <span>0702-066184 </span>
            </div>
            <Button
              variant="default"
              size="lg"
              className="py-6 bg-red-500 text-white !text-lg hover:bg-red-400 hover:scale-105 hover:shadow-lg hover:!shadow-red-400 rounded-xl cursor-pointer"
            >
              <a href="#contact">Kontakta oss</a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-gray-700">
            <div className="flex flex-col pt-4">
              {/* Menu items */}
              <a
                href="#home"
                className="text-black hover:text-red-700 transition-colors duration-200 py-2 front-semibold"
              >
                Hem
              </a>
              <a
                href="#about"
                className="text-black hover:text-red-700 transition-colors duration-200 py-2 front-semibold"
              >
                Om oss
              </a>
              <a
                href="#contact"
                className="text-black hover:text-red-700 transition-colors duration-200 py-2 front-semibold"
              >
                Kontakt
              </a>
              <div className="flex flex-col gap-1 pt-4 border-t border-gray-500">
                <div className="flex items-center text-sm text-black gap-2">
                  <PhoneIcon className="w-4 h-4 text-red-500" />
                  <span>076-1313516</span>
                </div>
                <div className="flex items-center text-sm text-black gap-2 mb-4">
                  <MailIcon className="w-4 h-4 text-red-500" />
                  <span>info@nkpgljudochljus.se</span>
                </div>
                <Button
                  variant="default"
                  className="bg-red-500 text-white hover:bg-red-400 hover:scale-105 hover:shadow-lg hover:!shadow-red-400 rounded-xl cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href="#contact">Kontakta oss</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
