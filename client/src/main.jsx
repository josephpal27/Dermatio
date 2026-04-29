import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS
import "aos/dist/aos.css"; // Import AOS CSS

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails.jsx';
import TheScience from './pages/TheScience.jsx';
import Ingredients from './pages/Ingredients.jsx';
import TazmanPepperDetails from './pages/TazmanPepperDetails.jsx';
import Cart from './pages/Cart.jsx';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

import { CartProvider } from "./context/CartContext";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:slug", element: <ProductDetails /> },
      { path: "/the-science", element: <TheScience /> },
      { path: "/ingredients", element: <Ingredients /> },
      { path: "/tazman-pepper", element: <TazmanPepperDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "*", element: <ComingSoon /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routers} />
    </CartProvider>
  </StrictMode>,
)