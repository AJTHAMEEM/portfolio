import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <header className="header" id="home">
            <div className="container">
                <div className="header-content" >
                    <h4 className="header-subtitle" data-aos="fade-left" data-aos-duration="1000">Hello, I am</h4>
                    <h1 className="header-title" data-aos="fade-left" data-aos-duration="1500">Abdul</h1>
                    <h6 className="header-mono" data-aos="fade-left" data-aos-duration="2000">Full Stack Developer</h6>
                    <a href="/assets/resume/abdul_resume.pdf" download={"Abdul_resume.pdf"} data-aos="fade-right" data-aos-duration="2000">
                        <button className="btn btn-primary btn-rounded d-flex align-items-center"><span className="material-symbols-outlined">
                            download
                        </span> &nbsp; Resume</button>
                    </a>
                    <ul className="social-icons pt-3">
                        <li className="social-item" title='Linkedin'><a className="social-link text-light" href="#" onClick={() => window.open("https://www.linkedin.com/in/abdul-jabbar-thameem", "__blank")}><i className="ti-linkedin" aria-hidden="true"></i></a></li>
                        <li className="social-item" title='Github' onClick={() => window.open("https://github.com/AJTHAMEEM", "__blank")}><a className="social-link text-light" href="#"><i className="ti-github" aria-hidden="true" ></i></a></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header;