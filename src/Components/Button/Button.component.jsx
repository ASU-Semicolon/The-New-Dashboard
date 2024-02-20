import React from 'react';
import './Button.style.css';
import classNames from 'classnames'; 

function Button({ children, select , rounded , outline , small , medium , large}) {
    const classes = classNames( { 
      'button': true,
      'primary': select === 'primary' ,
      'secondary': select === 'secondary',
      'warning': select === 'warning',
      'rounded': rounded,
      'outline': outline,
      'small': small,
      'medium': medium,
      'large': large
    })

    const textColor = outline
    ? (select === 'primary' ? '#FBA312' :
        select === 'secondary' ? '#ffffff' :
        select === 'warning' ? '#9A1212' :
        '#ffffff') // Default to white if no specific type is provided
    : '#000000'; // Black color when outline is false
  
    return (
      <>
          <button className={classes} style={{ color: textColor }}> {children} </button>
      </>
    );
  }

export default Button;
