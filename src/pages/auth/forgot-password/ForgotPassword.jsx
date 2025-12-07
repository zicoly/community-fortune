import React, { useState } from "react";
import ForgotPassWordBG from "/assets/images/fpBG.jpg";

// Import SVGs
import Envelope from "/assets/icons/EnvelopeSimple.svg";
import EnvelopeInput from "/assets/icons/EnvelopeInput.svg";
import DrFacilier from "/assets/images/dr-facilier.svg";
import CasinoGirl from "/assets/images/3d-casino-girl.svg";
import WhiteDie from "/assets/icons/whiteDie.svg";
import PinkDie from "/assets/icons/pinkDie.svg";
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
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(25, 17, 56, 0.8) 0%, rgba(45, 6, 57, 0.8) 25%, rgba(82, 1, 82, 0.8) 50%, rgba(47, 0, 47, 0.8) 80%),
          url(${ForgotPassWordBG})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dice - Only show on first view */}
      {!showConfirmation && (
        <>
          {/* Pink Dice - Bottom Left (partially cut off) */}
          <img
            src={PinkDie}
            alt="Pink Die"
            className="absolute bottom-24 left-4 w-20 h-20 md:w-24 md:h-24 z-10"
            style={{ transform: "rotate(-15deg)" }}
          />

          {/* White Dice - Left side (near form) */}
          <img
            src={WhiteDie}
            alt="White Die"
            className="absolute top-[65%] left-8 md:left-16 w-24 h-24 md:w-32 md:h-32 -translate-y-1/2 z-10"
            style={{ transform: "translateY(-50%) rotate(25deg)" }}
          />
        </>
      )}

      <div className="w-full max-w-6xl flex items-center justify-center relative z-20">
        {/* Casino Girl - Left Side (only on confirmation view, lg+ screens) */}
        {showConfirmation && (
          <div className="hidden lg:block absolute left-0 bottom-0 -mb-4 z-10">
            <img
              src={CasinoGirl}
              alt="Casino Girl"
              className="w-56 xl:w-72 h-auto"
            />
          </div>
        )}

        {/* Card Container */}
        <div
          className="w-full max-w-md rounded-2xl p-8 relative z-20"
          style={{
            background: `linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Logo/Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <h1
              className="text-white text-2xl font-Orbitron font-medium tracking-wide"
              style={{
                textShadow: "0px 4px 24px rgba(255, 0, 255, 0.5)",
              }}
            >
              Community Fortune
            </h1>
          </div>

          {!showConfirmation ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-50"
                    style={{
                      background:
                        "linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)",
                    }}
                  ></div>
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF00FF 0%, #590059 100%)",
                      boxShadow: "0px 4px 24px 0px rgba(0, 255, 255, 0.5)",
                    }}
                  >
                    <img src={Envelope} alt="Envelope" className="w-10 h-10" />
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
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <img
                      src={EnvelopeInput}
                      alt="Email Icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.smith@example.com"
                    className="w-full rounded-lg px-12 py-3 text-gray-300 font-Oxanium placeholder-gray-600 focus:outline-none transition-colors"
                    style={{
                      background: "#000000",
                      border: "0.5px solid rgba(0, 255, 255, 0.25)",
                      boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full text-white font-Orbitron font-bold text-sm py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] mb-4"
                style={{
                  background:
                    "linear-gradient(90.63deg, #FF00FF -0.01%, #3E003E 99.99%)",
                  boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                SEND RESET LINK
              </button>

              {/* Back to Login */}
              <button
                onClick={handleBackToLogin}
                className="w-full text-white font-Oxanium text-sm flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(0, 0, 0, 0.25)",
                  border: "1.2px solid rgba(0, 255, 255, 0.05)",
                }}
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
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-50"
                    style={{
                      background:
                        "linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%)",
                    }}
                  ></div>
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF00FF 0%, #590059 100%)",
                      boxShadow: "0px 4px 24px 0px rgba(0, 255, 255, 0.5)",
                    }}
                  >
                    <img src={Envelope} alt="Envelope" className="w-10 h-10" />
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
              <div
                className="rounded-lg p-4 mb-6"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "0.5px solid rgba(0, 255, 255, 0.2)",
                }}
              >
                <div className="flex gap-3">
                  <div className="shrink-0">
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
                className="w-full text-white font-Orbitron font-bold text-sm py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] mb-4"
                style={{
                  background:
                    "linear-gradient(90.63deg, #FF00FF -0.01%, #3E003E 99.99%)",
                  boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                RESEND EMAIL
              </button>

              {/* Back to Login */}
              <button
                onClick={handleBackToLogin}
                className="w-full text-white font-Oxanium text-sm flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(0, 0, 0, 0.25)",
                  border: "1.2px solid rgba(0, 255, 255, 0.05)",
                }}
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

        {/* Dr Facilier - Right Side (only on first view, md+ screens) */}
        {!showConfirmation && (
          <div className="hidden md:block absolute right-0 bottom-0 -mb-4 z-10">
            <img
              src={DrFacilier}
              alt="Dr Facilier"
              className="w-64 lg:w-80 xl:w-96 h-auto"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default ForgotPassword;
