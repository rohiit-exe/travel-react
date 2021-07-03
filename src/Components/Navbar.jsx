import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);  

    const handleClick =()=> setClick(!click);           {/*it changes the state to the other on clicking */}
    const closeMobileMenu =()=> setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {                  /*for mobile screen*/
            setButton(false);
        }
            else { setButton(true);
            }
        };
        
        useEffect( () => {                              /* to get rid of sign-up pop up every time we refresh we pass an empty array*/
            showButton();
        }, []);
            

        window.addEventListener('resize', showButton);


    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                    TRVL <i class="fas fa-umbrella-beach"></i>              {/*logo*/}
                </Link>          
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />    {/*its toggle b/w bars and cross*/}
                </div>     
                <ul className={click ? 'nav-menu active':'nav-menu'} >    {/* it the toggle b/w  bars menu and the disappearance of it when user clicks */}
                <li className='nav-items'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to="/sign-up" className='nav-links' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
                </ul>
                {button && <Button buttonStyle ='btn--outline'> SIGN UP </Button>

                }
            </div>
        </nav>
    </>
    );

}
export default Navbar;

