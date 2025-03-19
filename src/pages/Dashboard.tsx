
import React, { useState } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { JobCard, JobCardProps } from '@/components/JobCard';
import { Building, Briefcase, BarChart2, Award, ChevronDown, Search, Sliders } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Sample data
const mockJobs: JobCardProps[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechGiant Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    postedAt: '2 days ago',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    matchPercentage: 95,
    featured: true
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub Co.',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $110,000',
    postedAt: '1 week ago',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    matchPercentage: 87
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'InnovateCorp',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    postedAt: '3 days ago',
    skills: ['Product Strategy', 'Agile', 'User Stories', 'Roadmapping'],
    matchPercentage: 82
  },
  {
    id: '4',
    title: 'Backend Engineer',
    company: 'DataSystems LLC',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$115,000 - $145,000',
    postedAt: '5 days ago',
    skills: ['Node.js', 'Python', 'AWS', 'MongoDB', 'Microservices'],
    matchPercentage: 78
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    company: 'GrowthBoost Agency',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$75,000 - $95,000',
    postedAt: '1 week ago',
    skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
    matchPercentage: 72
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudNine Solutions',
    location: 'Remote',
    type: 'Contract',
    salary: '$140,000 - $170,000',
    postedAt: '4 days ago',
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform', 'AWS'],
    matchPercentage: 68
  }
];

const Dashboard = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  return (
    <MainLayout className="max-w-7xl">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">View your job matches and analytics</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Applied Jobs
              <Badge className="ml-1 bg-primary/20 text-primary hover:bg-primary/30 border-none">3</Badge>
            </Button>
            <Button>Update Resume</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Job Matches",
              value: "28",
              description: "+5 since last week",
              icon: <Briefcase className="h-5 w-5 text-primary" />,
              trend: "up"
            },
            {
              title: "Profile Views",
              value: "142",
              description: "+12% this month",
              icon: <Building className="h-5 w-5 text-primary" />,
              trend: "up"
            },
            {
              title: "Profile Strength",
              value: "85%",
              description: "5 suggested improvements",
              icon: <BarChart2 className="h-5 w-5 text-primary" />,
              progress: 85
            },
            {
              title: "Skills Match",
              value: "Top 10%",
              description: "In your industry",
              icon: <Award className="h-5 w-5 text-primary" />,
              trend: "up"
            }
          ].map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  {stat.trend === "up" && (
                    <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">+</Badge>
                  )}
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mt-4">
                  {stat.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-xs text-muted-foreground">{stat.description}</span>
                </div>
                {stat.progress && (
                  <Progress value={stat.progress} className="h-1.5 mt-2" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Tabs defaultValue="matches" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
          </TabsList>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <Sliders className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {isFiltersOpen && (
          <Card className="mb-6 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Job title, skills, company..." className="pl-9" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Location
                  </label>
                  <Input placeholder="City, state, or remote" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Job Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Match %
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Minimum match %" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Matches</SelectItem>
                      <SelectItem value="90">90%+</SelectItem>
                      <SelectItem value="80">80%+</SelectItem>
                      <SelectItem value="70">70%+</SelectItem>
                      <SelectItem value="60">60%+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end mt-4 gap-2">
                <Button variant="outline" size="sm">Reset</Button>
                <Button size="sm">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        <TabsContent value="matches" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Jobs</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-0">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">No saved jobs yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              When you find job opportunities you're interested in, save them for later by clicking the heart icon.
            </p>
            <Button>Browse Job Matches</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="applied" className="mt-0">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">No applications yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Track your job applications and their status here. Apply to jobs to see them appear in this section.
            </p>
            <Button>Browse Job Matches</Button>
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

// Adding the missing Heart component import
import { Heart } from 'lucide-react';

export default Dashboard;
