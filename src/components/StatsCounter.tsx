import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const StatsCounter: React.FC = () => {
  const [count, setCount] = useState(125430);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8">
        <div className="text-center">
          <motion.div
            key={count}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-2"
          >
            {count.toLocaleString('ar-EG')}
          </motion.div>
          <p className="text-zinc-400 text-lg">مستخدم نشط حالياً</p>
        </div>
        
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold mb-2">٤.٩</div>
          <p className="text-zinc-400 text-lg">تقييم المتجر</p>
        </div>

        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold mb-2">١٠٠٪</div>
          <p className="text-zinc-400 text-lg">خالٍ من الإعلانات</p>
        </div>
      </div>
    </div>
  );
};
