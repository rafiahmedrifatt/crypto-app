import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import './App.css';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './Components';


function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/cypto/:coinId" element={<CryptoDetails />} />
                <Route path="/News" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer">

        </div>
      </div>
    </Router>
  );
}

export default App;
