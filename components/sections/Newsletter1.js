// pages/contact.js
import Image from 'next/image';

export default function ContactForm() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      {/* Left Image Section */}
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '20px'
      }}>
        <Image
          src="/assets/img/others/contact.png"
          alt="Contact Illustration"
          width={400}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      {/* Right Form Section */}
      <div style={{
        flex: '1',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginRight: '500px',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#002855',
          marginBottom: '20px'
          
        }}>
        
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
          padding: '10px 20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '5px',
          width: '100px'
        }}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box'
};
