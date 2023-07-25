// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Use createRoot from 'react-dom/client' instead of 'react-dom'


// Use createRoot to render the App component
createRoot(document.getElementById('root')).render(<App />);