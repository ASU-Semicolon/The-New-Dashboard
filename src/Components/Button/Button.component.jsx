import React from 'react';
import './Button.style.css';
import classNames from 'classnames'; 

function Button({ children , select = 'secondary' , rounded =true , outline = true , small = true , large = false , onClick = () => {console.log('Button Clicked')}}) {
    const classes = classNames( { 
      'button': true,
      'primary': select === 'primary' ,
      'secondary': select === 'secondary',
      'warning': select === 'warning',
      'rounded': rounded,
      'outline': outline,
      'small': small,
      'large': large
    })

    const textColor = outline
    ? (select === 'primary' ? '#FBA312' :
        select === 'secondary' ? '#ffffff' :
        select === 'warning' ? '#9A1212' :
        '#ffffff')
    : '#000000'; 
 

    return (
      <>       
        <button className={classes} style={{color:textColor}} onClick={onClick}>
          {children}
        </button>
      </>

    );
}

export default Button;
