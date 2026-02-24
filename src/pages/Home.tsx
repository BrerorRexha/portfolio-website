import { Container, Stack, Typography } from '@mui/material'

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={2} sx={{ py: 6 }}>
        <Typography variant="h3">Portfolio</Typography>
        <Typography>Home is wired through TanStack Router.</Typography>
      </Stack>
    </Container>
  )
}

export default Home