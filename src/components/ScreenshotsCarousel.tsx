import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const screenshots = [
  '/assets/ScreenShot-00001.jpeg',
  '/assets/ScreenShot-00002.jpeg',
  '/assets/ScreenShot-00003.jpeg',
  '/assets/ScreenShot-00004.jpeg',
  '/assets/ScreenShot-00005.jpeg',
  '/assets/ScreenShot-00006.jpeg',
  '/assets/ScreenShot-00007.jpeg',
  '/assets/ScreenShot-00008.jpeg',
];

interface PhoneCardProps {
  src: string;
  index: number;
  rotation: number;
  totalCards: number;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ src, index, rotation, totalCards }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const anglePerCard = 360 / totalCards;
  const cardAngle = index * anglePerCard + rotation;
  const radians = (cardAngle * Math.PI) / 180;
  
  // 3D positioning on a cylinder
  const radius = 580;
  const x = Math.sin(radians) * radius;
  const z = Math.cos(radians) * radius - radius;
  
  // Calculate opacity and scale based on z position (front = 1, back = 0.3)
  const normalizedZ = (z + radius) / (radius * 2);
  const opacity = 0.3 + normalizedZ * 0.7;
  const scale = 0.6 + normalizedZ * 0.4;
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        x,
        z,
        rotateY: -cardAngle,
      }}
      animate={{
        opacity: isHovered ? 1 : opacity,
        scale: isHovered ? scale * 1.15 : scale,
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-[280px] h-[600px] rounded-[2.5rem] overflow-hidden transition-all duration-300 ${
          isHovered ? 'shadow-[0_0_60px_rgba(168,85,247,0.5)]' : 'shadow-2xl'
        }`}
        style={{
          background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
          border: '3px solid #27272a',
        }}
      >
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />
        
        {/* Screenshot */}
        <img
          src={src}
          alt={`App Screenshot ${index + 1}`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        {/* Shine effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)',
          }}
        />
      </div>
    </motion.div>
  );
};

export const ScreenshotsCarousel: React.FC = () => {
  const rotation = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastX = useRef(0);
  
  // Auto-rotate when not dragging
  useEffect(() => {
    if (isDragging) return;
    
    const controls = animate(rotation, rotation.get() + 360, {
      duration: 30,
      ease: 'linear',
      repeat: Infinity,
    });
    
    return () => controls.stop();
  }, [isDragging, rotation]);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    lastX.current = e.clientX;
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastX.current;
    rotation.set(rotation.get() + deltaX * 0.3);
    lastX.current = e.clientX;
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    lastX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - lastX.current;
    rotation.set(rotation.get() + deltaX * 0.3);
    lastX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const currentRotation = useTransform(rotation, (r) => r);
  const [rotationValue, setRotationValue] = useState(0);
  
  useEffect(() => {
    const unsubscribe = currentRotation.on('change', (v) => {
      setRotationValue(v);
    });
    return () => unsubscribe();
  }, [currentRotation]);

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          لقطات من التطبيق
        </motion.h2>
        <motion.p 
          className="text-zinc-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          استكشف واجهة المستخدم العصرية والميزات المبتكرة
        </motion.p>
        <motion.p 
          className="text-zinc-500 text-sm mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          اسحب للتدوير
        </motion.p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative h-[720px] flex items-center justify-center select-none"
        style={{ perspective: '1200px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Glow effect behind carousel */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(168,85,247,0.15) 0%, transparent 70%)',
          }}
        />
        
        <div 
          className="relative flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {screenshots.map((src, index) => (
            <PhoneCard
              key={index}
              src={src}
              index={index}
              rotation={rotationValue}
              totalCards={screenshots.length}
            />
          ))}
        </div>
      </div>
      
      {/* Reflection gradient */}
      <div 
        className="h-32 -mt-16 relative z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8) 50%, black)',
        }}
      />
    </section>
  );
};
