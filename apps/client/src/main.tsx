import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "../../../libs/ui/src/theme";
import CssBaseline from '@mui/material/CssBaseline';

const queryClient = new QueryClient()

import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
