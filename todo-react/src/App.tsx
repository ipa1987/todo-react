// App.tsx
import { FC, ReactElement } from 'react';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ComposeContext components={rootContext}>
          <Dashboard />
        </ComposeContext>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
