import React, { useState } from 'react';
import "./App.css";
import { Navbar, Products, Cart, Homepage } from './components/index';
import { Routes, Route } from 'react-router';
import "boxicons"

const App = () => {
  const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(prevIsDark => !prevIsDark)
        console.log(isDark);
    }

  return (
    <main className={isDark ? "biggest dark" : "biggest"}>
      <section className={isDark ? "navbar dark" : "navbar"}>
        <Navbar  theme={isDark} handleToggle={toggleTheme}/>
      </section>
      <section className="main">
        <div className={isDark ? "routes dark" : "routes"}>
          <Routes>
            <Route exact path='/' element={<Homepage theme={isDark}  handleToggle={toggleTheme}/>} />
            <Route exact path='/cart' element={<Cart theme={isDark}  handleToggle={toggleTheme}/>} />
            <Route exact path="/products" element={<Products theme={isDark}  handleToggle={toggleTheme}/>} />
          </Routes>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="link">
              <box-icon name='phone' color="#fff" type='solid' ></box-icon>
              <a href="tel:+79322488005">+7 932 248 80 05</a>
            </div>
            <div className="link">
              <box-icon name='envelope' color="#fff"></box-icon>
              <a href="mailto:airtribunal@gmail.com">airtribunal@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

{/* List of tasks:
          footer
          night mode
          skeleton
        */}