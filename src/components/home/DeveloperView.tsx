
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Smartphone, Code, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const DeveloperView = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    react: `import { FundraiserWidget } from '@kloops/react'

<FundraiserWidget 
  campaignId="camp_123"
  theme="minimal"
  onDonation={(donation) => console.log(donation)}
/>`,
    javascript: `<script src="https://cdn.kloops.fund/widget.js"></script>
<div data-kloops-campaign="camp_123"></div>`,
    api: `fetch('https://api.kloops.fund/campaigns', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: JSON.stringify({
    title: 'Help Sarah',
    target: 5000,
    type: 'TARGET'
  })
})`
  };

  const developerUseCases = [
    { icon: Globe, title: "Memorial websites", description: "Add fundraising to tribute sites" },
    { icon: Users, title: "Charity platforms", description: "White-label fundraising solution" },
    { icon: Smartphone, title: "Mobile apps", description: "In-app donation features" },
    { icon: Code, title: "Community sites", description: "Neighbor-to-neighbor fundraising" }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-4">
          Add fundraising to your app in minutes
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Simple SDK, powerful API, and everything you need to integrate fundraising anywhere.
        </p>
      </div>

      {/* Code Examples */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">React Component</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(codeExamples.react, 'react')}
              >
                {copiedCode === 'react' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
              <code>{codeExamples.react}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Vanilla JS</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(codeExamples.javascript, 'js')}
              >
                {copiedCode === 'js' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
              <code>{codeExamples.javascript}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">REST API</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(codeExamples.api, 'api')}
              >
                {copiedCode === 'api' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
              <code>{codeExamples.api}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {developerUseCases.map((useCase, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-all duration-200">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-kloops-green to-kloops-orange flex items-center justify-center mb-4">
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="font-poppins text-lg">{useCase.title}</CardTitle>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4">
        <Button size="lg" variant="outline" className="border-kloops-green text-kloops-green hover:bg-kloops-green hover:text-white">
          View API Docs
          <Code className="ml-2 h-5 w-5" />
        </Button>
        <p className="text-sm text-muted-foreground">
          Free up to 100 transactions/month • No setup fees • 5-minute integration
        </p>
      </div>
    </div>
  );
};

export default DeveloperView;
