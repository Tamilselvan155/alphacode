import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useDrawer } from '../../context/DrawerContext';
import Logo from '../../components/Logo';
import homeimg from '../../assets/img/awsCloud.jpg'; // Import your custom styles

export default function HeroSection() {
  const [activeContent, setActiveContent] = useState(0);
  const [animatedText, setAnimatedText] = useState("");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const { openDrawer } = useDrawer();

  // Content data for the hero section
  const contentData = [
    {
      subtitle: "Crafting Intelligent Systems that Evolve with Your Goals.",
      ctaText: "Let's Connect",
      secondaryCtaText: "Know More",
    },
  ];

  // Animation phrases
  const phrases = [
    "Application Development",
    "Software Testing", 
    "Custom Software",
    "SaaS",
    "Digital Growth Solutions",
    "HRMS",
    "CRM",
    "Project Management",
    "Finance Management",
    "DATA & AI",
  ];

  // Text animation effect
  useEffect(() => {
    let currentIndex = 0;
    setAnimatedText(phrases[0]);
    
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      setAnimatedText(phrases[currentIndex]);
    }, 2000);
    
    return () => clearInterval(textInterval);
  }, []);

  // Auto-rotate content (if you have multiple content items in the future)
  useEffect(() => {
    if (contentData.length > 1) {
      const contentInterval = setInterval(() => {
        setActiveContent((prevIndex) => (prevIndex + 1) % contentData.length);
      }, 6000);
      
      return () => clearInterval(contentInterval);
    }
  }, [contentData.length]);

  // Video initialization and playback handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const initializeVideo = async () => {
      try {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.autoplay = true;
        
        // Using the correct path to the video file
        const videoPath = '/src/assets/homeVideo.mp4';
        video.src = videoPath;
        
        // Handle video loading
        video.onloadeddata = () => {
          setIsVideoLoaded(true);
          video.play().catch(console.error);
        };

        video.onerror = (error) => {
          console.error("Video loading error:", error); 
          setIsVideoLoaded(false);
        };

        await video.load();
      } catch (error) {
        console.error("Video initialization failed:",  error);
        setIsVideoLoaded(false);
      }
    };

    initializeVideo();

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        video.play().catch(console.error);
      }
    };

    // Handle user interaction to start video
    const handleUserInteraction = () => {
      if (video.paused) {
        video.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <Logo />
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='100%25' height='100%25' fill='%23000'/%3E%3C/svg%3E"
        >
          <source src="/src/assets/homeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <img src={homeimg} alt="" /> */}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Loading indicator for video */}
      {/* <div className={`absolute inset-0 z-30 bg-black flex items-center justify-center transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="text-white text-xl">Loading...</div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="w-full max-w-4xl mx-auto">
          {contentData.map((content, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out ${
                activeContent === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Subtitle */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-6 text-gray-200">
                {content.subtitle}
              </h2>
              
              {/* Animated Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 min-h-[80px] md:min-h-[120px] flex items-center justify-center">
                <span className="text-blue-400 transition-all duration-300 ease-in-out">
                  {animatedText}
                </span>
              </h1>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <button 
                  onClick={openDrawer}
                  className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {content.ctaText}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={openDrawer}
                  className="group border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg flex items-center transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {content.secondaryCtaText}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}