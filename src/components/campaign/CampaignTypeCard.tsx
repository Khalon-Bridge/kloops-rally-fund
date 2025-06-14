
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, TrendingUp, Calendar } from "lucide-react";

export type CampaignType = "NONE" | "TARGET" | "DATE" | "BOTH";

interface CampaignTypeCardProps {
  type: CampaignType;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  onSelect: () => void;
}

const typeIcons = {
  NONE: TrendingUp,
  TARGET: Target,
  DATE: Calendar,
  BOTH: Clock,
};

const typeColors = {
  NONE: "bg-kloops-green/10 text-kloops-green border-kloops-green/20",
  TARGET: "bg-kloops-blue/10 text-kloops-blue border-kloops-blue/20",
  DATE: "bg-kloops-orange/10 text-kloops-orange border-kloops-orange/20",
  BOTH: "bg-purple-100 text-purple-700 border-purple-200",
};

const CampaignTypeCard = ({ 
  type, 
  title, 
  description, 
  features, 
  popular, 
  onSelect 
}: CampaignTypeCardProps) => {
  const Icon = typeIcons[type];
  
  return (
    <Card className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${popular ? 'ring-2 ring-kloops-blue' : ''}`} onClick={onSelect}>
      {popular && (
        <Badge className="absolute -top-2 left-4 bg-kloops-blue text-white">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${typeColors[type]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg font-poppins">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-kloops-blue mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-kloops-blue hover:bg-kloops-blue/90">
          Choose this type
        </Button>
      </CardContent>
    </Card>
  );
};

export default CampaignTypeCard;
