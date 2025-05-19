
import { useState, useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

// Simple auth check - in a real application, this would check a token validity
const AdminGuard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check for auth token in localStorage
    const adminToken = localStorage.getItem("admin-token");
    setIsAuthenticated(!!adminToken);
  }, []);

  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Render child routes if authenticated
  return <Outlet />;
};

export default AdminGuard;
