import { Container, Box } from "@mui/material";

interface SectionLayoutProps {
  children: React.ReactNode;
  backgroundColor?: "light" | "dark";
  hasBorder?: boolean;
  isSticky?: boolean;
  hasPadding?: boolean;
}

const SectionLayout = ({
  children,
  backgroundColor,
  hasBorder = false,
  isSticky = false,
  hasPadding = true,
}: SectionLayoutProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: backgroundColor === "light" ? "#F8FAFC" : "#0F172A",
        borderBottom: hasBorder ? "1px solid rgba(255,255,255,0.05)" : "none",
        position: isSticky ? "sticky" : "relative",
        top: isSticky ? 0 : "auto",
        zIndex: isSticky ? 1000 : "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ py: hasPadding ? { xs: 8, sm: 12 } : 0 }}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionLayout;
