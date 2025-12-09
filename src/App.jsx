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
import GameHub from "./games/GameHub";
import SpeedTapFrenzy from "./games/SpeedTapFrenzy/SpeedTapFrenzy";
import Pacman from "./games/Pacman";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import ResetPassword from "./pages/auth/reset-password/ResetPassword";
import Test from "./pages/Test";
import OTP from "./pages/auth/OTP";
import KYC from "./pages/auth/KYC";
import KYCUnderReview from "./pages/auth/KYCUnderReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/test" element={<Test />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-account" element={<OTP />} />
        <Route path="/kyc-verification" element={<KYC />} />
        <Route path="/kyc/under-review" element={<KYCUnderReview />} />
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

        {/* MAIN GAME HUB */}
        <Route path="/games" element={<GameHub />} />

        {/* INDIVIDUAL GAMES */}
        <Route path="/games/pacman" element={<Pacman />} />
        <Route
          path="/games/speed-tap"
          element={<SpeedTapFrenzy mode="free" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
