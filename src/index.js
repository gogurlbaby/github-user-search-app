import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextTheme } from './context/Context';
import UserContext from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextTheme>
      <UserContext>
        <App />
      </UserContext>
    </ContextTheme>
  </React.StrictMode>
);

