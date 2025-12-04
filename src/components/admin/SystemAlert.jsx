import { motion } from "framer-motion";

const SystemAlert = ({ alerts, title = "System Alerts" }) => {
  const alertColors = {
    critical: {
      border: "border-red-500",
      bg: "bg-red-900 bg-opacity-20",
      text: "text-red-400",
    },
    warning: {
      border: "border-yellow-500",
      bg: "bg-yellow-900 bg-opacity-20",
      text: "text-yellow-400",
    },
    info: {
      border: "border-cyan-500",
      bg: "bg-cyan-900 bg-opacity-20",
      text: "text-cyan-400",
    },
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="bg-[#000000CC] border border-purple-500 border-opacity-30 rounded-xl p-6"
    >
      <h3 className="text-white text-lg font-black mb-4">{title}</h3>

      <div className="space-y-3">
        {alerts.map((alert, idx) => {
          const colors = alertColors[alert.type] || alertColors.info;

          return (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              className={`p-4 rounded-lg border-l-4 ${colors.border} ${colors.bg}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className={`font-bold text-sm ${colors.text} mb-1`}>
                    {alert.title}
                  </div>
                  <p className="text-gray-400 text-xs">{alert.message}</p>
                  <p className="text-gray-500 text-xs mt-2">{alert.time}</p>
                </div>
                <button className="ml-4 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-lg transition-colors">
                  Dismiss
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SystemAlert;
