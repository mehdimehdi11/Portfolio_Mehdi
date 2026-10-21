import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

// Sans cette classe le contenu reste entièrement visible : le repli sans JavaScript est garanti.
document.documentElement.classList.add('js-reveal')

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
