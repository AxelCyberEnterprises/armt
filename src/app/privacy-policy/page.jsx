"use client"

import Bullet from '@/components/Bullet/Bullet'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import "./page.css"

function page(props) {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="privacy__container">
       <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="privacy__container-header">
        <Header activeLink={"/privacy-policy"} />
      </div>
      <div className="privacy__container-body">
        <div className="privacy__container-body_topic">
          <p>Privacy Policy</p>
        </div>
        <p>Updated: May 21, 2024</p>
        <div className="privacy__container-body_section1">
          <h2 className="privacy-heading">Introduction</h2>
          <p className="privacy-text">We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website and use our services.</p>
        </div>

        <div className="privacy__container-body_section2">
          <h2 className="privacy-heading">Informations we collect</h2>
          <p className="privacy-text">We collect various types of information to provide and improve our services to you:</p>
          <div className="privacy__container-list_container">
            <p>1.  Personal Information:</p>
            <div className="privacy_ul">
              <Bullet bulletText="Name"/>
              <Bullet bulletText="Email address"/>
              <Bullet bulletText="Phone number"/>
              <Bullet bulletText="Payment information"/>
              <Bullet bulletText="Travel details (departure and arrival stations, travel dates, etc.)"/>
            </div>
          </div>
          <div className="privacy__container-list_container">
            <p>2. Non-Personal Information:</p>
            <div className="privacy_ul">
              <Bullet bulletText="Browser type"/>
              <Bullet bulletText="IP address"/>
              <Bullet bulletText="Pages visited on our site"/>
              <Bullet bulletText="Time spent on pages"/>
            </div>
          </div>
        </div>

        <div className="privacy__container-body_section3">
          <h2 className="privacy-heading">How We Use Your Information</h2>
          <p className="privacy-text">We use the information we collect in the following ways:</p>

          <div className="privacy__container-section3_bottom">
            <Bullet bulletText="To process bookings and payments: We use your personal information to confirm your travel details and process your transactions." />
            <Bullet bulletText="To communicate with you: We may use your contact information to send you updates, confirmations, and important notices regarding your bookings." />
            <Bullet bulletText="To improve our services: We analyze non-personal information to understand user behavior and preferences, helping us enhance our website and services." />
            <Bullet bulletText="To comply with legal obligations: We may be required to use your data to comply with applicable laws and regulations." />
          </div>
        </div>

        <div className="privacy__container-body_section3">
          <h2 className="privacy-heading">How We Protect Your Information</h2>
          <p className="privacy-text">We implement various security measures to ensure the protection of your personal information:</p>

          <div className="privacy__container-section3_bottom">
            <Bullet bulletText="Data encryption: Sensitive data such as payment information is encrypted during transmission." />
            <Bullet bulletText="Access controls: Only authorized personnel have access to personal data." />
            <Bullet bulletText="Regular security audits: We conduct regular reviews of our security practices to protect your data." />
          </div>
        </div>

        <div className="privacy__container-body_section3">
          <h2 className="privacy-heading">Sharing Your Information</h2>
          <p className="privacy-text">We do not sell, trade, or otherwise transfer your personal information to outside parties except:</p>

          <div className="privacy__container-section3_bottom">
            <Bullet bulletText="Service providers: We may share your information with trusted third-party service providers who assist us in operating our website and providing services to you, under confidentiality agreements." />
            <Bullet bulletText="Legal requirements: We may disclose your information if required by law or in response to legal processes." />
          </div>
        </div>

        <div className="privacy__container-body_section3">
          <h2 className="privacy-heading">Your Rights</h2>
          <p className="privacy-text">You have the following rights regarding your personal information:</p>

          <div className="privacy__container-section3_bottom">
            <Bullet bulletText="Access: You can request access to the personal information we hold about you." />
            <Bullet bulletText="Correction: You can request correction of inaccurate or incomplete information." />
            <Bullet bulletText="Deletion: You can request deletion of your personal information, subject to certain exceptions." />
            <Bullet bulletText="Objection: You can object to the processing of your personal information in certain circumstances." />
            <p className="privacy-text">To exercise these rights, please contact us at [contact email].</p>
          </div>

        </div>

        <div className="privacy__container-body_section1">
          <h2 className="privacy-heading">Cookies</h2>
          <p className="privacy-text">Our website uses cookies to enhance your user experience. Cookies are small files placed on your device that help us analyze web traffic and customize our services. You can choose to accept or decline cookies through your browser settings.</p>
        </div>

        <div className="privacy__container-body_section1">
          <h2 className="privacy-heading">Third-Party Links</h2>
          <p className="privacy-text">Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies when you visit them.</p>
        </div>

        <div className="privacy__container-body_section1">
          <h2 className="privacy-heading">Changes to This Privacy Policy</h2>
          <p className="privacy-text">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
        </div>

        <div className="privacy__container-body_section1">
          <h2 className="privacy-heading">Contact Us</h2>
          <p className="privacy-text">If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at:</p>

          <div>
            <p className="privacy-text">[Train Station Name]</p>
            <p className="privacy-text">Email: [contact email]</p>
            <p className="privacy-text">Phone: [contact number]</p>
            <p className="privacy-text">Address: [physical address]</p>
          </div>
        </div>
      </div>

      <div className="privacy__container-footer">
        <Footer />
      </div> 
    </div>
  )
}

export default page