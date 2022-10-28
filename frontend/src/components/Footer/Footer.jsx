import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // <div className="relative">
      <div className="footer bg-primary h-16 px-1 flex justify-between items-center">
        <div ClassName="footer-legal my-auto">
          <ul className="footer-legal-ul text-white text-xs flex flex-col ml-2">
            <li>Conditions générales</li>
            <li>Mentions légales</li>
            <li>2022 All rights reserved</li>
          </ul>
        </div>
        <div className="footer-socials text-white w-1/3 xl:w-52 mr-2 flex items-center justify-between">
          <img
            src="../../media/socials/facebook.png"
            className="footer-social-logo w-7 h-7"
          />
          <img
            src="../../media/socials/youtube.png"
            className="footer-social-logo w-7 h-7 mt-2"
          />
          <img
            src="../../media/socials/instagram.png"
            className="footer-social-logo w-7 h-7"
          />
        </div>
      </div>
    // </div>
  );
};

export default Footer;
