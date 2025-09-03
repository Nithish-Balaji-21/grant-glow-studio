import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, MapPin, Clock } from "lucide-react";

interface ScholarshipCardProps {
  scholarship: {
    id: string;
    title: string;
    provider: string;
    amount: string;
    deadline: string;
    location: string;
    category: string;
    description: string;
    requirements: string[];
    isUrgent?: boolean;
  };
}

const ScholarshipCard = ({ scholarship }: ScholarshipCardProps) => {
  return (
    <Card className="h-full card-gradient shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 border-0">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant={scholarship.isUrgent ? "destructive" : "secondary"} className="mb-2">
            {scholarship.isUrgent ? (
              <><Clock className="w-3 h-3 mr-1" /> Urgent</>
            ) : (
              scholarship.category
            )}
          </Badge>
          <div className="text-right">
            <div className="flex items-center text-secondary font-semibold">
              <DollarSign className="w-4 h-4 mr-1" />
              {scholarship.amount}
            </div>
          </div>
        </div>
        
        <CardTitle className="text-xl mb-2 line-clamp-2">
          {scholarship.title}
        </CardTitle>
        
        <div className="text-sm text-muted-foreground font-medium">
          {scholarship.provider}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {scholarship.description}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Deadline: {scholarship.deadline}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            {scholarship.location}
          </div>
        </div>

        {scholarship.requirements.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium text-sm mb-2">Key Requirements:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {scholarship.requirements.slice(0, 2).map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                  {req}
                </li>
              ))}
              {scholarship.requirements.length > 2 && (
                <li className="text-primary text-xs">
                  +{scholarship.requirements.length - 2} more requirements
                </li>
              )}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="academic" size="sm" className="flex-1">
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ScholarshipCard;