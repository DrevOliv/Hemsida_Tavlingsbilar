import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Trophy, Wrench, Cpu, Zap } from "lucide-react";
import erikImage from "@/assets/team-erik.jpg";
import annaImage from "@/assets/team-anna.jpg";
import marcusImage from "@/assets/team-marcus.jpg";

const OmOss = () => {
  const teamMembers = [
    {
      name: "Elias Facq",
      role: "Kundansvarig",
      image: annaImage,
      description: "Han är ansvargi för vår kund",
      specialties: ["Kundansvar"],
      icon: Cpu
    },
    {
      name: "Herman Stjerna",
      role: "Dokumentansvarig",
      image: annaImage,
      description: "Dokumenterar",
      specialties: ["Dokumentföring"],
      icon: Cpu
    },
    {
      name: "Abdulrahman Barakat",
      role: "Plannerings- och tidsansvarig",
      image: marcusImage,
      description: "Asvarar för tiden",
      specialties: ["Tid"],
      icon: Zap
    },
    {
      name: "Edvin André",
      role: "Testansvarig",
      image: marcusImage,
      description: "Testar",
      specialties: ["Test"],
      icon: Zap
    },
    {
      name: "Pontus Östlund",
      role: "Kvalitetssammordnare",
      image: marcusImage,
      description: "Sammordnar kvalitet",
      specialties: ["Sammordning"],
      icon: Zap
    },
    {
      name: "Gustav Yttermalm",
      role: "Implementationsavnsvarig",
      image: marcusImage,
      description: "Implementerar ansvar",
      specialties: ["Implementation"],
      icon: Zap
    },
    {
      name: "Oliver",
      role: "Projektledare",
      image: erikImage,
      description: "Han projektleder",
      specialties: ["CProjektledning"],
      icon: Wrench
    }

  ];

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

        {/* Team Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Vårt <span className="gradient-text">Team</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <Card key={index} className="racing-glow bg-racing-surface border-racing-border">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-racing-blue/50"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-racing rounded-full flex items-center justify-center">
                        <Icon className="text-racing-dark" size={20} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-racing-blue font-semibold mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Specialiteter:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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