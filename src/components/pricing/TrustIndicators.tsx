
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, Shield, Clock } from "lucide-react";

const TrustIndicators = () => {
  const stats = [
    {
      icon: Shield,
      value: "Bank-level",
      label: "Security & encryption",
      color: "kloops-blue"
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime guarantee",
      color: "kloops-green"
    },
    {
      icon: DollarSign,
      value: "2.4%",
      label: "Industry-leading rates",
      color: "kloops-orange"
    },
    {
      icon: Users,
      value: "24/7",
      label: "Customer support",
      color: "kloops-blue"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-kloops-green border-kloops-green">
            Built for Trust
          </Badge>
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Enterprise-grade platform from day one
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with enterprise-grade security and reliability. We've designed every component for scale and trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-${stat.color}/10 flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            SSL Encrypted
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            PCI Compliant
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            GDPR Compliant
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            SOC 2 Ready
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
