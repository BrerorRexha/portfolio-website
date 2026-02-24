import { Outlet, createRootRoute } from '@tanstack/react-router'
import { CssBaseline } from '@mui/material'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  )
}