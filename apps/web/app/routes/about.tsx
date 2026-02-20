import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function AboutComponent() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
        About CoveredCall Pro
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                What We Do
              </Typography>
              <Typography variant="body1" paragraph>
                CoveredCall Pro is an AI-powered platform designed to help options traders find the
                best moment to sell covered calls on stocks they own.
              </Typography>
              <Typography variant="body1">
                We analyze real-time market data, option chains, and volatility to provide actionable
                insights for your covered call strategy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Features
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="body2">Real-time stock and options data</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="body2">Weekly and biweekly option analysis</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="body2">Smart suggestions for premium collection</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
                  <Typography variant="body2">Support for multiple option strategies</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
