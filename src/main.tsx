import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');

// Update page title
document.title = 'SnipX - Video Editing, Subtitling & Summarization';

createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
