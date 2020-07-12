import React from "react";
import "./index.css";
import facebook from "../../image/facebook.svg";
import twitter from "../../image/twitter.svg";
import linkedin from "../../image/linkedin.svg";

export const FooterBlock = () => (
  <footer className="footer">
    <div className="container">
      <div className="line-up">
        <div className="footer-col1">
          <span className="footer-h">Company</span>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Status page</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">G Suite Maximizer</a>
            </li>
            <li>
              <a href="#">Smart File Organizer</a>
            </li>
            <li>
              <a href="#">DAM Quick Start Guide</a>
            </li>
            <li>
              <a href="#">Metadata Playbook</a>
            </li>
            <li>
              <a href="#">Book a Demo</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col2">
          <span className="footer-h">How it works</span>
          <ul>
            <li>
              <a href="#">Unrestricted Digital</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Version Control</a>
            </li>
            <li>
              <a href="#">Assets Sharing</a>
            </li>
            <li>
              <a href="#">View Sketch online</a>
            </li>
            <li>
              <a href="#">File comparison</a>
            </li>
            <li>
              <a href="#">Branding</a>
            </li>
            <li>
              <a href="#">Analytics & reporting</a>
            </li>
            <li>
              <a href="#">Inboxes</a>
            </li>
          </ul>
        </div>
        <div className="footer-col3">
          <span className="footer-h">Integrations</span>
          <ul>
            <li>
              <a href="#">Integration with Google Drive</a>
            </li>
            <li>
              <a href="#">Integration with Slack</a>
            </li>
            <li>
              <a href="#">Integration with Zapier</a>
            </li>
            <li>
              <a href="#">Add-ons for G Suite</a>
            </li>
            <li>
              <a href="#">Integration with Adobe Photoshop</a>
            </li>
            <li>
              <a href="#">Integration with Adobe Illustrator</a>
            </li>
            <li>
              <a href="#">Integration with Adobe Premiere Pro</a>
            </li>
            <li>
              <a href="#">Integration with Adobe After Effects</a>
            </li>
            <li>
              <a href="#">Integration with Zoho CRM</a>
            </li>
            <li>
              <a href="#">Integration with Google Docs</a>
            </li>
            <li>
              <a href="#">Integration with Google Sheets</a>
            </li>
            <li>
              <a href="#">Integration with Google Forms</a>
            </li>
            <li>
              <a href="#">Integration with Google Slides</a>
            </li>
            <li>
              <a href="#">Integration with Easy Projects</a>
            </li>
          </ul>
        </div>
        <div className="footer-col4">
          <a href="https://www.facebook.com/toptechphoto">
            <img src={facebook} color=" #000000" alt="facebook" />
          </a>
          <a href="https://twitter.com/TopTechPhoto">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/company/pics-io/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="line-down">
        <div className="down-one">
          <div className="h-col1">
            <span className="footer-h">Solutions</span>
            <div className="col-w">
              <ul>
                <li>By Use Cases</li>
                <li>
                  <a href="#">Digital Asset Management</a>
                </li>
                <li>
                  <a href="#">Creative Project Management</a>
                </li>
                <li>
                  <a href="#">Brand Asset Management</a>
                </li>
              </ul>
              <ul>
                <li>By Industry</li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Designers</a>
                </li>
                <li>
                  <a href="#">Software Developers</a>
                </li>
                <li>
                  <a href="#">Schools, colleges, universities</a>
                </li>
                <li>
                  <a href="#">Non-profits</a>
                </li>
                <li>
                  <a href="#">Marketing teams</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-col2">
            <span className="footer-h">Other products</span>
            <div className="col-w">
              <ul>
                <li>
                  <a href="#">Edit.pics.io</a>
                </li>
                <li>
                  <a href="#">Online photo editor</a>
                </li>
                <li>
                  <a href="#">Description & features</a>
                </li>
                <li>
                  <a href="#">About Edit</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Raw.pics.io</a>
                </li>
                <li>
                  <a href="#">Converts RAW to JPEG</a>
                </li>
                <li>
                  <a href="#">Supported cameras and formats</a>
                </li>
                <li>
                  <a href="#">Converts CR2 images</a>
                </li>
                <li>
                  <a href="#">Converts NEF images</a>
                </li>
                <li>
                  <a href="#">How to convert</a>
                </li>
                <li>
                  <a href="#">Convert PDF to JPG</a>
                </li>
                <li>
                  <a href="#">Convert JPG to PDF</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283 75"
            width="146"
            height="39"
          >
            <title>Pics.io</title>
            <path
              fill="#fff"
              d="M26.2 18.9H.4V74h11.7V54.4h14c11.9 0 18.5-8.2 18.5-17.8.1-9.6-6.4-17.7-18.4-17.7zm-1.6 25.2H12.2V29.3h12.5c4.6 0 8.1 2.8 8.1 7.4-.1 4.5-3.5 7.4-8.2 7.4zM52 18.9h11.7V74H52zM101.2 28.4c5.7 0 10.7 3.6 13 8l10.1-5c-3.9-6.9-10.9-13.5-23-13.5C84.8 17.9 72 29.5 72 46.4s12.8 28.5 29.3 28.5c12.1 0 19.1-6.7 23-13.5l-10.1-4.9c-2.3 4.5-7.3 8-13 8-10 0-17.3-7.7-17.3-18.1.1-10.3 7.4-18 17.3-18zM141.3 33.9c0-3.3 2.8-5.5 7.8-5.5 5.6 0 11.6 1.9 16 6l6.5-8.6c-5.4-5-12.7-7.7-21.5-7.7-13 0-20.9 7.6-20.9 16.8 0 20.7 31.7 14 31.7 23.8 0 3.1-3.1 6.1-9.6 6.1-7.6 0-13.6-3.4-17.5-7.4l-6.4 8.9c5.1 5.2 12.7 8.8 23.3 8.8 14.9 0 22-7.6 22-17.7.2-20.6-31.4-14.8-31.4-23.5zM185.9 61.5c-3.6 0-6.7 3.1-6.7 6.7s3.1 6.7 6.7 6.7 6.7-3.1 6.7-6.7-3-6.7-6.7-6.7zM202 18.9h11.7V74H202zM250.7 18C234.1 18 222 29.9 222 46.5S234.1 75 250.7 75c16.7 0 28.8-11.9 28.8-28.5S267.4 18 250.7 18zm0 46.6c-10.2 0-16.7-7.8-16.7-18.1s6.5-18.1 16.7-18.1 16.8 7.8 16.8 18.1c-.1 10.3-6.7 18.1-16.8 18.1zM271.2 7.2L260.8 0h-23l-10.4 7.2H202v7.4h27.4l10.4-7.2h19.1l10.4 7.2h13.3V7.2z"
            ></path>
          </svg>
          <span>Copyright © 2009-2020 TopTechPhoto. All rights reserved.</span>
          <div className="bottom">
            <span>
              <a href="#">Terms of Service | </a>
            </span>
            <span>
              <a href="#">Privacy Policy | </a>
            </span>
            <span>
              <a href="#">Cookies Policy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
