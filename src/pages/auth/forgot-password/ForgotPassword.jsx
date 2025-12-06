import React, { useState } from "react";
import ForgotPassWordBG from "/assets/images/fpBG.jpg";
import Logo from "/assets/icons/Polygon1.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setShowConfirmation(true);
    }
  };

  const handleResendEmail = () => {
    console.log("Resending email to:", email);
  };

  const handleBackToLogin = () => {
    setShowConfirmation(false);
    setEmail("");
  };

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${ForgotPassWordBG})` }}
    >
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
          {/* Logo/Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-white text-2xl font-Orbitron font-medium tracking-wide">
              Community Fortune
            </h1>
          </div>

          {!showConfirmation ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center">
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
                Forgot Password
              </h2>

              {/* Subtitle */}
              <p className="text-gray-400 text-center font-Oxanium text-sm mb-6">
                No worries, we'll send you reset instructions
              </p>

              {/* Reset Password Label */}
              <div className="text-center mb-6">
                <span className="text-fuchsia-500 font-Oxanium font-semibold text-sm">
                  Reset password
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-center font-Oxanium text-sm mb-6">
                Enter your email address and we'll send you a link to reset your
                password
              </p>

              {/* Email Input */}
              <div className="mb-6">
                <label className="text-white font-Oxanium text-sm mb-2 block">
                  Email <span className="text-red-500">*</span>
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.smith@example.com"
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-12 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white font-Orbitron font-bold text-sm py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-fuchsia-500/50"
              >
                SEND RESET LINK
              </button>

              {/* Back to Login */}
              <button
                onClick={handleBackToLogin}
                className="w-full mt-6 text-gray-400 hover:text-white font-Oxanium text-sm flex items-center justify-center gap-2 transition-colors"
              >
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                BACK TO LOGIN
              </button>
            </>
          ) : (
            <>
              {/* Confirmation View */}
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full flex items-center justify-center">
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
                Check Your Email
              </h2>

              {/* Message */}
              <p className="text-gray-400 text-center font-Oxanium text-sm mb-2">
                We've sent a password reset link to
              </p>
              <p className="text-fuchsia-500 text-center font-Oxanium font-semibold text-sm mb-4">
                {email}
              </p>
              <p className="text-gray-400 text-center font-Oxanium text-sm mb-6">
                Click the link in the email to reset your password.
              </p>

              {/* Pro Tip */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-Oxanium text-sm font-semibold mb-1">
                      Pro tip:
                    </p>
                    <p className="text-gray-400 font-Oxanium text-sm">
                      Check your spam folder if you don't see the email within a
                      few minutes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Didn't receive email text */}
              <p className="text-gray-400 text-center font-Oxanium text-sm mb-4">
                Didn't receive the email?
              </p>

              {/* Resend Button */}
              <button
                onClick={handleResendEmail}
                className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white font-Orbitron font-bold text-sm py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-fuchsia-500/50 mb-4"
              >
                RESEND EMAIL
              </button>

              {/* Back to Login */}
              <button
                onClick={handleBackToLogin}
                className="w-full text-gray-400 hover:text-white font-Oxanium text-sm flex items-center justify-center gap-2 transition-colors"
              >
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                BACK TO LOGIN
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
