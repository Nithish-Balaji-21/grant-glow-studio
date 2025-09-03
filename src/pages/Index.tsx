import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScholarshipCard from "@/components/ScholarshipCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, Users, Award, BookOpen, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Featured scholarships data
  const featuredScholarships = [
    {
      id: "1",
      title: "Academic Excellence Scholarship",
      provider: "Future Leaders Foundation",
      amount: "$5,000",
      deadline: "March 15, 2024",
      location: "United States",
      category: "Academic Merit",
      description: "Supporting outstanding students who demonstrate exceptional academic performance and leadership potential.",
      requirements: ["3.5+ GPA", "Leadership experience", "Essay submission"],
      isUrgent: false,
    },
    {
      id: "2",
      title: "STEM Innovation Grant",
      provider: "Tech Forward Initiative",
      amount: "$10,000",
      deadline: "February 28, 2024",
      location: "Global",
      category: "STEM",
      description: "Empowering the next generation of innovators in Science, Technology, Engineering, and Mathematics.",
      requirements: ["STEM major", "Research project", "Innovation proposal"],
      isUrgent: true,
    },
    {
      id: "3",
      title: "Community Service Champion",
      provider: "Global Impact Network",
      amount: "$3,500",
      deadline: "April 10, 2024",
      location: "International",
      category: "Community Service",
      description: "Recognizing students who have made significant contributions to their communities.",
      requirements: ["100+ volunteer hours", "Community project", "Impact statement"],
      isUrgent: false,
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find scholarships tailored to your profile with our intelligent matching system."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Get guidance from our team of scholarship experts and successful applicants."
    },
    {
      icon: BookOpen,
      title: "Application Tips",
      description: "Access comprehensive guides and resources to strengthen your applications."
    },
    {
      icon: Award,
      title: "Success Tracking",
      description: "Monitor your applications and celebrate your achievements with our dashboard."
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content: "ScholarshipHub helped me secure $15,000 in funding for my degree. The platform made finding and applying for scholarships so much easier!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Engineering Graduate",
      content: "Thanks to the expert guidance and comprehensive database, I was able to fund my entire graduate program. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Pre-Med Student",
      content: "The application tracking and deadline reminders saved me from missing important opportunities. This platform is a game-changer!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Featured Scholarships Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Scholarships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover some of our most popular scholarship opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/scholarships">
                View All Scholarships
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ScholarshipHub?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide everything you need to discover, apply for, and win scholarships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center h-full card-gradient shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 border-0">
                <CardHeader>
                  <div className="hero-gradient p-3 rounded-lg w-fit mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Hear from students who achieved their dreams with our help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-white/70 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-gradient shadow-elegant border-0">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have secured their future with our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/apply">Start Your Application</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/scholarships">Browse Scholarships</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
