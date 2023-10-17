import Home from './pages/home/Home';
import Nav from './components/nav/Nav'
import About from './pages/about/About';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import './styles/reset.css';
import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import SmothScroll from './hooks/smoothScroll';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const containerRef = useRef(null)

  return (
    <>


      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
            smartphone: {
              smooth: true,

            },
            tablet: {
              smooth: true,

            }
          }
        }
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container data-scroll-speed='4' ref={containerRef}>
          <div className=" App" id='app' ref={containerRef}>
            
            <Router>
              <AnimatePresence>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/projects' element={<Projects />} />
                </Routes>
              </AnimatePresence>
              <Nav />
              
            </Router>

            
          </div>
        </main>

      </LocomotiveScrollProvider>
    </>













  );

}

export default App;
