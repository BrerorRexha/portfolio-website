'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'none';
  className?: string;
}

const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  className,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 36 : 0,
    x: direction === 'left' ? -24 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
