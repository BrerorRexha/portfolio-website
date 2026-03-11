import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default PageLayout;
