import React from "react"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import "./page.css"

function page() {
  return (
    <div className="history__container">
      <div className="history__container-header">
        <Header />
      </div>
      <div className="history__container-hero">
        <div className="history__container-hero_text">
          <p>Our History</p>
        </div>
      </div>

      <div className="history__container-body">
        <div className="history__container-body_section1">
          <h2>The Idea</h2>
          <p>
            The Abuja Rail Mass Transit (ARMT) , commonly known as Abuja Light Rail was the first rapid transit system in the country, West Africa, and the second in Sub-Saharan Africa, following the Addis Ababa Light Rail. It was initially conceived in 1997 during Gen. Sani Abacha's regime but faced delays due to funding issues. In May 2007, China Civil Engineering Construction Company (CCECC) Nigeria was awarded the contract to construct the first two phases, known as Lots 1 and 3.
          </p>
          <p>
            The project was originally designed to address transportation challenges, including heavy traffic and congestion, in the Federal Capital Territory (FCT) and its surrounding areas. Many residents of satellite towns who work in the Abuja Metropolis need reliable transportation. Most people depend on private vehicles and minibuses to travel into the city, and a ban on commercial motorcycles has heightened reliance on informal transport methods. 
          </p>
          <p>
            The ultimate goal is to ensure that Abuja retains its positions as an excellent place to live and work and as a capital that will lead Nigeria in its role as the largest and most dynamic economy in Africa. A reliable rail mass transit will offer many benefits to the city. It will offer a safe and affordable alternative to unsafe public transit. It will offer benefits to the environment by reducing road traffic, gas emission and congestion. It will place Abuja on the world stage as one of the few cities in Africa operating a high railway system.
          </p>
        </div>

        <div className="history__container-body_section1">
          <h2>Bringing it to life</h2>
          <p>
            The project was designed to cover a total distance of 290 km (180 mi) and to be developed in six phases. The contract, valued at US$824 million, with 60% of the cost funded by loans from the Exim Bank of China. The loan agreement was signed on November 7, 2012, between Nigeria and the China EXIM Bank. It is a $500 million concessionary loan with a 2.50% interest rate, a seven-year grace period, and a maturity date of September 21, 2032, spanning a 20-year tenure.  Repayment of the loan commenced in March 2020.
          </p>
          <p>
            In July 2018, the 42.5 km (26.4 mi) Lot 1 that have two lines and 12 stations was completed and opened, connecting Abuja City Centre with the Nnamdi Azikiwe International Airport via  the Lagos–Kano standard gauge railway at Idu..  It has stations at  Abuja metro, stadium, Kukwaba I, Kukwaba II, Wupa, Idu, Bassanjiwa and the airport. <br />
            Lot 2 connects Gwagwa to Nyanya/Karu via the metro station. The Blue Line (Lot 3) was planned to run from Idu to Kubwa, with stops at Idu, Gwagwa, Deidei, Kagini, and Gbazango. Lot 4 extends from Kuje to Karshi, covering the remaining sections of transit-way Line 2. Lot 5 was set to link Kubwa through Bwari to Suleja, while Lot 6 will connect the airport to Dobi via Kuje and Gwagwalada.
          </p>
        </div>

        <div className="history__container-body_section1">
          <h2>Launched and paused</h2>
          <p>
            Upon opening in 2018, only the section between Abuja Metro Station and the Airport was operational, with an intermediate station at Idu. The remaining nine stations were originally scheduled to begin operations in 2020 before COVID-19 struck. The rail line operated on a significantly reduced timetable in comparison to other worldwide light rail systems; with three daily departures from Idu to Abuja Metro Station, with two running the full length to the airport, on weekdays only. The delivery of further rolling stock was anticipated to provide services every thirty minutes.
          </p>
        </div>

        <div className="history__container-body_section1">
          <h2>Re-launched and operation commenced</h2>
          <p>
            Four years later, on Wednesday, 22nd of May, President Bola Tinubu re-launched the commercial operations of the Abuja Rail Mass Transit System Rehabilitation under the leadership of the Nyesome Wike-led Federal Capital Territory Administration. The minister announced during the ministerial sectorial briefing, that the Abuja Light Rail would offer free rides for two months following its commissioning, stating that residents will begin the use of the Metro rails from Tuesday, the 28th of May.  
          </p>
          <p>
            President Bola Tinubu extended this period to seven months, providing free train rides for Abuja residents until the end of the year. He stated, "That will give the people hope and a reason to celebrate”
          </p>
        </div>
      </div>

      <div className="history__container-footer">
        <Footer />
      </div>
    </div>
  )
}

export default page