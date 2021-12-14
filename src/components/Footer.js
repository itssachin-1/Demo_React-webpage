import React from "react";
import "../components/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>ABOUT</h2>
              <Link to="/">About Us</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Investors</Link>
            </div>
            <div className="footer-link-items">
              <h2>CATEGORY</h2>
              <Link to="/">Distributor</Link>
              <Link to="/">Franchisor</Link>
              <Link to="/">Sales Agent</Link>
              <Link to="/">Influencer</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>HELP</h2>
              <Link to="/">Feedback</Link>
              <Link to="/">Sitemap</Link>
              <Link to="/">Terms</Link>
              <Link to="/">Report</Link>
            </div>
            <div className="footer-link-items last">
              <h2>CONTACT</h2>
              <Link to="/">Contact Us</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TRVL
                <i className="fab fa-typo3" />
              </Link>
            </div>
            <small className="website-rights">
              TRVL © 2021 All rights reserved.
            </small>
            <div className="social-icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
