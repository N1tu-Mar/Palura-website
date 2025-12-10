'use client';

import Image from "next/image";
import { PixelStar, PixelBook, PixelAdventure, PixelLearning, PixelInnovation, PixelHeart, PixelGlobe, PixelEmail, PixelSocial, PixelCharacterReading, PixelCharacterWriting, PixelCharacterSpeaking } from "./components/PixelArt";
import TextType from "./components/TextType";
import TargetCursor from "./components/TargetCursor";
import PixelCard from "./components/PixelCard";
import AnimatedContent from "./components/AnimatedContent";
import ClickSpark from "./components/ClickSpark";
import PillNav from "./components/PillNav";
import BlurText from "./components/BlurText";
import TiltedCard from "./components/TiltedCard";
import ScrollFloat from "./components/ScrollFloat";

export default function Home() {
  return (
    <ClickSpark
      sparkColor='#FFD700'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen relative overflow-hidden">
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
      {/* GAMIFIED Pixel Art Background - Video Game World Introduction */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Sky gradient - Twilight/Dawn magical sky */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, #1e3a8a 0%, #3b82f6 15%, #8b5cf6 30%, #ec4899 45%, #f472b6 60%, #a78bfa 75%, #6366f1 90%, #1e3a5f 100%)'
        }}></div>
        
        {/* Magical starry sky with more stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animation: `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <PixelStar size={Math.random() * 3 + 2} />
            </div>
          ))}
        </div>
        
        {/* Large glowing celestial bodies */}
        <div className="absolute top-20 right-32 w-24 h-24 rounded-full" style={{
          background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, transparent 70%)',
          boxShadow: '0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.3)',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        
        {/* Shooting star */}
        <div className="absolute top-10 left-1/4 w-2 h-32" style={{
          background: 'linear-gradient(to bottom, transparent, #ff6b9d, #ffff00)',
          transform: 'rotate(-45deg)',
          animation: 'shootingStar 8s ease-in-out infinite',
          boxShadow: '0 0 20px rgba(255, 107, 157, 0.8)'
        }}></div>
        
        {/* Mystical clouds with pink/purple glow */}
        <div className="absolute top-20 left-10 w-40 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 drift rounded-full blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-48 h-24 bg-gradient-to-r from-pink-400/30 to-purple-400/30 drift rounded-full blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-44 h-22 bg-gradient-to-r from-purple-400/30 to-blue-400/30 drift rounded-full blur-sm" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-80 right-1/4 w-52 h-26 bg-gradient-to-r from-blue-400/25 to-purple-400/25 drift rounded-full blur-sm" style={{ animationDelay: '6s' }}></div>
        
        {/* Magical layered mountains - Enhanced Game World Style */}
        <svg className="absolute bottom-0 w-full h-3/4" viewBox="0 0 1200 800" preserveAspectRatio="none" style={{ imageRendering: 'pixelated' }}>
          <defs>
            <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4c1d95" />
              <stop offset="30%" stopColor="#6b21a8" />
              <stop offset="60%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6b21a8" />
              <stop offset="40%" stopColor="#8b5cf6" />
              <stop offset="70%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
            <linearGradient id="mountain3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9f1239" />
              <stop offset="30%" stopColor="#ec4899" />
              <stop offset="60%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="mountain4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c2d12" />
              <stop offset="30%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#6b21a8" />
            </linearGradient>
            <linearGradient id="mountain5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="40%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
            <radialGradient id="glow1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ffff00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glow2" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ff6b9d" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glow3" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Layered magical mountains - More layers for depth */}
          <path d="M 0 800 L 0 700 Q 150 680 300 660 T 600 640 T 900 620 T 1200 600 L 1200 800 Z" 
                fill="url(#mountain5)" opacity="0.5" />
          <path d="M 0 800 L 0 600 Q 200 580 400 560 T 600 520 T 800 540 T 1000 480 T 1200 500 L 1200 800 Z" 
                fill="url(#mountain4)" opacity="0.6" />
          <path d="M 0 800 L 0 550 Q 300 530 600 510 T 900 480 T 1200 490 L 1200 800 Z" 
                fill="url(#mountain3)" opacity="0.7" />
          <path d="M 0 800 L 0 450 Q 200 430 400 410 T 600 370 T 800 390 T 1000 330 T 1200 350 L 1200 800 Z" 
                fill="url(#mountain2)" opacity="0.8" />
          <path d="M 0 800 L 0 400 Q 150 380 300 360 T 500 330 T 700 350 T 900 310 T 1100 330 L 1200 350 L 1200 800 Z" 
                fill="url(#mountain1)" opacity="0.9" />
          
          {/* Glowing snow caps with magical pink/purple glow */}
          <ellipse cx="200" cy="380" rx="90" ry="45" fill="#f0f9ff" opacity="0.95" />
          <ellipse cx="200" cy="380" rx="100" ry="50" fill="url(#glow1)" />
          <ellipse cx="600" cy="350" rx="110" ry="55" fill="#f0f9ff" opacity="0.95" />
          <ellipse cx="600" cy="350" rx="120" ry="60" fill="url(#glow2)" />
          <ellipse cx="1000" cy="330" rx="100" ry="50" fill="#f0f9ff" opacity="0.95" />
          <ellipse cx="1000" cy="330" rx="110" ry="55" fill="url(#glow3)" />
          
          {/* Glowing stars on mountain peaks - Enhanced */}
          <g>
            <circle cx="200" cy="335" r="10" fill="#ffff00" opacity="0.95" />
            <circle cx="200" cy="335" r="16" fill="url(#glow1)" />
            <path d="M200 325 L200 345 M190 335 L210 335 M195 325 L205 345 M205 325 L195 345" stroke="#ffff00" strokeWidth="3" />
          </g>
          <g>
            <circle cx="600" cy="305" r="10" fill="#ff6b9d" opacity="0.95" />
            <circle cx="600" cy="305" r="16" fill="url(#glow2)" />
            <path d="M600 295 L600 315 M590 305 L610 305 M595 295 L605 315 M605 295 L595 315" stroke="#ff6b9d" strokeWidth="3" />
          </g>
          <g>
            <circle cx="1000" cy="285" r="10" fill="#8b5cf6" opacity="0.95" />
            <circle cx="1000" cy="285" r="16" fill="url(#glow3)" />
            <path d="M1000 275 L1000 295 M990 285 L1010 285 M995 275 L1005 295 M1005 275 L995 295" stroke="#8b5cf6" strokeWidth="3" />
          </g>
          
          {/* Winding magical river */}
          <path d="M 0 750 Q 200 740 400 745 T 600 735 T 800 740 T 1000 730 T 1200 735 L 1200 800 L 0 800 Z" 
                fill="#fb923c" opacity="0.4" />
          <path d="M 0 750 Q 200 740 400 745 T 600 735 T 800 740 T 1000 730 T 1200 735 L 1200 800 L 0 800 Z" 
                fill="url(#mountain4)" opacity="0.3" />
        </svg>
        
        {/* Magical forest/platform at bottom with glowing orb */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-[#1e3a5f] via-[#2d1b4e] to-[#1a1a2e]">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,0,0.15) 20px, rgba(255,255,0,0.15) 40px)'
          }}></div>
          
          {/* Large glowing magical orb (like in the images) */}
          <div className="absolute bottom-12 left-20 w-20 h-20" style={{ animation: 'pulse 3s ease-in-out infinite' }}>
            <div className="absolute inset-0 rounded-full" style={{
              background: 'radial-gradient(circle, #ff6b9d 0%, #ff8c42 40%, #ffff00 70%, transparent 100%)',
              boxShadow: '0 0 30px rgba(255, 107, 157, 0.8), 0 0 60px rgba(255, 140, 66, 0.6), 0 0 90px rgba(255, 255, 0, 0.4)'
            }}></div>
            <div className="absolute inset-2 rounded-full bg-black/20"></div>
            <div className="absolute inset-4 rounded-full" style={{
              background: 'radial-gradient(circle, #ffff00 0%, transparent 70%)'
            }}></div>
          </div>
          
          {/* Additional smaller glowing orbs */}
          <div className="absolute bottom-16 right-32 w-12 h-12 rounded-full" style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #ec4899 50%, transparent 70%)',
            boxShadow: '0 0 25px rgba(139, 92, 246, 0.7)',
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '1s'
          }}></div>
        </div>
        
        {/* Celestial symbols floating in sky */}
        <div className="absolute top-32 left-16 w-16 h-16" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <svg width="64" height="64" viewBox="0 0 64 64" style={{ imageRendering: 'pixelated' }}>
            <circle cx="32" cy="32" r="20" fill="#8b5cf6" opacity="0.6" />
            <circle cx="32" cy="32" r="12" fill="#ec4899" opacity="0.8" />
            <path d="M32 20 L34 28 L42 28 L35 33 L37 41 L32 36 L27 41 L29 33 L22 28 L30 28 Z" fill="#ffff00" />
            <circle cx="32" cy="32" r="24" fill="none" stroke="#ffff00" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Navigation - PillNav Component */}
      <div className="relative z-50 w-full flex justify-center">
        <PillNav
          logo="/logo.svg"
          logoAlt="Palura Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Product', href: '#product' },
            { label: 'Mission', href: '#mission' },
            { label: 'Contact', href: '#contact' }
          ]}
          activeHref="#product"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>

      {/* Section 1: Product Overview - Hero with Background Image */}
      <section id="product" className="relative w-full min-h-screen pt-32">
        <div
          className="absolute inset-0 w-full min-h-screen bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/backgrounds/palura-bg-main.png")',
            backgroundPosition: '50% 0%',
            backgroundSize: 'cover',
            top: '0',
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-screen">
            <div className="max-w-6xl mx-auto w-full">
              {/* Main dialogue box */}
              <div className="undertale-box float mb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                  <PixelStar size={32} />
                  <TextType
                    as="h1"
                    text={["Welcome to Palura!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    loop={false}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold undertale-yellow pixel-text"
                  />
                </div>
                <TextType
                  as="p"
                  text={["We use 2D and 3D videogames to teach your child: reading, speech, and writing!"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  loop={false}
                  initialDelay={2000}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed"
                />
                
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8">
                  <PixelCharacterReading size={80} />
                  <PixelCharacterWriting size={80} />
                  <PixelCharacterSpeaking size={80} />
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="https://cal.com/nityanth-m-veen3w/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="celeste-button text-base sm:text-lg"
                  >
                    Early Demo →
                  </a>
                </div>
              </div>
              
              {/* Feature cards - TiltedCard */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center">
                  <TiltedCard
                    imageSrc="/Adventure.png"
                    altText="Interactive Learning"
                    captionText="Interactive Learning"
                    containerHeight="300px"
                    containerWidth="100%"
                    imageHeight="300px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="text-center p-4">
                        <div className="mb-2">
                          <PixelLearning size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Interactive Learning</h3>
                        <p className="text-white text-sm">
                          Learn through gameplay mechanics that make education engaging and fun.
                        </p>
                      </div>
                    }
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <TiltedCard
                    imageSrc="/Adventure.png"
                    altText="Adventure Awaits"
                    captionText="Adventure Awaits"
                    containerHeight="300px"
                    containerWidth="100%"
                    imageHeight="300px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="text-center p-4">
                        <div className="mb-2">
                          <PixelAdventure size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Adventure Awaits</h3>
                        <p className="text-white text-sm">
                          Embark on epic journeys through beautifully crafted pixel-art worlds.
                        </p>
                      </div>
                    }
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <TiltedCard
                    imageSrc="/Adventure.png"
                    altText="Educational Content"
                    captionText="Educational Content"
                    containerHeight="300px"
                    containerWidth="100%"
                    imageHeight="300px"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="text-center p-4">
                        <div className="mb-2">
                          <PixelBook size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Educational Content</h3>
                        <p className="text-white text-sm">
                          Curriculum-aligned content that makes learning an adventure.
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Village Background Wrapper - starts below hero section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/backgrounds/palura-village-1.png")',
          imageRendering: "pixelated"
        }}
      >

        {/* Section 2: Mission */}
        <section
          id="mission"
          className="relative min-h-screen w-full flex items-center justify-center px-4 py-20"
        >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="undertale-box">
            <div className="flex items-center gap-3 mb-8">
              <PixelStar size={32} />
              <BlurText
                text="OUR MISSION"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-6xl font-bold undertale-yellow pixel-text"
              />
            </div>
            
            <div className="space-y-8 text-lg text-white leading-relaxed">
              <BlurText
                text="We believe that learning should be an adventure, not a chore."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-xl md:text-2xl text-center mb-10 undertale-yellow"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div className="celeste-card">
                    <div className="flex items-center gap-2 mb-4">
                      <PixelStar size={24} />
                      <h3 className="text-2xl font-bold undertale-yellow">Our Vision</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      To build immersive experiences that blend videogames with education!<br />
                      Making reading, speech, and writing fun for every child!
                    </p>
                  </div>
                </AnimatedContent>
                
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.5}
                >
                  <div className="celeste-card">
                    <div className="flex items-center gap-2 mb-4">
                      <PixelStar size={24} />
                      <h3 className="text-2xl font-bold undertale-yellow">Our Approach</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      We feature an ecosystem of games that inspire kids to read, write, and speak! 
                    </p>
                  </div>
                </AnimatedContent>
              </div>
              
              <div className="mt-10 celeste-card">
                <h3 className="text-2xl font-bold mb-6 text-center undertale-yellow">Core Values</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="mb-3 flex justify-center">
                      <PixelInnovation size={40} />
                    </div>
                    <div className="font-bold text-lg undertale-yellow">Innovation</div>
                  </div>
                  <div>
                    <div className="mb-3 flex justify-center">
                      <PixelHeart size={40} />
                    </div>
                    <div className="font-bold text-lg undertale-yellow">Passion</div>
                  </div>
                  <div>
                    <div className="mb-3 flex justify-center">
                      <PixelGlobe size={40} />
                    </div>
                    <div className="font-bold text-lg undertale-yellow">Accessibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Section 3: Contact Us */}
      <section id="contact" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/backgrounds/contact-bg-forest.png")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>
        <div className="relative z-10 flex items-center justify-center px-4 py-20 min-h-screen">
          <div className="max-w-6xl mx-auto w-full">
            <div className="undertale-box">
              <div className="flex items-center gap-3 mb-8">
                <PixelStar size={32} />
                <ScrollFloat
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  containerClassName="text-4xl md:text-6xl font-bold undertale-yellow pixel-text"
                >
                  CONTACT US
                </ScrollFloat>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="celeste-card">
                  <div className="flex items-center gap-2 mb-4">
                    <PixelEmail size={24} />
                    <h3 className="text-2xl font-bold undertale-yellow">Email</h3>
                  </div>
                  <a href="mailto:nityanth.maramreddy@gmail.com" className="text-white text-xl mb-2 hover:text-yellow-400 transition-colors block">
                    nityanth.maramreddy@gmail.com
                  </a>
                  <p className="text-gray-400 text-sm">We typically respond within 24 hours</p>
                </div>
                
                <div className="celeste-card">
                  <div className="flex items-center gap-2 mb-4">
                    <PixelSocial size={24} />
                    <h3 className="text-2xl font-bold undertale-yellow">Social Media</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a href="https://www.instagram.com/palura.official/" className="text-white hover:text-yellow-400 transition-colors font-bold text-lg">Instagram</a>
                    <a href="#" className="text-white hover:text-yellow-400 transition-colors font-bold text-lg">Discord</a>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="undertale-box space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-white font-bold mb-2 undertale-yellow text-lg">NAME</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full px-4 py-3 bg-black border-2 border-white text-white focus:outline-none focus:border-yellow-400 rounded-lg"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-2 undertale-yellow text-lg">EMAIL</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 bg-black border-2 border-white text-white focus:outline-none focus:border-yellow-400 rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-2 undertale-yellow text-lg">MESSAGE</label>
                  <textarea 
                    rows={6}
                    name="message"
                    className="w-full px-4 py-3 bg-black border-4 border-white text-white focus:outline-none focus:border-yellow-400 resize-none"
                    style={{ imageRendering: 'pixelated', borderRadius: '0' }}
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <button type="submit" className="celeste-button w-full text-lg">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 undertale-box mx-4 mb-4 max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-white text-sm">
            © 2025 PALURA. All rights reserved. | Made with <PixelHeart size={16} className="inline-block" /> for gamers and learners
          </p>
        </div>
      </footer>
      </div>
    </ClickSpark>
  );
}
