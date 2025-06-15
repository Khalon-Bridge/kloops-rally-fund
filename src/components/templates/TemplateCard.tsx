
import { Button } from "@/components/ui/button";
import React from "react";

interface TemplateCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  icon,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <div className="rounded-xl border bg-white shadow hover:shadow-lg transition group p-6 flex flex-col items-center text-center">
      <div className="mb-3">{icon}</div>
      <div className="font-poppins font-semibold text-xl mb-2 bg-gradient-to-r from-kloops-blue to-kloops-green bg-clip-text text-transparent">
        {title}
      </div>
      <div className="text-muted-foreground mb-6">{description}</div>
      <Button
        className="w-full bg-kloops-green hover:bg-kloops-green/90 text-white font-semibold"
        size="lg"
        asChild
      >
        <a href="/create">{buttonLabel}</a>
      </Button>
    </div>
  );
};

export default TemplateCard;
