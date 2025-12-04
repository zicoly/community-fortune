import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import StatCard from "../../components/admin/StatCard";
import ActivityLog from "../../components/admin/ActivityLog";
import SystemAlert from "../../components/admin/SystemAlert";

const SuperAdminDashboard = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "admin";
  const isSuperAdmin = role === "super-admin";

  // Sample data
  const stats = [
    {
      icon: "🎟️",
      title: "Create Competition",
      value: "Launch new draw",
      subtitle: "",
      color: "purple",
    },
    {
      icon: "👤",
      title: isSuperAdmin ? "Generate Admin" : "Total Admins",
      value: isSuperAdmin ? "Add new admin" : "4",
      subtitle: isSuperAdmin ? "" : "Active administrators",
      color: "orange",
    },
    {
      icon: "⚙️",
      title: "System Settings",
      value: "Platform configuration",
      subtitle: "",
      color: "blue",
    },
  ];

  const dashboardStats = [
    {
      icon: "👥",
      title: "Total Users",
      value: "4,521",
      subtitle: "Active users",
      color: "purple",
    },
    {
      icon: "🎯",
      title: "Active Competitions",
      value: "47",
      subtitle: "Running now",
      color: "blue",
    },
    {
      icon: "💳",
      title: "Pending KYC",
      value: "89",
      subtitle: "Awaiting review",
      color: "orange",
    },
    {
      icon: "💰",
      title: isSuperAdmin ? "Lifetime (ThisMonth)" : "Monthly Revenue",
      value: isSuperAdmin ? "₦3.2M" : "₦825K",
      subtitle: isSuperAdmin ? "Total earnings" : "This month",
      color: "green",
    },
    {
      icon: "🎟️",
      title: "Total Raffles",
      value: "156",
      subtitle: "All time",
      color: "red",
    },
  ];

  const userActivities = [
    {
      icon: "👤",
      title: "SarahM registered a new account",
      time: "2 minutes ago",
      bgColor: "bg-purple-500 bg-opacity-20",
    },
    {
      icon: "💳",
      title: "John Doe purchased a ticket for Super Bundle Draw",
      time: "5 minutes ago",
      bgColor: "bg-green-500 bg-opacity-20",
    },
    {
      icon: "🎯",
      title: "emma_j entered Gaming Lottery competition",
      time: "12 minutes ago",
      bgColor: "bg-blue-500 bg-opacity-20",
    },
    {
      icon: "✅",
      title: "Mark A completed KYC verification",
      time: "1 hour ago",
      bgColor: "bg-cyan-500 bg-opacity-20",
    },
  ];

  const adminActivities = [
    {
      icon: "👤",
      title: "Admin XYZ approved 12 KYC submissions",
      time: "15 minutes ago",
      bgColor: "bg-green-500 bg-opacity-20",
    },
    {
      icon: "🎯",
      title: "Admin ABC created a new competition",
      time: "1 hour ago",
      bgColor: "bg-purple-500 bg-opacity-20",
    },
    {
      icon: "💰",
      title: "Admin TUR updated Samsung Galaxy prize pool",
      time: "2 hours ago",
      bgColor: "bg-orange-500 bg-opacity-20",
    },
    {
      icon: "⚙️",
      title: "Admin Tim generated monthly revenue report",
      time: "4 hours ago",
      bgColor: "bg-blue-500 bg-opacity-20",
    },
  ];

  const systemAlerts = [
    {
      type: "critical",
      title: "High Traffic Detected",
      message: "Server load at 82%. Consider scaling if sustained.",
      time: "15 minutes ago",
    },
    {
      type: "warning",
      title: "Database Backup Completed",
      message: "Data backup successfully completed. All systems operational.",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar role={role} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader
          role={role}
          title={isSuperAdmin ? "Super Admin" : "Admin"}
          showSearch={false}
        />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="space-y-2 tracking-wider"
          >
            <h1
              className="text-white text-2xl font-bold font-Orbitron tracking-wider"
              style={{ textShadow: "0px 0px 24px rgba(0, 255, 255, 1.5)" }}
            >
              Super Admin Dashboard
            </h1>
            <p className="font-Oxanium text-[#FFFFFFBF] font-medium text-sm">
              Complete platform oversight and control
            </p>
          </motion.div>
          {/* Quick Action Cards */}
          <div className="grid grid-cols-3 gap-6 bg-[#000000CC]">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} delay={0.1 + idx * 0.1} />
            ))}
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-5 gap-6">
            {dashboardStats.map((stat, idx) => (
              <StatCard key={idx} {...stat} delay={0.3 + idx * 0.05} />
            ))}
          </div>

          {/* Activity Sections */}
          <div className="grid grid-cols-2 gap-6">
            <ActivityLog activities={userActivities} title="User Activity" />
            <ActivityLog activities={adminActivities} title="Admin Activity" />
          </div>

          {/* System Alerts */}
          <SystemAlert alerts={systemAlerts} />
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.8);
        }
      `}</style>
    </div>
  );
};

export default SuperAdminDashboard;
