"use client";
import "@/css/Footer.css";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Logo from "./Logo";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { scrollSpy, animateScroll } from "react-scroll";
import FooterWrapper from "./wrappers/footer-wrapper";

export default function Footer() {
  scrollSpy.update();

  const getBackToTop = () => {
    animateScroll.scrollToTop({
      duration: 250,
      smooth: "easeInOutQuad",
    });
  };
  return (
    <FooterWrapper>
      <div className="footer-container fit-body">
        <FontAwesomeIcon
          className="arrow"
          icon={faCircleArrowUp}
          style={{ color: "#ffffff", cursor: "pointer" }}
          onClick={getBackToTop}
        />
        <div className="data-contact">
          <div className="company-data">
            <Logo />
            <p>
              A leading creative and talent management agency committed to
              shaping bold, authentic stories. Specializing in managing top-tier
              talents, producing captivating content, and connecting brands with
              audiences through innovative strategies. From digital campaigns to
              influencer marketing and content creation, the focus is always on
              turning vision into real-world impact.
            </p>
          </div>
          <div className="contact-info">
            <div className="direct-contact">
              <h2>Email or social – we're here to connect</h2>
              <p>
                <a className="mail-to" href="mailto:info@orientdigital.net">
                  info@orientdigital.net
                </a>
              </p>
            </div>
            <div className="social-media-icons">
              {" "}
              <Link
                href={"https://www.facebook.com/Orient.Digital1/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                href={"https://www.instagram.com/orient_digital1"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href={"https://www.youtube.com/@orient.digital1"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
            <div className="site-map">
              <Link href={"/#about"}>About</Link>
              <Link href={"/#services"}>Services</Link>
              <Link href={"/#talents"}>Talents</Link>
              <Link href={"/#brands"}>Brands</Link>
              <Link href={"/#contact"}>Contact</Link>
            </div>
          </div>
        </div>
        <div className="policy">
          <Link href="/terms-of-use">TERMS OF USE</Link>
          <Link href="/privacy-policy">PRIVACY POLICY</Link>
        </div>
        <div className="credit">
          © {new Date().getFullYear()} <span>&nbsp; Orient Digital</span>. All
          rights reserved.
        </div>
      </div>
    </FooterWrapper>
  );
}
