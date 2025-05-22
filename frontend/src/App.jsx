import { Button, Container, Typography, Box } from '@mui/material';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Container maxWidth="sm">
        <Box 
          sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ color: 'primary.main' }}
          >
            Welcome to Your App
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ color: 'text.secondary' }}
          >
            This app uses Material-UI
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            sx={{ 
              mt: 2,
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s'
              }
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
