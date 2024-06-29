import React from 'react'
import Bullet from '../Bullet/Bullet'
import"./Modal.css"

function Modal(props) {
  return (
    <div className='modal__container'>
      <div className='modal__container-overlay' onClick={props.toggleModal}></div>
      <div className='modal__container-content'>
        <img className="close-program" onClick={props.toggleModal} src="/close2.png" alt="" />
        <div className='modal__container-content_section1'>
          <h1>Submit Application</h1>
          <p>To apply for the open position, send your CV to  <span className="modal-mail">jobs@armt.ng</span> </p>
        </div>
        <div className='modal__container-content_section2'>
          <img src="/caution2.png" alt="disclaimer"  />          
          <div className="modal-bullet">
            <Bullet bulletText="Ensure your CV is up-to-date."/>
            <Bullet bulletText='Use the subject line: "Job Application [Your Name]"'/>
            <Bullet bulletText="Attach all necessary documents in PDF format."/>
          </div>
        </div>
        <div className="modal__container-content_section3">
          <p>We look forward to reviewing your application and will get back to you shortly. If you have any questions, please feel free to contact us at <span className="modal-mail">Info@armt.ng</span></p>
        </div>
      </div>
    </div>
  )
}

export default Modal