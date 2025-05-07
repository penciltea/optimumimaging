import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import App from './App.tsx'

let theme = createTheme();
theme = responsiveFontSizes(theme);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
