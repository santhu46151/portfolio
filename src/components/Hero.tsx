"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Sync state with actual video element in case browser autoplay policies block it
    if (videoRef.current) {
      videoRef.current.volume = 1.0; // Force maximum system volume
      setIsPlaying(!videoRef.current.paused);
      setIsMuted(videoRef.current.muted);
      
      // Attempt to play unmuted. If browser blocks it, catch the error.
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented by browser policy because it's unmuted
          console.log("Autoplay unmuted blocked by browser:", error);
          setIsPlaying(false); // Update state to show it is paused
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative flex min-h-[100dvh] flex-col-reverse md:flex-row">
      {/* Left side content (Text) */}
      <div className="flex flex-1 items-center justify-center px-6 py-20 text-center md:items-start md:justify-center md:flex-col md:px-20 md:text-left z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-accent mb-4 text-lg font-semibold tracking-wide"
          >
            Hi, I'm Santhosh Kumar Kalla
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Data Analyst | <br className="hidden md:block" />
            Power BI Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-8 max-w-lg text-gray-400 mx-auto md:mx-0"
          >
            Transforming complex data into actionable insights through powerful visualizations and analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(30,58,138,0.5)]"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-gray-600 bg-transparent px-6 py-3 font-medium text-white transition-all hover:border-gray-400 hover:bg-white/5"
            >
              Contact Me <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side content (Video with no margins/padding, edge-to-edge) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative h-[60vh] w-full md:h-[100dvh] md:w-1/2 overflow-hidden"
      >
        <video
          ref={videoRef}
          src="/avatar-video.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          playsInline
          controls={false}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle gradient overlay to blend the left side into the video smoothly on desktop */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        
        {/* Video Controls Overlay */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-6 rounded-full bg-black/60 px-8 py-3 backdrop-blur-md shadow-lg z-20 border border-white/10">
          <button 
            onClick={togglePlay} 
            className="flex items-center gap-2 text-sm font-bold tracking-wider text-white hover:text-accent transition-colors"
          >
            {isPlaying ? (
              <><Pause size={18} /> PAUSE</>
            ) : (
              <><Play size={18} /> PLAY</>
            )}
          </button>
          
          <div className="h-4 w-px bg-white/30" />
          
          <button 
            onClick={toggleMute} 
            className="text-sm font-bold tracking-wider text-white hover:text-accent transition-colors"
          >
            {isMuted ? "🔇 UNMUTE" : "🔊 MUTE"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
