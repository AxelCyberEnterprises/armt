import Bullet from '@/components/Bullet/Bullet'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import "./page.css"

function page() {
  return (
    <div className="terms__container">
      <div className="terms__container-header">
        <Header />
      </div>

      <div className="terms__container-topic">
        <p>Terms of Use</p>
      </div>
      <p>Updated: May 21, 2024</p>

      <div className="terms__container-body">
        <div className="terms__container-section1">
          <h2 className="terms-header">Introduction</h2>
          <p className="terms-text">ARMT respects your concerns about privacy and values the trust and confidence you place in us. These Terms of Use govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms.</p>
        </div>

        <div className="terms__container-section2">
          <h2 className="terms-header">Booking and Payment</h2>
          <div className="terms__container-list">
            <h3 className="terms-header2">1. Booking Process:</h3>
            <div>
              <Bullet bulletText="To book a ticket, you must provide accurate and complete information, including your name, contact details, and payment information."/>
              <Bullet bulletText="All bookings are subject to availability and confirmation."/>
              
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">2. Payment:</h3>
            <div>
              <Bullet bulletText="Payment must be made at the time of booking using a valid payment method."/>
              <Bullet bulletText="We accept various payment methods, including credit/debit cards and online payment services."/>
              
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">3.  Confirmation:</h3>
            <div>
              <Bullet bulletText="Once your booking is confirmed, you will receive a confirmation email with your travel details."/>
              <Bullet bulletText="Please check your confirmation email for accuracy and contact us immediately if there are any errors."/>
              
            </div>
          </div>

        </div>

        <div className="terms__container-section2">
          <h2 className="terms-header">Cancellations and Refunds</h2>
          <div className="terms__container-list">
            <h3 className="terms-header2">1. Cancellation by You:</h3>
            <div>
              <Bullet bulletText="If you need to cancel your booking, please do so through our website or by contacting our customer service."/>
              <Bullet bulletText="Cancellation fees may apply depending on the timing of your cancellation."/>
              
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">2. Prohibited Activities:</h3>
            <div>
              <Bullet bulletText="Unauthorized access or use of our website, including hacking, data mining, and other malicious activities, is strictly prohibited."/>
              <Bullet bulletText="You may not use our website to transmit any harmful or illegal content"/>
              
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">3.   Refunds:</h3>
            <div>
              <Bullet bulletText="Refunds will be processed according to our refund policy, which is available on our website."/>
              <Bullet bulletText="Please allow up to [X] days for the refund to be processed."/>
              <Bullet bulletText="Use of the Website"/>
              
            </div>
          </div>
        </div>

        <div className="terms__container-section2">
          <h2 className="terms-header">Use of the Website</h2>
          <div className="terms__container-list">
            <h3 className="terms-header2">1. Acceptable Use:</h3>
            <div>
              <Bullet bulletText="You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the website."/>
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">2. Prohibited Activities:</h3>
            <div>
              <Bullet bulletText="Unauthorized access or use of our website, including hacking, data mining, and other malicious activities, is strictly prohibited."/>
              <Bullet bulletText="You may not use our website to transmit any harmful or illegal content"/>
              
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">3.   Refunds:</h3>
            <div>
              <Bullet bulletText="Refunds will be processed according to our refund policy, which is available on our website."/>
              <Bullet bulletText="Please allow up to [X] days for the refund to be processed."/>
              <Bullet bulletText="Use of the Website"/>
              
            </div>
          </div>
        </div>

        <div className="terms__container-section2">
          <h2 className="terms-header">Intellectual Property</h2>
          <div className="terms__container-list">
            <h3 className="terms-header2">1. Ownership:</h3>
            <div>
              <Bullet bulletText="All content on our website, including text, graphics, logos, and images, is the property of [Train Station Name] or its licensors and is protected by intellectual property laws."/>
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">2.  License:</h3>
            <div>
              <Bullet bulletText="We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes."/>
              
            </div>
          </div>

         
        </div>

        <div className="terms__container-section2">
          <h2 className="terms-header">Limitation of Liability</h2>
          <div className="terms__container-list">
            <h3 className="terms-header2">1. Disclaimer:</h3>
            <div>
              <Bullet bulletText="Our website and services are provided on an 'as is' and 'as available' basis. We make no warranties, express or implied, regarding the website's operation or the information, content, or materials included."/>
            </div>
          </div>

          <div className="terms__container-list">
            <h3 className="terms-header2">2.  Limitation:</h3>
            <div>
              <Bullet bulletText="To the fullest extent permitted by law, [Train Station Name] shall not be liable for any damages arising from your use of our website or services, including direct, indirect, incidental, punitive, and consequential damages."/>
              
            </div>
          </div>

         
        </div>


        <div className="terms__container-section1">
          <h2 className="terms-header">Indemnification</h2>
          <p className="terms-text">You agree to indemnify, defend, and hold harmless [Train Station Name], its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our website or violation of these Terms and Conditions.</p>
        </div>

        <div className="terms__container-section1">
          <h2 className="terms-header">Changes to These Terms</h2>
          <p className="terms-text">We reserve the right to update or modify these Terms of Use  at any time. Any changes will be posted on this page with an updated effective date. Your continued use of our website after changes have been made constitutes your acceptance of the revised terms.</p>
        </div>

        <div className="terms__container-section1">
          <h2 className="terms-header">Governing Law</h2>
          <p className="terms-text">These Terms od Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>
        </div>

        <div className="terms__container-section1">
          <h2 className="terms-header">Contact Us</h2>
          <p className="terms-text">If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at:</p>
        </div>

        <div className="terms__container-contact">
          <span>Email:</span>
          <p>Support@armt.ng</p>
          <p>info@armt.ng</p>
          <span className="span-margin">Phone:</span>
          <p>+234 802 369 9037</p>
          <p>+234 906 417 3170</p>
          <p>+234 815 233 9568</p>
        </div>
      </div>

      <div className="terms___container-footer">
        <Footer />
      </div>
    </div>
  )
}

export default page