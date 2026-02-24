import { Box } from "@mui/material";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      {children}
      <Footer />
    </Box>
  );
};

export default PageLayout;
