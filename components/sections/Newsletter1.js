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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
      flexWrap: 'wrap'
    }}>
      {/* Left Image Section */}
      <div ref={imageRef} style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1px',
        minWidth: '300px',
        opacity: '0',
        transform: 'translateX(-100px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        <Image
          src="/assets/img/others/contact.png"
          alt="Contact Illustration"
          width={600}
          height={600}
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Right Form Section */}
      <div style={{
        flex: '1',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '20px',
        minWidth: '300px'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#002855',
          marginBottom: '20px'
        }}>
          Contact Us
        </h2>

        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <input type="text" placeholder="Phone Number" style={inputStyle} />
        <textarea placeholder="Your Message" rows="5" style={inputStyle} />
        <input type="text" placeholder="four+6=?" style={inputStyle} />

        <button style={{
          backgroundColor: '#0B5ED7',
          color: '#fff',
          border: 'none',
          padding: '12px 24px',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '5px',
          width: '120px',
          fontSize: '16px',
          transition: 'background-color 0.3s',
          ':hover': {
            backgroundColor: '#0949a8'
          }
        }}>
          SUBMIT
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            flex-direction: column;
          }
          
          .image-container {
            order: 2;
            margin-top: 30px;
          }
          
          .form-container {
            order: 1;
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  padding: '12px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s',
  ':focus': {
    borderColor: '#0B5ED7',
    outline: 'none'
  }
};