import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import HomeEN from '../src/EN/pages/Home'
import NavbarEN from '../src/EN/components/Navbar/Navbar'
import HomeES from '../src/ES/pages/Home'
import NavbarES from '../src/ES/components/Navbar/Navbar'

function App() {
  const [language, setLanguage] = useState('es') // Set default to Spanish

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <NavbarES />
            <HomeES />
          </>
        } />
        <Route path="/en" element={
          <>
            <NavbarEN />
            <HomeEN />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App