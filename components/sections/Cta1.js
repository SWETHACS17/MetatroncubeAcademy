import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cta1 = () => {
  return (
    <>
      <section
        className="section"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "3rem",
          padding: "3rem 15rem",
          flexDirection: "row"
        }}
      >
        <div
          className="textContent"
          style={{
            flex: "1",
            minWidth: "50%",
            maxWidth: "600px",
            fontSize: "1.1rem"
          }}
        >
          <div className="section__title">
            <span className="sub-title" style={{ fontSize: "1rem" }}>Metatroncube Academy</span>
            <h2 className="title tg-svg" style={{ fontSize: "2.2rem" }}>
              Our{" "}
              <span className="position-relative">
                <span
                  className="svg-icon"
                  id="svg-5"
                  data-svg-icon="assets/img/icons/title_shape.svg"
                />
                Approach
              </span>
            </h2>
          </div>
          <p className="description" style={{ fontSize: "1rem", lineHeight: "1.4" ,marginTop: "1rem", lineHeight: "1.6"}}>
            We combine theory with practical application, ensuring you don't just learn but also implement your skills effectively. Our structured learning process makes it easy for beginners and professionals to upgrade their knowledge.
          </p>

          <p className="Helvetica, Sans-serif" style={{ fontSize: "1.5rem" ,fontWeight: "400", color: "#082A5E"}}>What Will You Gain</p>
          <div  style={{ fontSize: "1.2rem", lineHeight: "1", marginBottom: "0.8rem" ,marginTop: "1rem" }}>
            <p style={{fontSize: "1rem"}}><i className="fas fa-check-circle " style={{ color: '#007bff' }}  />&nbsp;&nbsp;&nbsp;In-depth knowledge of cutting-edge digital tools.</p>
            <p style={{fontSize: "1rem"}}><i className="fas fa-check-circle " style={{ color: '#007bff' }}  />&nbsp;&nbsp;&nbsp;Real-world projects to build a strong portfolio.</p>
            <p style={{fontSize: "1rem"}}><i className="fas fa-check-circle " style={{ color: '#007bff' }}  />&nbsp;&nbsp;&nbsp;Flexible learning with step-by-step guidance.</p>
          </div>
        </div>

        <div
          className="imageContainer"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            minWidth: "300px"
          }}
        >
          <Image
            src="/assets/img/others/Approach_img.png"
            alt="Approach visual"
            width={500}
            height={350}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              objectFit: "contain"
            }}
          />
        </div>
      </section>

      <section className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-11.5">
              <div className="cta__wrapper">
                <div className="section__title white-title">
                  <h2 className="title tg-svg">Join us  <span className="position-relative"><span className="svg-icon" id="svg-9" data-svg-icon="assets/img/icons/title_shape.svg" />& Elevate</span>
                    Your Career</h2>
                </div>
                <div className="cta__desc">
                  <p>Start your journey with Metatroncube Academy today!</p>
                </div>
                <div className="tg-button-wrap justify-content-center justify-content-md-end">
                  <Link href="/contact" className="btn white-btn tg-svg"><span className="text">Contact Us
                    Now!</span> <span className="svg-icon" id="cta-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                </div>
                <img className="object" src="/assets/img/objects/cta_shape01.svg" style={{ left: 25, top: '-35px' }} alt="Object" data-aos="fade-down" data-aos-delay={400} />
                <img className="object" src="/assets/img/objects/cta_shape02.svg" style={{ right: '-20px', bottom: '-80px' }} alt="Object" data-aos="fade-up" data-aos-delay={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1200px) {
          .section {
            padding: 3rem 5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 2rem !important;
            flex-direction: column !important;
          }
          
          .textContent {
            max-width: 100% !important;
          }
          
          .imageContainer {
            justify-content: flex-start !important;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Cta1;