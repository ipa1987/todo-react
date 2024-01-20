// App.tsx
import { FC, ReactElement } from 'react';
import './App.css';
import Dashboard from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default App;
