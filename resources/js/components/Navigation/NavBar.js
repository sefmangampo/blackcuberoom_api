import React from "react";
import ReactDOM from "react-dom";
import navstyles from "../../../sass/modules/Nav.module.scss";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function NavBar() {
    return (
        <header className={navstyles.header}>
            <a className={navstyles.link} href="/">
                <h1>Logo</h1>
            </a>

            <input type="checkbox" id="nav-toggle" className={navstyles.navtoggle} />
            <label htmlFor="nav-toggle" className={navstyles.navtogglelabel}>
                <IconContext.Provider value={{ className: `${navstyles.fabars}` }}>
                    <div>
                        <FaBars />
                    </div>
                </IconContext.Provider>
            </label>

            <nav className={navstyles.nav} >
                <ul>
                    <li>
                        <a className={navstyles.link} href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className={navstyles.link} href="/playground">
                            PlayGround
                        </a>
                    </li>
                    <li>
                        <a className={navstyles.link} href="/about">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

if (document.getElementById("navbar")) {
    ReactDOM.render(<NavBar />, document.getElementById("navbar"));
}
