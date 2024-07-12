"use client";

import Bullet from "@/components/Bullet/Bullet";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./page.css";

function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="transparency__container">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="transparency__container-header">
        <Header activeLink={"/transparency"} />
      </div>
      <div className="transparency__container-topic">
        <p>Transparency</p>
      </div>
      <div className="transparency__container-updated">
        <p>Updated: May 21, 2024</p>
      </div>

      <div className="transparency__container-body">
        <div className="transparency__container-body_section1">
          <h2 className="transparency-header">Introduction</h2>
          <p className="transparency-text">
            At ARMT, we believe in maintaining transparency with our customers.
            This page is dedicated to providing clear and detailed information
            about our operations, policies, and practices. We are committed to
            ensuring that you have a complete understanding of how we operate
            and serve you.
          </p>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Our Commitment</h2>
          <p className="transparency-text">We are committed to:</p>
          <div className="transparency-bulet">
            <Bullet bulletText="Customer Satisfaction: Ensuring that our customers have a seamless and enjoyable experience when booking and traveling with us." />
            <Bullet bulletText="Integrity: Conducting our business operations with honesty and fairness." />
            <Bullet bulletText="Accountability: Taking responsibility for our actions and their impact on our customers and community." />
          </div>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Ticket Pricing</h2>
          <p className="transparency-text">
            Our ticket pricing is determined based on several factors, including
          </p>
          <div className="transparency-bulet">
            <Bullet bulletText="Distance of Travel: The fare is calculated based on the distance between the departure and arrival stations." />
            <Bullet bulletText="Class of Service: Different classes (e.g., economy, business) have varying levels of comfort and amenities, reflected in the pricing." />
            <Bullet bulletText="Time of Booking: Prices may vary depending on the booking time, with potential discounts for early bookings." />
          </div>
          <p className="transparency-text margin">
            We strive to offer competitive pricing and occasional promotions to
            provide value to our customers.
          </p>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Cancellation Policy</h2>
          <p className="transparency-text">
            We understand that plans can change. Our refund and cancellation
            policy is designed to be fair and transparent:
          </p>
          <div className="transparency-bulet">
            <Bullet bulletText="Cancellation by You: You can cancel your booking through our website or customer service. Cancellation fees may apply depending on the timing of your cancellation." />
          </div>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Safety and Security</h2>
          <p className="transparency-text">
            Your safety is our top priority. We implement stringent safety and
            security measures:
          </p>
          <div className="transparency-bulet">
            <Bullet bulletText="Train Operations: Regular maintenance and safety checks are conducted on all trains." />
            <Bullet bulletText="Staff Training: Our staff undergo regular training on safety protocols and customer service." />
            <Bullet bulletText="Emergency Procedures: Clear procedures are in place for handling emergencies, ensuring the safety of passengers and staff." />
          </div>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Data Protection</h2>
          <p className="transparency-text">
            We are committed to protecting your personal information:
          </p>
          <div className="transparency-bulet">
            <Bullet bulletText="Data Collection: We collect only the information necessary to provide our services, such as contact details and payment information." />
            <Bullet bulletText="Data Use: Your data is used solely for processing bookings, payments, and improving our services." />
            <Bullet bulletText="Data Security: Advanced security measures are in place to protect your data from unauthorized access or disclosure." />
          </div>
          <p className="transparency-text margin">
            For more information, please refer to our Privacy Policy.
          </p>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Environmental Responsibility</h2>
          <p className="transparency-text">
            We are dedicated to minimizing our environmental impact:
          </p>
          <div className="transparency-bulet">
            <Bullet bulletText="Sustainable Practices: Implementing energy-efficient practices and reducing waste in our operations." />
            <Bullet bulletText="Community Engagement: Collaborating with local communities and stakeholders to promote environmental sustainability." />
          </div>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Customer Feedback</h2>
          <p className="transparency-text">
            Your feedback is invaluable to us. We encourage you to share your
            experiences and suggestions:
          </p>
          <div className="transparency-bulet">
            <Bullet bulletText="Contact Us: You can reach out to our customer service team via email at [contact email] or phone at [contact number]." />
            <Bullet bulletText="Feedback Forms: Available on our website for you to provide feedback on our services." />
          </div>
        </div>

        <div className="transparency__container-body_section2">
          <h2 className="transparency-header">Transparency Reports</h2>
          <p className="transparency-text">
            We publish regular reports to keep you informed about our
            performance and initiatives:
          </p>
          <div className="transparency-bulet">
            <Bullet bulletText="Annual Reports: Detailed reports on our operations, financial performance, and customer satisfaction." />
            <Bullet bulletText="Safety Reports: Information on safety audits, incidents, and improvements." />
            <Bullet bulletText="Environmental Impact Reports: Updates on our efforts to reduce our environmental footprint." />
          </div>
        </div>

        <div className="transparency__container-body_section1">
          <h2 className="transparency-header">Contact Us</h2>
          <p className="transparency-text">
            If you have any questions or concerns about our Privacy Policy or
            the handling of your personal information, please contact us at:
          </p>
        </div>

        <div className="transparency-contact">
          <span>Email</span>
          <p className="transparency-text">Info@armt.ng</p>
          <p className="transparency-text">Support@armt.ng</p>
          <span className="margin">Phone: </span>
          <p className="transparency-text">+234 802 369 9037</p>
          <p className="transparency-text">+234 906 417 3170</p>
          <p className="transparency-text">+234 815 233 9568</p>
        </div>
      </div>

      <div className="transparency-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
