import React from 'react';
// @ts-ignore
import Logo from '../resources/icon/page/logo.png';
import './navbar.css';


class Navbar extends React.Component {

    render() {

        return (
            <div className="navbar-container" >

                <div className="navbar_web_top" >
                    <div className="navbarLogo_web" >
                        <img src={Logo} alt="companyLogo" ></img>
                    </div>

                    <div className="navbar_top_search">
                        <input></input>
                    </div>

                    <div className="navbarButtons_web_top" >
                        <div className="navbarButton_web_top" > Profile </div>
                        <div className="navbarButton_web_top" > Logout </div>
                    </div>
                </div>

                <div className="navbar_web_bottom" >
                    <div className="navbarButtons_web_bottom" >
                        <div className="navbarButton_web_bottom"  >Your bicycles </div>
                        <div className="navbarButton_web_bottom" >Your Parts </div>
                        <div className="navbarButton_web_bottom"  > Bicycle catalogue </div>
                        <div className="navbarButton_web_bottom"  > Part catalogue </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar;