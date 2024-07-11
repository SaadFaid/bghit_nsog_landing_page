import React from 'react';
import './ContactsPage.css';
import downloadapp from './images/downloadapp.png'; 
import facebookIcon from './images/facebook.png';  // Update with the correct image path
import twitterIcon from './images/twitter.png';  // Update with the correct image path
import instagramIcon from './images/instagram.png';  // Update with the correct image path
import envelopeIcon from './images/envelope.png';  // Update with the correct image path
import whatsappIcon from './images/whatsapp.png';  // Update with the correct image path

const ContactsPage = () => {
  return (
    <div className="contacts-content" id="contacts">
      <div>
        <a href="#"><img src={downloadapp} alt="download the app" className="app-download-content"/></a>
      </div>
      <div className="contact-info">
        <p>Need help renting a car? Please call <a href="tel:+212637668207">+212 637668207</a></p>
      </div>
      <div className="social">
        <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
        <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
        <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
        <a href="#"><img src={whatsappIcon} alt="WhatsApp" /></a>
        <a href="#"><img src={envelopeIcon} alt="Envelope" /></a>
      </div>
      <div className="footer">
        <p>BGHIT NSOG</p>
      </div>
    </div>
  );
};

export default ContactsPage;
