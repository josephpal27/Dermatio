import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS

import App from './App.jsx';
// import Home from './pages/Home.jsx';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    // errorElement: <Error />,
    children: [
      // {path: "/", element: <Home />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)