
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminProjects = () => {
  return (
    <AdminLayout title="Manage Projects">
      <Card>
        <CardHeader>
          <CardTitle>Projects Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This page will allow you to add, edit, and delete projects.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminProjects;
