import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail';
import Cart from './views/Cart';
import { PizzaProvider } from './context/PizzaContext';
import Navigation from './components/Navbar';
import './index.css'

const App = () => {
  return (
      <PizzaProvider>
          <Router>
              <Navigation />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/pizza/:id" element={<PizzaDetail />} />
                  <Route path="/carrito" element={<Cart />} />
              </Routes>
          </Router>
      </PizzaProvider>
  );
};
export default App;
