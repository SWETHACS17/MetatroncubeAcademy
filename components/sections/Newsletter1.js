// pages/contact.js
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ContactForm() {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('image-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-container">
      {/* Left Image Section */}
      <div ref={imageRef} className="contact-image">
        <Image
          src="/assets/img/others/contact.png"
          alt="Contact Illustration"
          width={500}
          height={500}
          className="responsive-image"
        />
      </div>

      {/* Right Form Section */}
      <div className="contact-form">
       

        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <input type="text" placeholder="Phone Number" className="form-input" />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="form-input message-input"
        />
        <input type="text" placeholder="four+6=?" className="form-input" />
        <button className="submit-button" style={{fontFamily: 'Montserrat, sans-serif'}}>SUBMIT</button>
      </div>
    </div>
  );


};


  