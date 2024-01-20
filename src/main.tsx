import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import * as bootstrap from 'bootstrap';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(
  `${import.meta.env.VITE_SYNCFUSION_LICENSE}`,
);

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
