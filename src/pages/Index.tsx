import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <div className="p-6 rounded-3xl bg-gradient-primary shadow-glow animate-pulse">
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Excel Analytics{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Transform your Excel data into stunning visualizations and actionable
              insights in seconds
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-glow"
                onClick={() => navigate("/auth")}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => navigate("/dashboard")}
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to analyze and visualize your data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-card border border-border backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <div className="p-4 rounded-xl bg-primary/10 w-fit mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Multiple Chart Types
            </h3>
            <p className="text-muted-foreground">
              Choose from bar, line, pie, and scatter charts to visualize your data
              perfectly
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-card border border-border backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <div className="p-4 rounded-xl bg-secondary/10 w-fit mb-4">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Lightning Fast
            </h3>
            <p className="text-muted-foreground">
              Upload and visualize your Excel files instantly with our optimized
              engine
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-card border border-border backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <div className="p-4 rounded-xl bg-accent/10 w-fit mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Secure & Private
            </h3>
            <p className="text-muted-foreground">
              Your data stays secure with enterprise-grade authentication and
              encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
