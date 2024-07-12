import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <div>
        <Header activeLink={"/help-and-contact"} />
      </div>
      <main className="help-and-contact-container ">
        <div className="mt-8 sm:mt-12 mb-6 sm:mb-12 ">
          <p className="inline text-center p-3 sm:p-4  bg-[#2D3039] text-white text-3xl sm:text-4xl">
            Help & contacts
          </p>
        </div>
        <div className="flex gap-2 mb-6">
          <input
            className="max-w-[500px] w-[100%] border-2 border-[#aaaaaa] p-2 text-base text-[#75758b]"
            type="text"
            placeholder="How can we help?"
          />
          <button className="rounded w-[44px] text-white bg-[#145149] text-base">
            Ask
          </button>
        </div>
        <div className="help-and-contact-sub-container flex flex-col sm:flex-row flex-wrap gap-[1%]">
          <div className="w-full sm:w-[32%] gap-[1%]">
            <div className="flex flex-col gap-2 mb-6">
              <p>Featured topic</p>
              <ul className="ml-4 list-disc marker:text-[#149145]">
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Protecting your COWRY accounts</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">
                    Check your vehicle against tougher LEZ standards
                  </a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Get a refund or replacement</a>
                </li>

                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Query about an COWRY photocard</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Avoid Zone I Fares</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Find fares outside Zone 9</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Manange your Congestion Charge</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Report noise or vibration</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">
                    Use StreetCare to report a street or road fault
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <p>Refunds</p>
              <ul className="ml-4 list-disc marker:text-[#149145]">
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Didn't touch in or out</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Lost COWRY card</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Season ticket on COWRY no longer needed</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Touched in and out at the same station</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Visitor COWRY credit no longer needed</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <p>COWRY</p>
              <ul className="ml-4 list-disc marker:text-[#149145]">
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Contact us about COWRY</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Contact us about the COWRY app</a>
                </li>
                <li className="ml-4 mb-1 text-[#149145] text-base underline underline-[#149145]">
                  <a href="#">Report COWRY card lost or stolen</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Contactless</p>
              <ul>
                <li>
                  <a href="#">Find out about card clash</a>
                </li>
                <li>
                  <a href="#">Pay with a mobile payment app</a>
                </li>
                <li>
                  <a href="#">See how travel charges show in card statements</a>
                </li>
                <li>
                  <a href="#">Check your journey and payment history</a>
                </li>
              </ul>
              <p className="mb-2 text-base text-[##2d3039]">
                For contactless payment card refund queries, go to{" "}
                <a className=" text-[#149145] text-base underline" href="#">
                  COWRY page
                </a>
              </p>
              <p className="mb-2 text-base text-[##2d3039]">
                You can either login to your online account, create a new
                account or use our 7-day unregistered card service. You'll also
                be able to see your journey history
              </p>
              <p className=" text-base text-[##2d3039]">
                Information about contactless payment cards is on our{" "}
                <a className=" text-[#149145] text-base underline" href="#">
                  Contactless and mobile pay as you go
                </a>
              </p>
            </div>
            <div>
              <p>Lost property</p>
              <ul>
                <li>
                  <a href="#">Report a lost item</a>
                </li>
                <li>
                  <a href="#">Lost property information</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Feedback about staff</p>
              <ul>
                <li>
                  <a href="#">Any of the Abuja Train Stations</a>
                </li>
                <li>
                  <a href="#">Buses</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Support after serious incidents</p>
              <ul>
                <li>
                  <a href="#">Incidents support service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-[32%]">
            <div>
              <p>Accounts and payments</p>
              <ul>
                <li>
                  <a href="#">Signin to your COWRY account</a>
                </li>
                <li>
                  <a href="#">Reset your password</a>
                </li>
              </ul>
              <p>
                If you can't make a payments for a ARMT service online, speak on
                your bank about <a href="#">Strong Customer Authentication</a>
                (SCA). SCA confirms your identity when making payment online
              </p>
            </div>
            <div>
              <p>COWRY photocard customers</p>
              <ul>
                <li>
                  <a href="#">Help with applying for a COWRY photocard</a>
                </li>
                <li>
                  <a href="#">Claim a refund</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Accessible travel</p>
              <ul>
                <li>
                  <a href="#"> Order acessibility guides</a>
                </li>
                <li>
                  <a href="#">Wheelchair access and avoiding stairs</a>
                </li>
                <li>
                  <a href="#">Get help from staff</a>
                </li>
                <li>
                  <a href="#">Order please offer me a seat badge</a>
                </li>
                <li>
                  <a href="#">Contact us about accessibility</a>
                </li>
              </ul>
            </div>
            <div>
              <p>Report</p>
              <ul>
                <li>
                  <a href="#">Roadwork and street issues</a>
                </li>
                <li>
                  <a href="#">Criminal damamge pr antisocial behaviour</a>
                </li>
                <li>
                  <a href="#">Other crime or incident</a>
                </li>
                <li>
                  <a href="#">Cab touting</a>
                </li>
                <li>
                  <a href="#">
                    Tube, Rail, overground, DLR, Trams stations - Noise
                    vibration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>Enquiries and complaints</p>
              <ul>
                <li>
                  <a href="#">
                    Tube, Overground, DLR, Trams and Elizabeth line
                  </a>
                </li>
                <li>
                  <a href="#">Buses</a>
                </li>
                <li>
                  <a href="#">River and Woolwich Ferry</a>
                </li>
                <li>
                  <a href="#">IFS Cloud Cable Car</a>
                </li>
                <li>
                  <a href="#">Santander cycles</a>
                </li>
                <li>
                  <a href="#">Taxi and private hire</a>
                </li>
                <li>
                  <a href="#">Congestion Charge</a>
                </li>
                <li>
                  <a href="#">Direct Vision Standard and HGV Safety Permit</a>
                </li>
                <li>
                  <a href="#">Ultra Low Emission Zone</a>
                </li>
                <li>
                  <a href="#">
                    How to appeal against against our response to a complaint
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-[32%] hidden sm:block">
            <div className="shadow-lg p-4 bg-[#eeeeee]">
              <p>Also on the site</p>
              <div className=" -y-2 divide-y-[#121212] border-2 border-[#121212]">
                <div className="p-2 bg-white flex justify-between items-center">
                  <p className="text-base text-[##2d3039]">Careers</p>
                  <FaAngleRight />
                </div>
                <div className="p-2 bg-white flex justify-between items-center">
                  <p className="text-base text-[##2d3039]">
                    Contact for media coverage
                  </p>
                  <FaAngleRight />
                </div>
                <div className="p-2 bg-white flex justify-between items-center">
                  <p className="text-base text-[##2d3039]">Public affairs</p>
                  <FaAngleRight />
                </div>
                <div className="p-2 bg-white flex justify-between items-center">
                  <p className="text-base text-[##2d3039]">
                    Contact us about corporate affairs
                  </p>
                  <FaAngleRight />
                </div>
                <div className="p-2 bg-white flex justify-between items-center">
                  <p className="text-base text-[##2d3039]">
                    Urban planning and construction
                  </p>
                  <FaAngleRight />
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#eeeeee]">
              <p>Related websites</p>
              <div className="p-2 flex justify-between items-center bg-white border-2 border-[#121212]">
                <p className="text-[#149145] text-base text-[##2d3039]">
                  Consultations
                </p>
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="mb-6">
              <p className="mb-2 text-lg font-bold text-[#2d3039]">
                Contact us
              </p>
              <p className="mb-2 text-base font-semibold text-[#2d3039]">
                By phone
              </p>
              <ul>
                <li>
                  <a className="text-[#149145] text-base underline" href="#">
                    Call +234 802 369 9037
                  </a>
                </li>
                <li>
                  <a className="text-[#149145] text-base underline" href="#">
                    +234 906 417 3170
                  </a>
                </li>
                <li>
                  <a className="text-[#149145] text-base underline" href="#">
                    +234 815 233 9568
                  </a>
                </li>
                <li>
                  <a className="text-[#149145] text-base underline" href="#">
                    (call charges may apply)
                  </a>
                </li>
              </ul>
            </div>

            <div className="event-time ">
              <div className="flex flex-col sm:flex-row  w-[100%] max-w-[700px]">
                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-base font-semibold text-[#2d3039]">
                    Message
                  </p>
                  <ul className="ml-4 list-disc marker:text-[#2d3039]">
                    <li className="ml-4 mb-1 text-[#2d3039] text-base">
                      On{" "}
                      <a
                        href="#"
                        className="text-[#149145] text-base underline"
                      >
                        Facebook
                      </a>{" "}
                      or{" "}
                      <a
                        href="#"
                        className="text-[#149145] text-base underline"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-base font-semibold text-[#2d3039]">
                    Email
                  </p>
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="text-[#149145] text-base underline"
                      >
                        info@armt.ng
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#149145] text-base underline"
                      >
                        support@armt.ng
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="event-time">
              <p>Customer service commitment</p>
              <div>
                <p>
                  When you get in contact with us you can expect a high standard
                  of customer service, as detailed in our <span></span>
                  <a href="#" className="text-[#149145] text-base underline">
                    customer promise.
                  </a>
                  <span></span>
                  We may also ask you to take part in a confidential survey.
                  We'll use your feedback to improve our services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[32%] mb-[5rem] sm:hidden block">
          <div className="shadow-lg  p-4 bg-[#eeeeee] mobile-comp">
            <p>Also on the site</p>
            <div className=" divide-y-2 divide-y-[#121212] border-2 border-[#121212]">
              <div className="p-2 bg-white flex justify-between items-center">
                <p className="text-base text-[##2d3039]">Careers</p>
                <FaAngleRight />
              </div>
              <div className="p-2 bg-white flex justify-between items-center">
                <p className="text-base text-[##2d3039]">
                  Contact for media coverage
                </p>
                <FaAngleRight />
              </div>
              <div className="p-2 bg-white flex justify-between items-center">
                <p className="text-base text-[##2d3039]">Public affairs</p>
                <FaAngleRight />
              </div>
              <div className="p-2 bg-white flex justify-between items-center">
                <p className="text-base text-[##2d3039]">
                  Contact us about corporate affairs
                </p>
                <FaAngleRight />
              </div>
              <div className="p-2 bg-white flex justify-between items-center">
                <p className="text-base text-[##2d3039]">
                  Urban planning and construction
                </p>
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#eeeeee]">
            <p>Related websites</p>
            <div className="p-2 flex justify-between items-center bg-white border-2 border-[#121212]">
              <p className="text-[#149145] text-base text-[##2d3039]">
                Consultations
              </p>
              <FaAngleRight />
            </div>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
