import React, { useState } from 'react'
import '../header/header.css'
import Logo from "../../assets/logo.png"
import bars from "../../assets/bars.png"
import { Link } from 'react-scroll'

const Header = () => {
    const mobileView = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)
    return (
        <div className="header">
            <img src={Logo} alt="LogoImage" />

            {menuOpened === false && mobileView === true ? (
                <div onClick={() => setMenuOpened(true)} style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}>
                    <img src={bars} alt="" style={{ width: "1.5rem", height: '1.5rem', marginTop: '15px' }} />
                </div>
            ) : (<ul className="header-menu">
                <li >
                    <Link className='links'
                        onClick={() => setMenuOpened(false)}
                        activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                    >
                        Home
                    </Link>
                </li>
                <li >
                    <Link
                        className='links'
                        onClick={() => setMenuOpened(false)}
                        to="programs"
                        spy={true}
                        smooth={true}
                    >
                        Programs
                    </Link>
                </li>
                <li >
                    <Link
                        className='links'
                        onClick={() => setMenuOpened(false)}
                        to="reasons"
                        spy={true}
                        smooth={true}
                    >
                        Why Us
                    </Link>
                </li>
                <li>
                    <Link
                        className='links'
                        onClick={() => setMenuOpened(false)}
                        to="testimonials"
                        spy={true}
                        smooth={true}
                    >
                        Testimonials
                    </Link>
                </li>
            </ul>)}
        </div>
    )
}

export default Header;