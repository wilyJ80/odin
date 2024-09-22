import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Greeting } from './Greeting.jsx'
import { Name } from './Name.jsx'
import { Lorem } from './Lorem.jsx'
import { TestTitle } from './TestTitle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Name />
    <Lorem />
    <TestTitle />
  </StrictMode>,
)
