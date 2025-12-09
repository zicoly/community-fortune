import { useSearchParams } from "react-router-dom";
import UnifiedDashboard from "../pages/admin/UnifiedDashboard";

export const AdminDashboardWrapper = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "admin";

  return <UnifiedDashboard role={role} />;
};
