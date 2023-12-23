// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const footerStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '24px',
  cursor: 'pointer',
};

const facebookStyle = { ...iconStyle, color: '#1877f2' }; // Facebook blue
const twitterStyle = { ...iconStyle, color: '#1da1f2' }; // Twitter blue
const instagramStyle = { ...iconStyle, color: '#c13584' }; // Instagram purple
const whatsappStyle = { ...iconStyle, color: '#25d366' }; // WhatsApp green

const Footer = () => {
  // Replace the placeholder URLs with your actual social media profile URLs
  const facebookUrl = 'https://www.facebook.com/your-facebook-profile';
  const twitterUrl = 'https://twitter.com/your-twitter-profile';
  const instagramUrl = 'https://www.instagram.com/your-instagram-profile';
  const whatsappUrl = 'https://wa.me/1234567890'; // Replace with your WhatsApp number

  return (
    <footer style={footerStyle}>
      <p>&copy; शिवश्यामा धाम धर्मर्थ सेवा ट्रस्ट, मधुपुर, 2023. All rights reserved. Developed by Rajat Jha</p>
      {/* Social media icons */}
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <FaFacebook style={facebookStyle} />
      </a>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <FaTwitter style={twitterStyle} />
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram style={instagramStyle} />
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp style={whatsappStyle} />
      </a>
    </footer>
  );
};

export default Footer;
