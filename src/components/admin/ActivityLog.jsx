import { motion } from "framer-motion";

const ActivityLog = ({ activities, title = "User Activity" }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-[#000000CC] border border-purple-500 border-opacity-30 rounded-xl p-6"
    >
      <h3 className="text-white text-lg font-black mb-4">{title}</h3>

      <div className="space-y-3">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            className="flex items-start space-x-3 p-3 bg-[#000000CC] bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.bgColor}`}
            >
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold">
                {activity.title}
              </p>
              <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActivityLog;
