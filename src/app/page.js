import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import "./page.css";
import React from "react";
import Image from "next/image";
import Extras from "@/components/Extras/Extras";
import Link from "next/link";

function page() {
  return (
    <div className="landing__container">
      <div className="landing__container-header">
        <Header />
      </div>
      <div className="landing__container-section1">
        <div className="landing__container-section1_left">
          <button>Plan a journey</button>
          <div className="landing_container-paj">
            <div className="landing__container-paj_button">
              <button className="black">New</button>
              <button>My journeys</button>
              <button>Recents</button>
            </div>
            <div className="landing__container-paj_input">
              <input placeholder="From" />
              <input placeholder="to" />
            </div>
            <div className="landing__container-paj_leaving">
              <p>Leaving: now</p>
              <div className="landing__container-paj_span">
                <span>change time </span>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <button>Plan my journey</button>
          </div>
          <div className="landing__container-arrivals">
            <div className="arrival-box">
              <img src="/time-icon.png" alt="" />
              <Link href="live-arrivals">Live arrivals</Link>
              <p></p>
            </div>
            <div className="arrival-box">
              <img src="/map-icon.png" alt="" />
              <Link href="maps">Maps</Link>
            </div>
            <div className="arrival-box">
              <img src="/nearby-icon.png" alt="" />
              <Link href="nearby">Nearby</Link>
            </div>
          </div>
        </div>
        <div className="landing__container-section1_right">
          <img
            src="/hero.png"
            alt="Description of the image"
            width={250}
            height={250}
          />
          <Link href={"feedback"}>
            <button>Feedback and Suggestion</button>
          </Link>
        </div>
      </div>

      <div className="landing__container-section2">
        <div className="landing__container-section2_column">
          <div className="landing__container-column_header-text">
            <h2>Trains and Buses</h2>
          </div>
          <div className="landing__container-column_color-container">
            <div className="landing__container-color_block">
              <div className="color-block_left dark-green">
                <p>Abuja Metro</p>
              </div>
              <div className="color-block_right">
                <p>Minor delays</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>

            <div className="landing__container-color_block">
              <div className="color-block_left black">
                <p>Stadium Station</p>
              </div>
              <div className="color-block_right">
                <p>Minor delays</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>

            <div className="landing__container-color_block">
              <div className="color-block_left aqua">
                <p>Kukwaba I</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>

            <div className="landing__container-color_block">
              <div className="color-block_left light-cream">
                <p>Kukwaba II</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left brown">
                <p>Wupa</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left navy">
                <p>Idu</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left indigo">
                <p>Bassanjiwa</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left orange">
                <p>Airport</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left light-green">
                <p>GwaGwa</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left yellow">
                <p>DeiDei</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left red">
                <p>Kagini</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div className="landing__container-color_block">
              <div className="color-block_left light-brown">
                <p>Gbazango</p>
              </div>
              <div className="color-block_right">
                <p>Good Service</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
            </div>

            <div className="landing__container-select_container">
              <div className="landing__container-select">
                <p>This weekend</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
              <div className="landing__container-select">
                <p>View all statuses</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>
              <div className="landing__container-select2">
                <p>Buses</p>
                <img src="/arrow.png" alt="" width={20} height={20} />
              </div>

              <div className="landing__container-bus_stop">
                <input placeholder="Bus route or stop name" />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="landing__container-section2_column">
          <div className="landing__container-announcement">
            <p>Announcement</p>
          </div>
          <div className="landing__container-extras">
            <img
              src="/group.png"
              alt="Description of the image"
              width={400}
              height={200}
            />
            <div className="extras-container">
              <Extras
                extrasHead="Let’s do Fridays"
                extrasBody="Get deals and offers on things to do
                in Abuja on off-peak Fridays"
              />
              {/* <Extras
                extrasHead="Southbond Blackwall
                Tunnel closure this 
                weekend"
                extrasBody="Tunnel closed southbound from
                00:01 Sat 18 to 05:00 Mon 20 May"
              /> */}
              <Extras
                extrasHead="Train disruption"
                extrasBody="Continued disruption during repairs"
              />
            </div>
          </div>
        </div>

        <div className="landing__container-section2_column">
          <div className="landing__container-col3_top">
            <div className="arrival-box2">
              <img src="/cowry.png" alt="" />
              <p>Top up cowry</p>
            </div>
            <div className="arrival-box2">
              <img src="/caution.png" alt="" />
              <p>Congestion charge</p>
            </div>
          </div>
          <div className="landing__container-extras">
            <img
              src="/engineer.png"
              alt="Description of the image"
              width={400}
              height={200}
              style={{
                display: "block",
                maxWidth: "100%", // Make the image responsive
                height: "auto", // Maintain aspect ratio
                margin: "0 auto", // Center the image horizontally
              }}
            />
            <div className="extras-container">
              <Extras
                extrasHead="Major works and events"
                extrasBody="Find out about works and events in Abuja
                which may affect your journey"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
