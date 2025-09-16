import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Wrench, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/308d28bf-273a-45e0-b317-a0a9fc82395a.png" 
              alt="Tavlingsbilar.se Logo" 
              className="h-32 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">AUTONOM</span>
            <br />
            <span className="text-foreground">TÄVLINGSBIL</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Följ med på vår resa när vi bygger och utvecklar en professionell autonom tävlingsbil från grunden
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/byggprocess">
              <Button variant="racing" size="lg" className="w-full sm:w-auto">
                Se Byggprocessen
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/om-oss">
              <Button variant="racing-outline" size="lg" className="w-full sm:w-auto">
                Lär Känna Teamet
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Speed lines animation */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-racing-blue/20 speed-lines"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-racing-blue/10 speed-lines" style={{animationDelay: '0.5s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Vad Vi <span className="gradient-text">Fokuserar På</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="racing-glow bg-racing-surface border-racing-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-racing rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-racing-dark" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Precision</h3>
                <p className="text-muted-foreground">
                  Varje komponent väljs och monteras med extrem noggrannhet för maximal prestanda
                </p>
              </CardContent>
            </Card>
            
            <Card className="racing-glow bg-racing-surface border-racing-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-racing rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-racing-dark" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Högteknologi</h3>
                <p className="text-muted-foreground">
                  Moderna komponenter och innovativa lösningar för topprestanda på banan
                </p>
              </CardContent>
            </Card>
            
            <Card className="racing-glow bg-racing-surface border-racing-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-racing rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-racing-dark" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tävlingsfokus</h3>
                <p className="text-muted-foreground">
                  Allt utvecklas med syfte att prestera på högsta nivå i tävlingssammanhang
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-racing-surface/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Redo att <span className="gradient-text">Börja Bygga?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Följ vår detaljerade byggprocess och lär dig allt om autonom racing
          </p>
          <Link to="/byggprocess">
            <Button variant="racing" size="lg" className="racing-pulse">
              Starta Din Resa
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;