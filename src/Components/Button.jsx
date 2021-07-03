import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-outline'];                                        {/* automatic css classes = btn-primary,btn-outline*/}

const SIZES = ['btn-medium', 'btn-large'];

export const Button= ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    /*we gon choose the button style either btn-primary or btn-outline orelse the default is btn-primary as 0 index is given*/
    

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize :SIZES[0] 
    /*we gon choose the button size either btn-medium or btn-large orelse the default is btn-medium as 0 index is given */
    

    return (
        <Link to="/sign-up"  className = "btn-mobile">
            <button
            className={"btn ${checkButtonStyle}  ${checkButtonSize}"}
            onClick={onClick}
            type={type}>
               
            {children}
            </button>

        </Link>
    )
};