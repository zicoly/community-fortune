import React, { useState, useEffect } from "react";
import ForgotPassWordBG from "/assets/images/fpBG.jpg";
import CasinoCards from "/assets/images/casinoCards.png";
import Logo from "/assets/icons/Polygon1.svg";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (showSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, countdown]);

  const handleSubmit = () => {
    if (password && confirmPassword && password === confirmPassword) {
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return (
      <main
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
        style={{ backgroundImage: `url(${ForgotPassWordBG})` }}
      >
        <div className="w-full max-w-lg">
          <div className="bg-linear-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
            {/* Logo/Header */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <h1 className="text-white text-2xl font-Orbitron font-medium tracking-wide">
                Community Fortune
              </h1>
            </div>

            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-linear-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h2 className="text-white text-3xl font-Orbitron font-semibold text-center mb-4">
              Password Reset Successful
            </h2>

            {/* Countdown */}
            <p className="text-gray-400 text-center font-Oxanium text-base">
              Redirecting in {countdown} seconds...
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${ForgotPassWordBG})` }}
    >
      <div className="w-full max-w-7xl flex gap-8 items-center">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-linear-to-br from-gray-900/80 to-gray-800/70 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-2xl max-w-md mx-auto">
            {/* Logo/Header */}
            <div className="flex items-center gap-3 mb-8">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <h1 className="text-white text-xl font-Orbitron font-medium tracking-wide">
                Community Fortune
              </h1>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-500 rounded-full blur-xl opacity-50"></div>
                <div className="relative w-20 h-20 bg-linear-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white text-3xl font-Orbitron font-semibold text-center mb-4">
              Reset Password
            </h2>

            {/* Subtitle */}
            <div className="text-center mb-6">
              <span className="text-fuchsia-500 font-Oxanium font-semibold text-sm">
                Create New Password
              </span>
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label className="text-white font-Oxanium text-sm mb-2 block">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-gray-900/60 border border-gray-700 rounded-lg pl-12 pr-12 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="text-white font-Oxanium text-sm mb-2 block">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full bg-gray-900/60 border border-gray-700 rounded-lg pl-12 pr-12 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-linear-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white font-Orbitron font-bold text-sm py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-fuchsia-500/50"
            >
              CONFIRM
            </button>
          </div>
        </div>

        {/* Right Side - Casino Cards Image */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="flex items-center justify-center">
            <img
              src={CasinoCards}
              alt="Casino Cards"
              className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
