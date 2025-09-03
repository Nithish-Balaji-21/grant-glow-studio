import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Upload, User, GraduationCap, Award, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    
    // Academic Information
    currentSchool: "",
    gradeLevel: "",
    gpa: "",
    major: "",
    graduationDate: "",
    academicAchievements: "",
    
    // Essay & Personal Statement
    essay: "",
    goals: "",
    challenges: "",
    
    // Additional Information
    extracurriculars: "",
    volunteerHours: "",
    workExperience: "",
    languages: "",
  });

  const { toast } = useToast();
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted!",
      description: "Your scholarship application has been successfully submitted. We'll review it and get back to you soon.",
    });
  };

  const renderPersonalInfo = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="w-5 h-5 mr-2" />
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="country">Country *</Label>
            <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="address">Address *</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            placeholder="Enter your full address"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="City"
            />
          </div>
          <div>
            <Label htmlFor="state">State/Province *</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="State/Province"
            />
          </div>
          <div>
            <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="ZIP Code"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAcademicInfo = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <GraduationCap className="w-5 h-5 mr-2" />
          Academic Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="currentSchool">Current School/Institution *</Label>
          <Input
            id="currentSchool"
            value={formData.currentSchool}
            onChange={(e) => handleInputChange("currentSchool", e.target.value)}
            placeholder="Name of your current school or university"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="gradeLevel">Grade Level/Year *</Label>
            <Select value={formData.gradeLevel} onValueChange={(value) => handleInputChange("gradeLevel", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your grade level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high-school-freshman">High School Freshman</SelectItem>
                <SelectItem value="high-school-sophomore">High School Sophomore</SelectItem>
                <SelectItem value="high-school-junior">High School Junior</SelectItem>
                <SelectItem value="high-school-senior">High School Senior</SelectItem>
                <SelectItem value="college-freshman">College Freshman</SelectItem>
                <SelectItem value="college-sophomore">College Sophomore</SelectItem>
                <SelectItem value="college-junior">College Junior</SelectItem>
                <SelectItem value="college-senior">College Senior</SelectItem>
                <SelectItem value="graduate">Graduate Student</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="gpa">GPA *</Label>
            <Input
              id="gpa"
              value={formData.gpa}
              onChange={(e) => handleInputChange("gpa", e.target.value)}
              placeholder="e.g., 3.75"
              type="number"
              step="0.01"
              min="0"
              max="4.0"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="major">Major/Field of Study *</Label>
            <Input
              id="major"
              value={formData.major}
              onChange={(e) => handleInputChange("major", e.target.value)}
              placeholder="e.g., Computer Science"
            />
          </div>
          <div>
            <Label htmlFor="graduationDate">Expected Graduation Date *</Label>
            <Input
              id="graduationDate"
              type="date"
              value={formData.graduationDate}
              onChange={(e) => handleInputChange("graduationDate", e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="academicAchievements">Academic Achievements & Awards</Label>
          <Textarea
            id="academicAchievements"
            value={formData.academicAchievements}
            onChange={(e) => handleInputChange("academicAchievements", e.target.value)}
            placeholder="List any academic honors, awards, or achievements..."
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderEssaySection = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Essay & Personal Statement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="essay">Personal Statement *</Label>
          <Textarea
            id="essay"
            value={formData.essay}
            onChange={(e) => handleInputChange("essay", e.target.value)}
            placeholder="Tell us about yourself, your background, and what makes you unique... (500-1000 words)"
            rows={8}
          />
          <div className="text-sm text-muted-foreground mt-1">
            {formData.essay.length} characters
          </div>
        </div>

        <div>
          <Label htmlFor="goals">Educational & Career Goals *</Label>
          <Textarea
            id="goals"
            value={formData.goals}
            onChange={(e) => handleInputChange("goals", e.target.value)}
            placeholder="Describe your educational and career goals, and how this scholarship will help you achieve them..."
            rows={6}
          />
        </div>

        <div>
          <Label htmlFor="challenges">Challenges & Obstacles</Label>
          <Textarea
            id="challenges"
            value={formData.challenges}
            onChange={(e) => handleInputChange("challenges", e.target.value)}
            placeholder="Describe any significant challenges or obstacles you've overcome..."
            rows={5}
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderAdditionalInfo = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Award className="w-5 h-5 mr-2" />
          Additional Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="extracurriculars">Extracurricular Activities</Label>
          <Textarea
            id="extracurriculars"
            value={formData.extracurriculars}
            onChange={(e) => handleInputChange("extracurriculars", e.target.value)}
            placeholder="List your involvement in clubs, sports, organizations, leadership roles..."
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="volunteerHours">Volunteer Hours</Label>
            <Input
              id="volunteerHours"
              value={formData.volunteerHours}
              onChange={(e) => handleInputChange("volunteerHours", e.target.value)}
              placeholder="Total volunteer hours"
              type="number"
            />
          </div>
          <div>
            <Label htmlFor="languages">Languages Spoken</Label>
            <Input
              id="languages"
              value={formData.languages}
              onChange={(e) => handleInputChange("languages", e.target.value)}
              placeholder="e.g., English, Spanish, French"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="workExperience">Work Experience</Label>
          <Textarea
            id="workExperience"
            value={formData.workExperience}
            onChange={(e) => handleInputChange("workExperience", e.target.value)}
            placeholder="Describe any relevant work experience or internships..."
            rows={4}
          />
        </div>

        {/* File Upload Section */}
        <div className="space-y-4">
          <Label>Required Documents</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <div className="text-sm font-medium mb-1">Upload Transcripts</div>
              <div className="text-xs text-muted-foreground">PDF, DOC (Max 5MB)</div>
            </div>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <div className="text-sm font-medium mb-1">Letters of Recommendation</div>
              <div className="text-xs text-muted-foreground">PDF, DOC (Max 5MB each)</div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2 pt-4">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions and confirm that all information provided is accurate
          </Label>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-20 pb-8 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Scholarship Application
            </h1>
            <p className="text-xl text-white/90">
              Take the first step towards your educational goals
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {currentStep === 1 && renderPersonalInfo()}
            {currentStep === 2 && renderAcademicInfo()}
            {currentStep === 3 && renderEssaySection()}
            {currentStep === 4 && renderAdditionalInfo()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button variant="hero" onClick={handleNext}>
                Next Step
              </Button>
            ) : (
              <Button variant="success" onClick={handleSubmit} className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            )}
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@scholarshiphub.com" className="text-primary hover:underline">
              support@scholarshiphub.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;