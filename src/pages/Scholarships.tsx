import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScholarshipCard from "@/components/ScholarshipCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAmount, setSelectedAmount] = useState("all");

  // Sample scholarship data
  const scholarships = [
    {
      id: "1",
      title: "Academic Excellence Scholarship",
      provider: "Future Leaders Foundation",
      amount: "$5,000",
      deadline: "March 15, 2024",
      location: "United States",
      category: "Academic Merit",
      description: "Supporting outstanding students who demonstrate exceptional academic performance and leadership potential in their chosen field of study.",
      requirements: ["3.5+ GPA", "Leadership experience", "Essay submission", "Letter of recommendation"],
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
      description: "Empowering the next generation of innovators in Science, Technology, Engineering, and Mathematics through financial support and mentorship.",
      requirements: ["STEM major", "Research project", "Innovation proposal", "Faculty endorsement"],
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
      description: "Recognizing students who have made significant contributions to their communities through volunteer work and social impact initiatives.",
      requirements: ["100+ volunteer hours", "Community project", "Impact statement", "References"],
      isUrgent: false,
    },
    {
      id: "4",
      title: "Arts & Creativity Scholarship",
      provider: "Creative Minds Foundation",
      amount: "$7,500",
      deadline: "March 1, 2024",
      location: "North America",
      category: "Arts",
      description: "Supporting talented artists, writers, musicians, and creative professionals in pursuing their educational and artistic goals.",
      requirements: ["Portfolio submission", "Creative statement", "Performance video", "Artistic achievements"],
      isUrgent: true,
    },
    {
      id: "5",
      title: "Environmental Sustainability Award",
      provider: "Green Future Organization",
      amount: "$4,000",
      deadline: "May 20, 2024",
      location: "Worldwide",
      category: "Environmental",
      description: "Encouraging students passionate about environmental conservation and sustainability to pursue degrees in related fields.",
      requirements: ["Environmental project", "Sustainability focus", "Essay on climate action", "Academic transcripts"],
      isUrgent: false,
    },
    {
      id: "6",
      title: "Minority Leadership Scholarship",
      provider: "Diversity in Education Fund",
      amount: "$8,000",
      deadline: "March 30, 2024",
      location: "United States",
      category: "Diversity",
      description: "Promoting diversity and inclusion in higher education by supporting underrepresented minority students with exceptional potential.",
      requirements: ["Minority status", "Leadership roles", "Personal statement", "Academic excellence"],
      isUrgent: false,
    },
  ];

  const categories = ["all", "Academic Merit", "STEM", "Community Service", "Arts", "Environmental", "Diversity"];
  const amounts = ["all", "Under $5,000", "$5,000 - $10,000", "Over $10,000"];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || scholarship.category === selectedCategory;
    
    // Simple amount filtering logic
    const matchesAmount = selectedAmount === "all" || true; // Simplified for demo
    
    return matchesSearch && matchesCategory && matchesAmount;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-20 pb-12 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Scholarship
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover thousands of scholarship opportunities tailored to your goals and background
            </p>
            
            {/* Search Section */}
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                    <Input
                      placeholder="Search scholarships..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-[200px] bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category === "all" ? "All Categories" : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedAmount} onValueChange={setSelectedAmount}>
                    <SelectTrigger className="w-full md:w-[200px] bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Amount" />
                    </SelectTrigger>
                    <SelectContent>
                      {amounts.map((amount) => (
                        <SelectItem key={amount} value={amount}>
                          {amount === "all" ? "All Amounts" : amount}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="secondary" size="lg" className="whitespace-nowrap">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {filteredScholarships.length} Scholarships Found
              </h2>
              <p className="text-muted-foreground">
                Showing results for {searchTerm || "all scholarships"}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
              <Select defaultValue="deadline">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== "all" || selectedAmount !== "all" || searchTerm) && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm("")}>
                  Search: {searchTerm} ×
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory("all")}>
                  {selectedCategory} ×
                </Badge>
              )}
              {selectedAmount !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedAmount("all")}>
                  {selectedAmount} ×
                </Badge>
              )}
            </div>
          )}

          {/* Scholarship Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>

          {/* No Results */}
          {filteredScholarships.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg mb-4">
                No scholarships found matching your criteria
              </div>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedAmount("all");
              }}>
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredScholarships.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Scholarships
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scholarships;