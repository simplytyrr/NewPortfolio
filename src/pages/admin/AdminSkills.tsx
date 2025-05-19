
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminSkills = () => {
  return (
    <AdminLayout title="Manage Skills">
      <Card>
        <CardHeader>
          <CardTitle>Skills Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This page will allow you to add, edit, and delete skills.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminSkills;
