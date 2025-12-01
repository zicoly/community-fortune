import { motion } from "framer-motion";
import FloatingCards from "./FloatingCard";
import Polygon from "/assets/icons/Polygon1.svg";

const HeroSection = ({
  imagePath = "assets/images/Frame5.png",
  title = "Community Fortune",
  subtitle = "Welcome Back, Champion",
  text = "Your next prize awaits",
  stats = [
    { icon: "👥", label: "1000+ Active Users", value: "1000+" },
    { icon: "💰", label: "Won Daily", value: "E30+" },
    { icon: "🏆", label: "Win Rate", value: "90%" },
  ],
}) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-red-950 opacity-70 z-10" /> */}

      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, 0.3) 25%, rgba(255, 0, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, 0.3) 75%, rgba(255, 0, 255, 0.3) 76%, transparent 77%, transparent), 
                           linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, 0.3) 25%, rgba(255, 0, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, 0.3) 75%, rgba(255, 0, 255, 0.3) 76%, transparent 77%, transparent)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full w-full relative z-5"
      >
        <img
          src={imagePath}
          alt={title}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-20">
        <FloatingCards />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-5 z-25"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0px, transparent 1px, transparent 2px, rgba(255, 255, 255, 0.1) 3px)",
        }}
      />

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 z-30"
      >
        <div className="backdrop-blur-md bg-black/50 rounded-3xl px-6 py-10 border border-[#3A004F] shadow-2xl w-xl">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <img src={Polygon} alt="" sizes={25} />
            <h2
              className="text-2xl font-bold tracking-wider text-white"
              style={{ fontFamily: "Orbitron" }}
            >
              {title}
            </h2>
          </div>
          <p
            className="text-4xl font-bold text-white mx-auto text-center max-w-96 tracking-wider leading-normal mb-6"
            style={{
              textShadow: "0 0 12px rgba(255, 0, 255, 0.5)",
              fontFamily: "Orbitron",
            }}
          >
            {subtitle}
          </p>
          <span className="font-Oxanium text-lg text-white flex justify-center leading-normal tracking-wider">
            {text}
          </span>

          <div className="grid grid-cols-2 last:col-span-3 w-full mt-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + idx * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center w-full gap-2"
              >
                <img src={stat.icon} sizes={20} className="size-14 mt-0.5"/>
                <div className="flex items-center text-base font-Oxanium text-white tracking-wider leading-normal">
                  <span>{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
