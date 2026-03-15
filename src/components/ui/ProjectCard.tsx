'use client';

import { Box, Typography, Link } from '@mui/material';
import { tokens } from '@/theme/theme';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  image?: string;
  status?: 'live' | 'in-progress';
  index: number;
}

const ProjectCard = ({ title, description, stack, href, image, status = 'in-progress', index }: Project) => {
  const isLive = status === 'live';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      style={{ width: '100%' }}
    >
      <Box
        component={href ? Link : 'div'}
        href={href}
        target={href ? '_blank' : undefined}
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: tokens.bg.paper,
          border: `1px solid ${tokens.border.subtle}`,
          borderRadius: 1,
          overflow: 'hidden',
          textDecoration: 'none',
          cursor: href ? 'pointer' : 'default',
          transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': href ? {
            borderColor: tokens.border.strong,
            transform: 'translateY(-3px)',
            boxShadow: `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${tokens.border.default}`,
          } : {},
        }}
      >
        {/* Image / Placeholder area */}
        <Box
          sx={{
            width: '100%',
            height: { xs: 180, md: 220 },
            backgroundColor: tokens.bg.elevated,
            borderBottom: `1px solid ${tokens.border.subtle}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 900,
                  fontSize: '8rem',
                  color: tokens.border.subtle,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </Typography>
            </Box>
          )}

          {/* Status badge */}
          <Box
            sx={{
              position: 'absolute',
              top: 14,
              left: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 1.5,
              py: 0.6,
              backgroundColor: isLive
                ? 'rgba(74, 158, 138, 0.85)'
                : 'rgba(20, 20, 20, 0.75)',
              backdropFilter: 'blur(4px)',
              border: `1px solid ${isLive ? tokens.green.teal : tokens.border.default}`,
              borderRadius: 0.5,
            }}
          >
            <Box
              sx={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                backgroundColor: isLive ? '#fff' : tokens.green.primary,
                ...(isLive ? {} : {
                  animation: 'pulse 2.5s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.35 },
                  },
                }),
              }}
            />
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isLive ? '#fff' : tokens.green.primary,
              }}
            >
              {isLive ? 'Live' : 'In Development'}
            </Typography>
          </Box>

          {href && (
            <Box
              sx={{
                position: 'absolute',
                top: 14,
                right: 14,
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                borderRadius: 0.5,
                p: 0.5,
              }}
            >
              <OpenInNewIcon sx={{ fontSize: 14, color: '#fff', display: 'block' }} />
            </Box>
          )}
        </Box>

        {/* Content */}
        <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Typography
              sx={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: { xs: '1.15rem', md: '1.3rem' },
                fontWeight: 700,
                color: tokens.text.primary,
                letterSpacing: '-0.015em',
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: tokens.text.secondary, lineHeight: 1.7 }}>
              {description}
            </Typography>
          </Box>

          {/* Stack chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', pt: 1 }}>
            {stack.map((item) => (
              <Box
                key={item}
                sx={{
                  px: 1.25,
                  py: 0.4,
                  backgroundColor: tokens.green.ghost,
                  border: `1px solid ${tokens.border.subtle}`,
                  borderRadius: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.06em',
                    color: tokens.text.secondary,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProjectCard;
