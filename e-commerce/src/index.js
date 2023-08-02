import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContextProvider from './contexts/cartContext';

// ReactDOM.render(
// <React.StrictMode>
//     <CartContextProvider>
//           <App />  
//     </CartContextProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartContextProvider>
         <App/>
    </CartContextProvider>
   
);