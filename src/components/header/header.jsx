import React, { useState } from 'react'
import '../header/header.css'
import Logo from "../../assets/logo.png"
import bars from "../../assets/bars.png"

const Header = () => {
    const mobileView = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)
    return (
        <div className="header">
            <img src={Logo} alt="LogoImage" />

            {menuOpened === false && mobileView === true ? (
                <div onClick={()=>setMenuOpened(true)} style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}>
                    <img src={bars} alt="" style={{ width: "1.5rem", height: '1.5rem', marginTop: '15px' }} />
                </div>
            ) : (<ul className="header-menu">
                <li onClick={()=>setMenuOpened(false)}>Home</li>
                <li onClick={()=>setMenuOpened(false)}>Programs</li>
                <li onClick={()=>setMenuOpened(false)}>Why Us</li>
                <li onClick={()=>setMenuOpened(false)}>Plans</li>
                <li onClick={()=>setMenuOpened(false)}>Testimonials</li>
            </ul>)}
        </div>
    )
}

export default Header;