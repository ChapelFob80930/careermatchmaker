
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, MapPin, Clock, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary?: string;
  postedAt: string;
  logo?: string;
  skills: string[];
  matchPercentage?: number;
  featured?: boolean;
  className?: string;
}

export function JobCard({
  title,
  company,
  location,
  type,
  salary,
  postedAt,
  logo,
  skills,
  matchPercentage,
  featured = false,
  className,
  ...props
}: JobCardProps) {
  return (
    <Card 
      className={cn(
        "group overflow-hidden transition-all hover:shadow-md",
        featured ? "border-primary/30 bg-primary/[0.03]" : "border-border/50",
        className
      )}
      {...props}
    >
      <CardHeader className="pb-2 relative">
        {featured && (
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-primary px-3 py-1 rounded-full text-xs font-medium text-primary-foreground">
            Featured
          </div>
        )}
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-cover" />
            ) : (
              <Building className="h-6 w-6 text-muted-foreground" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg mb-1 truncate">
              {title}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <span className="truncate">{company}</span>
              {matchPercentage && (
                <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                  {matchPercentage}% Match
                </Badge>
              )}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="grid grid-cols-2 gap-y-2 text-sm mb-3">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{type}</span>
          </div>
          {salary && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="font-medium text-foreground">{salary}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{postedAt}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {skills.slice(0, 3).map((skill, i) => (
            <Badge variant="secondary" key={i} className="font-normal">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="font-normal">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <Heart className="h-4 w-4" />
          Save
        </Button>
        <Button size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
}
