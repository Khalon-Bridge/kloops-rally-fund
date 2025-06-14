
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import ProgressDisplay from "@/components/campaign/ProgressDisplay";
import { Heart, Share2, Copy, User, Clock, QrCode } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CampaignPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState("");
  const [donationMessage, setDonationMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Mock campaign data - in real app this would come from API
  const campaign = {
    id,
    title: "Help Sarah cover unexpected medical bills",
    description: "Sarah recently had an emergency surgery that wasn't fully covered by insurance. She's a single mom working two jobs, and these unexpected medical bills are overwhelming. Any support would mean the world to our family during this difficult time.",
    organizer: "Michael Chen",
    type: "TARGET" as const,
    raised: 6750,
    target: 10000,
    contributors: 89,
    createdAt: "2024-06-10",
    endDate: undefined,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
  };

  const recentContributions = [
    { name: "Jennifer K.", amount: 100, message: "Sending love and support ❤️", time: "2 hours ago", anonymous: false },
    { name: "Anonymous", amount: 50, message: "", time: "4 hours ago", anonymous: true },
    { name: "David L.", amount: 25, message: "Hope this helps!", time: "1 day ago", anonymous: false },
    { name: "Maria S.", amount: 200, message: "Get well soon Sarah! 🙏", time: "1 day ago", anonymous: false },
    { name: "Anonymous", amount: 75, message: "Thinking of you", time: "2 days ago", anonymous: true },
  ];

  const suggestedAmounts = [25, 50, 100, 250];

  const handleDonate = () => {
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      toast.error("Please enter a valid donation amount");
      return;
    }
    
    // Simulate payment processing
    toast.success("Thank you for your donation! 🎉");
    setDonationAmount("");
    setDonationMessage("");
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success("Campaign link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Image */}
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Button variant="secondary" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Campaign Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold font-poppins mb-4">{campaign.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Organized by {campaign.organizer}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Created {new Date(campaign.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <ProgressDisplay 
                type={campaign.type}
                raised={campaign.raised}
                target={campaign.target}
                endDate={campaign.endDate}
              />

              <div className="space-y-4">
                <h2 className="text-xl font-semibold font-poppins">The story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {campaign.description}
                </p>
              </div>
            </div>

            {/* Recent Contributions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-kloops-green" />
                  <span>Recent contributions ({campaign.contributors})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContributions.map((contribution, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-kloops-blue text-white text-xs">
                          {contribution.anonymous ? "?" : contribution.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{contribution.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-kloops-green">
                              ${contribution.amount}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {contribution.time}
                            </span>
                          </div>
                        </div>
                        {contribution.message && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {contribution.message}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Sidebar */}
          <div className="space-y-6">
            {/* Donation Form */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-center">Support this cause</CardTitle>
                <CardDescription className="text-center">
                  Every contribution helps make a difference
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Suggested Amounts */}
                <div className="grid grid-cols-2 gap-2">
                  {suggestedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      onClick={() => setDonationAmount(amount.toString())}
                      className="text-sm"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="text-sm font-medium">Amount ($)</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium">Message (optional)</label>
                  <Textarea
                    placeholder="Leave a message of support..."
                    value={donationMessage}
                    onChange={(e) => setDonationMessage(e.target.value)}
                    rows={3}
                    className="mt-1"
                  />
                </div>

                {/* Anonymous option */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor="anonymous" className="text-sm">
                    Donate anonymously
                  </label>
                </div>

                <Button 
                  onClick={handleDonate}
                  className="w-full bg-kloops-blue hover:bg-kloops-blue/90 font-medium"
                  size="lg"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Donate now
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Secure payments • No hidden fees
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Spread the word</CardTitle>
                <CardDescription className="text-center">
                  Help this campaign reach more people
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleShare}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy link
                </Button>
                <Button variant="outline" className="w-full">
                  <QrCode className="h-4 w-4 mr-2" />
                  Show QR code
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    Text
                  </Button>
                  <Button variant="outline" size="sm">
                    Social
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
