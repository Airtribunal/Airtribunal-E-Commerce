import React, { useEffect, useState } from 'react';
import "./App.css";
import { Navbar, Products, Cart, Homepage } from './components/index';
import { Routes, Route } from 'react-router';

const App = () => {
  // Dark Mode 
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false
  }

  const [isDark, setIsDark] = useState(getTheme())

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark))
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark)
  }
  // Dark Mode

  // Adding to Cart
  const [cartArray, setCartArray] = useState(JSON.parse(localStorage.getItem("cartArray")) || [])

  useEffect(() => {
    localStorage.setItem("cartArray", JSON.stringify(cartArray))
  }, [cartArray])
  // localStorage.clear()

  function addToCart(product) {
    setCartArray(prevCartArray => {
      return [...prevCartArray, product]
    })
  }
  // Adding to Cart

  // Deleting from Cart
  function deleteFromCart(id) {
    console.log(id);
  }
  // Deleting from Cart

  return (
    <main className={isDark ? "biggest dark" : "biggest"}>
      <section className={isDark ? "navbar dark" : "navbar"}>
        <Navbar theme={isDark} handleToggle={toggleTheme} />
      </section>
      <section className="main">
        <div className={isDark ? "routes dark" : "routes"}>
          <Routes>
            <Route exact path='/' element={<Homepage
              theme={isDark}
              handleToggle={toggleTheme}
            />}
            />
            <Route exact path='/cart' element={<Cart
              theme={isDark}
              handleToggle={toggleTheme}
              cartArray={cartArray}
              handleDeleteFromCart={deleteFromCart}
            />}
            />
            <Route exact path="/products" element={<Products
              theme={isDark}
              handleToggle={toggleTheme}
              handleAddToCart={addToCart}
            />}
            />
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
          controlled inputs
          cart sctucture
          cart logic
          e-mail sender
          fade text effect
        */}