import React from "react";

const Works = () => {

    return (
        <section className="section bg-custom-gray" id="works">
            <div className="container">
                <div className="d-flex align-items-center">
                    <h1 className="mb-5">
                        <span className="text-danger">Work</span> Samples
                    </h1>
                </div>
                <p className="para-style" data-aos="fade-right" data-aos-duration="2000">
                    Here are few works of mine. To see all my works in a detailed view, you can &nbsp;
                    <a
                        href="https://docs.google.com/document/d/1qowe9YGQoLyxZivwQGoUtWHaaXAnuK745eMyoTAkwpI/edit?usp=sharing"
                        target="__blank"
                    >
                        view my documentation &nbsp; <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F85C70">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                    </a>
                </p>
                <br />

                <div className="portfolio">
                    <div className="filters">
                        <a href="#" data-filter=".content" className="active">
                            Content
                        </a>
                        <a href="#" data-filter=".product">
                            Product
                        </a>
                        <a href="#" data-filter=".ecommerce">
                            eCommerce
                        </a>
                        <a href="#" data-filter=".elearning">
                            eLearning
                        </a>
                    </div>
                    <div className="portfolio-container">
                        <div className="col-md-6 col-lg-4 content">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/cs1_1.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 content product elearning">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/e1.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4 content product elearning">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/el2.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 content">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/inkyhome.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 product">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/ps1.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 product">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/ps2.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ecommerce">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/ft1.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ecommerce">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/ft2.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ecommerce">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/ft3.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ecommerce">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/ft4.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 ecommerce">
                            <div className="portfolio-item">
                                <img
                                    src="assets/imgs/ft5.png"
                                    className="img-fluid"
                                    alt="image not found"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Works;