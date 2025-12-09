import { motion } from "framer-motion";

const StatCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  color = "purple",
  center,
  padding,
  valueColor = "text-white",
  subtitleColor = "text-gray-500",
  delay = 0,
}) => {
  const colorClasses = {
    purple: "from-[#FF00FF] to-[#590059]",
    blue: "from-[#00FFFF] to-[#009999]",
    green: "from-[#008000] to-[#001A00]",
    orange: "from-[#FFA500] to-[#996300]",
    red: "from-[#3F1010] to-[#A52A2A]",
    gray: "from-[#808080] to-[#1A1A1A]",
    yellow: "from-yellow-500 to-orange-500",
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`bg-linear-to-t from-[#FF00FF] to-[#00FFFF] relative ${
        padding ? "py-6 px-5" : "py-10"
      } rounded-2xl`}
      style={{ boxShadow: "0px 4px 16px 0px rgba(255, 255, 255, 0.05)" }}
    >
      <div className="absolute bg-black/95 z-10 inset-0 rounded-2xl border-[0.5px] border-[#FF00FF]/10" />
      {/* Inner Card */}
      <div className=" rounded-xl p-5 overflow-hidden">
        {/* Glow Blob */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${colorClasses[color]} opacity-10 blur-2xl`}
        ></div>

        <div
          className={`relative z-10 ${
            center
              ? "flex flex-col items-center justify-center text-center"
              : ""
          }`}
        >
          {/* Icon */}
          <div
            className={`${
              padding ? "w-12 h-12" : "w-16 h-16"
            } rounded-2xl bg-linear-to-br ${
              colorClasses[color]
            } flex items-center justify-center text-white text-2xl mb-6`}
          >
            <Icon
              color="white"
              className={`${padding ? "size-6" : "size-10"}`}
            />
          </div>

          {/* Value */}
          <div
            className={`${padding ? "text-2xl" : "text-base"} font-semibold font-Oxanium leading-normal tracking-wider ${valueColor}`}
          >
            {value}
          </div>

          {/* Title */}
          <div className={`${padding ? "text-white" : "text-white/90"} text-sm font-semibold font-Oxanium leading-normal tracking-wider mt-3`}>
            {title}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <div
              className={`text-sm font-normal mt-1 font-Oxanium leading-normal tracking-wider ${subtitleColor}`}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
