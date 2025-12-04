import { useSearchParams } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";

const AdminSettings = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "admin";
      const isSuperAdmin = role === "super-admin";

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar role={role} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader
          role={role}
          title={isSuperAdmin ? "Super Admin" : "Admin"}
          subtitle="Settings"
          showSearch={false}
        />
      </div>
    </div>
  );
};

export default AdminSettings;
