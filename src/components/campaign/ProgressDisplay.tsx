
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, TrendingUp } from "lucide-react";
import { CampaignType } from "./CampaignTypeCard";

interface ProgressDisplayProps {
  type: CampaignType;
  raised: number;
  target?: number;
  endDate?: string;
  currency?: string;
}

const ProgressDisplay = ({ 
  type, 
  raised, 
  target, 
  endDate, 
  currency = "USD" 
}: ProgressDisplayProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getDaysLeft = () => {
    if (!endDate) return null;
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getProgressPercentage = () => {
    if (!target) return 0;
    return Math.min((raised / target) * 100, 100);
  };

  const daysLeft = getDaysLeft();
  const progressPercentage = getProgressPercentage();

  // Open-ended campaigns
  if (type === "NONE") {
    return (
      <Card className="bg-gradient-to-r from-kloops-green/5 to-kloops-blue/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-kloops-green" />
              <span className="font-medium text-kloops-green">Total raised so far</span>
            </div>
            <Badge variant="outline" className="text-kloops-green border-kloops-green">
              Ongoing
            </Badge>
          </div>
          <div className="text-3xl font-bold font-poppins text-kloops-green">
            {formatCurrency(raised)}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Every contribution helps make a difference
          </p>
        </CardContent>
      </Card>
    );
  }

  // Target amount only
  if (type === "TARGET") {
    return (
      <Card className="bg-gradient-to-r from-kloops-blue/5 to-kloops-green/5">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-kloops-blue" />
              <span className="font-medium">Goal Progress</span>
            </div>
            <Badge variant="outline" className="text-kloops-blue border-kloops-blue">
              {progressPercentage.toFixed(0)}% reached
            </Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Raised</span>
              <span className="font-medium">{formatCurrency(raised)}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Goal</span>
              <span className="font-medium">{formatCurrency(target!)}</span>
            </div>
          </div>
          
          {progressPercentage >= 100 && (
            <div className="text-center py-2">
              <Badge className="bg-kloops-green text-white">🎉 Goal Reached!</Badge>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Date target only
  if (type === "DATE") {
    return (
      <Card className="bg-gradient-to-r from-kloops-orange/5 to-kloops-blue/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-kloops-orange" />
              <span className="font-medium">Time Sensitive</span>
            </div>
            <Badge variant="outline" className={`${daysLeft && daysLeft <= 7 ? 'text-red-600 border-red-600' : 'text-kloops-orange border-kloops-orange'}`}>
              {daysLeft! > 0 ? `${daysLeft} days left` : 'Ended'}
            </Badge>
          </div>
          
          <div className="text-3xl font-bold font-poppins mb-2">
            {formatCurrency(raised)}
          </div>
          
          <p className="text-sm text-muted-foreground">
            {daysLeft! > 0 ? 'Help reach the goal before time runs out' : 'Campaign has ended'}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Both amount and date
  if (type === "BOTH") {
    return (
      <Card className="bg-gradient-to-r from-purple-50 to-kloops-blue/5">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Dual Goal Campaign</span>
            </div>
            <div className="flex space-x-2">
              <Badge variant="outline" className="text-kloops-blue border-kloops-blue">
                {progressPercentage.toFixed(0)}%
              </Badge>
              <Badge variant="outline" className={`${daysLeft && daysLeft <= 7 ? 'text-red-600 border-red-600' : 'text-kloops-orange border-kloops-orange'}`}>
                {daysLeft! > 0 ? `${daysLeft}d` : 'Ended'}
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Raised</span>
              <span className="font-medium">{formatCurrency(raised)}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Goal by {new Date(endDate!).toLocaleDateString()}</span>
              <span className="font-medium">{formatCurrency(target!)}</span>
            </div>
          </div>
          
          {progressPercentage >= 100 && daysLeft! > 0 && (
            <div className="text-center py-2">
              <Badge className="bg-kloops-green text-white">🎉 Goal Reached Early!</Badge>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default ProgressDisplay;
