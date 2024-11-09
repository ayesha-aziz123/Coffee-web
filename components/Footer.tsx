import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/ayesha-aziz-574780310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzj2DGQ4QeSL8ja5onAIpA%3D%3D"
        >
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/ayesha-aziz123">
          <FaGithub />
        </Link>
        <Link href="#">
          <FaFacebook />
        </Link>
        <Link href="#">
          <FaTwitterSquare />
        </Link>
      </div>

      <ul className="list">
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>

      <p className="copyright">&#169; 2024 Ayesha | All Right Reserved</p>
    </footer>
  );
};

export default Footer;
