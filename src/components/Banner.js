import React from "react";
import "../App.css";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="container">
        {/* <video src='/src/videos/video-2.mp4' autoPlay loop muted /> */}
        <div className="row">
          <h1>ADVENTURE AWAITS</h1>
          <p>Search for Business Opportunities</p>
        </div>

        <div className="fillterBox" id="">
          <form
            name="dist_form"
            method="GET"
            action="/distributors/search_action.html"
          >
            <div className="radioCnt clearfix">
              <div className="radio radio-default radio-inline">
                {" "}
                <input
                  name="mode"
                  defaultValue="L"
                  defaultChecked="checked"
                  id="lookingDistributor"
                  type="radio"
                />{" "}
                <label htmlFor="lookingDistributor">
                  Companies looking for Distributors{" "}
                </label>{" "}
              </div>
              <div className="radio radio-default radio-inline">
                {" "}
                <input
                  id="becomeDistributors"
                  type="radio"
                  defaultValue="B"
                  name="mode"
                />{" "}
                <label htmlFor="becomeDistributors">
                  Companies want to become Distributors{" "}
                </label>{" "}
              </div>
            </div>
            <div className="crow">
              <div className="fillterCategory">
                <div className="selectStyle">
                  {" "}
                  <select name="category_id" id="">
                    <option value>Categories</option>
                    <option value={1}>Agriculture</option>
                    <option value={29}>Apparel &amp; Fashion</option>
                    <option value={64}>Automobile</option>
                    <option value={1673}>
                      Brass Hardware &amp; Components
                    </option>
                    <option value={76}>Business Services</option>
                    <option value={180}>Chemicals</option>
                    <option value={228}>
                      Computer Hardware &amp; Software
                    </option>
                    <option value={246}>Construction &amp; Real Estate</option>
                    <option value={288}>Consumer Electronics</option>
                    <option value={319}>
                      Electronics &amp; Electrical Supplies
                    </option>
                    <option value={362}>Energy &amp; Power</option>
                    <option value={381}>Environment &amp; Pollution</option>
                    <option value={395}>Food &amp; Beverage</option>
                    <option value={1628}>Furniture</option>
                    <option value={421}>Gifts &amp; Crafts</option>
                    <option value={451}>Health &amp; Beauty</option>
                    <option value={483}>Home Supplies</option>
                    <option value={2372}>
                      Home Textiles &amp; Furnishings
                    </option>
                    <option value={2338}>
                      Hospital &amp; Medical Supplies
                    </option>
                    <option value={2398}>Hotel Supplies &amp; Equipment</option>
                    <option value={505}>Industrial Supplies</option>
                    <option value={1426}>Jewelry &amp; Gemstones</option>
                    <option value={2413}>Leather &amp; Leather Products</option>
                    <option value={1215}>Machinery</option>
                    <option value={535}>Mineral &amp; Metals</option>
                    <option value={554}>Office &amp; School Supplies</option>
                    <option value={582}>Packaging &amp; Paper</option>
                    <option value={2565}>Pharmaceuticals</option>
                    <option value={2317}>Pipes, Tubes &amp; Fittings</option>
                    <option value={224}>Plastics &amp; Products</option>
                    <option value={593}>Printing &amp; Publishing</option>
                    <option value={1642}>
                      Scientific &amp; Laboratory Instruments
                    </option>
                    <option value={737}>Security &amp; Protection</option>
                    <option value={620}>Sports &amp; Entertainment</option>
                    <option value={663}>Telecommunications</option>
                    <option value={680}>Textiles &amp; Fabrics</option>
                    <option value={712}>Toys</option>
                    <option value={728}>Transportation</option>
                  </select>
                  <span className="ico">
                    <i className="fas fa-chevron-down" />
                  </span>{" "}
                </div>
              </div>
              <div className="fillterSearch">
                <div className="">
                  {" "}
                  <input
                    name="keyword"
                    placeholder="Search Product keywords"
                    type="text"
                    className="searchProduct"
                  />{" "}
                  <span id="distButton" className="btn searchBtn">
                    <i className="fa fa-search" />
                    Search
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="fillterPostBtn">
            <a href="/requirement.html" className="btn rbtn">
              Post your requirement
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
