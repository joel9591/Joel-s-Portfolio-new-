import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HeroSection() {
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setTransform({
      rotateX: y * 10,
      rotateY: -x * 10,
      scale: 1.05
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1
    });
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/resume/Joel_2exp_Full_Stack_Developer.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Joel_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
    >
      <div className="container flex flex-col items-center justify-between gap-12 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 z-10"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-primary mb-2"
            >
              Hey, I'm <span className="font-semibold">Joel J</span> 👋
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Full Stack <span className="text-primary">Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-xl text-muted-foreground max-w-[600px]"
            >
              Dynamic and results-driven Full Stack Software Developer with expertise in React.js, JavaScript, Node.js, Python and more.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleDownloadResume}
              className="group"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>

        
        <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
          
          <motion.div
            className="relative h-full w-full rounded-full overflow-hidden shadow-2xl cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
              transformStyle: "preserve-3d",
              transition: "transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/HeroImage.jpg"
              alt="Joel J - Full Stack Developer"
              width={500}
              height={500}
              className="h-full w-full object-cover"
              style={{
                transform: "translateZ(50px)",
                transition: "transform 0.5s ease-out"
              }}
            />
            
           
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
          
          
          <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-primary/20 blur-md group-hover:bg-primary/30 transition-all duration-500"></div>
          <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-primary/10 blur-md group-hover:bg-primary/20 transition-all duration-700"></div>
        </div>
      </div>

      
      <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
    </section>
  );
}


