import { NavLink } from 'react-router';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router';

export function AppNav() {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ textTransform: 'none', fontSize: '1rem' }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/about"
            sx={{ textTransform: 'none', fontSize: '1rem' }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
