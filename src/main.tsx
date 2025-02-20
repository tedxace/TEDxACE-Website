import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material'
const theme = createTheme({
  // Override or create new styles, colors, palettes...
  palette:{
    primary:{
      main:'#fff'
    },
    secondary:{
      main:'#ff5722'
    }

  }
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ChakraProvider value={defaultSystem}> */}
    <ThemeProvider theme={theme}>

      <App />
    </ThemeProvider>
    {/* </ChakraProvider> */}
  </StrictMode>,
)
