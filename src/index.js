  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
import Header from './Components/Header_section/Header.jsx';
import Herosection from './Components/Herosections/Herosection.jsx';

import Features from './components/AppFeatures/Features.jsx';





  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(

  // <> are empty fragment
  // <> is used because all the component should have single parent
    <>

    {/* App and Header are the components */}

    <App />
<Header />   
<Herosection />

<Features />


    </>
      
  
  );
