import React, { useState, useRef, useEffect } from "react";
import OTPBg from "/assets/images/otpBG.png";
import OTPBg2 from "/assets/images/otpBG2.png";
import Logo from "/assets/icons/Polygon1.svg";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split("").concat(Array(6).fill("")).slice(0, 6);
      setOtp(newOtp);
      const nextEmpty = newOtp.findIndex((val) => !val);
      if (nextEmpty !== -1) {
        inputRefs.current[nextEmpty]?.focus();
      } else {
        inputRefs.current[5]?.focus();
      }
    }
  };

  const handleResendCode = () => {
    setTimer(59);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length === 6) {
      console.log("Verifying code:", code);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center p-4"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(25,17,56,0.5) 0%, rgba(45,6,57,0.5) 25%, rgba(82,1,82,0.5) 50%, rgba(47,0,47,0.5) 80%),
          linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05)),
          linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url(${OTPBg}),
          url(${OTPBg2})
        `,
        backgroundRepeat: "repeat, repeat, repeat, repeat, repeat",
        backgroundSize: "auto, auto, auto, auto, auto",
      }}
    >
      <div className="w-full max-w-md">
        <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
          {/* Logo/Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <h1 className="text-white text-2xl font-Orbitron font-medium tracking-wide">
              Community Fortune
            </h1>
          </div>

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
            Verify Your Email
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-center font-Oxanium text-sm mb-2">
            We've sent a 6-digit code to
          </p>
          <p className="text-center font-Oxanium text-sm mb-1">
            <span className="text-fuchsia-500 font-semibold">john.smith@example.com</span>
            <span className="text-yellow-400 ml-1">✏️</span>
          </p>
          <p className="text-gray-400 text-center font-Oxanium text-sm mb-8">
            Please check your inbox and enter the code below
          </p>

          {/* OTP Input Fields */}
          <div className="flex gap-3 justify-center mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-14 bg-gray-900/60 border border-gray-700 rounded-lg text-white text-center text-xl font-Orbitron font-bold focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
              />
            ))}
          </div>

          {/* Timer */}
          <div className="text-center mb-6">
            <span className="text-gray-400 font-Oxanium text-base">
              {formatTime(timer)}
            </span>
          </div>

          {/* Resend Code */}
          <div className="text-center mb-6">
            <span className="text-gray-400 font-Oxanium text-sm">
              Didn't receive the code?{" "}
            </span>
            <button
              onClick={handleResendCode}
              disabled={timer > 0}
              className={`font-Oxanium text-sm font-semibold ${
                timer > 0
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-fuchsia-500 hover:text-fuchsia-400"
              } transition-colors`}
            >
              Resend Code
            </button>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={otp.join("").length !== 6}
            className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-Orbitron font-bold text-sm py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-fuchsia-500/50 disabled:shadow-none mb-6"
          >
            VERIFY EMAIL
          </button>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 pt-6 border-t border-gray-800/50">
            <button className="text-gray-400 hover:text-white font-Oxanium text-sm transition-colors">
              Wrong Email?
            </button>
            <button className="text-gray-400 hover:text-white font-Oxanium text-sm transition-colors">
              Need Help?
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OTP;