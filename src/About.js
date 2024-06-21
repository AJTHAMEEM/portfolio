import React, { useState } from 'react'

const About = () => {

    let [tickOn, setTickOn] = useState("")

    const Copy = (value) => {
        navigator.clipboard.writeText(value)
        setTickOn(value)

        setTimeout(() => {
            setTickOn("")
        }, 1500);
    }

    return (
        <div className="container-fluid" id="about">
            <div className="row about-section">
                <div className="col-lg-4 about-card para-style" data-aos="fade-down" data-aos-duration="2000">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5" />
                    <h5 className="mb-3" >
                        A Software Engineer Located In India
                    </h5>
                    <p className="mt-20">
                        Who wants to use his programming abilities to create complex solutions and writing maintainable codes, having a persistent desire to learn new technologies.
                    </p>
                    <a href="/assets/resume/abdul_resume.pdf" download={"Abdul_resume.pdf"}>
                        <button className="btn btn-outline-danger">
                            <i className="icon-down-circled2 " />
                            Download My CV
                        </button>
                    </a>
                </div>
                <div className="col-lg-4 about-card para-style" data-aos="fade-down" data-aos-duration="2500">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5" />
                    <ul className="mt40 info list-unstyled">
                        <li>
                            <span>Birth date</span> : 30/06/2001
                        </li>
                        <li>
                            <span>Email</span> : <a href="mailto:ajthameem30@gmail.com">ajthameem30@gmail.com</a> &nbsp;
                            {
                                tickOn === "ajthameem30@gmail.com"
                                    ?
                                    <span className="material-symbols-outlined pointer" >
                                        check
                                    </span>
                                    :
                                    <span className="material-symbols-outlined pointer" onClick={() => Copy("ajthameem30@gmail.com")}>
                                        content_copy
                                    </span>

                            }
                        </li>
                        <li>
                            <span>Phone</span> :  <a href="tel:+919655378978"> <em> (+91) 9655378978</em> </a> &nbsp;
                            {
                                tickOn === "+919655378978"
                                    ?
                                    <span class="material-symbols-outlined pointer">
                                        check
                                    </span>
                                    :
                                    <span class="material-symbols-outlined pointer" onClick={() => Copy("+919655378978")}>
                                        content_copy
                                    </span>

                            }
                        </li>
                        <li>
                            <span>Address</span> : Tenkasi, TamilNadu, India - 627415
                        </li>
                        <li>
                            <span>Languages</span> : Tamil, English
                        </li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item" title='LinkedIn' onClick={() => window.open("https://www.linkedin.com/in/abdul-jabbar-thameem", "__blank")}>
                            <a className="social-link" href="#">
                                <i className="ti-linkedin" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="social-item pt-1" title='Github' onClick={() => window.open("https://github.com/AJTHAMEEM", "__blank")}>
                            <a className="social-link" href="#">
                                <i className="ti-github" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="social-item" title='Work samples' onClick={() => window.open("https://docs.google.com/document/d/1qowe9YGQoLyxZivwQGoUtWHaaXAnuK745eMyoTAkwpI/edit?usp=sharing", "__blank")}>
                            <a className="social-link" href="#">
                                <i className="ti-link" aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card para-style" data-aos="fade-down" data-aos-duration="3000">
                    <h3 className="font-weight-light">My Abilities</h3>
                    <span className="line mb-5" />
                    <div className="row">
                        <div className="col-1 text-danger">
                            <span class="material-symbols-outlined icon-lg">
                                desktop_windows
                            </span>
                        </div>
                        <div className="col-10 mr-3">
                            <h6>Front-End Development</h6>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger">
                            <span class="material-symbols-outlined icon-lg">
                                summarize
                            </span>
                        </div>
                        <div className="col-10 mr-3">
                            <h6>Back-End Development</h6>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger ">
                            <span class="material-symbols-outlined icon-lg">
                                database
                            </span>
                        </div>
                        <div className="col-10 mr-3">
                            <h6 className='pb-0'>Databases</h6>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger ">
                            <span class="material-symbols-outlined icon-lg">
                                interactive_space
                            </span>
                        </div>
                        <div className="col-10 mr-3">
                            <h6 className='pb-0'>Software Training</h6>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;