
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Code } from "lucide-react";
import PersonalUserView from "./PersonalUserView";
import DeveloperView from "./DeveloperView";

const AudienceSelector = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container">
        <Tabs defaultValue="personal" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                I need to raise money
              </TabsTrigger>
              <TabsTrigger value="developer" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                I'm building an app
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="personal">
            <PersonalUserView />
          </TabsContent>

          <TabsContent value="developer">
            <DeveloperView />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AudienceSelector;
