import Extras from "@/components/Extras/Extras";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import "./page.css";

function page() {
  return (
    <div className="safety__container">
      <div className="safety__container-header">
        <Header />
      </div>
      <div className="safety__container-topic">
        <p>Safety</p>
      </div>
      <div className="responsive_paj">
        <p>Plan a Journey</p>
        <img src="/plus.png" alt="" />
      </div>
      <div className="safety__container-body">
        <div className="safety__container-left">
          <div className="safety__container-left_top">
            <div className="safety-extras__container">
              <div className="safety-extras__container-left">
                <h2>Stay safe</h2>
                <p>Handy tips for staying safe while you travel</p>
              </div>
              <div className="safety-extras__container-right">
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
          </div>

          <div className="safety__container-left_bottom">
            <div className="safety__container-extras">
              <img src="/evacuation.png" alt="" />
              <Extras
                extrasHead="Emergency evacuation"
                extrasBody="Find out what to do in a the unlikely event of an emergency on the Train"
              />
            </div>
            <div className="safety__container-extras">
              <img src="/report.png" alt="" />
              <Extras
                extrasHead="Report a crime or incident"
                extrasBody="How to report a crime or other incident on the transport system"
              />
            </div>
            <div className="safety__container-extras">
              <img src="/roaad-safety.png" alt="" />
              <Extras
                extrasHead="Road safety advice"
                extrasBody="Advice for cyclists, motorcyclists and other road users"
              />
            </div>
            <div className="safety__container-extras">
              <img src="/call.png" alt="" />
              <Extras
                extrasHead="ARMT services incident support"
                extrasBody="Support for those injured or affected by a serious incident involving ARMT services"
              />
            </div>
            <div className="safety__container-extras">
              <img src="/road-traffic.png" alt="" />
              <Extras
                extrasHead="Road traffic collision support"
                extrasBody="Advice and information for people who have been affected by a road traffic collision"
              />
            </div>
          </div>
        </div>

        <div className="safety__container-right">
          <div className="safety__container-right_section1">
            <div className="safety__container-section1_top">
              <p>Plan a Journey</p>
            </div>
            <div className="safety__container-section1_bottom">
              <div className="safety__container-input">
                <input placeholder="From" />
                <input placeholder="To" />
              </div>
              <div className="safety__container-leaving">
                <p>
                  Leaving: now <span className="green-span">change time</span>
                </p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
              <button>Plan my journey</button>
            </div>
          </div>

          <div className="safety__container-right_section2">
            <div className="safety__container-right_text1">
              <h2>Contact us about safety issues</h2>
              <p>We’re open 24 hours a day, 7 days a week.</p>
            </div>
            <div className="safety__container-right_text2">
              <h2>Call</h2>
              <p>
                <span className="green-link">Charges apply</span> Call +234 802
                369 9037
              </p>
              <p>+234 906 417 3170</p>
              <p>+234 815 233 9568</p>
            </div>

            <div className="safety__container-right_text4">
              <h2>Email</h2>
              <ul>
                <li>
                  {" "}
                  <span className="green-link">info@armt.ng</span>
                </li>
                <li>
                  {" "}
                  <span className="green-link">support@armt.ng</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="safety__container-right_section3">
            <h2>Also on this site</h2>
            <div className="safety__container-also">
              <div className="safety__container-also_extra">
                <p>Safety & security</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
              <div className="safety__container-also_extra">
                <p>Find a local minicab</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="safety__container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default page;
