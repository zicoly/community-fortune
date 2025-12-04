import { Routes, Route, Navigate } from "react-router-dom";
import SuperAdminDashboard from "../pages/admin/SuperAdminDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { useSearchParams } from "react-router-dom";

// Wrapper component to determine which dashboard to show
export const AdminDashboardWrapper = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  // If role is super-admin, show SuperAdminDashboard
  // Otherwise, show AdminDashboard
  if (role === "super-admin") {
    return <SuperAdminDashboard />;
  }

  return <AdminDashboard />;
};
