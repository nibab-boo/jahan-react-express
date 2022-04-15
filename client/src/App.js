import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/stylesheets/application.css'

// importing from components
import Header from './components/Header';
import HomeCarousel from './components/HomeCarousel';
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Blog from "./components/Blog";
import { LanguageProvider } from './components/LanguageProvider';

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) =>{
  //       console.log(data);
  //       setData(data.message)
  //     });
  // }, []);

  return (
    <LanguageProvider>
      <Router>
        <Header />
         <Routes>
          <Route exact path="/" element={(
            <> 
              <HomeCarousel />
              <PhotoGallery />
              <Contact />
            </>
          )}
          >
          </Route>
          
          <Route path="/menu" element={(
            <>
              <Menu />
            </>
          )}>
          </Route>
          <Route path="/blog" element={
            <>
              < Blog/>
            </>
          }>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
