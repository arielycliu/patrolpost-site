import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './LandingPage.jsx'
import './index.css'
import '@fontsource-variable/open-sans' // paragraph
import '@fontsource-variable/readex-pro' // headings
import '@fontsource/roboto'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LandingPage />
    </React.StrictMode>,
)
