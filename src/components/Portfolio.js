import React from "react";
import img from "../images/me.jpg";

function Portfolio() {
  return (
    <div className="projects">
      <div class="project">
        <img src={img} alt="my work in progress" />
        <heads>
          <h4>
            <a
              href="https://quiet-caverns-07213.herokuapp.com/"
              target="_blank"
              title="My current project"
            >
              Project 3 - Jewellery E-Commerce Site
            </a>
          </h4>
        </heads>
      </div>
      <div class="project">
        <img src={img} alt="my work in progress" />
        <heads>
          <h4>
            <a
              href="https://quiet-caverns-07213.herokuapp.com/"
              target="_blank"
              title="My current project"
            >
              Project 2 - Jewellery E-Commerce Site
            </a>
          </h4>
        </heads>
      </div>
      <div class="project">
        <img src={img} alt="my work in progress" />
        <heads>
          <h4>
            <a
              href="https://quiet-caverns-07213.herokuapp.com/"
              target="_blank"
              title="My current project"
            >
              Project 1 - Jewellery E-Commerce Site
            </a>
          </h4>
        </heads>
      </div>
      <div class="project">
        <img src={img} alt="my work in progress" />
        <heads>
          <h4>
            <a
              href="https://quiet-caverns-07213.herokuapp.com/"
              target="_blank"
              title="My current project"
            >
              Project 4 - Jewellery E-Commerce Site
            </a>
          </h4>
        </heads>
      </div>
      <div class="project">
        <img src={img} alt="my work in progress" />
        <heads>
          <h4>
            <a
              href="https://quiet-caverns-07213.herokuapp.com/"
              target="_blank"
              title="My current project"
            >
              Project 5 - Jewellery E-Commerce Site
            </a>
          </h4>
        </heads>
      </div>
      <div class="project ">
        <img src={img} alt="my work in progress" />
        <heads>
          <h4>
            <a
              href="https://quiet-caverns-07213.herokuapp.com/"
              target="_blank"
              title="My current project"
            >
              Project 6 - Jewellery E-Commerce Site
            </a>
          </h4>
        </heads>
      </div>

    </div>
  );
}
export default Portfolio;
