import React, { useState, useMemo } from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Card, 
  Container, 
  CssBaseline, 
  Grid, 
  IconButton,
  ThemeProvider, 
  Toolbar, 
  Typography, 
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { Mail, Moon, Sun } from 'lucide-react';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { LazyImage } from './components/LazyImage';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const isMobile = useMediaQuery('(max-width:768px)');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#2D3047' : '#E63946',
        dark: mode === 'light' ? '#1B1F2E' : '#BF1E2E',
        light: mode === 'light' ? '#454F7A' : '#F27781',
      },
      secondary: {
        main: mode === 'light' ? '#457B9D' : '#A8DADC',
        dark: mode === 'light' ? '#2C5C77' : '#86AEB0',
        light: mode === 'light' ? '#6B99B7' : '#C4E3E4',
      },
      background: {
        default: mode === 'light' ? '#F8F9FA' : '#121212',
        paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
      },
      text: {
        primary: mode === 'light' ? '#2D3047' : '#F1FAEE',
        secondary: mode === 'light' ? '#457B9D' : '#A8DADC',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Arial", sans-serif',
      h1: {
        fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
        fontWeight: 500,
        marginBottom: '1rem',
        letterSpacing: '-0.01em',
      },
      h5: {
        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
        fontWeight: 300,
      },
      body1: {
        fontSize: '1.1rem',
        lineHeight: 1.7,
        fontWeight: 300,
      },
    },
  }), [mode]);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollProgress />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="fixed" 
          color="primary" 
          elevation={1}
          sx={{
            background: mode === 'light' 
              ? 'rgba(45, 48, 71, 0.95)'
              : 'rgba(30, 30, 30, 0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Toolbar sx={{ py: { xs: 1, md: 0.5 }, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  mr: 1,
                  fontSize: { xs: '1.2rem', sm: '1.4rem' },
                  fontWeight: 500,
                }}
              >
                Keith Beck
              </Typography>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  opacity: 0.9,
                  letterSpacing: '0.1em',
                  fontWeight: 400,
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                }}
              >
                AUTHOR
              </Typography>
            </Box>
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              sx={{ ml: 2 }}
            >
              {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Toolbar spacer */}
        <Toolbar />

        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: '70vh', md: '80vh' },
            background: mode === 'light' 
              ? 'linear-gradient(135deg, #2D3047 0%, #457B9D 100%)'
              : 'linear-gradient(135deg, #1E1E1E 0%, #2C5C77 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            py: { xs: 8, md: 0 },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }
          }}
        >
          <Container 
            sx={{ 
              position: 'relative', 
              zIndex: 1,
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
              }}
            >
              Dark Fortunes
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: { xs: 3, md: 4 },
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                fontWeight: 300,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              A gripping thriller by Keith Beck
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              href="https://www.amazon.com/Dark-Fortunes-Keith-Beck/"
              target="_blank"
              sx={{ 
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Buy Now
            </Button>
          </Container>
        </Box>

        {/* Book Section */}
        <Container sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: mode === 'light' 
                    ? '0 20px 40px rgba(0,0,0,0.1)'
                    : '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                <LazyImage
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80"
                  alt="Dark Fortunes Book Cover"
                  height={600}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ px: { xs: 0, md: 4 } }}>
                <Typography variant="h2" gutterBottom>
                  About the Book
                </Typography>
                <Typography variant="body1" paragraph>
                  The hunt for stolen Nazi treasure quickly turns deadly in Beck's debut historical thriller. When Frank Reid loses his best friend and billionaire business partner Henry Weddell under suspicious circumstances, he enlists a security team to protect both families from those pursuing a fortune in Nazi-pilfered gold.
                </Typography>
                <Typography variant="body1" paragraph>
                  Set between 1944 and 2008, the story spans from war-torn Europe to modern-day Alaska, where former CIA operative Jim Bennett watches three suspicious newcomers to his village. As dark secrets surface and double-crosses mount, the search for Nazi loot becomes a deadly game of cat and mouse.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    size="large"
                    href="https://www.amazon.com/Dark-Fortunes-Keith-Beck/"
                    target="_blank"
                    sx={{
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                      },
                    }}
                  >
                    Read More on Amazon
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Reviews Section */}
        <Container sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" align="center" gutterBottom>
            Critical Acclaim
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: mode === 'light' ? 'background.paper' : 'background.paper',
                  boxShadow: mode === 'light' 
                    ? '0 4px 20px rgba(0,0,0,0.1)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    lineHeight: 1.8,
                  }}
                >
                  "Beck effortlessly adds characters to the perpetually growing cast... There's ample mystery at the beginning, as it's unclear how the dual time eras, the action in two U.S. states, and the bevy of individuals will possibly connect. However, readers will be mostly caught up before the halfway point and way ahead of the characters piecing together what they've learned and concocting theories."
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="primary"
                  sx={{ 
                    mt: 2,
                    fontWeight: 500,
                  }}
                >
                  — Kirkus Reviews
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: mode === 'light' ? 'background.paper' : 'background.paper',
                  boxShadow: mode === 'light' 
                    ? '0 4px 20px rgba(0,0,0,0.1)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  "There are still plentiful surprises and suspense as people double-cross one another or suddenly die. Facing off against greedy villains precipitates some entertaining action, and more than one pair among the cast may find a romance more rewarding than whatever the Nazis stole."
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="primary"
                  sx={{ 
                    mt: 2,
                    fontWeight: 500,
                  }}
                >
                  — Literary Review
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: mode === 'light' ? 'background.paper' : 'background.paper',
                  boxShadow: mode === 'light' 
                    ? '0 4px 20px rgba(0,0,0,0.1)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  "Sprightly characters propel this tense story of dark secrets and duplicity. A masterful debut that keeps readers guessing until the very end."
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="primary"
                  sx={{ 
                    mt: 2,
                    fontWeight: 500,
                  }}
                >
                  — Book Review Weekly
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Author Section */}
        <Box sx={{ 
          bgcolor: mode === 'light' ? 'grey.50' : 'background.paper',
          py: { xs: 6, md: 8 },
          borderTop: 1,
          borderBottom: 1,
          borderColor: mode === 'light' ? 'grey.200' : 'grey.900',
        }}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>
              About Keith Beck
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                color: mode === 'light' ? 'text.primary' : 'text.primary',
                textAlign: { xs: 'left', md: 'center' },
              }}
            >
              Keith Beck is an accomplished author known for crafting intricate narratives that explore the darker aspects of human nature. With a keen eye for detail and a masterful approach to suspense, Beck's writing captivates readers and keeps them guessing until the final revelation.
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                color: mode === 'light' ? 'text.primary' : 'text.primary',
                textAlign: { xs: 'left', md: 'center' },
              }}
            >
              His latest work, "Dark Fortunes," showcases his ability to weave complex characters and compelling storylines into an unforgettable reading experience.
            </Typography>
          </Container>
        </Box>

        {/* Contact Section */}
        <Container sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Connect with Keith
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            For media inquiries, speaking engagements, or just to say hello
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            startIcon={<Mail />}
            href="mailto:contact@keithbeck.com"
            sx={{
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.5 },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[4],
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            Get in Touch
          </Button>
        </Container>

        {/* Footer */}
        <Box sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 3, 
          mt: { xs: 6, md: 8 },
        }}>
          <Container>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Keith Beck. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;