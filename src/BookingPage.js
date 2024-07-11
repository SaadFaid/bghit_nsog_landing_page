import React from 'react';
import './BookingPage.css';
import supportIcon from './images/support.png';
import assuranceIcon from './images/assurance.png';
import gpsIcon from './images/gps.png';
import client1Image from './images/client1.png';
import client2Image from './images/client2.png';

const BookingPage = () => {
  return (
    <div className="booking-content" id="booking">
      <h2 className="booking-title">Our Premium Services</h2>
      <p className="booking-description">
        Bghit Nsog is a reputable car rental company that offers <br /> a wide range of useful services for every taste.
     </p>
      <div className="services">
        <div className="service">
          <img src={supportIcon} alt="24 Hours Support" className="service-icon" />
          <h3>24 Hours Support</h3>
          <p>We support <br />you all hours of the day.</p>
        </div>
        <div className="service">
          <img src={assuranceIcon} alt="Qualified Assurance" className="service-icon" />
          <h3>Qualified Assurance</h3>
          <p>All cars have a <br />valid insurance.</p>
        </div>
        <div className="service">
          <img src={gpsIcon} alt="GPS on Cars" className="service-icon" />
          <h3>GPS on Cars</h3>
          <p>All cars are equipped with<br /> GPS navigation system.</p>
        </div>
      </div>
      <h2 className="clients-title">What Our Clients Say?</h2>
      <div className="clients">
        <div className="client">
          <img src={client1Image} alt="Client 1" className="client-image" />
          <p className="client-name">amine elradi</p>
          <p className="client-feedback">I rented a car for a one-week trip from <br />Bghit Nsog on the recommendation of my <br />friend. Actually, I am satisfied with them.</p>
        </div>
        <div className="client">
          <img src={client2Image} alt="Client 2" className="client-image" />
          <p className="client-name">ahmed refqi</p>
          <p className="client-feedback">During my last trip, I used a Bghit Nsog <br />sport car. The car was completely <br /> clean and had enough gas.</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
