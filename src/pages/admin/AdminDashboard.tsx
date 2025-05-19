
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockAdminStats, mockProjects } from "@/data/mockData";
import { Layers, BarChart3, Star, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [stats, setStats] = useState(mockAdminStats);
  const [featuredProjects, setFeaturedProjects] = useState(
    mockProjects.filter(p => p.featured).slice(0, 3)
  );
  
  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Projects" 
            value={stats.totalProjects} 
            icon={<Layers size={24} className="text-primary" />}
          />
          <StatCard 
            title="Skills" 
            value={stats.totalSkills} 
            icon={<BarChart3 size={24} className="text-indigo-500" />}
          />
          <StatCard 
            title="Featured Projects" 
            value={stats.featuredProjects} 
            icon={<Star size={24} className="text-yellow-500" />}
          />
          <StatCard 
            title="Last Updated" 
            value={formatDate(stats.lastUpdated)} 
            isDate
            icon={<Calendar size={24} className="text-green-500" />}
          />
        </div>

        {/* Featured Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Featured Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {featuredProjects.map(project => (
                <div 
                  key={project.id}
                  className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                      <Layers size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/admin/projects?edit=${project.id}`}>
                      Edit
                    </a>
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button variant="outline" asChild>
                <a href="/admin/projects">View All Projects</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-auto py-4 flex flex-col" asChild>
                <a href="/admin/projects?new=true">
                  <Layers size={20} className="mb-2" />
                  <span>Add New Project</span>
                </a>
              </Button>
              <Button className="h-auto py-4 flex flex-col" variant="outline" asChild>
                <a href="/admin/skills?new=true">
                  <BarChart3 size={20} className="mb-2" />
                  <span>Add New Skill</span>
                </a>
              </Button>
              <Button className="h-auto py-4 flex flex-col" variant="secondary" asChild>
                <a href="/admin/profile">
                  <Calendar size={20} className="mb-2" />
                  <span>Update Profile</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  isDate?: boolean;
}

const StatCard = ({ title, value, icon, isDate }: StatCardProps) => {
  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className={`mt-2 text-3xl font-bold ${isDate ? 'text-lg' : ''}`}>
              {value}
            </p>
          </div>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDashboard;
