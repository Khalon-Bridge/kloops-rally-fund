
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import ProgressDisplay from "@/components/campaign/ProgressDisplay";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Plus, 
  Search, 
  Filter,
  Target,
  Calendar,
  Eye,
  Edit,
  Share2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - in real app this would come from API
  const stats = {
    totalRaised: 47350,
    activeCampaigns: 12,
    totalContributors: 1247,
    successRate: 78
  };

  const campaigns = [
    {
      id: "1",
      title: "Help Sarah's medical bills",
      type: "TARGET" as const,
      raised: 6750,
      target: 10000,
      contributors: 89,
      status: "active",
      createdAt: "2024-06-10",
      daysLeft: null
    },
    {
      id: "2",
      title: "Memorial fund for John",
      type: "NONE" as const,
      raised: 15600,
      contributors: 156,
      status: "active",
      createdAt: "2024-06-05",
      daysLeft: null
    },
    {
      id: "3",
      title: "Community garden project",
      type: "BOTH" as const,
      raised: 3200,
      target: 5000,
      contributors: 45,
      status: "active",
      createdAt: "2024-06-12",
      daysLeft: 12,
      endDate: "2024-06-26"
    },
    {
      id: "4",
      title: "Emergency roof repair",
      type: "TARGET" as const,
      raised: 8500,
      target: 8000,
      contributors: 67,
      status: "completed",
      createdAt: "2024-05-28",
      daysLeft: null
    },
    {
      id: "5",
      title: "Help with moving costs",
      type: "DATE" as const,
      raised: 1200,
      contributors: 23,
      status: "expired",
      createdAt: "2024-05-15",
      daysLeft: 0,
      endDate: "2024-06-01"
    }
  ];

  const typeBreakdown = [
    { type: "Open-Ended", count: 5, raised: 23400, color: "bg-kloops-green" },
    { type: "Goal-Based", count: 4, raised: 18750, color: "bg-kloops-blue" },
    { type: "Time-Sensitive", count: 2, raised: 3200, color: "bg-kloops-orange" },
    { type: "Both", count: 1, raised: 2000, color: "bg-purple-500" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-kloops-green text-white";
      case "completed": return "bg-kloops-blue text-white";
      case "expired": return "bg-gray-500 text-white";
      case "paused": return "bg-kloops-orange text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "TARGET": return <Target className="h-4 w-4" />;
      case "DATE": return <Calendar className="h-4 w-4" />;
      case "BOTH": return <Clock className="h-4 w-4" />;
      default: return <TrendingUp className="h-4 w-4" />;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || campaign.type === filterType;
    const matchesStatus = filterStatus === "all" || campaign.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-poppins">Dashboard</h1>
            <p className="text-muted-foreground">Manage your fundraising campaigns</p>
          </div>
          <Button 
            onClick={() => navigate('/create')}
            className="bg-kloops-blue hover:bg-kloops-blue/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create new campaign
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-kloops-green">
                    ${stats.totalRaised.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-kloops-blue">
                    {stats.activeCampaigns}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    3 created this week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contributors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-kloops-orange">
                    {stats.totalContributors.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +89 new this month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.successRate}%
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Goals reached on time
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Campaign Type Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance by Type</CardTitle>
                <CardDescription>
                  See how different campaign types are performing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {typeBreakdown.map((item, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className={`w-12 h-12 rounded-full ${item.color} mx-auto flex items-center justify-center`}>
                        <span className="text-white font-bold">{item.count}</span>
                      </div>
                      <div>
                        <p className="font-medium">{item.type}</p>
                        <p className="text-sm text-muted-foreground">
                          ${item.raised.toLocaleString()} raised
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search campaigns..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="NONE">Open-Ended</SelectItem>
                        <SelectItem value="TARGET">Goal-Based</SelectItem>
                        <SelectItem value="DATE">Time-Sensitive</SelectItem>
                        <SelectItem value="BOTH">Both</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="expired">Expired</SelectItem>
                        <SelectItem value="paused">Paused</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campaigns List */}
            <div className="space-y-4">
              {filteredCampaigns.map((campaign) => (
                <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold font-poppins">{campaign.title}</h3>
                          <div className="flex items-center space-x-1">
                            {getTypeIcon(campaign.type)}
                            <span className="text-sm text-muted-foreground">
                              {campaign.type === "NONE" && "Open-Ended"}
                              {campaign.type === "TARGET" && "Goal-Based"}
                              {campaign.type === "DATE" && "Time-Sensitive"}
                              {campaign.type === "BOTH" && "Both"}
                            </span>
                          </div>
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{campaign.contributors} contributors</span>
                          <span>Created {new Date(campaign.createdAt).toLocaleDateString()}</span>
                          {campaign.daysLeft && campaign.daysLeft > 0 && (
                            <span className="text-kloops-orange">{campaign.daysLeft} days left</span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => navigate(`/campaign/${campaign.id}`)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <ProgressDisplay 
                        type={campaign.type}
                        raised={campaign.raised}
                        target={campaign.target}
                        endDate={campaign.endDate}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Detailed insights into your fundraising performance
                </CardDescription>
              </CardHeader>
              <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Advanced analytics coming soon...</p>
                  <p className="text-sm">Track conversion rates, optimal timing, and success factors</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
