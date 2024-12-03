
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './Components/Header_section/Header.jsx';
import Herosection from './Components/Herosections/Herosection.jsx';
import Quote from "./Components/QuoteSection/Quote.jsx"

import WebDesign from "./Components/Webdesigns/WebDesign.jsx"
import Cta from "./Components/Call_to_action/Cta.jsx"

import Footer from "./Components/Footer_section/Footer.jsx"

// feature import
import Features from './Components/AppFeatures/Features.jsx';


function App() {
  return (
    <>
    
    <Header />   
<Herosection />
<Quote />
<Features />
<WebDesign />
<Cta />
{/* <AppBadge /> */}
<Footer />

    </>
  );
}

export default App;


