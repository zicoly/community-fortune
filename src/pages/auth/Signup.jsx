import { useState } from "react";
import { motion } from "framer-motion";
import SignUpHeroSection from "../../components/animations/SignUpHeroSection";
import Toast from "../../components/common/Toast";
import useToast from "../../hooks/useToast";
import { validateSignupForm } from "../../services/utils/formValidation";
import { useNavigate } from "react-router-dom";
import { UserRound, Mail, Lock, Phone, Flag, EyeOff, Eye } from "lucide-react";
import UsersThree from "/assets/icons/UsersThree.svg";
import Trophy from "/assets/icons/Trophy.svg";
import Gift from "/assets/icons/Trophy.svg";
import Sheild from "/assets/icons/Shield.svg";
import { verifyAge } from "../../services/utils/ageVerification";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    nationality: "",
    notifications: false,
    ageConfirm: false,
    termsAgree: false,
    responsibleGaming: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast, showToast, hideToast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Step 1: Validate basic form fields (email, password, etc.)
  const validation = validateSignupForm(formData);
  
  if (!validation.isValid) {
    // Show first error from basic validation
    showToast(validation.errors[0].message, "error");
    return;
  }

  // Step 2: Verify age using date of birth
  const ageVerification = verifyAge(
    formData.dobDay, 
    formData.dobMonth, 
    formData.dobYear, 
    18  // minimum age
  );

  if (!ageVerification.isVerified) {
    showToast(ageVerification.error, "error");
    return;
  }

  // Step 3: Success! User is verified
  showToast(
    `Account created! Age verified: ${ageVerification.age} years old`, 
    "success"
  );
  
  console.log("Form submitted:", {
    ...formData,
    verifiedAge: ageVerification.age
  });
};

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="h-screen bg-black relative overflow-hidden flex">
      {/* Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />

      {/* Left Side - Hero Section with Image & Features */}
      <div className="hidden lg:block w-3/5 h-screen">
        <SignUpHeroSection
          imagePath="assets/images/Frame6.png"
          title="Community Fortune"
          subtitle="Join the Winners"
          features={[
            {
              icon: Trophy,
              text: "Win cash, site credits, luxury prizes and more",
            },
            { icon: Sheild, text: "Licensed & secure platform" },
            { icon: UsersThree, text: "Join multiple winners" },
            { icon: Gift, text: "Game rewards & bonuses" },
          ]}
          additional={[
            { text: "18+" },
            { text: "Regulated" },
            { text: "Responsible Gaming" },
          ]}
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center relative overflow-auto custom-scrollbar h-screen pt-[650px] pb-10">
        <motion.div
          initial={{ x: 100, opacity: 0, rotateY: -20 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full px-14 z-10"
        >
          {/* Glowing Border Effect */}
          <div
            className="absolute inset-0 rounded-4xl mx-16
          bg-linear-to-t from-[#00FFFF] to-[#FF00FF]
          -z-10 animate-pulse
        "
          ></div>

          <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl font-bold font-Orbitron text-white mb-2"
            >
              Create Account
            </motion.h2>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-white/70 font-medium text-base font-Oxanium mb-10"
            >
              Start your winning journey
            </motion.p>

            <div className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                    First Name <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <UserRound size={20} />
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full bg-black bg-opacity-50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.05 }}
                >
                  <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                    Last Name <span className="text-pink-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <UserRound size={20} />
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full bg-black bg-opacity-50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                  Email <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Mail size={20} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.smith@example.com"
                    className="w-full bg-black bg-opacity-50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.15 }}
              >
                <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                  Password <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Lock size={20} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full bg-black bg-opacity-50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </motion.div>

              {/* Confirm Password */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                  Confirm Password <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Lock size={20} />
                  </span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className="w-full bg-black bg-opacity-50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Phone Number */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.25 }}
              >
                <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                  Phone Number <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Phone size={20} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 XXXX XXXXXX"
                    className="w-full bg-black bg-opacity-50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  For account security and prize notifications
                </p>
              </motion.div>

              {/* Date of Birth */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                  Date of Birth <span className="text-pink-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    name="dobDay"
                    value={formData.dobDay}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  >
                    <option value="">Day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="dobMonth"
                    value={formData.dobMonth}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  >
                    <option value="">Month</option>
                    {months.map((month, idx) => (
                      <option key={month} value={idx + 1}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="dobYear"
                    value={formData.dobYear}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>

              {/* Nationality */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.35 }}
              >
                <label className="block text-sm font-medium font-Oxanium text-white/80 mb-2">
                  Nationality <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Flag size={20} />
                  </span>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 transition-all font-Oxanium"
                  >
                    <option value="">Country</option>
                    <option value="NG">Nigeria</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GH">Ghana</option>
                    <option value="ZA">South Africa</option>
                  </select>
                </div>
              </motion.div>

              {/* Checkboxes */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="space-y-3 py-10"
              >
                <label className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={formData.notifications}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded bg-black border-2 border-purple-500 text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 cursor-pointer"
                  />
                  <span className="text-sm font-medium font-Oxanium text-gray-300 group-hover:text-white transition-colors">
                    I want to receive email notifications about competitions
                  </span>
                </label>

                <label className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="ageConfirm"
                    checked={formData.ageConfirm}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded bg-black border-2 border-purple-500 text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 cursor-pointer"
                  />
                  <span className="text-sm font-medium font-Oxanium text-gray-300 group-hover:text-white transition-colors">
                    I am 18 years or older{" "}
                    <span className="text-pink-500">*</span>
                  </span>
                </label>

                <label className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="termsAgree"
                    checked={formData.termsAgree}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded bg-black border-2 border-purple-500 text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 cursor-pointer"
                  />
                  <span className="text-sm font-medium font-Oxanium text-gray-300 group-hover:text-white transition-colors">
                    I agree to the{" "}
                    <button className="text-[#FF00FF] cursor-pointer hover:text-pink-300">
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button className="text-[#FF00FF] cursor-pointer hover:text-pink-300">
                      Privacy Policy
                    </button>{" "}
                    <span className="text-[#FF00FF]">*</span>
                  </span>
                </label>

                <label className="flex items-start space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="responsibleGaming"
                    checked={formData.responsibleGaming}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded bg-black border-2 border-purple-500 text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-opacity-30 cursor-pointer"
                  />
                  <span className="text-sm font-medium font-Oxanium text-gray-300 group-hover:text-white transition-colors">
                    I agree to{" "}
                    <button className="text-[#FF00FF] cursor-pointer hover:text-pink-300">
                      responsible gaming policies
                    </button>{" "}
                    <span className="text-[#FF00FF]">*</span>
                  </span>
                </label>
              </motion.div>

              {/* Create Account Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-[#FF00FF] to-[#3E003E] transition-all duration-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-black/25 uppercase tracking-wider cursor-pointer hover:scale-105 active:scale-95 text-base font-Oxanium"
              >
                CREATE MY ACCOUNT
              </motion.button>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="relative"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900 backdrop-blur-2xl text-gray-400">
                    OR
                  </span>
                </div>
              </motion.div>

              {/* Google Signup */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => console.log("Google signup")}
                className="w-full font-semibold py-4 rounded-lg flex items-center justify-center space-x-3 transition-colors shadow-lg bg-black text-white/80 cursor-pointer text-base font-Oxanium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
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

              {/* Login Link */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-center text-smtext-center text-gray-400 text-base font-Oxanium"
              >
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/")}
                  className="text-[#FF00FF] hover:text-pink-300 font-semibold transition-colors cursor-pointer"
                >
                  Log In
                </button>
              </motion.p>

              {/* Footer Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
                className="flex justify-center items-center text-xs text-gray-500 pt-2"
              >
                <button
                  onClick={() => console.log("Terms")}
                  className="hover:text-gray-300 transition-colors font-Oxanium cursor-pointer"
                >
                  Terms <span className="mx-0.5">•</span>
                </button>

                <button
                  onClick={() => console.log("Privacy")}
                  className="hover:text-gray-300 transition-colors font-Oxanium cursor-pointer"
                >
                  Privacy <span className="mx-0.5">•</span>
                </button>
                <button
                  onClick={() => console.log("Support")}
                  className="hover:text-gray-300 transition-colors font-Oxanium cursor-pointer"
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

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.8);
        }
      `}</style>
    </div>
  );
};

export default SignUp;
