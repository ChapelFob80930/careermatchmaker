
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { ResumeUpload } from '@/components/ResumeUpload';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, AlertTriangle } from 'lucide-react';

const Upload = () => {
  return (
    <MainLayout className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Upload Your Resume</h1>
        <p className="text-muted-foreground">
          Let our AI analyze your resume and match you with the perfect job opportunities
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="upload">Upload Resume</TabsTrigger>
              <TabsTrigger value="analysis">Resume Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="mt-0">
              <ResumeUpload />
              
              <div className="mt-8">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Resume Best Practices</CardTitle>
                    <CardDescription>
                      Follow these tips to optimize your resume for better job matches
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Use clear section headers (Experience, Education, Skills)",
                        "Include measurable achievements and results",
                        "Tailor your resume to your target industry",
                        "Avoid using tables or complex formatting",
                        "Ensure contact information is up-to-date"
                      ].map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-0">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Resume Analysis</CardTitle>
                  <CardDescription>
                    Upload your resume first to see the analysis results
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Resume Detected</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Please upload your resume first to see detailed analysis and job match recommendations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="pb-3">
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {[
                  {
                    title: "Upload Your Resume",
                    description: "Support for PDF and DOCX formats (max 5MB)"
                  },
                  {
                    title: "AI Analysis",
                    description: "Our AI will extract your skills, experience, and qualifications"
                  },
                  {
                    title: "Get Personalized Matches",
                    description: "View job opportunities tailored to your profile"
                  },
                  {
                    title: "Track Your Applications",
                    description: "Apply directly and monitor your application status"
                  }
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/[0.03] border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Our resume experts can review your resume and provide personalized feedback to help you stand out.
              </p>
              <div className="space-y-3">
                {[
                  "Professional formatting guidance",
                  "Content optimization suggestions",
                  "Industry-specific recommendations",
                  "ATS optimization tips"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Upload;
