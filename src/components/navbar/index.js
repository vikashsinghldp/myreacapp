import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElement";
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/a" activeStyle>Home</NavLink>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/contact" activeStyle>Contact</NavLink>
                    <NavLink to="/blogs" activeStyle>Blog</NavLink>
                    <NavLink to="/sign-up" activeStyle>SignUp</NavLink>

                    </NavMenu></Nav></>
    );
};
export default Navbar;