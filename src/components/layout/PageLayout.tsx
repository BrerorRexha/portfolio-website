import { Box } from "@mui/material";
import Footer from "../sections/Footer";
import SectionLayout from "./SectionLayout";
import Navbar from "../sections/Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <SectionLayout
        backgroundColor="dark"
        hasBorder={true}
        isSticky={true}
        hasPadding={false}
      >
        <Navbar />
      </SectionLayout>
      {children}
      <Footer />
    </Box>
  );
};

export default PageLayout;
