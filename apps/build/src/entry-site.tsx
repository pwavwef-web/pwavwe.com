import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SiteRoutes } from './SiteRoutes';
import './styles.css';
import './labs.css';

ReactDOM.hydrateRoot(document.getElementById('root')!, <React.StrictMode><BrowserRouter><SiteRoutes /></BrowserRouter></React.StrictMode>);
