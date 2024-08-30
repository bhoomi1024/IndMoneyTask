//main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const RootComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RootComponent />);

