import { Outlet, createRootRoute } from "@tanstack/react-router";
import { CssBaseline } from "@mui/material";
import PageLayout from "../components/layout/PageLayout";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <CssBaseline />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
}
