
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Lock } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - in a real app, this would call an API
    setTimeout(() => {
      // For demo purposes, accept any non-empty username/password
      if (username && password) {
        // Store token in local storage
        localStorage.setItem("admin-token", "demo-token-12345");
        
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard.",
        });
        
        navigate("/admin");
      } else {
        toast({
          title: "Login failed",
          description: "Please enter valid credentials.",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold gradient-text">Admin Login</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access the portfolio admin dashboard
          </p>
        </div>
        
        <Card className="glass-panel border-primary/10">
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the admin area
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  className="bg-secondary/40"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="bg-secondary/40 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-full px-3 py-2"
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-muted-foreground" />
                    ) : (
                      <Eye size={18} className="text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full btn-glow" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <Lock size={18} className="mr-2 animate-pulse" />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Lock size={18} className="mr-2" />
                    Sign in
                  </span>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <div className="flex justify-center">
          <Button variant="link" asChild>
            <a href="/">← Return to Portfolio</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
