import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {lightTheme} from "@monorepo/ui";
import CssBaseline from '@mui/material/CssBaseline';

export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10000 }}
})

import App from './app';
const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
