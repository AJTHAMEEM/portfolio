import React from "react";

const Expertise = () => {
    return (
        <section className="section" id="expertise">
            <div className="container">
                <h2 className="mb-5">
                    <span className="text-danger">E</span>xpertise
                </h2>
                <div className="row para-style-2">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card h-50r">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Skills</h4>
                                    <span className="line" />
                                </div>
                            </div>

                            <div className="card-body pt-4 pl-5 pr-5 pb-2"  data-aos="fade-right" data-aos-duration="1500">
                                <h8 className="title text-danger"> Programming Languages </h8>
                                <h6>JavaScript</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>Python</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "85%" }}
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>

                                <hr />
                                <br />

                                <h8 className="title text-danger"> Front-End </h8>

                                <h6>HTML</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "97%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>CSS3</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "85%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>Bootstrap CSS</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "85%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>React JS (both class and hooks )</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <hr />
                                <br />

                                <h8 className="title text-danger"> Back-End </h8>

                                <h6>Node JS</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>Express JS</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>Django</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card h-50r">

                            <div className="card-body pb-2 pt-5rem pl-5 pr-5" data-aos="fade-right" data-aos-duration="2000">
                                <h8 className="title text-danger"> Databases </h8>
                                <h6>MySQL</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>PostgreSQL</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>

                                <hr />
                                <br />

                                <h8 className="title text-danger"> Database GUI </h8>

                                <h6> phpMyAdmin</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>pgAdmin</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>

                                <hr />
                                <br />

                                <h8 className="title text-danger"> No-SQL Databases </h8>

                                <h6>Redis</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>

                                <hr />
                                <br />

                                <h8 className="title text-danger"> Code Management </h8>

                                <h6>Git & Github</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>

                                <hr />
                                <br />

                                <h8 className="title text-danger"> Data Analysis </h8>
                                <h6>Tableau</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <h6>Power Bi</h6>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Expertise;