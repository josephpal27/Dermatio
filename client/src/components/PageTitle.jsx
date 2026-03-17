import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { productsData } from "../data/productsData";

const PageTitle = () => {

  const location = useLocation();

  useEffect(() => {

    let title = "Dermatio";
    let description = "";

    // Detect product page
    if (location.pathname.startsWith("/products/")) {

      const slug = location.pathname.split("/products/")[1];

      const product = productsData.find(p => p.slug === slug);

      if (product) {
        title = `${product.name} ${product.type} - Dermatio`;
        description = "";
      }

    } else {

      switch (location.pathname) {

        case "/":
          title = "Dermatio";
          break;

        case "/about":
          title = "About Us - Dermatio";
          break;

        case "/products":
          title = "Products - Dermatio";
          break;

        case "/contact":
          title = "Contact Us - Dermatio";
          break;

        case "/cart":
          title = "Cart - Dermatio";
          break;

        default:
          title = "Dermatio";

      }

    }

    document.title = title;

    let metaTitle = document.querySelector("meta[name='title']");
    let metaDesc = document.querySelector("meta[name='description']");

    if (metaTitle) metaTitle.setAttribute("content", title);
    if (metaDesc) metaDesc.setAttribute("content", description);

  }, [location]);

  return null;
};

export default PageTitle;