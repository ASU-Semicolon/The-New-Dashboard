// button.jsx
import React from 'react';
import './Button.css';
function Button({ children, styleProp }) {

    return (
      <>
        {styleProp === 'primary' && (
          <button id="primary">{children}</button>
        )}
        {styleProp === 'secondary' && (
          <button id="secondary">{children}</button>
        )}
        {styleProp === 'transparent' && (
          <button id="transparent">{children}</button>
        )}
        {styleProp === 'Redtransparent' && (
          <button id="Redtransparent">{children}</button>
        )}
      </>
    );
  }
  

export default Button;
