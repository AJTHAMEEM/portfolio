import React from "react";

const Education = () => {

    const Open = (link) => {
        window.open(link, "__blank")
    }

    return (
        <section className="section" id="education">
            <div className="container">
                <h2 className="mb-5">
                    <span className="text-danger">E</span>ducation
                </h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card card-make" data-aos="fade-down" data-aos-duration="2000">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>SSLC</h4>
                                    <p>10th Grade</p>
                                    <span className="line" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2017</h6>
                                <p className="subtitle para-style-3">
                                    Scored <strong>96%</strong> in the 10th Grade Exam.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12" data-aos="fade-down" data-aos-duration="2000">
                        <div className="card card-make">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>HSC</h4>
                                    <p>High School Degree</p>
                                    <span className="line" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2019</h6>
                                <p className="subtitle para-style-3">
                                    Scored <strong>76.7%</strong> in the 12th Grade Exam with a <strong>Centum in Computer Science.</strong>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12" data-aos="fade-down" data-aos-duration="2000">
                        <div className="card card-make">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>UG</h4>
                                    <p>College Degree</p>
                                    <span className="line" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2022</h6>
                                <p className="subtitle para-style-3">
                                    I hold a <strong>BCA in Data Science</strong> from BSA Crescent Institute of Science and Technology with <strong> CGPA: 7.9</strong>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="container mb-5 para-style" data-aos="fade-right" data-aos-duration="3000">
                            My college days started with the course data science and ended in getting a huge interest in Web development. I developed a strong foundation in both front-end and back-end development during my college days.  During my studies, I gained expertise in key programming languages and technologies such as HTML, CSS, JavaScript, React, Node.js, and SQL databases. My coursework included hands-on projects and collaborative assignments that honed my skills in developing responsive web applications, API integration, and database management. This comprehensive education has equipped me with the technical and problem-solving skills necessary to excel as a Full Stack Developer.
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Certifications</h4>
                                    <span className="line" />
                                </div>
                            </div>
                            <div className="card-body para-style">
                                <div className="course-list">
                                    <div className="course" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="d-flex align-items-center gap-1r pb-1">
                                            <h6 className="title text-danger mb-0">Javascript</h6>
                                            <span
                                                class="material-symbols-outlined icon-color pointer "
                                                onClick={() => {
                                                    Open("https://moonshot.scaler.com/s/sl/tDgQLzaFnS?_gl=1*fjj3fi*_ga*MTMyODAwMzA0Ni4xNzAxNTY3NDE5*_ga_53S71ZZG1X*MTcwMTY3MTY0MS42LjEuMTcwMTY3MjIzMy40MC4wLjA.")
                                                }}
                                            >
                                                open_in_new
                                            </span>
                                        </div>
                                        <label> From Scaler academy</label>
                                    </div>
                                    <hr />
                                    <br />

                                    <div className="course pb-1" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="d-flex align-items-center gap-1r pb-1">
                                            <h6 className="title text-danger mb-0">React JS</h6>
                                            <span
                                                class="material-symbols-outlined icon-color pointer "
                                                onClick={() => {
                                                    Open("https://drive.google.com/file/d/19GdjBSI-ljW27MNrtebUDarbUrsGK9rx/view?usp=sharing")
                                                }}
                                            >
                                                open_in_new
                                            </span>
                                        </div>
                                        <label> From Great Learning academy</label>
                                    </div>
                                    <hr />
                                    <br />

                                    <div className="course pb-1" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="d-flex align-items-center gap-1r pb-1">
                                            <h6 className="title text-danger mb-0">Python</h6>
                                            <span
                                                class="material-symbols-outlined icon-color pointer "
                                                onClick={() => {
                                                    Open("https://drive.google.com/file/d/1ETzw9b8TDEE7XzRWdxXNXl3unFYRmi6D/view?usp=sharing")
                                                }}
                                            >
                                                open_in_new
                                            </span>
                                        </div>
                                        <label> From IIT Bombay</label>
                                    </div>
                                    <hr />
                                    <br />

                                    <div className="course pb-1" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="d-flex align-items-center gap-1r pb-1">
                                            <h6 className="title text-danger mb-0">Power BI</h6>
                                            <span
                                                class="material-symbols-outlined icon-color pointer "
                                                onClick={() => {
                                                    Open("https://drive.google.com/file/d/1al6T-4isWfbxOaezioPysZ1OthcKZKGk/view?usp=sharing")
                                                }}
                                            >
                                                open_in_new
                                            </span>
                                        </div>
                                        <label> From SkillUp program by SimpliLearn academy</label>
                                    </div>
                                    <hr />
                                    <br />

                                    <div className="course pb-1" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="d-flex align-items-center gap-1r pb-1">
                                            <h6 className="title text-danger mb-0">Tableau</h6>
                                            <span
                                                class="material-symbols-outlined icon-color pointer "
                                                onClick={() => {
                                                    Open("https://drive.google.com/file/d/1wRRPnj5alk-hlHQJUbUMMdz6fCYC39OQ/view")
                                                }}
                                            >
                                                open_in_new
                                            </span>
                                        </div>
                                        <label> From SkillUp program by SimpliLearn academy</label>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Education;