import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { tokens } from '@/theme/theme';

const traits = ['Structure', 'Discipline', 'Long-term thinking', 'Craft'];

const ProfileSection = () => {
  return (
    <AnimatedSection>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.3fr 0.7fr' },
          gap: { xs: 6, md: 8 },
          alignItems: 'start',
          mb: { xs: 8, md: 10 },
        }}
      >
        {/* Text */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
          <Typography
            sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: tokens.text.secondary, lineHeight: 1.85 }}
          >
            I&apos;m{' '}
            <Box component="span" sx={{ color: tokens.text.primary, fontWeight: 500 }}>
              23 years old
            </Box>
            , based in Prishtina, Kosova, with four years of frontend experience across companies in
            Kosova and Berlin. I build systems that are meant to last — clean, scalable, and
            easy to reason about.
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: tokens.text.secondary, lineHeight: 1.85 }}
          >
            Programming is where logic meets creativity for me. I approach it the same way I
            approach anything I care about — with patience, structure, and a genuine interest in
            getting it right. Not just working, but{' '}
            <Box component="span" sx={{ color: tokens.text.primary, fontStyle: 'italic', fontFamily: 'var(--font-fraunces)' }}>
              worth keeping.
            </Box>
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: tokens.text.secondary, lineHeight: 1.85 }}
          >
            Outside of code, I play basketball, think about philosophy — identity, ethics, whether
            objective morality can be measured — and listen to everything from MF DOOM to Miles
            Davis to Elden Ring&apos;s soundtrack. Art and sport keep me honest.
          </Typography>

          {/* Traits */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, pt: 1 }}>
            {traits.map((trait) => (
              <Box
                key={trait}
                sx={{
                  px: 2,
                  py: 0.75,
                  border: `1px solid ${tokens.border.default}`,
                  borderRadius: 0.5,
                  backgroundColor: tokens.green.ghost,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: tokens.green.light,
                  }}
                >
                  {trait}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Photo */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'relative',
          }}
        >
          <Box
            sx={{
              borderRadius: 1,
              overflow: 'hidden',
              border: `1px solid ${tokens.border.default}`,
              filter: 'grayscale(100%)',
              lineHeight: 0,
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Breror Rexha"
              width={400}
              height={480}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Box>

          {/* Awards box */}
          <Box
            sx={{
              mt: 2,
              p: 2.5,
              backgroundColor: tokens.bg.elevated,
              border: `1px solid ${tokens.border.subtle}`,
              borderRadius: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {[
              'School Valedictorian',
              'MENSA Member',
              'Hackathon Winner — JCoders',
              'Debate Semi-Finalist — Kosova Open 2018',
            ].map((award) => (
              <Box key={award} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: tokens.green.primary,
                    flexShrink: 0,
                  }}
                />
                <Typography sx={{ fontSize: '0.8rem', color: tokens.text.secondary, lineHeight: 1.5 }}>
                  {award}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </AnimatedSection>
  );
};

export default ProfileSection;
