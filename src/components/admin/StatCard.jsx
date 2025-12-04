import { motion } from "framer-motion";

const StatCard = ({
  icon,
  title,
  value,
  subtitle,
  color = "purple",
  delay = 0,
}) => {
  const colorClasses = {
    purple: "from-purple-500 to-pink-500",
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-yellow-500",
    red: "from-red-500 to-pink-500",
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-[#000000CC] border-[0.5px] border-[#FF00FF] border-opacity-30 rounded-xl p-6 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${colorClasses[color]} opacity-10 rounded-full blur-3xl`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-12 h-12 bg-linear-to-br ${colorClasses[color]} rounded-lg flex items-center justify-center text-2xl mb-4`}
        >
          {icon}
        </div>

        {/* Title */}
        <div className="text-gray-400 text-sm font-semibold mb-2">{title}</div>

        {/* Value */}
        <div className="text-white text-3xl font-black mb-1">{value}</div>

        {/* Subtitle */}
        {subtitle && <div className="text-gray-500 text-xs">{subtitle}</div>}
      </div>
    </motion.div>
  );
};

export default StatCard;
