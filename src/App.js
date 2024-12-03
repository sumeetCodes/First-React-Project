
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

// components import

// Header import
import Header from "./components/Header_section/Header.jsx";

// Hero section import
import Herosection from "./components/Herosections/Herosection.jsx";

// Quote section import
import Quote from "./components/QuoteSection/Quote.jsx";

// Features section import
import Features from "./components/appfeature/Features.jsx";

// Web Design import
import WebDesign from "./components/webdesign/WebDesign.jsx";

// call to action cta section import
import Cta from "./components/Call_to_action/Cta.jsx";

// appbadge section import
import AppBadge from "./components/appbadgesections/AppBadge.jsx";

// Footer section import
import Footer from "./components/Footer_section/Footer.jsx"

function App() {
  return (
    <>
    
    <Header />   
<Herosection />
<Quote />
<Features />
<WebDesign />
<Cta />
<AppBadge />
<Footer />

    </>
  );
}

export default App;


