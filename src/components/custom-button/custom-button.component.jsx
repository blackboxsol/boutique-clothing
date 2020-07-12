import React from 'react';

import './custom-button.styles.scss';
const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProperties}) =>(

    <button className={`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProperties}>
    {children}
    </button>

)
export default CustomButton;