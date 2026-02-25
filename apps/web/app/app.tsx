import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CallMadeIcon from '@mui/icons-material/CallMade';

// Simplified state management for now (Firebase will be integrated later)
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [symbol, setSymbol] = useState('');
  const [quote, setQuote] = useState<any>(null);
  const [expirations, setExpirations] = useState<string[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState('');
  const [firebaseConfigured, setFirebaseConfigured] = useState(false);

  const handleSignIn = () => {
    // Firebase integration will go here
    setError(
      'Firebase needs to be configured. Set up your Firebase project and add credentials to .env file'
    );
    setFirebaseConfigured(false);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  const handleFetchQuote = async () => {
    if (!symbol.trim()) {
      setError('Please enter a stock symbol');
      return;
    }

    setLoadingData(true);
    setError('');
    try {
      // Mock data for now - real Tradier API calls will use the libs/api module
      const mockQuote = {
        last: 150.25,
        bid: 150.23,
        ask: 150.27,
        change: 2.15,
        change_percent: 1.45,
        volume: 45000000,
      };
      setQuote(mockQuote);

      // Mock expirations
      const mockExpirations = [
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      ];
      setExpirations(mockExpirations);
    } catch (err) {
      setError('Error fetching data. Make sure Tradier API key is set in .env file');
      console.error(err);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: 4, pb: 4 }}>
      <Container maxWidth="lg">
        {/* Header with Auth */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CallMadeIcon sx={{ fontSize: 32, color: 'primary.main' }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
              CoveredCall Pro
            </Typography>
          </Box>
          <Box>
            {isLoggedIn ? (
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="body2">{userEmail}</Typography>
                <Button variant="outlined" size="small" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </Stack>
            ) : (
              <Button variant="contained" onClick={handleSignIn} sx={{ textTransform: 'none' }}>
                Sign In with Google
              </Button>
            )}
          </Box>
        </Box>

        {error && (
          <Alert severity="warning" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Status Messages */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Paper sx={{ p: 2, bgcolor: '#e3f2fd', borderRadius: 2 }}>
            <Typography variant="body2" color="info.main">
              ✅ Frontend: React + Vite + MUI loaded successfully
            </Typography>
          </Paper>
          <Paper
            sx={{ p: 2, bgcolor: firebaseConfigured ? '#c8e6c9' : '#fff3e0', borderRadius: 2 }}
          >
            <Typography
              variant="body2"
              color={firebaseConfigured ? 'success.main' : 'warning.main'}
            >
              {firebaseConfigured ? '✅' : '⚠️'} Firebase:{' '}
              {firebaseConfigured ? 'Configured' : 'Needs setup (.env file)'}
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, bgcolor: '#fff3e0', borderRadius: 2 }}>
            <Typography variant="body2" color="warning.main">
              ⚠️ Tradier API: Ready to integrate (add API key to .env)
            </Typography>
          </Paper>
        </Stack>

        {/* Search Section */}
        <Card sx={{ mb: 4, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Find the Best Time to Sell Covered Calls
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <TextField
                placeholder="Enter stock symbol (e.g., AAPL)"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && handleFetchQuote()}
                size="small"
                sx={{ flex: 1 }}
              />
              <Button
                variant="contained"
                onClick={handleFetchQuote}
                disabled={loadingData}
                sx={{ textTransform: 'none' }}
              >
                {loadingData ? 'Loading...' : 'Analyze'}
              </Button>
            </Stack>
            <Typography variant="caption" color="textSecondary">
              Try: AAPL, MSFT, GOOGL (mock data for demonstration)
            </Typography>
          </CardContent>
        </Card>

        {/* Results Section */}
        {quote && (
          <Grid container spacing={3}>
            {/* Current Stock Price */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 2 }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Current Price
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    ${quote.last?.toFixed(2) ?? 'N/A'}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: (quote.change ?? 0) >= 0 ? '#2e7d32' : '#c62828',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <TrendingUpIcon fontSize="small" />
                    {quote.change?.toFixed(2)} ({quote.change_percent?.toFixed(2)}%)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Bid/Ask */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 2 }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Bid / Ask
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    ${quote.bid?.toFixed(2)} / ${quote.ask?.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Spread: ${(quote.ask - quote.bid)?.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Volume */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 2 }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Volume
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {(quote.volume / 1000000).toFixed(2)}M
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Next Actions */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 2 }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Quick Action
                  </Typography>
                  <Button variant="outlined" size="small" fullWidth sx={{ mt: 1 }}>
                    Analyze Options
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Available Expirations */}
            {expirations.length > 0 && (
              <Grid item xs={12}>
                <Card sx={{ boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                      Available Option Expirations (Weekly & Biweekly)
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                      {expirations.slice(0, 10).map((exp) => (
                        <Button key={exp} variant="outlined" size="small" sx={{ mb: 1 }}>
                          {exp}
                        </Button>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        )}

        {/* Info Section */}
        {!quote && (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <TrendingUpIcon sx={{ fontSize: 64, color: '#bdbdbd', mb: 2 }} />
            <Typography variant="h6" color="textSecondary">
              Enter a stock symbol to get started
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              CoveredCall Pro helps you find the best moment to sell covered calls on stocks you
              own. Analyze options chains for weekly and biweekly expirations.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App;
