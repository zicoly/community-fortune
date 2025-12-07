import { useSearchParams } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import { motion } from "framer-motion";
import CompetitionInformation from "./competitions/components/CompetitionInformation";
import CompetitionMedia from "./competitions/components/CompetitionMedia";
import RulesAndRestrictions from "./competitions/components/RulesAndRestrictions";
import InstantWins from "./competitions/components/InstantWins";
import AchievementSettings from "./competitions/components/AchievementSettings";

const Competitions = () => {
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
          subtitle="Competitions"
          showSearch={true}
        />

        {/* Content Area */}
        <section className="flex-1 overflow-y-auto p-8 space-y-8 relative custom-scrollbar z-10">
          {/* This is all about the Competitions */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="space-y-2 tracking-wider z-10"
          >
            <h1
              className="text-white text-2xl font-bold font-Orbitron tracking-wider"
              style={{ textShadow: "0px 0px 24px rgba(0, 255, 255, 1.5)" }}
            >
              Create New Competition
            </h1>
            <p className="font-Oxanium text-[#FFFFFFBF] font-medium text-sm">
              Kindly fill in the competition details below
            </p>
          </motion.div>

          <CompetitionInformation />
          <CompetitionMedia />
          <RulesAndRestrictions />
          <InstantWins />
          <AchievementSettings />
        </section>
      </div>
    </div>
  );
};

export default Competitions;
