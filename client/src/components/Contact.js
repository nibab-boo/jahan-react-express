import React from 'react';
// import { Container } from 'react-bootstrap';
import { useLanContext } from './LanguageProvider';

// ABVv5iKEv8C8JkjyypHCz9cVhTW_smLMW7fSq2z0YPYhwy3R6K71Bw1GfppQHo16lKep3a63z51T
const Contact = () => {
  const json = useLanContext();
  const contact = json.contact;

  return (
    <div className='container'>
      <div className="map">
        <h2 className='jahan'>Contact</h2>
        <div className='map-box'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5759.930797192907!2d139.84244896943716!3d35.88204478173476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189742d1e4c48b%3A0x9f8da709e5067a31!2sJAHAN%20indian%20nepali%20restaurent!5e0!3m2!1sen!2sjp!4v1649570615111!5m2!1sen!2sjp"
          width="400"
          height="300"
          title='Yoshikawa Mise Map'
          style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="contact-box ms-5">
            <p className="info location">
              <a href="https://www.google.com/maps/place/JAHAN+indian+nepali+restaurent/@35.880672,139.844126,15z/data=!4m5!3m4!1s0x0:0x9f8da709e5067a31!8m2!3d35.880672!4d139.844126?hl=en">
                { contact.address }
              </a> 
            </p>
            <p className='info telephone'><a href="tel:0489155644">TEL : 0489155644</a></p>
            <div className="contact-links">
              <a href="https://www.google.com/maps/place/JAHAN+indian+nepali+restaurent/@35.880672,139.844126,15z/data=!4m5!3m4!1s0x0:0x9f8da709e5067a31!8m2!3d35.880672!4d139.844126?hl=en" className='contact-link'>{ contact.directionBtn }</a>
              <a href="tel:0489155644" className='contact-link'>{ contact.callBtn }</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;