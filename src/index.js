import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider} from "./providers/ThemeProvider";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
