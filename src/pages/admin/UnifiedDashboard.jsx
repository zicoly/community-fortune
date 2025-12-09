import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import StatCard from "../../components/admin/StatCard";
import ActivityLog from "../../components/admin/ActivityLog";
import SystemAlert from "../../components/admin/SystemAlert";

// Lucide Icons
import {
  Users,
  Gift,
  UserPlus,
  Settings,
  Trophy,
  CirclePoundSterling,
  IdCard,
} from "lucide-react";

const UnifiedDashboard = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "admin";
  const isSuperAdmin = role === "super-admin";

  /* ===============================
        TOP ACTION CARDS
     =============================== */
  const quickActions = [
    {
      icon: Gift,
      value: "Create Competition",
      title: "Launch new prize draw",
      color: "purple",
      shown: true,
    },
    {
      icon: UserPlus,
      value: "Generate Admin",
      title: "Add new administrator",
      subtitle: isSuperAdmin ? "" : "Active administrators",
      color: "orange",
      shown: isSuperAdmin ? true : false,
    },
    {
      icon: Settings,
      value: "System Settings",
      title: "Platform configuration",
      color: "gray",
      shown: true,
    },
  ].filter((card) => card.shown);

  /* ===============================
        STATISTIC GRID
     =============================== */
  const stats = [
    {
      icon: Users,
      title: "Total Users",
      value: "4,521",
      subtitle: "+12% this month",
      color: "purple",
      valueColor: "text-[#FF00FF]",
      subtitleColor: "text-[#008000E5]/90",
      shown: true,
    },
    {
      icon: Trophy,
      title: "Active Competitions",
      value: "47",
      subtitle: "3 ending today",
      color: "blue",
      valueColor: "text-[#00FFFF]",
      subtitleColor: "text-white/75",
      shown: true,
    },
    {
      icon: IdCard,
      title: "Pending KYC",
      value: "12",
      subtitle: "Review now",
      color: "orange",
      valueColor: "text-[#A52A2A]",
      subtitleColor: "text-[#A52A2A]/95",
      shown: true,
    },
    {
      icon: CirclePoundSterling,
      title: isSuperAdmin ? "Revenue (All time)" : "Revenue (This month)",
      value: isSuperAdmin ? "₦3.2M" : "₦1,200",
      subtitle: isSuperAdmin ? "Total earnings" : "+8% vs last month",
      color: "green",
      valueColor: "text-[#008000]",
      subtitleColor: "text-[#008000]/90",
      shown: isSuperAdmin ? true : false,
    },
    {
      icon: Users,
      title: isSuperAdmin ? "Total Admins" : "Manage Team",
      value: isSuperAdmin ? "8" : "8",
      subtitle: isSuperAdmin ? "Manage Team" : "Admins",
      color: "orange",
      valueColor: "text-[#FFA500]",
      subtitleColor: "text-[#FFA500]/90",
      shown: isSuperAdmin ? true : false,
    },
  ].filter((card) => card.shown);

  /* ===============================
        ACTIVITY LOGS
     =============================== */
  const userActivities = [
    {
      icon: "👤",
      title: "SarahM registered a new account",
      time: "2 min ago",
      bgColor: "bg-purple-500 bg-opacity-20",
    },
    {
      icon: "💳",
      title: "John purchased a ticket",
      time: "5 min ago",
      bgColor: "bg-green-500 bg-opacity-20",
    },
    {
      icon: "🎯",
      title: "emma_j joined a competition",
      time: "12 min ago",
      bgColor: "bg-blue-500 bg-opacity-20",
    },
    {
      icon: "✅",
      title: "Mark completed KYC",
      time: "1 hour ago",
      bgColor: "bg-cyan-500 bg-opacity-20",
    },
  ];

  const adminActivities = [
    {
      icon: "👤",
      title: "Admin XYZ approved 12 KYC",
      time: "15 min ago",
      bgColor: "bg-green-500 bg-opacity-20",
    },
    {
      icon: "🎯",
      title: "Admin ABC created a competition",
      time: "1 hour ago",
      bgColor: "bg-purple-500 bg-opacity-20",
    },
    {
      icon: "💰",
      title: "Prize pool updated",
      time: "2 hours ago",
      bgColor: "bg-orange-500 bg-opacity-20",
    },
    {
      icon: "⚙️",
      title: "Revenue report generated",
      time: "4 hours ago",
      bgColor: "bg-blue-500 bg-opacity-20",
    },
  ];

  /* ===============================
        SYSTEM ALERTS
     =============================== */
  const alerts = isSuperAdmin
    ? [
        {
          type: "critical",
          title: "High Traffic Detected",
          message: "Server load at 82%. Consider scaling.",
          time: "15 minutes ago",
        },
        {
          type: "warning",
          title: "Backup Completed",
          message: "All systems operational.",
          time: "2 hours ago",
        },
      ]
    : [
        {
          type: "warning",
          title: "Backup Completed",
          message: "All systems operational.",
          time: "2 hours ago",
        },
      ];

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <AdminSidebar role={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          role={role}
          title={isSuperAdmin ? "Super Admin Dashboard" : "Admin Dashboard"}
          showSearch={false}
        />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8">
          {/* Dashboard Heading */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="space-y-2"
          >
            <h1 className="text-white text-2xl font-bold font-Orbitron">
              {isSuperAdmin ? "Super Admin Dashboard" : "Admin Dashboard"}
            </h1>
            <p className="text-gray-400 text-sm">
              Complete platform oversight and control
            </p>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {quickActions.map((stat, idx) => (
              <StatCard center key={idx} {...stat} delay={0.1 + idx * 0.1} />
            ))}
          </div>

          {/* Stat Grid */}
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} delay={0.25 + idx * 0.08} />
            ))}
          </div>

          {/* Activity */}
          <div className="grid grid-cols-2 gap-6">
            <ActivityLog activities={userActivities} title="User Activity" />
            <ActivityLog
              activities={adminActivities}
              title={isSuperAdmin ? "Admin Activity" : "Staff Actions"}
            />
          </div>

          {/* Alerts */}
          <SystemAlert alerts={alerts} />
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

export default UnifiedDashboard;
