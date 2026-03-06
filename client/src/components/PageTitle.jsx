import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Dermatio"; // default
    let description = ""; // default

    switch (location.pathname) {
      case "/":
        title = "Dermatio";
        description = "";
        break;
      case "/about":
        title = "About Us - Dermatio";
        description = "";
        break;
      case "/products":
        title = "Products - Dermatio";
        description = "";
        break;
      case "/contact":
        title = "Contact Us - Dermatio";
        description = "";
        break;
      default:
        title = "Dermatio";
        description = "";
    }

    // Page Title update
    document.title = title;

    // Meta Title & Description update
    let metaTitle = document.querySelector("meta[name='title']");
    let metaDesc = document.querySelector("meta[name='description']");

    if (metaTitle) metaTitle.setAttribute('content', title);
    if (metaDesc) metaDesc.setAttribute('content', description);

  }, [location]);

  return null; // doesn’t render anything visible
};

export default PageTitle;
