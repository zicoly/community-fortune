import React, { useState } from "react";

const CompetitionMedia = () => {
  const [mediaType, setMediaType] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  const handleMediaTypeSelect = (type) => {
    setMediaType(type);
  };

  const handleFileUpload = (e, uploadType) => {
    const files = Array.from(e.target.files);
    if (uploadType === "gallery") {
      setGalleryFiles([...galleryFiles, ...files]);
    }
  };

  return (
    <div className="mt-8">
      <div
        className="rounded-2xl p-8"
        style={{
          background:
            "linear-gradient(21.31deg, rgba(0, 255, 255, 0.3) 28.08%, rgba(255, 0, 255, 0.3) 71.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Section Title */}
        <h2 className="text-white text-xl font-Orbitron font-semibold mb-8">
          Competition Media
        </h2>

        {/* Choose Media Type */}
        <div className="mb-8">
          <h3 className="text-white font-Orbitron font-semibold text-base mb-2">
            Choose Media Type
          </h3>
          <p className="text-gray-400 font-Oxanium text-sm mb-6">
            Choose an image or a video as the default competition media
          </p>

          {/* Media Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Upload Image */}
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "image")}
                className="hidden"
              />
              <div
                className="rounded-xl p-12 text-center transition-all hover:border-cyan-500"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "2px dashed rgba(0, 255, 255, 0.3)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-white font-Oxanium font-semibold text-base">
                  Upload an image
                </p>
              </div>
            </label>

            {/* Upload Video */}
            <label className="cursor-pointer">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileUpload(e, "video")}
                className="hidden"
              />
              <div
                className="rounded-xl p-12 text-center transition-all hover:border-cyan-500"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "2px dashed rgba(0, 255, 255, 0.3)",
                }}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-white font-Oxanium font-semibold text-base">
                  Upload a video
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Competition Gallery */}
        <div>
          <h3 className="text-white font-Orbitron font-semibold text-base mb-2">
            Competition Gallery
          </h3>
          <p className="text-gray-400 font-Oxanium text-sm mb-6">
            Add additional images to showcase the competition and prizes
          </p>

          {/* Gallery Upload */}
          <label className="cursor-pointer block">
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={(e) => handleFileUpload(e, "gallery")}
              className="hidden"
            />
            <div
              className="rounded-xl p-16 text-center transition-all hover:border-cyan-500"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                border: "2px dashed rgba(0, 255, 255, 0.3)",
              }}
            >
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <p className="text-white font-Oxanium font-semibold text-base mb-2">
                Add Multiple media ( Image/video)
              </p>
              {galleryFiles.length > 0 && (
                <p className="text-gray-400 font-Oxanium text-sm">
                  {galleryFiles.length} file(s) selected
                </p>
              )}
            </div>
          </label>

          {/* Display selected gallery files */}
          {galleryFiles.length > 0 && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryFiles.map((file, index) => (
                <div
                  key={index}
                  className="rounded-lg p-4 text-center"
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(0, 255, 255, 0.2)",
                  }}
                >
                  <svg
                    className="w-8 h-8 text-cyan-400 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-400 font-Oxanium text-xs truncate">
                    {file.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionMedia;
