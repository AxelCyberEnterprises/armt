"use client";

import "./Header.css";
import Image from "next/image";
import React, { useState } from "react";
import ActiveLink from "../ActiveLink";
import Link from "next/link";

function Header({ activeLink }) {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const [activeTab, setActiveTab] = useState(activeLink);

  const toggleNav = () => {
    setToggle(!toggle);
  };
  const toggleMore = () => {
    setToggle2(!toggle2);
  };

  return (
    <div className="top-nav">
      <div className="header__container">
        <Link href={"/"}>
          <img
            src="/logo.png"
            alt="Description of the image"
            width={75}
            height={30}
          />
        </Link>
        <div className="header__container-links">
          <ActiveLink
            href={"/"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            Home
          </ActiveLink>
          <ActiveLink
            href={"/about"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            About
          </ActiveLink>
          <ActiveLink
            href={"/live-arrivals"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            Live Arrivals
          </ActiveLink>
          <ActiveLink
            href={"/safety"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            Safety
          </ActiveLink>
          <ActiveLink
            href={"/status-updates"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            Status updates
          </ActiveLink>

          {/* <ActiveLink
            href={"/help-and-contact"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            Help & Contact
          </ActiveLink> */}
          <div className="header__container-links_more" onClick={toggleMore}>
            <p>More</p>
            <img src="/arrow3.png" alt="" />
          </div>
        </div>
        <div className="header__container-search">
          <img src="/search.png" alt="" />
          <input placeholder="Search" />
        </div>

        <div className="hamburger-img" onClick={toggleNav}>
          {toggle ? (
            <img src="/close.png" alt="" />
          ) : (
            <img src="/hamburger.png" alt="" />
          )}
        </div>
      </div>

      <div className={toggle2 ? "header-more" : "none"}>
        <Link className="more-link" href="/history">
          History
        </Link>
        <Link className="more-link" href="/careers">
          Careers
        </Link>
        <Link className="more-link" href="/maps">
          Maps
        </Link>
        <Link className="more-link" href="/help-and-contact">
          Help & Contact
        </Link>
      </div>
      <div className={toggle ? "header__links-responsive" : "none"}>
        <ActiveLink
          href={"/"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          Home
        </ActiveLink>
        <ActiveLink
          href={"/about"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          About
        </ActiveLink>
        <ActiveLink
          href={"/live-arrivals"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          Live Arrivals
        </ActiveLink>
        <ActiveLink
          href={"/safety"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          Safety
        </ActiveLink>
        <ActiveLink
          href={"/status-updates"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          Status updates
        </ActiveLink>
        <ActiveLink
          href={"/maps"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          Maps
        </ActiveLink>
        {/* <ActiveLink
          href={"/fares"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          Fares
        </ActiveLink> */}
        <ActiveLink
          href={"/help-and-contact"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          Help & Contact
        </ActiveLink>
        <div className="header__container-search-2">
          <img src="/search.png" alt="" />
          <input placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Header;
