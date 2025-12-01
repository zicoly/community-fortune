import { useState } from "react";
import { motion } from "framer-motion";
import Toast from "../../components/common/Toast";
import useToast from "../../hooks/useToast";
import { validateLoginForm } from "../../services/utils/formValidation";
import HeroSection from "../../components/animations/HeroSection";
import { Mail, Lock, Eye, EyeOff, LogIn, Chrome } from "lucide-react";
import UsersThree from "/assets/icons/UsersThree.svg"
import Money from "/assets/icons/Money.svg"
import Trophy from "/assets/icons/Trophy.svg"


const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validation = validateLoginForm(formData);

    if (!validation.isValid) {
      // Show first error
      showToast(validation.errors[0].message, "error");
      return;
    }

    // Success
    showToast("Login successful! Redirecting...", "success");
    console.log("Form submitted:", formData);

    // Add your authentication logic here
    // Example: setTimeout(() => navigate('/dashboard'), 1500);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex">
      {/* Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />

      {/* Left Side - Hero Section with Image & Floating Cards */}
      <div className="hidden lg:block w-3/5 h-screen">
        <HeroSection
          imagePath="assets/images/Frame5.png"
          title="Community Fortune"
          subtitle="Welcome Back, Champion"
          text="Your next prize awaits"
          stats={[
            { icon: UsersThree, label: " Active Users", value: "1000+ " },
            { icon: Money, label: " Won Daily", value: "E30+" },
            { icon: Trophy, label: "Win Rate", value: "90%" },
          ]}
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ x: 100, opacity: 0, rotateY: -20 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full px-14 z-10"
        >
          <div
            className="
          absolute inset-0 rounded-4xl mx-16
          bg-linear-to-t from-[#00FFFF] to-[#FF00FF]
          -z-10 animate-pulse
        "
          ></div>
          <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-10">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "Orbitron" }}
            >
              Log In
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-[#FFFFFFB2] mb-12 text-xl"
              style={{ fontFamily: "Oxanium" }}
            >
              Continue your winning journey
            </motion.p>

            <div className="space-y-6">
              {/* Email Input */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <label
                  className="block text-base font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "Oxanium" }}
                >
                  Email or Username <span className="text-[#FF00FF]">*</span>
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email or username"
                    className="w-full bg-black bg-opacity-50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all"
                    style={{ fontFamily: "Oxanium" }}
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <label
                  className="block text-base font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "Oxanium" }}
                >
                  Password <span className="text-[#FF00FF]">*</span>
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full bg-black bg-opacity-50 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all"
                    style={{ fontFamily: "Oxanium" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors text-xl cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center justify-between"
              >
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4 rounded bg-black text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 cursor-pointer"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Remember me
                  </span>
                </label>
                <button
                  onClick={() => console.log("Forgot password")}
                  className="text-base text-[#FF00FF] hover:text-pink-300 transition-colors font-semibold cursor-pointer"
                  style={{ fontFamily: "Oxanium" }}
                >
                  Forgot password?
                </button>
              </motion.div>

              {/* Login Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-[#FF00FF] to-[#3E003E] transition-all duration-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-black/25 uppercase tracking-wider mt-10 cursor-pointer hover:scale-105 active:scale-95"
                style={{ fontFamily: "Orbitron" }}
              >
                LOG IN
              </motion.button>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="relative mb-6"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className="px-4 bg-gray-900 text-gray-400 text-base font-semibold"
                    style={{ fontFamily: "Oxanium" }}
                  >
                    OR
                  </span>
                </div>
              </motion.div>

              {/* Google Login */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => console.log("Google login")}
                className="w-full font-semibold py-4 rounded-lg flex items-center justify-center space-x-3 transition-colors shadow-lg bg-black text-white/80 cursor-pointer"
                style={{ fontFamily: "Oxanium" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </motion.button>

              {/* Sign Up Link */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-center text-gray-400 text-base"
              >
                Don't have an account?{" "}
                <button
                  onClick={() => console.log("Navigate to signup")}
                  className="text-[#FF00FF] hover:text-pink-300 font-semibold transition-colors cursor-pointer"
                >
                  Sign Up
                </button>
              </motion.p>

              {/* Footer Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="flex justify-center space-x-4 text-sm text-gray-500 pt-4"
              >
                <button
                  onClick={() => console.log("Terms")}
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontFamily: "Oxanium" }}
                >
                  Terms
                </button>
                <span>•</span>
                <button
                  onClick={() => console.log("Privacy")}
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontFamily: "Oxanium" }}
                >
                  Privacy
                </button>
                <span>•</span>
                <button
                  onClick={() => console.log("Support")}
                  className="hover:text-gray-300 transition-colors"
                  style={{ fontFamily: "Oxanium" }}
                >
                  Support
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .bg-size-200 {
          background-size: 200% auto;
        }
        
        .bg-pos-0 {
          background-position: 0% center;
        }
        
        .hover\\:bg-pos-100:hover {
          background-position: 100% center;
        }
      `}</style>
    </div>
  );
};

export default SignIn;
