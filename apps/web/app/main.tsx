import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { App as HomeApp } from './app';
import AboutComponent from './routes/about';
import { AppNav } from './app-nav';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppNav />
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  </StrictMode>
);
