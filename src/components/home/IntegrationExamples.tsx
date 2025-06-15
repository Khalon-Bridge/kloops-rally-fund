
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const IntegrationExamples = () => {
  const integrationExamples = [
    {
      title: "Memorial Site Integration",
      description: "Add fundraising to memorial websites in minutes",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      tech: "WordPress Plugin"
    },
    {
      title: "School Portal",
      description: "Parent-teacher fundraising made simple",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      tech: "React Component"
    },
    {
      title: "Community App",
      description: "Neighborhood fundraising features",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      tech: "Mobile SDK"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins mb-4">
            See kloops in action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real examples of how developers and organizations use kloops to add fundraising to their platforms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {integrationExamples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={example.image} 
                  alt={example.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-kloops-blue text-white">
                  {example.tech}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold font-poppins mb-2">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationExamples;
