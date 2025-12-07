import React from "react";
import OTPBg from "/assets/images/otpBG.png";
import OTPBg2 from "/assets/images/otpBG2.png";
import KYCBG2 from "/assets/images/KYCBG2.svg";
import Logo from "/assets/icons/Polygon1.svg";

const KYCUnderReview = () => {
  return (
    <main
      className="min-h-screen w-full relative flex items-center justify-center p-4"
      style={{
        background: `url(${KYCBG2}), linear-gradient(90deg, rgba(25, 17, 56, 0.5) 0%, rgba(45, 6, 57, 0.5) 25%, rgba(82, 1, 82, 0.5) 50%, rgba(47, 0, 47, 0.5) 80%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${OTPBg}), url(${OTPBg2})`,
        backgroundRepeat: "no-repeat, repeat, repeat, repeat, repeat, repeat",
        backgroundSize: "cover, auto, auto, auto, auto, auto",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-6xl relative z-10">
        <div className="max-w-xl">
          {/* Card Container */}
          <div
            className="rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
              backdropFilter: "blur(24px)",
            }}
          >
            {/* Icon with checkmark */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF00FF 0%, #4C004C 100%)",
                  }}
                ></div>
                <div
                  className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF00FF 0%, #4C004C 100%)",
                    boxShadow: "0px 4px 24px 0px rgba(255, 0, 255, 0.5)",
                  }}
                >
                  <div className="relative">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #008000 0%, #002B00 100%)",
                        border: "1.5px solid #008000",
                      }}
                    >
                      <svg
                        className="w-4 h-4 text-white"
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
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white text-3xl font-Orbitron font-bold text-center mb-3">
              Documents Submitted!
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-center font-Oxanium text-sm mb-8">
              Your verification is under review
            </p>

            {/* What happens next */}
            <div className="mb-8">
              <h3 className="text-white font-Orbitron font-semibold text-lg mb-6">
                What happens next?
              </h3>

              {/* Timeline */}
              <div className="space-y-6">
                {/* Step 1 - Documents Received */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #008000 0%, #002B00 100%)",
                        border: "1.5px solid #008000",
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
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
                    <div className="w-0.5 h-full bg-linear-to-b from-green-600 to-yellow-500 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="text-white font-Oxanium font-semibold text-base mb-1">
                      Documents Received
                    </h4>
                    <p className="text-gray-500 font-Oxanium text-xs">
                      Just now
                    </p>
                  </div>
                </div>

                {/* Step 2 - Under Review */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)",
                        border: "1.5px solid #FFB800",
                        boxShadow: "0px 4px 16px rgba(255, 184, 0, 0.5)",
                      }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-0.5 h-full bg-linear-to-b from-yellow-500 to-gray-600 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="text-white font-Oxanium font-semibold text-base mb-1">
                      Under Review
                    </h4>
                    <p className="text-gray-500 font-Oxanium text-xs">
                      Estimated: 24-48 hours
                    </p>
                  </div>
                </div>

                {/* Step 3 - Verification Complete */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1.5px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-500 font-Oxanium font-semibold text-base mb-1">
                      Verification Complete
                    </h4>
                    <p className="text-gray-600 font-Oxanium text-xs">
                      You'll receive an email notification
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Protect your account */}
              <div
                className="rounded-xl p-6"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-Orbitron font-semibold text-sm">
                    Protect your account from fraud
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-400 font-Oxanium text-xs">
                    <svg
                      className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Document authenticity
                  </li>
                  <li className="flex items-start gap-2 text-gray-400 font-Oxanium text-xs">
                    <svg
                      className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Photo quality
                  </li>
                  <li className="flex items-start gap-2 text-gray-400 font-Oxanium text-xs">
                    <svg
                      className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Information match
                  </li>
                  <li className="flex items-start gap-2 text-gray-400 font-Oxanium text-xs">
                    <svg
                      className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Age verification
                  </li>
                </ul>
              </div>

              {/* Average Review Time */}
              <div
                className="rounded-xl p-6"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-Orbitron font-semibold text-sm">
                    Average Review Time
                  </h4>
                </div>
                <div className="mb-3">
                  <p
                    className="text-4xl font-Orbitron font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF00FF 0%, #00FFFF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    24-48h
                  </p>
                </div>
                <p className="text-gray-400 font-Oxanium text-xs">
                  95% approved within 48h
                  <br />
                  We'll email you as soon as it's done
                </p>
              </div>
            </div>

            {/* Status Button */}
            <button
              className="w-full text-white font-Orbitron font-bold text-sm py-4 px-6 rounded-lg mb-6 cursor-default"
              style={{
                background: "linear-gradient(90deg, #FFB800 0%, #FF8C00 100%)",
                boxShadow: "0px 4px 24px rgba(255, 184, 0, 0.3)",
              }}
            >
              Status: Under Review
            </button>

            {/* Questions */}
            <p className="text-gray-400 text-center font-Oxanium text-sm mb-4">
              Questions about verification?
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                className="w-full text-fuchsia-500 font-Orbitron font-bold text-sm py-3 px-6 rounded-lg transition-all hover:bg-fuchsia-500/10"
                style={{
                  background: "rgba(0, 0, 0, 0.25)",
                  border: "1.2px solid rgba(255, 0, 255, 0.5)",
                }}
              >
                Contact Support
              </button>
              <button
                className="w-full text-fuchsia-500 font-Orbitron font-bold text-sm py-3 px-6 rounded-lg transition-all hover:bg-fuchsia-500/10"
                style={{
                  background: "rgba(0, 0, 0, 0.25)",
                  border: "1.2px solid rgba(255, 0, 255, 0.5)",
                }}
              >
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KYCUnderReview;
