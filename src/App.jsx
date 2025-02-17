import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// English imports
import HomeEN from '../src/EN/pages/Home'
import NavbarEN from '../src/EN/components/Navbar/Navbar'
import FooterEN from '../src/EN/components/Footer/Footer'
import AboutEN from '../src/EN/pages/About'
import Work from '../src/EN/pages/Work'
import Approach from './EN/pages/Approach';
import Blog from './EN/pages/Blog';
import ContactUs from './EN/pages/ContactUs';
import TCEN from './EN/pages/TC';

// Spanish imports
import HomeES from './ES/pages/Home'
import NavbarES from '../src/ES/components/Navbar/Navbar'
import FooterES from '../src/ES/components/Footer/Footer'
import AboutES from './ES/pages/Nosotros'
import Trabajo from './ES/pages/Trabajo'
import Metodologia from './ES/pages/Metodología';
import BlogES from './ES/pages/Blog';
import Contactanos from './ES/pages/Contactanos';
import TC from './ES/pages/TC';


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Spanish Routes */}
        <Route element={
          <>
            <NavbarES />
            <FooterES />
          </>
        }>
          <Route path="/" element={<HomeES />} />
          <Route path="/nosotros" element={<AboutES />} />
          <Route path="/trabajo" element={<Trabajo />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/blog" element={<BlogES />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/terminos-y-condiciones" element={<TC />} />
        </Route>

        {/* English Routes */}
        <Route element={
          <>
            <NavbarEN />
            <FooterEN />
          </>
        }>
          <Route path="/en" element={<HomeEN />} />
          <Route path="/en/about" element={<AboutEN />} />
          <Route path="/en/work" element={<Work />} />
          <Route path="/en/approach" element={<Approach />} />
          <Route path="/en/blog" element={<Blog />} />
          <Route path="/en/contact" element={<ContactUs />} />
          <Route path="/en/terms-&-conditions" element={<TCEN />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App