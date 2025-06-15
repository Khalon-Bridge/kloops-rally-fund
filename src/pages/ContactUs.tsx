
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MessageCircle, 
  Mail, 
  Clock,
  Calendar,
  Phone,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact form submitted:', data);
    reset();
    setIsSubmitting(false);
    // In a real app, you'd send this to your backend
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      details: "Available 9 AM - 6 PM EST, Monday - Friday",
      action: "Start Chat",
      primary: true
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us a detailed message",
      details: "support@kloops.fund • Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      details: "+1 (555) 123-4567 • Available during business hours",
      action: "Call Now"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container text-center">
          <Badge variant="outline" className="mb-4 text-kloops-blue border-kloops-blue">
            Contact Us
          </Badge>
          <h1 className="text-4xl font-bold font-poppins mb-4">
            Get in touch
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Have questions about kloop.fund? Need help with your campaign? Our support team is here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Choose how you'd like to reach us
            </h2>
            <p className="text-muted-foreground">
              We're here to help through multiple channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center ${method.primary ? 'ring-2 ring-kloops-blue' : ''}`}>
                <CardHeader>
                  {method.primary && (
                    <Badge className="w-fit mx-auto mb-2 bg-kloops-blue">Recommended</Badge>
                  )}
                  <div className="text-kloops-blue mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{method.details}</p>
                  <Button 
                    className={method.primary ? "bg-kloops-blue hover:bg-kloops-blue/90 w-full" : "w-full"}
                    variant={method.primary ? "default" : "outline"}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-poppins mb-4">
                Send us a message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Tell us how we can help you with your fundraising goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                          }
                        })}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell us more about how we can help you..."
                      rows={5}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-kloops-blue hover:bg-kloops-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Need quick answers?
            </h2>
            <p className="text-muted-foreground">
              Check out our help center for instant solutions to common questions.
            </p>
          </div>

          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <HelpCircle className="h-12 w-12 text-kloops-blue mx-auto mb-4" />
              <CardTitle>Help Center</CardTitle>
              <CardDescription>
                Browse our comprehensive guides, FAQs, and tutorials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="bg-kloops-blue hover:bg-kloops-blue/90 w-full">
                <a href="/help">Visit Help Center</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schedule a Call */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Schedule a call
            </h2>
            <p className="text-muted-foreground">
              Book a consultation with our team to discuss your fundraising goals.
            </p>
          </div>

          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <Calendar className="h-12 w-12 text-kloops-blue mx-auto mb-4" />
              <CardTitle>1-on-1 Consultation</CardTitle>
              <CardDescription>
                Get personalized advice and guidance for your fundraising campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• 30-minute consultation</p>
                <p>• Campaign strategy discussion</p>
                <p>• Platform walkthrough</p>
                <p>• Q&A with our experts</p>
              </div>
              <Button className="bg-kloops-blue hover:bg-kloops-blue/90 w-full">
                Schedule Your Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4">
        <div className="container">
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <Clock className="h-8 w-8 text-kloops-blue mx-auto mb-2" />
              <CardTitle>Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
