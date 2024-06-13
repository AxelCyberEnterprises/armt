"use client";

import React from "react";
import Link from "next/link";
import LiveArrivals from "@/app/privacy-policy/page";
import Transparency from "@/app/transparency/page";
import Terms from "@/app/terms-of-use/page";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__container-column col-lg-8">
        <h2>Help & Contacts</h2>
        <div className="footer__container-column_links">
          <Link href={"/about"} className="footer__container-links">
            About
          </Link>
          <Link href={"/careers"} className="footer__container-links">
            Careers
          </Link>
          <p>Publications & reports</p>
          <Link href={"/safety"} className="footer__container-links">
            Safety & Security
          </Link>

          <Link href={"/transparency"} className="footer__container-links">
            Transparency
          </Link>
        </div>
      </div>

      <div className="footer__container-column">
        <h2>Information</h2>
        <div className="footer__container-column_links">
          <p>Business & Advertisement</p>
          <p>Media</p>
          <p>Tax & Private hire</p>
        </div>
      </div>

      <div className="footer__container-column">
        <h2>Other pages</h2>
        <div className="footer__container-column_links">
          <Link href={"/privacy-policy"} className="footer__container-links">
            Privacy policy
          </Link>
          <Link href={"/terms-of-use"} className="footer__container-links">
            Terms of use
          </Link>
          <Link href={"/"} className="footer__container-links">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
