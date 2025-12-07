import React, { useState, useRef, useEffect } from "react";
import OTPBg from "/assets/images/otpBG.png";
import OTPBg2 from "/assets/images/otpBG2.png";
import Envelope from "/assets/icons/EnvelopeSimple.svg";
import DrFacilier from "/assets/images/dr-facilier.svg";
import WhiteDie from "/assets/icons/whiteDie.svg";
import PinkDie from "/assets/icons/pinkDie.svg";
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
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <main
      className="min-h-screen w-full relative flex items-center justify-center p-4 overflow-hidden"
      style={{
        background: `linear-gradient(90deg, rgba(25, 17, 56, 0.5) 0%, rgba(45, 6, 57, 0.5) 25%, rgba(82, 1, 82, 0.5) 50%, rgba(47, 0, 47, 0.5) 80%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${OTPBg}), url(${OTPBg2})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      {/* Pink Dice - Bottom Left */}
      <img
        src={PinkDie}
        alt="Pink Die"
        className="absolute -bottom-4 left-4 w-20 h-20 md:w-24 md:h-24"
        style={{ transform: "rotate(-15deg)" }}
      />

      {/* White Dice - Top Left */}
      <img
        src={WhiteDie}
        alt="White Die"
        className="absolute top-1/2 left-8 md:left-16 w-24 h-24 md:w-32 md:h-32 -translate-y-1/2"
        style={{ transform: "translateY(-50%) rotate(25deg)" }}
      />

      <div className="w-full max-w-6xl flex items-center justify-center relative">
        {/* Card Container */}
        <div
          className="w-full max-w-md rounded-2xl p-8 relative z-10"
          style={{
            background: `linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
            backdropFilter: "blur(24px)",
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
            Verify Your Email
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-center font-Oxanium text-sm mb-2">
            We've sent a 6-digit code to
          </p>
          <p className="text-center font-Oxanium text-sm mb-1">
            <span className="text-fuchsia-500 font-semibold">
              john.smith@example.com
            </span>
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
                className="w-12 h-14 rounded-lg text-white text-center text-xl font-Orbitron font-bold focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
                style={{
                  background: "#000000",
                  border: "0.5px solid rgba(0, 255, 255, 0.25)",
                  boxShadow: "0px 2px 12px 0px rgba(0, 255, 255, 0.1)",
                }}
              />
            ))}
          </div>

          {/* Timer */}
          <div className="text-center mb-6">
            <span
              className="text-cyan-400 font-Oxanium text-base font-semibold"
              style={{
                textShadow: "0px 4px 20px rgba(0, 255, 255, 0.7)",
              }}
            >
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
            className="w-full text-white font-Orbitron font-bold text-sm py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              border: "1.2px solid rgba(0, 255, 255, 0.05)",
            }}
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

        {/* Dr Facilier - Right Side */}
        <div className="hidden md:block absolute right-0 bottom-0 -mb-4">
          <img
            src={DrFacilier}
            alt="Dr Facilier"
            className="w-64 lg:w-80 xl:w-96 h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default OTP;
