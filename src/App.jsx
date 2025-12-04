import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/Signup";
// import SuperAdminDashboard from "./pages/admin/SuperAdminDashboard";
import { AdminDashboardWrapper } from "./routes/AdminRoutes";
import Users from "./pages/admin/Users";
import Kyc from "./pages/admin/Kyc";
import Competitions from "./pages/admin/Competitions";
import SuperAdminManagement from "./pages/admin/SuperAdminManagement";
import AdminSettings from "./pages/admin/AdminSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add more routes */}
        <Route path="/admin" element={<AdminDashboardWrapper />} />

        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/kyc" element={<Kyc />} />
        <Route path="/admin/competitions" element={<Competitions />} />
        <Route path="/admin/management" element={<SuperAdminManagement />} />
        <Route
          path="/admin/generate"
          element={<div>Generate Admin Page</div>}
        />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* Redirect /admin without params to admin view */}
        <Route
          path="/admin"
          element={<Navigate to="/admin?role=admin" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
