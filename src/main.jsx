import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styled-components/GlobalStyle.jsx';
import Theme from './theme.jsx'; // Custom ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
    </BrowserRouter>
  </React.StrictMode>,
)
