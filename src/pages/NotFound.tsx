
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md p-6 glass-panel rounded-lg">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/admin">Go to Admin Panel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
