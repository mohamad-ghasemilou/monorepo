import {StrictMode} from 'react';
import {Provider} from 'react-redux'
import * as ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import {lightTheme} from "@monorepo/ui";
import CssBaseline from '@mui/material/CssBaseline';
import {store} from './store';
import App from './app';

export const queryClient = new QueryClient({
  defaultOptions: {queries: {staleTime: 10000}}
})

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline/>
            <App/>
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
