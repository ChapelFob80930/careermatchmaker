
import React from 'react';
import { ArrowUpRight, Briefcase, FileText, Sparkles, Target, Award, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Features() {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Smart Resume Analysis",
      description: "Our AI analyzes your resume to extract key skills, experiences, and qualifications."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Job Matching",
      description: "Get matched with job opportunities that align with your experience and career goals."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Skill Gap Analysis",
      description: "Identify skills to develop to increase your chances for your dream positions."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Personalized Recommendations",
      description: "Receive customized job suggestions based on your unique profile and preferences."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Career Path Guidance",
      description: "Get insights on potential career paths based on your current skills and experience."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Industry Insights",
      description: "Access data on industry trends, salary ranges, and job market demand."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6">
            <span className="text-xs font-medium text-muted-foreground">Key Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Find the Perfect Job Match
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our powerful AI-driven platform helps connect your skills and experience with the right opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="mb-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="flex items-center justify-between">
                  {feature.title}
                  <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
