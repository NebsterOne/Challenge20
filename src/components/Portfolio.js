import React from "react";
import img1 from "../images/jewelry.jpg";
import img2 from "../images/stripcomic.jpg";
import img3 from "../images/travelapp.png";
import img4 from "../images/note-taking.png";
import img5 from "../images/texteditor.png";
import img6 from "../images/scheduler.jpg";

function Portfolio() {
  return (
    <div className="projects">
      <div class="project">
        <img src={img1} alt="Jewellery E-Commerce Site" />
        <heads>
          <h4>
            <a
              href="https://quiet-caverns-07213.herokuapp.com/"
              title="Jewellery E-Commerce Site"
            >
              Project 3 - Jewellery E-Commerce Site
            </a>
          </h4>
          <h3>
            <a
              href="https://github.com/NebsterOne/jewellery-e-commerce"
              title="Jewellery E-Commerce Site"
            >
              Github Repo Jewellery E-Commerce Site
            </a>
          </h3>
        </heads>
      </div>
      <div class="project">
        <img src={img2} alt="Online Comic Store" />
        <heads>
          <h4>
            <a
              href="https://comic-world-125.herokuapp.com/"
              title="Online Comic Store"
            >
              Project 2 - Online Comic Store
            </a>
          </h4>
          <h3>
            <a
              href="https://github.com/NebsterOne/online-comic-store"
              title="Online Comic Store"
            >
              Github Repo Online Comic Store
            </a>
          </h3>
        </heads>
      </div>
      <div class="project">
        <img src={img3} alt="Travel Stash" />
        <heads>
          <h4>
            <a
              href="https://nebsterone.github.io/Project1_travel-stash/"
              title="Travel Stash"
            >
              Project 1 - Travel Stash
            </a>
          </h4>
          <h3>
            <a
              href="https://github.com/NebsterOne/Project1_travel-stash"
              title="Travel Stash"
            >
              Github Repo Travel Stash
            </a>
          </h3>
        </heads>
      </div>
      <div class="project">
        <img src={img4} alt="Note Taker" />
        <heads>
          <h4>
            <a
              href="https://pacific-beach-38814.herokuapp.com/"
              title="Note Taker"
            >
              Note Taker
            </a>
          </h4>
          <h3>
            <a
              href="https://github.com/NebsterOne/Challenge11"
              title="Note Taker"
            >
              Github Repo Note Taker
            </a>
          </h3>
        </heads>
      </div>
      <div class="project">
        <img src={img5} alt="Text Editor" />
        <heads>
          <h4>
            <a
              href="https://damp-hollows-29575.herokuapp.com/"
              title="Text Editor"
            >
              Text Editor
            </a>
          </h4>
          <h3>
            <a
              href="https://github.com/NebsterOne/Challenge19/"
              title="Text Editor"
            >
              Github Repo Text Editor
            </a>
          </h3>
        </heads>
      </div>
      <div class="project ">
        <img src={img6} alt="Work Day Scheduler" />
        <heads>
          <h4>
            <a
              href="https://nebsterone.github.io/Challenge05/"
              title="Work Day Scheduler"
            >
              Work Day Scheduler
            </a>
          </h4>
          <h3>
            <a
              href="https://github.com/NebsterOne/Challenge05"
              title="Work Day Scheduler"
            >
              Github Repo Challenge05
            </a>
          </h3>
        </heads>
      </div>
    </div>
  );
}
export default Portfolio;
