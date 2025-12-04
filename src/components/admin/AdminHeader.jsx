import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";

const AdminHeader = ({
  title = "Dashboard",
  subtitle = "Dashboard",
  showSearch = false,
  searchPlaceholder = "Search users by name, email, ID...",
  onSearch,
  role = "admin",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  const isSuperAdmin = role === "super-admin";

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#000000CC] border-b border-[#FFFFFF26] border-opacity-30 px-6 py-5 flex items-center justify-between"
      style={{ boxShadow: "0px 4px 20px 0px rgba(255, 255, 255, 0.1)" }}
    >
      {/* Left Section - Title */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 font-medium text-sm font-Oxanium">
          <h1 className="text-white">{title}</h1>
          <span>
            {" "}
            <ChevronRight className="text-white" />{" "}
          </span>
          <p
            className={`${isSuperAdmin ? "text-[#FFA500]" : "text-[#FF00FF]"}`}
          >
            {subtitle}
          </p>
        </div>

        <div className="flex items-center bg-[#FFFFFFF2] py-1 px-3 rounded-full gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#008000]"></span>
          <p className="text-[#008000] font-medium text-sm font-Oxanium rounded-full">
            All Systems Operational
          </p>
        </div>
      </div>

      {/* Right Section - Search or Actions */}
      <div className="flex items-center space-x-4">
        {/* Search Bar (conditional) */}
        {showSearch && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "300px", opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder={searchPlaceholder}
              className={`w-full bg-black bg-opacity-50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none  focus:ring-1 ${
                isSuperAdmin
                  ? "focus:border-[#FFA500] focus:ring-[#FFA500]"
                  : "focus:border-[#FF00FF] focus:ring-[#FF00FF]"
              } focus:ring-opacity-30 transition-all font-Oxanium border border-[#FFFFFF59] text-sm font-normal`}
            />
          </motion.div>
        )}

        {/* Profile */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center py-2"
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminHeader;
