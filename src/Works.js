import React, { useState } from "react";

const Works = () => {
  const [current, setCurrent] = useState("Content");

  const workSamples = {
    Content: [
      "cs1_1.png",
      "tts1.png",
      "tts2.png",
      "swtn2.png",
      "swtn3.png",
      "inkyhome.png",
    ],
    Elearning: ["e1.png", "el2.png", "vid1.png"],
    Product: [
      "ps1.png",
      "ps2.png",
      "he5.png",
      "he4.png",
      "he3.png",
      "he2.png",
      "he1.png",
    ],
    Ecommerce: [
      "ft1.png",
      "ft2.png",
      "ft3.png",
      "ft4.png",
      "ft5.png",
      "vors (1).png",
      "vors (2).png",
      "vors (5).png",
      "vors (8).png",
      "vors (10).png",
    ],
  };

  const projectChange = (project) => {
    let container = document.getElementById("portfolioContainer");
    setCurrent(project);
    container.classList.add("ani");   
    setTimeout(() => {
        container.classList.remove("ani")
    }, 600);

  } 


  const Open = (path) => {
    const baseUrl = "https://ajthameem.github.io/portfolio";
    let pathway = "";

    if (window.location.hostname === "localhost") {
      pathway = path;
    } else {
      pathway = `${baseUrl}/${path}`;
    }

    window.open(pathway, "__blank");
  };

  return (
    <section className="section bg-custom-gray" id="works">
      <div className="container">
        <div className="d-flex align-items-center">
          <h1 className="mb-5">
            <span className="text-danger">Work</span> Samples
          </h1>
        </div>
        <center>
        <p className="para-style" data-aos="fade-up" data-aos-duration="1000">
           To see all my work samples in a detailed view, you can
          &nbsp;
          <a
            href="https://docs.google.com/document/d/1qowe9YGQoLyxZivwQGoUtWHaaXAnuK745eMyoTAkwpI/edit?usp=sharing"
            target="__blank"
          >
            view my documentation &nbsp;{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#F85C70"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
            </svg>
          </a>
        </p>
        </center>
        
        <br />

        <div className="portfolio">
          <div className="filters">
            {
                Object.keys(workSamples).map((project) => (
                    <span 
                    className={project === current ? "active" : ""} 
                    onClick={() => { projectChange(project)} }> 
                    {project} 
                    </span>

                ))
            }
            
          </div>
          <div id="portfolioContainer" className="portfolio-container">
            {workSamples[current].map((imgName, index) => {
              return (
                  <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item">
                      <img
                        title="Click to view the image"
                        onClick={() => Open(`assets/imgs/${imgName}`)}
                        src={`assets/imgs/${imgName}`}
                        className="img-fluid"
                        alt="image not found"
                      />
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
