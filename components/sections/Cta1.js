import React from "react";
import Image from "next/image";

const Cta1 = () => {
  return (
    <>
      <br />
      <section
        className="section"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "3rem",
          padding: "3rem 15rem",
          flexDirection: "row" // Force horizontal layout
        }}
      >
        <div
          className="textContent"
          style={{
            flex: "1",
            minWidth: "50%",
            maxWidth: "600px"
          }}
        >
          <div className="section__title">
            <span className="sub-title">Learn Different, Stand Out!</span>
            <h2 className="title tg-svg">
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
          <p className="description">
            We combine <span style={{ fontWeight: "600" }}>theory with practical application</span>, ensuring you don't just
            learn but also <span style={{ fontWeight: "600" }}>implement your skills effectively</span>. Our structured
            learning process makes it easy for <span style={{ fontWeight: "600" }}>beginners and professionals</span> to
            upgrade their knowledge.
          </p>

          <h3 className="subheading">What Will You Gain</h3>
          <ul className="points">
            <li>In-depth knowledge of cutting-edge digital tools.</li>
            <li>Real-world projects to build a strong portfolio.</li>
            <li>Flexible learning with step-by-step guidance.</li>
          </ul>
        </div>

        <div
          className="imageContainer"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <Image
            src="/assets/img/others/Approach_img.png"
            alt="Approach visual"
            width={400}
            height={250}
            className="image"
          />
        </div>
      </section>
    </>
  );
};

export default Cta1;
