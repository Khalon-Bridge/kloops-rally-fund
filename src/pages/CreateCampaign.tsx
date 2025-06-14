
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import CampaignTypeCard, { CampaignType } from "@/components/campaign/CampaignTypeCard";
import { ArrowLeft, ArrowRight, Share2, Copy, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [campaignType, setCampaignType] = useState<CampaignType | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    targetAmount: "",
    endDate: "",
    organizer: "",
  });

  const campaignTypes = [
    {
      type: "NONE" as CampaignType,
      title: "Open-Ended Fundraiser",
      description: "Collect donations with no target or deadline",
      features: [
        "No pressure or time limits",
        "Perfect for ongoing causes",
        "Flexible and stress-free",
        "Ideal for memorial funds"
      ],
      popular: false
    },
    {
      type: "TARGET" as CampaignType,
      title: "Goal-Based Fundraiser",
      description: "Set a target amount to motivate donors",
      features: [
        "Clear progress tracking",
        "Motivates larger donations",
        "Shows specific need",
        "Builds momentum quickly"
      ],
      popular: true
    },
    {
      type: "DATE" as CampaignType,
      title: "Time-Sensitive Fundraiser",
      description: "Rally support with an urgent deadline",
      features: [
        "Creates urgency",
        "Perfect for emergencies",
        "Countdown motivation",
        "Quick response campaigns"
      ],
      popular: false
    },
    {
      type: "BOTH" as CampaignType,
      title: "Goal & Deadline Fundraiser",
      description: "Combine target amount with deadline pressure",
      features: [
        "Maximum motivation",
        "Dual progress tracking",
        "Best for large goals",
        "Strategic campaigning"
      ],
      popular: false
    }
  ];

  const templates = {
    NONE: [
      "Support our family during this difficult time",
      "Help with ongoing medical expenses",
      "Community support fund"
    ],
    TARGET: [
      "Help raise $5,000 for medical bills",
      "Raise $2,000 for funeral expenses",
      "Need $3,000 for emergency repairs"
    ],
    DATE: [
      "Emergency help needed by next week",
      "Support needed before surgery date",
      "Time-sensitive family crisis"
    ],
    BOTH: [
      "Raise $5,000 for surgery by month-end",
      "Need $3,000 for rent by Friday",
      "Help reach $2,000 goal before deadline"
    ]
  };

  const handleTypeSelect = (type: CampaignType) => {
    setCampaignType(type);
    setStep(2);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Simulate campaign creation
    toast.success("Campaign created successfully!");
    const campaignId = Math.random().toString(36).substr(2, 9);
    navigate(`/campaign/${campaignId}`);
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return "Choose your campaign type";
      case 2: return "Set your campaign details";
      case 3: return "Share your campaign";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8 max-w-4xl">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-kloops-blue" />
              <span className="text-sm text-muted-foreground">30-second setup</span>
            </div>
            <Badge variant="outline">Step {step} of 3</Badge>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-kloops-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-poppins mb-2">
              {getStepTitle()}
            </h1>
            {step === 1 && (
              <p className="text-muted-foreground">
                Different situations need different approaches. Choose what fits your cause.
              </p>
            )}
          </div>

          {/* Step 1: Campaign Type Selection */}
          {step === 1 && (
            <div className="grid md:grid-cols-2 gap-6">
              {campaignTypes.map((type) => (
                <CampaignTypeCard
                  key={type.type}
                  type={type.type}
                  title={type.title}
                  description={type.description}
                  features={type.features}
                  popular={type.popular}
                  onSelect={() => handleTypeSelect(type.type)}
                />
              ))}
            </div>
          )}

          {/* Step 2: Campaign Details */}
          {step === 2 && campaignType && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Campaign Details</span>
                  <Badge variant="outline" className="text-kloops-blue border-kloops-blue">
                    {campaignTypes.find(t => t.type === campaignType)?.title}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Tell people what you need help with and why it matters.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Campaign title</Label>
                  <Input
                    id="title"
                    placeholder="What do you need help with?"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                  <div className="text-xs text-muted-foreground">
                    Quick templates: {templates[campaignType].map((template, i) => (
                      <button
                        key={i}
                        onClick={() => handleInputChange("title", template)}
                        className="text-kloops-blue hover:underline mr-2"
                      >
                        "{template}"
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Tell your story</Label>
                  <Textarea
                    id="description"
                    placeholder="Share more details about why you need help..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                  />
                </div>

                {(campaignType === "TARGET" || campaignType === "BOTH") && (
                  <div className="space-y-2">
                    <Label htmlFor="target">Target amount ($)</Label>
                    <Input
                      id="target"
                      type="number"
                      placeholder="5000"
                      value={formData.targetAmount}
                      onChange={(e) => handleInputChange("targetAmount", e.target.value)}
                    />
                  </div>
                )}

                {(campaignType === "DATE" || campaignType === "BOTH") && (
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange("endDate", e.target.value)}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="organizer">Your name</Label>
                  <Input
                    id="organizer"
                    placeholder="Who's organizing this?"
                    value={formData.organizer}
                    onChange={(e) => handleInputChange("organizer", e.target.value)}
                  />
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!formData.title || !formData.organizer}
                    className="flex-1 bg-kloops-blue hover:bg-kloops-blue/90"
                  >
                    Preview & Share
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Share Campaign */}
          {step === 3 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-kloops-green">
                    🎉 Your kloop is ready!
                  </CardTitle>
                  <CardDescription className="text-center">
                    Share your unique link to start collecting donations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">kloops.fund/help-sarah-medical</span>
                      <Button size="sm" variant="outline" onClick={() => toast.success("Link copied!")}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      Share via Text
                    </Button>
                    <Button variant="outline" className="w-full">
                      Share on Social
                    </Button>
                  </div>

                  <Button onClick={handleSubmit} className="w-full bg-kloops-blue hover:bg-kloops-blue/90">
                    <Share2 className="h-4 w-4 mr-2" />
                    Start collecting donations
                  </Button>
                </CardContent>
              </Card>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Need to make changes? You can edit your campaign anytime.
                </p>
                <Button variant="link" onClick={() => navigate('/admin')}>
                  Go to dashboard →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
