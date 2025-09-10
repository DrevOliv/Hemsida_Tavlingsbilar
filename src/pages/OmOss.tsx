import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Trophy } from "lucide-react";

const OmOss = () => {
  const teamValues = [
    {
      icon: Target,
      title: "Precision",
      description: "Varje komponent och varje steg utförs med extrema noggrannhet"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Vi utforskar nya tekniker och lösningar för bättre prestanda"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Målet är alltid att uppnå högsta möjliga kvalitet och prestanda"
    }
  ];

  const skills = [
    "Mekanik & Konstruktion",
    "Elektronik & Programmering",
    "RC Racing Teknik",
    "Material Kunskap",
    "Performance Optimering",
    "CAD Design"
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Om Oss</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi är passionerade ingenjörer och RC enthusiaster som drömmer om att bygga den perfekta radiostyrd tävlingsbilen
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="racing-glow bg-racing-surface border-racing-border mb-12">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-racing rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-racing-dark" size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Vår Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Att kombinera teknisk excellens med passion för racing för att skapa en radiostyrd bil 
              som inte bara presterar utan också inspirerar andra att utforska möjligheterna inom RC racing.
            </p>
          </CardContent>
        </Card>

        {/* Team Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Våra <span className="gradient-text">Värderingar</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="racing-glow bg-racing-surface border-racing-border text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-racing rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-racing-dark" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Card className="racing-glow bg-racing-surface border-racing-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                <span className="gradient-text">Kompetensområden</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="p-2 justify-center text-center">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="racing-glow bg-racing-surface border-racing-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                <span className="gradient-text">Projektmål</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-racing-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Bygga en konkurrensmässig RC bil för nationella tävlingar
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-racing-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Dokumentera hela processen för andra entusiaster
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-racing-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Utveckla innovativa lösningar för bättre prestanda
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-racing-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Bidra till RC racing communityn med kunskap och erfarenhet
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Background Story */}
        <Card className="racing-glow bg-racing-surface border-racing-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Vår Historia</span>
            </h3>
            <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Det hela började som en enkel idé - att bygga den ultimata radiostyrd racingbilen. 
                Med bakgrund inom teknik och en livslång passion för racing, bestämde vi oss för att 
                kombinera dessa intressen i ett ambitiöst projekt.
              </p>
              <p>
                Efter månader av planering och research började vi designa vår drömracerbil. 
                Varje komponent har valts noggrant, varje detalj har analyserats för att optimera 
                prestanda på banan.
              </p>
              <p>
                Genom denna hemsida vill vi dela vår resa med andra som delar samma passion. 
                Oavsett om du är nybörjare eller erfaren racer, hoppas vi att vårt projekt 
                kan inspirera och utbilda.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OmOss;