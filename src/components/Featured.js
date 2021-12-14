import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <>
      <div className="featured-container">
        <div className="feat-row">
          <h2 className="fhead">Featured Franchises Companies</h2>
          <div className="feat">
            <ul>
              <li>
                {" "}
                <a href="/featured/">
                  <img
                    src="./featured/c.png"
                    className="fimg"
                    alt="Feat.Company-1"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a href="/featured/">
                  <img
                    src="./featured/c.png"
                    className="fimg"
                    alt="Feat.Company-2"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a href="/featured/">
                  <img
                    src="./featured/c.png"
                    className="fimg"
                    alt="Feat.Company-3"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a href="/featured/">
                  <img
                    src="./featured/c.png"
                    className="fimg"
                    alt="Feat.Company-4"
                  />
                </a>
              </li>{" "}
              <li>
                {" "}
                <a href="/featured/">
                  <img
                    src="./featured/c.png"
                    className="fimg"
                    alt="Feat.Company-5"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="feat">
            <ul>
              <li>
                {" "}
                <a href="/featured/">
                  <img
                    src="./featured/c.png"
                    className="fimg"
                    alt="Feat.Company-6"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a href="/featured/">
                  <img
                    src="./featured/c.png"
                    className="fimg"
                    alt="Feat.Company-7"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
