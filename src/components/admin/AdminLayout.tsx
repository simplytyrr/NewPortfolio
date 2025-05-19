
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Home,
  Layers,
  BarChart3,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Clear auth token
    localStorage.removeItem("admin-token");
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin panel.",
    });
    
    // Navigate to login
    navigate("/admin/login");
  };

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <Home size={20} />,
    },
    {
      name: "Projects",
      path: "/admin/projects",
      icon: <Layers size={20} />,
    },
    {
      name: "Skills",
      path: "/admin/skills",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Profile",
      path: "/admin/profile",
      icon: <User size={20} />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={20} />,
    },
  ];

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - desktop */}
      <aside
        className={cn(
          "bg-secondary/30 text-foreground hidden md:flex flex-col transition-all duration-300 border-r border-border",
          sidebarCollapsed ? "w-[70px]" : "w-[240px]"
        )}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between border-b border-border">
          {!sidebarCollapsed && (
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold gradient-text">Admin</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="rounded-full"
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-2">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary/50"
                  )}
                >
                  <span className="mr-3">{item.icon}</span>
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start",
              sidebarCollapsed && "justify-center"
            )}
            onClick={handleLogout}
          >
            <LogOut size={18} className="mr-2" />
            {!sidebarCollapsed && "Logout"}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-border p-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={20} />
              </Button>
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>

            {/* Visit site button */}
            <Button variant="outline" size="sm" asChild>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </Button>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <nav className="mt-4 py-2 md:hidden border-t border-border animate-fade-in">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md transition-colors",
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary/50"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Button
                    variant="outline"
                    className="w-full justify-start mt-2"
                    onClick={handleLogout}
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </Button>
                </li>
              </ul>
            </nav>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
