import { motion } from "framer-motion";
import Polygon from "/assets/icons/Polygon1.svg";
import { CircleCheck } from "lucide-react";
import CheckCircle from "/assets/icons/CheckCircle.svg"

const SignUpHeroSection = ({
  imagePath = "assets/images/Frame6.png",
  title = "Community Fortune",
  subtitle = "Join the Winners",
  features = [
    { icon: "🏆", text: "Licensed & secure platform" },
    { icon: "🎯", text: "Join multiple lotteries" },
    { icon: "💰", text: "Earn rewards & bonuses" },
    { icon: "🎮", text: "Regular draws" },
  ],
  additional = [
    { text: "18+" },
    { text: "Regulated" },
    { text: "Responsible Gaming" },
  ],
}) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Main Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full w-full relative z-5"
      >
        <img
          src={imagePath}
          alt={title}
          className="h-full w-full object-cover object-bottom"
        />
      </motion.div>

      {/* Floating Cards Layer - Will be added later */}
      <div className="absolute inset-0 z-20">
        {/* FloatingCardsSignup component will go here */}
      </div>

      {/* Scanlines Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 z-25"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0px, transparent 1px, transparent 2px, rgba(255, 255, 255, 0.1) 3px)",
        }}
      />

      {/* Glassmorphism Card Overlay - Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 z-30"
      >
        <div className="backdrop-blur-md bg-black/50 rounded-3xl px-8 py-12 border border-[#3A004F] shadow-2xl min-w-lg">
          {/* Branding */}
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="flex justify-center items-center space-x-4 mb-6"
            >
              <img src={Polygon} alt="" sizes={25} />
              <h2
                className="text-2xl font-bold tracking-wider text-white"
                style={{ fontFamily: "Orbitron" }}
              >
                {title}
              </h2>
            </motion.div>
            <p
              className="text-4xl font-bold text-white mx-auto text-center max-w-96 tracking-wider leading-normal mb-6"
              style={{
                textShadow: "0 0 12px rgba(255, 0, 255, 0.5)",
                fontFamily: "Orbitron",
              }}
            >
              {subtitle}
            </p>
            <p className="font-Oxanium text-lg text-white flex justify-center leading-normal tracking-wider">
              Start winning amazing prizes today
            </p>
          </div>

          {/* Features List */}
          <div className="">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + idx * 0.1, type: "spring" }}
                className="flex items-center"
              >
                <img src={feature.icon} sizes={20} className="mt-1" />
                <p className="text-white font-normal text-sm font-Oxanium tracking-wider leading-normal">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="flex mt-6">
            {additional.map((addition, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex flex-1 items-center gap-2"
              >
                <img src={CheckCircle} />
                <p className="font-normal text-sm font-Oxanium text-white tracking-wider leading-normal text-nowrap">
                  {addition.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpHeroSection;
