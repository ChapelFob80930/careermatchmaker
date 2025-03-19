
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import HCaptcha from '@hcaptcha/react-hcaptcha';

// hCaptcha site key
const HCAPTCHA_SITE_KEY = "c0be550e-bd5e-4d72-a4fe-a45c17d682fc";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if register=true in query params
  const searchParams = new URLSearchParams(location.search);
  const defaultTab = searchParams.get('register') === 'true' ? 'register' : 'login';
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    // Update active tab when URL changes
    const tab = searchParams.get('register') === 'true' ? 'register' : 'login';
    setActiveTab(tab);
  }, [location.search]);

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: 'login' | 'register') => {
    e.preventDefault();
    
    if (!captchaToken) {
      toast({
        title: "Captcha verification required",
        description: "Please complete the captcha verification",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (type === 'login') {
        toast({
          title: "Login successful",
          description: "Welcome back to CareerMatch!"
        });
      } else {
        toast({
          title: "Registration successful",
          description: "Your account has been created successfully!"
        });
      }
      
      navigate('/dashboard');
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MainLayout noNavbar className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container py-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary font-semibold text-xl tracking-tight">CareerMatch</span>
          </Link>
        </div>
      </div>
      
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-border/50 bg-card/70 backdrop-blur-sm shadow-lg animate-scale-in">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
            
              <TabsContent value="login">
                <form onSubmit={(e) => handleSubmit(e, 'login')}>
                  <CardHeader>
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription>Enter your credentials to sign in to your account</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-sm font-medium">
                          Password
                        </label>
                        <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <EyeIcon className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mx-auto flex justify-center my-4">
                      <HCaptcha
                        sitekey={HCAPTCHA_SITE_KEY}
                        onVerify={handleCaptchaVerify}
                      />
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                    
                    <div className="mt-6 w-full flex items-center gap-2 text-xs text-muted-foreground">
                      <Separator className="flex-1" />
                      <span>OR CONTINUE WITH</span>
                      <Separator className="flex-1" />
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3 w-full">
                      <Button variant="outline" type="button" className="w-full">
                        Google
                      </Button>
                      <Button variant="outline" type="button" className="w-full">
                        GitHub
                      </Button>
                    </div>
                  </CardFooter>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={(e) => handleSubmit(e, 'register')}>
                  <CardHeader>
                    <CardTitle className="text-2xl">Create an account</CardTitle>
                    <CardDescription>Enter your information to create your account</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First name
                        </label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last name
                        </label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <EyeIcon className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Must be at least 8 characters long
                      </p>
                    </div>
                    
                    <div className="mx-auto flex justify-center my-4">
                      <HCaptcha
                        sitekey={HCAPTCHA_SITE_KEY}
                        onVerify={handleCaptchaVerify}
                      />
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                    
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      By creating an account, you agree to our{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>.
                    </p>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
