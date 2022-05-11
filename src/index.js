import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Signin from './components/signin'
import Signup from './components/signup'
import Product from './components/product'
import Footer from './components/footer'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Product />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
