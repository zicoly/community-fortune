import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChartLine,
  Users,
  IdCard,
  UserCog,
  Trophy,
  UserPlus,
  Settings,
  LogOut,
} from "lucide-react";

const AdminSidebar = ({ role = "admin" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSuperAdmin = role === "super-admin";

  // Get current active path
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    {
      icon: <ChartLine />,
      label: "Dashboard",
      path: `/admin?role=${role}`,
      badge: null,
    },
    {
      icon: <Users />,
      label: "All Users",
      path: `/admin/users?role=${role}`,
      badge: "4521",
    },
    {
      icon: <IdCard />,
      label: "KYC Review",
      path: `/admin/kyc?role=${role}`,
      badge: "12  ",
    },
    {
      icon: <Trophy />,
      label: "Competitions",
      path: `/admin/competitions?role=${role}`,
      badge: "18",
    },
  ];

  // Super Admin sees "Generate Admin", Admin doesn't
  const superAdminOnlyItems = [
    {
      icon: <UserCog />,
      label: "Admin Management",
      path: `/admin/management?role=${role}`,
      badge: "",
    },
    // {
    //   icon: <UserPlus />,
    //   label: "Generate Admin",
    //   path: `/admin/generate?role=${role}`,
    //   highlight: true,
    // },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <div
        className="
          absolute inset-1 bg-linear-to-r from-[#191138] via-[#520152] to-[#2F002F]
          -z-10 rounded-r-4xl
        "
      ></div>

      <div className="relative bg-black/80 backdrop-blur-xl rounded-r-4xl h-screen p-6 flex flex-col">
        {/* Logo Section */}
        <div className="text-center">
          <span
            className="text-xl font-bold font-Orbitron text-white leading-1 tracking-wider text-nowrap"
            style={{
              textShadow: "0 0 20px rgba(255, 0, 255, 1.5)",
            }}
          >
            Community Fortune
          </span>
          <p
            className={`${
              isSuperAdmin ? "text-[#FFA500]" : "text-[#FF00FF]"
            } font-medium text-sm font-Oxanium mt-2`}
          >
            {isSuperAdmin ? "Super Admin Panel" : "Admin Panel"}
          </p>
        </div>

        {/* Role Badge */}
        <div className="px-6 py-3 mt-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className={`${
              isSuperAdmin
                ? "bg-[#FFA50040] border border-[#FFA500B2]"
                : "bg-[#FF00FF40] border border-[#FF00FFB2]"
            } rounded-lg p-3 flex items-center gap-3`}
          >
            <div
              className={`w-10 h-10 bg-linear-to-b ${
                isSuperAdmin
                  ? "from-[#FFA500] to-[#996300]"
                  : "from-[#FF00FF] to-[#690069]"
              } rounded-full flex items-center justify-center text-base font-medium font-Oxanium text-white p-2.5`}
            >
              {isSuperAdmin ? "SA" : "MJ"}
            </div>
            <div className="text-white font-semibold text-base font-Oxanium">
              {isSuperAdmin ? "Super Admin" : "Admin MJ"}
            </div>
            <span className="bg-[#008000] h-2 w-2 rounded-full"></span>
          </motion.div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <motion.button
              key={item.path}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * idx }}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer ${
                isActive(item.path.split("?")[0])
                  ? `bg-[#FFFFFF1A] text-white border-l-2 ${
                      isSuperAdmin ? "border-[#FFA500CC]" : "border-[#FF00FFCC]"
                    }`
                  : "text-[#FFFFFFBF] hover:bg-[#FFFFFF1A] hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{item.icon}</span>
                <span className="font-bold font-Oxanium text-sm tracking-wider leading-1">
                  {item.label}
                </span>
              </div>
              {item.badge && (
                <span
                  className={`bg-linear-to-b ${
                    isSuperAdmin
                      ? "from-[#FFA500] to-[#996300]"
                      : "from-[#FF00FF] to-[#990099]"
                  }text-white text-xs p-2 rounded-full font-semibold font-Oxanium tracking-wider leading-2.5`}
                >
                  {item.badge}
                </span>
              )}
            </motion.button>
          ))}

          {/* Super Admin Only Items */}
          {isSuperAdmin && (
            <>
              {superAdminOnlyItems.map((item, idx) => (
                <motion.button
                  key={item.path}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + 0.1 * idx }}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                    item.highlight
                      ? "bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold"
                      : ""
                  } ${
                    isActive(item.path.split("?")[0])
                      ? `bg-[#FFFFFF1A] text-white border-l-2 ${
                          isSuperAdmin
                            ? "border-[#FFA500CC]"
                            : "border-[#FF00FFCC]"
                        }`
                      : "text-[#FFFFFFBF] hover:bg-[#FFFFFF1A] hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-bold font-Oxanium text-sm tracking-wider leading-1">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </>
          )}
        </nav>

        {/* Settings Footer */}
        <div className="p-4">
          <button
            onClick={() => navigate(`/admin/settings?role=${role}`)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer
    ${
      isActive("/admin/settings")
        ? `bg-[#FFFFFF1A] text-white border-l-2 ${
            isSuperAdmin ? "border-[#FFA500]" : "border-purple-500"
          }`
        : "text-gray-400 hover:bg-[#FFFFFF1A] hover:text-white"
    }
  `}
          >
            <Settings />
            <span className="font-semibold text-sm">Settings</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-900 hover:bg-opacity-20 hover:text-red-300 rounded-lg transition-all mt-2 cursor-pointer"
          >
            <LogOut />
            <span className="font-semibold font-Oxanium text-sm tracking-wider leading-1">
              Logout
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;
