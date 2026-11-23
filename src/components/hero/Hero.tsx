"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  // Typing animation configuration
  const typingContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const typingLetter = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline-block" },
  };

  const greetingText = "Hello, I'm";
  const nameFirst = "Zahid";
  const nameLast = "Abbas";

  const goldColor = "#f3d54f"; 

  return (
    <section aria-labelledby="hero-heading" className="container hero" id="home">
      <div className="hero-copy">
      
        <div className="availability">
          <span></span>
          FULL-STACK WEB DEVELOPMENT
        </div>
        
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="visible"
          className="typing-wrapper"
          style={{ marginTop: "1rem" }}
        >
          <p className="hero-greeting">
            {greetingText.split("").map((char, index) => (
              <motion.span key={`g-${index}`} variants={typingLetter}>
                {char}
              </motion.span>
            ))}
          </p>
          <h1 id="hero-heading">
            <span style={{ color: goldColor }}>
              {nameFirst.split("").map((char, index) => (
                <motion.span key={`n1-${index}`} variants={typingLetter}>
                  {char}
                </motion.span>
              ))}
            </span>
            
            <span style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>
            
            <span style={{ color: goldColor }}>
              {nameLast.split("").map((char, index) => (
                <motion.span key={`n2-${index}`} variants={typingLetter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <div className="hero-role">
            <span aria-hidden="true" className="role-mark">
              ZA
            </span>
            
            {/* Typewriter text */}
            <span className="hero-typewriter-text" suppressHydrationWarning>
              <Typewriter
                words={[
                  'Software Engineer',
                  'Full Stack Web Developer',
                  'MERN Stack Developer'
                ]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>
        </motion.div>

        <p className="hero-description">
          I build scalable full-stack web applications and modern user interfaces
          with Next.js, React, Node.js &amp; MongoDB — handcrafted with clean code and care.
        </p>
        
        <div className="hero-actions">
          <Button arrow href="#projects" className="button button-yellow">
            View my projects
          </Button>
          <Button arrow href="#contact" className="button button-outline">
            Contact me
          </Button>
        </div>

        <motion.div 
          className="hero-social-strip"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.4 }
            }
          }}
        >
          {[
            { name: "GitHub", href: "https://github.com/Zahid3324", icon: <FaGithub size={20} /> },
            { name: "LinkedIn", href: "https://linkedin.com/in/zahidabbas", icon: <FaLinkedin size={20} /> },
            { name: "Facebook", href: "https://facebook.com/Zahid Abbas", icon: <FaFacebook size={20} /> },
            { name: "Instagram", href: "https://instagram.com/zahid_abbas_", icon: <FaInstagram size={20} /> },
            { name: "WhatsApp", href: "https://wa.me/923281443858", icon: <FaWhatsapp size={20} /> },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={`hero-social-pill hero-social-${item.name.toLowerCase()}`}
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              }}
              whileHover={{ 
                scale: 1.18, 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.92 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <p className="hero-caption">DESIGN · DEVELOPMENT · DEPLOYMENT</p>
      </div>

      <div className="portrait-wrap">
        <div className="portrait-glow" />
        
        <motion.div 
          className="portrait-frame"
          animate={{ scale: [1, 1.04, 1] }} 
          transition={{ 
            duration: 4,       
            repeat: Infinity,   
            ease: "easeInOut"   
          }} 
        >
          <Image
            alt="Portrait of Zahid Abbas in a modern workspace"
            fill
            priority
            sizes="(max-width: 680px) 90vw, (max-width: 900px) 44vw, 430px"
            src="/profile.png" 
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        
        <span className="portrait-stamp">
          BUILD
          <br />
          WITH
          <br />
          CARE
        </span>
        <span className="portrait-chip">Thoughtful by design</span>
        <span className="hero-art-label">FULL STACK · END TO END</span>
      </div>
    </section>
  );
}