import React from 'react';
import {
    Nav,
    NavLink,
    // Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="/" >
                        НАЧАЛО
                    </NavLink>
                    <NavLink to="/" >
                        ПРОДУКТИ
                    </NavLink>
                    <NavLink to="/" >
                        КОНТАКТИ
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">Количка</NavBtnLink>
                </NavBtn>
            </Nav>

        </>
    )
}

export default Navbar