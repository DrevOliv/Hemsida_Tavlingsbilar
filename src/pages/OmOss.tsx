import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Trophy, Wrench, Cpu, Zap } from "lucide-react";
import erikImage from "@/assets/team-erik.jpg";
import annaImage from "@/assets/team-anna.jpg";
import Abdulrahman from "@/assets/Abdulrahman.jpg";
import Edvin from "@/assets/Edvin.jpg";
import Oliver from "@/assets/Oliver.jpg";
import  Herman from "@/assets/Herman.jpg"
import marcusImage from "@/assets/team-marcus.jpg";

const OmOss = () => {
  const teamMembers = [
    {
      name: "Elias Facq",
      role: "Kundansvarig",
      image: annaImage,
      description: "Han är ansvargi för vår kund",
      specialties: ["Kundansvar"],
    },
    {
      name: "Herman Stjerna",
      role: "Dokumentansvarig",
      image: Herman,
      description: "Dokumenterar",
      specialties: ["Dokumentföring"],
    },
    {
      name: "Abdulrahman Barakat",
      role: "Plannerings- och tidsansvarig",
      image: Abdulrahman,
      description: "Asvarar för tiden",
      specialties: ["Tid"],
    },
    {
      name: "Edvin André",
      role: "Testansvarig",
      image: Edvin,
      description: "Testar",
      specialties: ["Test"],
    },
    {
      name: "Pontus Östlund",
      role: "Kvalitetssammordnare",
      image: marcusImage,
      description: "Sammordnar kvalitet",
      specialties: ["Sammordning"],
    },
    {
      name: "Gustav Yttermalm",
      role: "Implementationsavnsvarig",
      image: marcusImage,
      description: "Implementerar ansvar",
      specialties: ["Implementation"],
    },
    {
      name: "Oliver",
      role: "Projektledare",
      image: Oliver,
      description: "Han projektleder",
      specialties: ["CProjektledning"],
    }

  ];

  const teamValues = [
    {
      icon: Target,
      title: "Strength in numbers",
      description: "En miljon apor med skrivmaskiner och sådant.. "
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Tänker utanför lådan"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Se ovan"
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
            Vi är passionerade ingengörsstudenter som ständigt bygger bil
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
            <h2 className="text-2xl font-bold mb-4">Vårt uppdrag</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Att kombinera teknisk okunskap med brute force för att skapa den snabbaste tävlingsbil som skådats
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
                Det hela börjada för länge sedan, i begynnelsen skapade gud himmel och jord. Och jorden var öde och tom, och mörker var över djupet, och Guds
Ande svävade över vattnet. Och Gud sade: »Varde RÄJSERBIL; och det vart Räjserbil.
              </p>
              <p>
                
              </p>
              <p>
                
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OmOss;