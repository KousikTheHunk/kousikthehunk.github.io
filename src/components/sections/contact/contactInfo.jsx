import React from 'react'
import { RiMapPinLine, RiPhoneLine, RiMailLine } from '@remixicon/react'

/*

const ContactInfo = () => {
    return (
        <div className="col-lg-12">
            <div className="contact-content-part  wow fadeInUp delay-0-2s">

                <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                    <div className="contact-icon">
                        <i><RiMapPinLine size={20} /></i>
                    </div>
                    <h2>Address:</h2>
                    <p>India</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                    <div className="contact-icon">
                        <i><RiPhoneLine size={20} /></i>
                    </div>
                    <h2>contact number:</h2>
                    <p>+1234321321</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                    <div className="contact-icon">
                        <i><RiMailLine size={20} /></i>
                    </div>
                    <h2>Email us:</h2>
                    <p>kousik.chandra@yahoo.com</p>
                </div>

            </div>
        </div>
    )
}

*/


const ContactInfo = () => (
    <div className="col-lg-12">
      <div
        className="
          contact-content-part
          d-flex
          justify-content-between
          align-items-center
          wow fadeInUp
          delay-0-2s
        "
      >
        {/* Address */}
        <div className="single-contact">
          <div className="contact-icon"><RiMapPinLine size={20} /></div>
          <h2>Address:</h2>
          <p>India</p>
        </div>
  
        {/* Phone */}
        <div className="single-contact">
          <div className="contact-icon"><RiPhoneLine size={20} /></div>
          <h2>Contact number:</h2>
          <p>+1234321321</p>
        </div>
  
        {/* Email */}
        <div className="single-contact">
          <div className="contact-icon"><RiMailLine size={20} /></div>
          <h2>Email us:</h2>
          <p>kousik.chandra@yahoo.com</p>
        </div>
      </div>
    </div>
  );

  

export default ContactInfo