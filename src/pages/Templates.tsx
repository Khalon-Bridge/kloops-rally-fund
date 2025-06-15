
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TemplateCard from "@/components/templates/TemplateCard";
import { Plus, Heart, GraduationCap, HandHelping, Dog, Building2 } from "lucide-react";

const templates = [
  {
    icon: <Heart className="h-8 w-8 text-kloops-blue" />,
    title: "Medical Expenses",
    description: "Raise funds for surgery, treatment, or recovery. Quick, transparent, trusted.",
    buttonLabel: "Start Medical Fund",
  },
  {
    icon: <HandHelping className="h-8 w-8 text-kloops-green" />,
    title: "Memorial Fund",
    description: "Support a family or memorialize a loved one with dignity and clarity.",
    buttonLabel: "Create Memorial Kloop",
  },
  {
    icon: <Building2 className="h-8 w-8 text-kloops-blue" />,
    title: "Community Project",
    description: "Kickstart neighborhood, nonprofit, or team initiatives. All proceeds tracked.",
    buttonLabel: "Launch Community Project",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-kloops-blue" />,
    title: "Education Support",
    description: "Fund school tuition, supplies, or special learning opportunities.",
    buttonLabel: "Support Education",
  },
  {
    icon: <Dog className="h-8 w-8 text-kloops-green" />,
    title: "Pet & Vet Help",
    description: "Assist with vet bills or animal rescue. Fast, transparent payouts.",
    buttonLabel: "Help a Pet",
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="container py-16">
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <h1 className="font-poppins text-4xl font-bold bg-gradient-to-r from-kloops-blue to-kloops-green bg-clip-text text-transparent">
            Start fast with a powerful template
          </h1>
          <p className="text-muted-foreground text-lg">
            Launch your fundraising page in seconds using these proven templates. Edit any details after you start!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((tpl, idx) => (
            <TemplateCard
              key={tpl.title}
              icon={tpl.icon}
              title={tpl.title}
              description={tpl.description}
              buttonLabel={tpl.buttonLabel}
              // We'll link to the campaign creation page with pre-fill as a next step
            />
          ))}
        </div>
        <div className="max-w-xl mx-auto mt-16 text-center">
          <p className="text-kloops-blue font-semibold text-lg">Don't see your use case?</p>
          <a
            href="/create"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg bg-kloops-blue text-white font-bold shadow hover:bg-kloops-blue/90 transition"
          >
            <Plus className="h-5 w-5" /> Start a Custom Kloop
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
