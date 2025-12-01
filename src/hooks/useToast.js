import { useState, useCallback } from "react";

const useToast = (duration = 3000) => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "error",
  });

  const showToast = useCallback(
    (message, type = "error") => {
      setToast({ show: true, message, type });

      setTimeout(() => {
        setToast({ show: false, message: "", type: "" });
      }, duration);
    },
    [duration]
  );

  const hideToast = useCallback(() => {
    setToast({ show: false, message: "", type: "" });
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
};

export default useToast;
