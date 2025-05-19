
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminSettings = () => {
  return (
    <AdminLayout title="Settings">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This page will allow you to customize your portfolio theme, SEO settings, and other configurations.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminSettings;
