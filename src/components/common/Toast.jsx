import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ show, message, type = "error", onClose }) => {
  const toastConfig = {
    success: {
      icon: "✅",
      bgColor: "bg-green-900",
      borderColor: "border-green-500",
      textColor: "text-green-100",
      shadowColor: "shadow-green-500/50",
    },
    error: {
      icon: "⚠️",
      bgColor: "bg-red-900",
      borderColor: "border-red-500",
      textColor: "text-red-100",
      shadowColor: "shadow-red-500/50",
    },
    warning: {
      icon: "⚡",
      bgColor: "bg-yellow-900",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-100",
      shadowColor: "shadow-yellow-500/50",
    },
    info: {
      icon: "ℹ️",
      bgColor: "bg-blue-900",
      borderColor: "border-blue-500",
      textColor: "text-blue-100",
      shadowColor: "shadow-blue-500/50",
    },
  };

  const config = toastConfig[type] || toastConfig.error;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div
            className={`${config.bgColor} ${config.borderColor} ${config.textColor} bg-opacity-95 backdrop-blur-xl rounded-xl shadow-2xl ${config.shadowColor} border-2 p-4 flex items-center space-x-3`}
          >
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="text-3xl flex-shrink-0"
            >
              {config.icon}
            </motion.span>
            <div className="flex-1">
              <p className="font-semibold text-sm">{message}</p>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="flex-shrink-0 hover:opacity-70 transition-opacity text-xl"
              >
                ✕
              </button>
            )}
          </div>

          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 3, ease: "linear" }}
            className={`h-1 ${config.bgColor} opacity-50 rounded-full mt-1`}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
