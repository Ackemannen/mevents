import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "100+", label: "Nöjda kunder" },
    { icon: Award, value: "10+", label: "Års erfarenhet" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Om Oss
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Med över 10 års erfarenhet inom event- och produktionsbranschen
              har vi etablerat oss som en pålitlig partner för både små och
              stora arrangemang.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">
                    Professionell utrustning
                  </h4>
                  <p className="text-gray-700">
                    Senaste tekniken från ledande varumärken
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Erfaren personal</h4>
                  <p className="text-gray-700">
                    Trevlig och kundfokusierad personal
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">
                    Fullservice-lösningar
                  </h4>
                  <p className="text-gray-700">
                    Från planering till genomförande och nedmontering
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              className="py-6 bg-red-500 text-white !text-lg hover:bg-red-400 hover:scale-102 hover:shadow-lg hover:!shadow-red-400 rounded-xl cursor-pointer"
            >
              <a href="#contact">Kontakta oss</a>
            </Button>
          </div>

          {/* Right content - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-glow transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="mx-auto mb-4 p-4 bg-red-500/10 rounded-full w-fit group-hover:bg-red-500/20 transition-colors">
                      <stat.icon className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="text-3xl font-bold text-red-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-8 bg-gradient-glow border-border/50">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Vårt löfte till dig
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vi garanterar professionell service, pålitlig utrustning och
                  teknisk support som överträffar dina förväntningar. Ditt event
                  är vårt ansvar från start till mål.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
