// import { useSearchParams } from "react-router-dom";
// import AdminSidebar from "../../components/admin/AdminSidebar";
// import AdminHeader from "../../components/admin/AdminHeader";
// import StatCard from "../../components/admin/StatCard";
// import ActivityLog from "../../components/admin/ActivityLog";
// import SystemAlert from "../../components/admin/SystemAlert";
// import { motion } from "framer-motion";

// const AdminDashboard = () => {
//   const [searchParams] = useSearchParams();
//   const role = searchParams.get("role") || "admin";

//   // Admin sees slightly different stats (no "Generate Admin")
//   const stats = [
//     {
//       icon: "🎟️",
//       title: "Create Competition",
//       value: "Launch new draw",
//       subtitle: "",
//       color: "purple",
//     },
//     {
//       icon: "🎯",
//       title: "Active Competitions",
//       value: "47",
//       subtitle: "Running now",
//       color: "blue",
//     },
//     {
//       icon: "💳",
//       title: "Pending KYC",
//       value: "89",
//       subtitle: "Awaiting review",
//       color: "red",
//     },
//   ];

//   const dashboardStats = [
//     {
//       icon: "👥",
//       title: "Total Users",
//       value: "4,521",
//       subtitle: "Active users",
//       color: "purple",
//     },
//     {
//       icon: "🎯",
//       title: "Active Competitions",
//       value: "47",
//       subtitle: "Running now",
//       color: "blue",
//     },
//     {
//       icon: "💳",
//       title: "Pending KYC",
//       value: "89",
//       subtitle: "Awaiting review",
//       color: "orange",
//     },
//     {
//       icon: "💰",
//       title: "Monthly Revenue",
//       value: "₦825K",
//       subtitle: "This month",
//       color: "green",
//     },
//   ];

//   const userActivities = [
//     {
//       icon: "👤",
//       title: "SarahM registered a new account",
//       time: "2 minutes ago",
//       bgColor: "bg-purple-500 bg-opacity-20",
//     },
//     {
//       icon: "💳",
//       title: "John Doe purchased a ticket for Super Bundle Draw",
//       time: "5 minutes ago",
//       bgColor: "bg-green-500 bg-opacity-20",
//     },
//     {
//       icon: "🎯",
//       title: "emma_j entered Gaming Lottery competition",
//       time: "12 minutes ago",
//       bgColor: "bg-blue-500 bg-opacity-20",
//     },
//     {
//       icon: "✅",
//       title: "Mark A completed KYC verification",
//       time: "1 hour ago",
//       bgColor: "bg-cyan-500 bg-opacity-20",
//     },
//   ];

//   const systemAlerts = [
//     {
//       type: "warning",
//       title: "Database Backup Completed",
//       message: "Data backup successfully completed. All systems operational.",
//       time: "2 hours ago",
//     },
//   ];

//   return (
//     <div className="flex h-screen bg-black overflow-hidden">
//       {/* Sidebar */}
//       <AdminSidebar role={role} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <AdminHeader role={role} title="Admin" showSearch={false} />

//         {/* Content Area */}
//         <div className="flex-1 overflow-y-auto p-8 space-y-8 relative custom-scrollbar z-10">
//           <img
//             src="/assets/images/Admin_bg.png"
//             className="fixed w-full h-fit object-cover opacity-30 pointer-events-none z-0"
//           />

//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.6, type: "spring" }}
//             className="space-y-2 tracking-wider z-10"
//           >
//             <h1
//               className="text-white text-2xl font-bold font-Orbitron tracking-wider"
//               style={{ textShadow: "0px 0px 24px rgba(0, 255, 255, 1.5)" }}
//             >
//               Admin Dashboard
//             </h1>
//             <p className="font-Oxanium text-[#FFFFFFBF] font-medium text-sm">
//               Complete platform oversight and control
//             </p>
//           </motion.div>
//           {/* Quick Action Cards */}
//           <div className="grid grid-cols-3 gap-6">
//             {stats.map((stat, idx) => (
//               <StatCard key={idx} {...stat} delay={0.1 + idx * 0.1} />
//             ))}
//           </div>

//           {/* Dashboard Stats */}
//           <div className="grid grid-cols-4 gap-6">
//             {dashboardStats.map((stat, idx) => (
//               <StatCard key={idx} {...stat} delay={0.3 + idx * 0.05} />
//             ))}
//           </div>

//           {/* Activity Section */}
//           <ActivityLog activities={userActivities} title="User Activity" />

//           {/* System Alerts */}
//           <SystemAlert alerts={systemAlerts} />
//         </div>
//       </div>

//       <style>{`
//        .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }

//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(0, 0, 0, 0.3);
//           border-radius: 10px;
//         }

//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(168, 85, 247, 0.5);
//           border-radius: 10px;
//         }

//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(168, 85, 247, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AdminDashboard;
