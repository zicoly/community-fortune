import React, { useState } from "react";
import {
  Check,
  Shield,
  Lock,
  CheckCircle2,
  Upload,
  Camera,
} from "lucide-react";
import CasinoGuard from "/assets/images/casinoGuard.svg";
import Logo from "/assets/icons/Polygon1.svg";

const KYC = () => {
  const [selectedDocument, setSelectedDocument] = useState("passport");
  const [idDocument, setIdDocument] = useState(null);
  const [selfie, setSelfie] = useState(null);

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      if (type === "id") {
        setIdDocument(file);
      } else {
        setSelfie(file);
      }
    }
  };

  const handleSubmit = () => {
    if (idDocument && selfie) {
      console.log("Submitting verification...");
    }
  };

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${CasinoGuard})` }}
    >
      {/* Header */}
      <div className="w-full bg-gradient-to-b from-gray-900/95 to-gray-900/60 backdrop-blur-sm py-4">
        <div className="flex items-center justify-center gap-3">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-white text-2xl font-Orbitron font-medium tracking-wide">
            Community Fortune
          </h1>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative flex items-center justify-between mb-12">
          {/* Step 1 - Account */}
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2">
              <Check className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-Oxanium text-sm">Account</span>
          </div>

          {/* Progress Line 1 */}
          <div className="absolute top-6 left-[12.5%] right-[62.5%] h-1 bg-gradient-to-r from-green-600 to-green-600"></div>

          {/* Step 2 - Email */}
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2">
              <Check className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-Oxanium text-sm">Email</span>
          </div>

          {/* Progress Line 2 */}
          <div className="absolute top-6 left-[37.5%] right-[37.5%] h-1 bg-gradient-to-r from-green-600 to-fuchsia-500"></div>

          {/* Step 3 - Identity (Active) */}
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center mb-2 shadow-lg shadow-fuchsia-500/50">
              <span className="text-white font-Orbitron font-bold text-lg">
                3
              </span>
            </div>
            <span className="text-white font-Oxanium text-sm font-semibold">
              Identity
            </span>
          </div>

          {/* Progress Line 3 */}
          <div className="absolute top-6 left-[62.5%] right-[12.5%] h-1 bg-gray-600"></div>

          {/* Step 4 - Compete */}
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mb-2">
              <span className="text-gray-400 font-Orbitron font-bold text-lg">
                4
              </span>
            </div>
            <span className="text-gray-400 font-Oxanium text-sm">Compete</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Verify Your Identity */}
            <div>
              <h2 className="text-white text-3xl font-Orbitron font-bold mb-2">
                Verify Your Identity
              </h2>
              <p className="text-gray-400 font-Oxanium text-sm">
                To comply with regulations and keep our platform secure
              </p>
            </div>

            {/* Why We Need This */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-red-500" />
                <h3 className="text-white font-Orbitron font-semibold text-lg">
                  Why We Need This
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Protect your account from fraud
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Comply with legal requirements
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Ensure you're 18+ for prize eligibility
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Verify prize delivery address
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-700/50">
                <Lock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 font-Oxanium text-xs">
                  Your information is encrypted and secure
                </span>
              </div>
            </div>

            {/* What We Accept */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-Orbitron font-semibold text-lg mb-4">
                What We Accept
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {/* Passport */}
                <button
                  onClick={() => setSelectedDocument("passport")}
                  className={`relative p-6 rounded-xl border-2 transition-all ${
                    selectedDocument === "passport"
                      ? "border-fuchsia-500 bg-fuchsia-500/10"
                      : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                  }`}
                >
                  {selectedDocument === "passport" && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-fuchsia-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-4xl mb-2">📘</div>
                  <p className="text-white font-Oxanium text-sm font-semibold">
                    Passport
                  </p>
                </button>

                {/* Driver's License */}
                <button
                  onClick={() => setSelectedDocument("license")}
                  className={`relative p-6 rounded-xl border-2 transition-all ${
                    selectedDocument === "license"
                      ? "border-fuchsia-500 bg-fuchsia-500/10"
                      : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                  }`}
                >
                  {selectedDocument === "license" && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-fuchsia-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-4xl mb-2">🪪</div>
                  <p className="text-white font-Oxanium text-sm font-semibold">
                    Driver's License
                  </p>
                </button>

                {/* National ID */}
                <button
                  onClick={() => setSelectedDocument("national-id")}
                  className={`relative p-6 rounded-xl border-2 transition-all ${
                    selectedDocument === "national-id"
                      ? "border-fuchsia-500 bg-fuchsia-500/10"
                      : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                  }`}
                >
                  {selectedDocument === "national-id" && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-fuchsia-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-4xl mb-2">🆔</div>
                  <p className="text-white font-Oxanium text-sm font-semibold">
                    National ID
                  </p>
                </button>
              </div>
            </div>

            {/* Document Requirements */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📄</span>
                <h3 className="text-white font-Orbitron font-semibold text-lg">
                  Document must be:
                </h3>
              </div>
              <ul className="space-y-2 text-gray-300 font-Oxanium text-sm">
                <li>• Valid and not expired</li>
                <li>• Clear and readable (all text visible)</li>
                <li>• Full document visible (all corners shown)</li>
                <li>• Original color (no photocopies)</li>
              </ul>
            </div>

            {/* Photo Requirements */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📸</span>
                <h3 className="text-white font-Orbitron font-semibold text-lg">
                  Photo/Selfie must be:
                </h3>
              </div>
              <ul className="space-y-2 text-gray-300 font-Oxanium text-sm">
                <li>• Clear face visibility</li>
                <li>• No filters or editing</li>
                <li>• Good lighting</li>
                <li>• Matching the ID photo</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upload ID Document */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-Orbitron font-semibold text-lg mb-4">
                Upload ID Document
              </h3>
              <label className="block cursor-pointer">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,application/pdf"
                  onChange={(e) => handleFileUpload(e, "id")}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-fuchsia-500 transition-all">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-white font-Oxanium font-semibold mb-2">
                    {idDocument ? idDocument.name : "Drag & drop your ID here"}
                  </p>
                  <p className="text-gray-400 font-Oxanium text-sm mb-1">
                    or click to browse
                  </p>
                  <p className="text-gray-500 font-Oxanium text-xs">
                    PNG, JPG, PDF (Max 5mb)
                  </p>
                </div>
              </label>
            </div>

            {/* Upload Selfie */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-Orbitron font-semibold text-lg mb-4">
                Upload Selfie
              </h3>
              <label className="block cursor-pointer">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,application/pdf"
                  onChange={(e) => handleFileUpload(e, "selfie")}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-fuchsia-500 transition-all">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-white font-Oxanium font-semibold mb-2">
                    {selfie ? selfie.name : "Upload a selfie"}
                  </p>
                  <p className="text-gray-400 font-Oxanium text-sm mb-1">
                    or click to browse
                  </p>
                  <p className="text-gray-500 font-Oxanium text-xs">
                    PNG, JPG, PDF (Max 5mb)
                  </p>
                </div>
              </label>
            </div>

            {/* Tips for taking good photos */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-Orbitron font-semibold text-lg mb-4">
                Tips for taking good photos:
              </h3>
              <ul className="space-y-2 text-gray-300 font-Oxanium text-sm">
                <li>• Use natural lighting or a well-lit room</li>
                <li>
                  • Keep the camera steady or use a surface to prop your phone
                </li>
                <li>• Make sure all text on your ID is readable</li>
                <li>• Avoid glare or shadows on the document</li>
                <li>• Take the photo straight-on, not at an angle</li>
                <li>
                  • Having trouble? Contact our support team for assistance.
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!idDocument || !selfie}
              className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-Orbitron font-bold text-base py-5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-fuchsia-500/50 disabled:shadow-none"
            >
              SUBMIT FOR VERIFICATION
            </button>
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="flex items-center justify-center gap-12 mt-12 pt-8">
          <div className="flex flex-col items-center gap-2">
            <Lock className="w-8 h-8 text-cyan-400" />
            <span className="text-white font-Oxanium text-sm font-semibold">
              SSL Encrypted
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-cyan-400" />
            <span className="text-white font-Oxanium text-sm font-semibold">
              GDPR Compliant
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-white font-Oxanium text-sm font-semibold">
              National ID
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KYC;
