  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(

  // <> are empty fragment
  // <> is used because all the component should have single parent
    <>

    {/* App and Header are the components */}

    <App />

    </>
      
  
  );
