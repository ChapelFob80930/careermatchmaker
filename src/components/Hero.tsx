
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-12 md:pt-20 pb-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-primary/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-xs font-medium text-muted-foreground">AI-Powered Job Matching</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 animate-slide-up">
            Find Your Perfect Career Match
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-balance animate-slide-up" style={{ animationDelay: '100ms' }}>
            Upload your resume and let our AI match you with the perfect job opportunities tailored to your skills, experience, and career goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link to="/upload">
              <Button size="lg" className="group">
                Upload Your Resume
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Sign In To Your Account
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border/30">
          {[
            { value: '95%', label: 'Match Accuracy' },
            { value: '1000+', label: 'Companies' },
            { value: '10K+', label: 'Job Seekers' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
