
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <MainLayout className="px-0 pt-0 pb-0">
      <Hero />
      <Features />
      
      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container max-w-6xl">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-6">
              <span className="text-xs font-medium text-muted-foreground">Simple Process</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Three simple steps to find your perfect career match
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Upload Your Resume',
                description: 'Upload your most recent resume or CV to our secure platform.'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our AI analyzes your skills, experience, and career preferences.'
              },
              {
                step: '03',
                title: 'Receive Matches',
                description: 'Get personalized job recommendations tailored to your profile.'
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-5xl font-bold text-primary/10">
                  {item.step}
                </div>
                <CardContent className="pt-6 pb-6">
                  <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 mt-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/upload">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6">
              <span className="text-xs font-medium text-muted-foreground">Success Stories</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Users Say
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join thousands of professionals who found their dream jobs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "CareerMatch helped me find a job that perfectly aligned with my skills and career goals. I couldn't be happier!",
                author: "Alex Johnson",
                role: "Software Engineer",
                image: null
              },
              {
                quote: "The AI matching was surprisingly accurate. I received job recommendations that I wouldn't have found on my own.",
                author: "Sarah Chen",
                role: "Marketing Specialist",
                image: null
              },
              {
                quote: "After months of searching, CareerMatch connected me with my current employer within weeks. The platform is intuitive and effective.",
                author: "Michael Brown",
                role: "Financial Analyst",
                image: null
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-lg font-medium">{testimonial.author[0]}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/[0.03]">
        <div className="container max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-white opacity-10" />
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-32 h-32 rounded-full bg-white opacity-10" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Find Your Perfect Career Match?
                </h2>
                <p className="text-white/80 mb-0 max-w-md">
                  Join thousands of professionals who have already found their dream jobs with CareerMatch.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/upload">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Upload Your Resume
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Job Seekers",
                features: [
                  "AI-driven job matching",
                  "Career path recommendations",
                  "Skill gap analysis",
                  "Resume optimization tips"
                ]
              },
              {
                title: "For Employers",
                features: [
                  "Qualified candidate matching",
                  "Reduced time-to-hire",
                  "Diverse talent pools",
                  "Automated screening process"
                ]
              },
              {
                title: "Premium Features",
                features: [
                  "Priority job matching",
                  "Direct employer contact",
                  "Advanced career insights",
                  "Personal career coach"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                    {plan.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
