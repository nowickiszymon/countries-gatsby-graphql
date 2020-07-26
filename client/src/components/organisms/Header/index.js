import React from "react";

import './style.scss';

// Components
import MobileNavbar from "../../molecules/MobileNavbar";
import DesktopNavbar from "../../molecules/DesktopNavbar";
import PrimaryButton from '../../atoms/PrimaryButton/index.js';

function Header() {
        const [width, setWidth] = React.useState(window.innerWidth);
        
        const breakpoint = 1279;

        React.useEffect(() => {
                window.addEventListener("resize", () => setWidth(window.innerWidth));
        }, []);

        return(
                <header class="header" id="header">
                            {/* { width < breakpoint ? <MobileNavbar /> : <DesktopNavbar />}   */}
                        <DesktopNavbar />
                        <div className="header__content">
                                <h1>Hello ! </h1>
                                <h3> Search info about Countries </h3>
                        </div>

                        <div className="header__readmore">
                                <a href="localhost:8000#about">
                                        <PrimaryButton title={"Get Started"} />
                                </a>
                        </div>
                </header>
        );
};

export default Header;
