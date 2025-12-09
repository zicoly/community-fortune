import React, { useState } from "react";
import CasinoGuard from "/assets/images/casinoGuard.svg";
import Logo from "/assets/icons/Polygon1.svg";
import checkMarkGreen from '/assets/icons/checkMarkGreen.svg';
import checkMarkWhite from '/assets/icons/checkMarkWhite.svg';
import cloud from '/assets/icons/cloud.svg';
import driversLicense from '/assets/icons/driversLicense.svg';
import GDPRCheckMark from '/assets/icons/GDPRCheckMark.svg';
import LockGreen from '/assets/icons/LockGreen.svg';
import LockSimple from '/assets/icons/LockSimple.svg';
import nationalID from '/assets/icons/nationalID.svg';
import passport from '/assets/icons/passport.svg';
import selfieCamera from '/assets/icons/selfieCamera.svg';
import ShieldNationalID from '/assets/icons/ShieldNationalID.svg';

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
      <div 
        className="w-full py-4"
        style={{
          background: 'linear-gradient(84.31deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(24px)'
        }}
      >
        <div className="flex items-center justify-center gap-3">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <h1 
            className="text-white text-2xl font-Orbitron font-medium tracking-wide"
            style={{
              textShadow: '0px 4px 24px rgba(255, 0, 255, 0.5)'
            }}
          >
            Community Fortune
          </h1>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative flex items-center justify-between mb-12">
          {/* Progress Line */}
          <div 
            className="absolute top-6 left-0 right-0 h-0.5 mx-12"
            style={{
              background: 'linear-gradient(90deg, #FF00FF 0%, #00FFFF 75%, rgba(255, 255, 255, 0.25) 76%)',
              border: '2px solid',
              borderImageSource: 'linear-gradient(90deg, #FF00FF 0%, #00FFFF 75%, rgba(255, 255, 255, 0.25) 76%)'
            }}
          ></div>

          {/* Step 1 - Account */}
          <div className="flex flex-col items-center z-10 relative">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
              style={{
                background: 'linear-gradient(135deg, #008000 0%, #002B00 100%)',
                border: '1.5px solid #008000'
              }}
            >
              <img src={checkMarkWhite} alt="Check" className="w-6 h-6" />
            </div>
            <span className="text-white font-Oxanium text-sm">Account</span>
          </div>

          {/* Step 2 - Email */}
          <div className="flex flex-col items-center z-10 relative">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
              style={{
                background: 'linear-gradient(135deg, #008000 0%, #002B00 100%)',
                border: '1.5px solid #008000'
              }}
            >
              <img src={checkMarkWhite} alt="Check" className="w-6 h-6" />
            </div>
            <span className="text-white font-Oxanium text-sm">Email</span>
          </div>

          {/* Step 3 - Identity (Active) */}
          <div className="flex flex-col items-center z-10 relative">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
              style={{
                background: 'linear-gradient(135deg, #FF00FF 0%, #4C004C 100%)',
                border: '1.5px solid #FF00FF',
                boxShadow: '0px 4px 24px rgba(255, 0, 255, 0.5)'
              }}
            >
              <span className="text-white font-Orbitron font-bold text-lg">3</span>
            </div>
            <span className="text-white font-Oxanium text-sm font-semibold">
              Identity
            </span>
          </div>

          {/* Step 4 - Compete */}
          <div className="flex flex-col items-center z-10 relative">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2) 0%, rgba(76, 0, 76, 0.2) 100%)',
                border: '1.5px solid rgba(255, 0, 255, 0.2)'
              }}
            >
              <span className="text-gray-400 font-Orbitron font-bold text-lg">4</span>
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
            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-white font-Orbitron font-semibold text-lg">
                  Why We Need This
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <img src={checkMarkGreen} alt="Check" className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Protect your account from fraud
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkMarkGreen} alt="Check" className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Comply with legal requirements
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkMarkGreen} alt="Check" className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Ensure you're 18+ for prize eligibility
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <img src={checkMarkGreen} alt="Check" className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-Oxanium text-sm">
                    Verify prize delivery address
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-700/50">
                <img src={LockGreen} alt="Lock" className="w-4 h-4" />
                <span className="text-gray-400 font-Oxanium text-xs">
                  Your information is encrypted and secure
                </span>
              </div>
            </div>

            {/* What We Accept */}
            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px)'
              }}
            >
              <h3 className="text-white font-Orbitron font-semibold text-lg mb-4">
                What We Accept
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {/* Passport */}
                <button
                  onClick={() => setSelectedDocument("passport")}
                  className="relative p-6 rounded-xl transition-all flex flex-col items-center gap-5"
                  style={
                    selectedDocument === "passport"
                      ? {
                          background: 'linear-gradient(137.75deg, rgba(255, 0, 255, 0.25) 0%, rgba(153, 0, 153, 0.25) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                          border: '1px solid',
                          borderImage: 'linear-gradient(137.75deg, rgba(255, 0, 255, 0.8) 0%, rgba(112, 0, 112, 0.8) 100%)'
                        }
                      : {
                          background: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }
                  }
                >
                  {selectedDocument === "passport" && (
                    <div 
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #FF00FF 0%, #4C004C 100%)',
                        border: '1.5px solid #FF00FF'
                      }}
                    >
                      <img src={checkMarkWhite} alt="Check" className="w-3 h-3" />
                    </div>
                  )}
                  <img src={passport} alt="Passport" className="w-12 h-12" />
                  <p className="text-white font-Oxanium text-sm font-semibold">
                    Passport
                  </p>
                </button>

                {/* Driver's License */}
                <button
                  onClick={() => setSelectedDocument("license")}
                  className="relative p-6 rounded-xl transition-all flex flex-col items-center gap-5"
                  style={
                    selectedDocument === "license"
                      ? {
                          background: 'linear-gradient(137.75deg, rgba(255, 0, 255, 0.25) 0%, rgba(153, 0, 153, 0.25) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                          border: '1px solid',
                          borderImage: 'linear-gradient(137.75deg, rgba(255, 0, 255, 0.8) 0%, rgba(112, 0, 112, 0.8) 100%)'
                        }
                      : {
                          background: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }
                  }
                >
                  {selectedDocument === "license" && (
                    <div 
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #FF00FF 0%, #4C004C 100%)',
                        border: '1.5px solid #FF00FF'
                      }}
                    >
                      <img src={checkMarkWhite} alt="Check" className="w-3 h-3" />
                    </div>
                  )}
                  <img src={driversLicense} alt="Driver's License" className="w-12 h-12" />
                  <p className="text-white font-Oxanium text-sm font-semibold">
                    Driver's License
                  </p>
                </button>

                {/* National ID */}
                <button
                  onClick={() => setSelectedDocument("national-id")}
                  className="relative p-6 rounded-xl transition-all flex flex-col items-center gap-5"
                  style={
                    selectedDocument === "national-id"
                      ? {
                          background: 'linear-gradient(137.75deg, rgba(255, 0, 255, 0.25) 0%, rgba(153, 0, 153, 0.25) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
                          border: '1px solid',
                          borderImage: 'linear-gradient(137.75deg, rgba(255, 0, 255, 0.8) 0%, rgba(112, 0, 112, 0.8) 100%)'
                        }
                      : {
                          background: 'rgba(0, 0, 0, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }
                  }
                >
                  {selectedDocument === "national-id" && (
                    <div 
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #FF00FF 0%, #4C004C 100%)',
                        border: '1.5px solid #FF00FF'
                      }}
                    >
                      <img src={checkMarkWhite} alt="Check" className="w-3 h-3" />
                    </div>
                  )}
                  <img src={nationalID} alt="National ID" className="w-12 h-12" />
                  <p className="text-white font-Oxanium text-sm font-semibold">
                    National ID
                  </p>
                </button>
              </div>
            </div>

            {/* Document Requirements */}
            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px)'
              }}
            >
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
            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px)'
              }}
            >
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
            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px)'
              }}
            >
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
                  <img src={cloud} alt="Upload" className="w-12 h-12 mx-auto mb-4" />
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
            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px)'
              }}
            >
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
                  <img src={selfieCamera} alt="Camera" className="w-12 h-12 mx-auto mb-4" />
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
            <div 
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
                backdropFilter: 'blur(24px)'
              }}
            >
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
              className="w-full text-white font-Orbitron font-bold text-base py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(90.63deg, #FF00FF -0.01%, #3E003E 99.99%)',
                boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.25)'
              }}
            >
              SUBMIT FOR VERIFICATION
            </button>
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="flex items-center justify-center gap-12 mt-12 pt-8">
          <div className="flex flex-col items-center gap-2">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(141.34deg, #00FFFF 0.69%, #009999 100%)',
                border: '1px solid #00FFFF',
                boxShadow: '0px 4px 24px 0px rgba(255, 0, 255, 0.8)'
              }}
            >
              <img src={LockSimple} alt="SSL" className="w-6 h-6" />
            </div>
            <span className="text-white font-Oxanium text-sm font-semibold">
              SSL Encrypted
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(141.34deg, #00FFFF 0.69%, #009999 100%)',
                border: '1px solid #00FFFF',
                boxShadow: '0px 4px 24px 0px rgba(255, 0, 255, 0.8)'
              }}
            >
              <img src={GDPRCheckMark} alt="GDPR" className="w-6 h-6" />
            </div>
            <span className="text-white font-Oxanium text-sm font-semibold">
              GDPR Compliant
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(141.34deg, #00FFFF 0.69%, #009999 100%)',
                border: '1px solid #00FFFF',
                boxShadow: '0px 4px 24px 0px rgba(255, 0, 255, 0.8)'
              }}
            >
              <img src={ShieldNationalID} alt="Verified" className="w-6 h-6" />
            </div>
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