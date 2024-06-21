import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
            <div className="container">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#expertise" className="nav-link">Expertise</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav brand">
                        <img src="assets/imgs/avatar.jpeg" alt="" className="brand-img" />
                        <li className="brand-txt">
                            <h5 className="brand-title">Abdul</h5>
                            <div className="brand-subtitle">Web Developer</div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#education" className="nav-link">Education</a>
                        </li>
                        <li className="nav-item">
                            <a href="#works" className="nav-link">Works</a>
                        </li>
                        <li className="nav-item last-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
    )
}

export default Nav;