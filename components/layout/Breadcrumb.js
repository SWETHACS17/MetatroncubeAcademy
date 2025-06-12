import { useEffect, useState } from "react";
import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  const [paddingLeft, setPaddingLeft] = useState('90px');
  const [paddingY, setPaddingY] = useState('130px');
  const [titleFontSize, setTitleFontSize] = useState('2.5rem');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPaddingLeft('10px');
        setPaddingY('80px');
        setTitleFontSize('2rem'); // Smaller title on mobile
      } else {
        setPaddingLeft('90px');
        setPaddingY('130px');
        setTitleFontSize('2.5rem');
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="breadcrumb-area breadcrumb-bg"
      data-background="/assets/img/bg/breadcrumb_bg.png"
      style={{ padding: `${paddingY} 0` }}
    >
      <div className="container" style={{ paddingLeft }}>
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h3 style={{ fontWeight: 600, color: 'white', fontSize: titleFontSize }}>
                {breadcrumbTitle}
              </h3>
              <nav className="breadcrumb">
                <span property="itemListElement" typeof="ListItem">
                  <Link href="/">Metatroncube Academy - Master Digital Skills for the Future</Link>
                </span>
                <span className="breadcrumb-separator">
                  <i className="fas fa-angle-right" />
                </span>
                <span property="itemListElement" typeof="ListItem">{breadcrumbTitle}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
