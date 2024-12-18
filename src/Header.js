import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const baseUrl = "https://ajthameem.github.io/portfolio/";


const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <header className="header" id="home">
            <div className="container" style={{overflow: "hidden"}}>
                <div className="header-content" >
                    <h4 className="header-subtitle" data-aos="fade-left" data-aos-duration="200">Hello, I am</h4>
                    <h1 className="header-title" data-aos="fade-left" data-aos-duration="500">Abdul</h1>
                    <h6 className="header-mono" data-aos="fade-left" data-aos-duration="800">Full Stack Developer</h6>
                    <div className="d-flex align-items-center">
                        <a href={`${window.location.hostname === "localhost" ? "/" : baseUrl}assets/resume/Abdul_resume.pdf`} download={"Abdul_resume.pdf"}>
                            <button className="btn btn-primary btn-rounded d-flex align-items-center">
                                <span>Resume </span>
                                &nbsp;
                                <span className="material-symbols-outlined">
                                    download
                                </span>
                            </button>
                        </a>
                        <span
                            class="material-symbols-outlined icon-color-2 pointer ml-1"
                            title="Open resume in new tab"
                            onClick={() => {
                                window.open("https://drive.google.com/file/d/1-NWwNEAul5QhzYpt9hmStRH74ngc3hrB/view?usp=sharing", "__blank")
                            }}
                        >
                            open_in_new
                        </span>
                    </div>

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