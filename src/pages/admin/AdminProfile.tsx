
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminProfile = () => {
  return (
    <AdminLayout title="Manage Profile">
      <Card>
        <CardHeader>
          <CardTitle>Profile Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This page will allow you to edit your personal information, education, and social links.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminProfile;
