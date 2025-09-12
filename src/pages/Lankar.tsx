import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink, 
  Youtube, 
  BookOpen, 
  Wrench, 
  Users,
  ShoppingCart,
  Database
} from "lucide-react";

const Lankar = () => {
  const linkCategories = [
    {
      title: "Utveckling & Kod",
      icon: Github,
      links: [
        {
          name: "GitHub Repository",
          url: "https://github.com",
          description: "Källkod för projektet",
          icon: Github,
          badge: "Open Source"
        },
        {
          name: "3D Modeller",
          url: "#",
          description: "CAD filer och 3D printbara komponenter",
          icon: Database,
          badge: "CAD"
        }
      ]
    },
    {
      title: "Dokumentation",
      icon: BookOpen,
      links: [
        {
          name: "Byggmanual",
          url: "#",
          description: "Steg-för-steg guide för att bygga bilen",
          icon: BookOpen,
          badge: "Manual"
        },
        {
          name: "Komponentlista",
          url: "#",
          description: "Fullständig lista över alla delar och verktyg",
          icon: Wrench,
          badge: "BOM"
        }
      ]
    },
    {
      title: "Community & Support",
      icon: Users,
      links: [
        {
          name: "RC Racing Forum",
          url: "https://www.rcgroups.com",
          description: "Diskussioner och tips från RC community",
          icon: Users,
          badge: "Forum"
        },
        {
          name: "YouTube Kanal",
          url: "https://youtube.com",
          description: "Video tutorials och byggprocess",
          icon: Youtube,
          badge: "Video"
        }
      ]
    },
    {
      title: "Komponenter & Leverantörer",
      icon: ShoppingCart,
      links: [
        {
          name: "HobbyKing",
          url: "https://hobbyking.com",
          description: "RC komponenter och elektronik",
          icon: ShoppingCart,
          badge: "Shop"
        },
        {
          name: "Tamiya",
          url: "https://tamiya.com",
          description: "Högkvalitativa RC delar och tillbehör",
          icon: ShoppingCart,
          badge: "OEM"
        },
        {
          name: "Spektrum",
          url: "https://spektrumrc.com",
          description: "Radiosystem och mottagare",
          icon: ShoppingCart,
          badge: "Radio"
        }
      ]
    }
  ];

  const handleLinkClick = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Länkar & Resurser</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Användbara länkar, verktyg och resurser för RC racing och vårt byggprojekt
          </p>
        </div>

        {/* Link Categories */}
        <div className="space-y-12">
          {linkCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            
            return (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-racing rounded-full flex items-center justify-center">
                    <CategoryIcon className="text-racing-dark" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.links.map((link, linkIndex) => {
                    const LinkIcon = link.icon;
                    
                    return (
                      <Card key={linkIndex} className="racing-glow bg-racing-surface border-racing-border">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center space-x-3">
                              <LinkIcon className="text-racing-blue" size={20} />
                              <span>{link.name}</span>
                            </CardTitle>
                            <Badge variant="outline">{link.badge}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{link.description}</p>
                          <Button 
                            variant="racing-outline" 
                            className="w-full"
                            onClick={() => handleLinkClick(link.url)}
                            disabled={link.url === '#'}
                          >
                            {link.url === '#' ? 'Kommer Snart' : 'Besök Länk'}
                            <ExternalLink className="ml-2" size={16} />
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <Card className="racing-glow bg-racing-surface border-racing-border inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                <span className="gradient-text">Kontakt</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Har du frågor eller förslag? Vi skulle gärna höra från dig!
              </p>
              <Button variant="racing" disabled>
                Kontaktinformation kommer snart
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Vissa länkar är placeholders och kommer att uppdateras när projektet utvecklas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lankar;