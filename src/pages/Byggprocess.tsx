import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Settings, Cpu, Zap, Wrench } from "lucide-react";

const Byggprocess = () => {
  const buildSteps = [
    {
      id: 1,
      title: "Chassi & Ram",
      description: "Konstruktion av grundchassit i kolfiber med optimal viktfördelning",
      status: "in-progress",
      progress: 5,
      icon: Wrench,
      details: [
        "Kolfiber chassi för minimal vikt",
        "Reinforcement i kritiska områden",
        "Monteringspunkter för fjädring",
        "Kabeldragning planerad"
      ]
    },
    {
      id: 2,
      title: "Fjädring & Hjul",
      description: "Installation av justerbar fjädring och högkvalitativa däck",
      status: "in-progress",
      progress: 0,
      icon: Settings,
      details: [
        "Ställbara stötdämpare fram/bak",
        "Performance fjädrar",
        "Precision hjullager",
        "Racing däck för grip"
      ]
    },
    {
      id: 3,
      title: "Motor & Drivsystem",
      description: "Borstlös motor med avancerat ESC för maximal kraft",
      status: "in-progress",
      progress: 0,
      icon: Zap,
      details: [
        "Sensored borstlös motor",
        "Programmerbara ESC",
        "Kylsystem för motor",
        "Optimal kuggväxling"
      ]
    },
    {
      id: 4,
      title: "Elektronik & Radio",
      description: "Högfrekvens radiosystem och avancerad elektronik",
      status: "in-progress",
      progress: 0,
      icon: Cpu,
      details: [
        "2.4GHz radiosystem",
        "Telemetri funktioner",
        "Backup power system",
        "Vibrationsskydd"
      ]
    },
    {
      id: 5,
      title: "Kalibrering & Test",
      description: "Finjustering av alla system för optimal prestanda",
      status: "planned",
      progress: 0,
      icon: CheckCircle,
      details: [
        "Balansering av chassis",
        "Radio kalibrering",
        "Hastighetstest",
        "Banhållningstest"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-600";
      case "in-progress": return "bg-racing-blue";
      case "planned": return "bg-muted";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Slutfört";
      case "in-progress": return "Pågående";
      case "planned": return "Planerat";
      default: return "Okänt";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle;
      case "in-progress": return Clock;
      case "planned": return Clock;
      default: return Clock;
    }
  };

  const overallProgress = buildSteps.reduce((acc, step) => acc + step.progress, 0) / buildSteps.length;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Byggprocess</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Följ varje steg i konstruktionen av vår autonoma tävlingsbil, från chassi till färdig räcerbil
          </p>
          
          {/* Overall Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Total Framsteg</span>
              <span className="text-sm text-muted-foreground">{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </div>

        {/* Build Steps */}
        <div className="space-y-8">
          {buildSteps.map((step, index) => {
            const StepIcon = step.icon;
            const StatusIcon = getStatusIcon(step.status);
            
            return (
              <Card key={step.id} className="racing-glow bg-racing-surface border-racing-border overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-racing rounded-full flex items-center justify-center">
                        <StepIcon className="text-racing-dark" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className={`${getStatusColor(step.status)} text-white border-none`}>
                        <StatusIcon size={14} className="mr-1" />
                        {getStatusText(step.status)}
                      </Badge>
                      <span className="text-2xl font-bold text-racing-blue">
                        {step.id}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Komponenter & Teknik</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-racing-blue rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Framsteg</span>
                        <span className="text-sm text-muted-foreground">{step.progress}%</span>
                      </div>
                      <Progress value={step.progress} className="h-2" />
                      
                      {step.status === "in-progress" && (
                        <p className="text-sm text-racing-blue mt-3 font-medium">
                          Arbetar aktivt på denna komponent
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Focus */}
        <div className="mt-12 text-center">
          <Card className="racing-glow bg-racing-surface border-racing-border inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="gradient-text">Nuvarande Fokus</span>
              </h3>
              <p className="text-muted-foreground">
                Vi arbetar intensivt med optimering och integration. 
                Förvänta dig uppdateringar inom snar framtid!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Byggprocess;