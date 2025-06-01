import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner1() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section
                className="banner-area banner-bg"
                style={{
                    marginTop: "60px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    minHeight: "50vh",
                }}
            >
                {/* Background image with fade effect on left */}
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '10%', // Reduced height by positioning from top and bottom
                    bottom: '10%',
                    width: '50%',
                    backgroundImage: "url('/assets/img/banner/banner_img.avif')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0,
                }}>
                    {/* Fade overlay only on the left edge */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '100px',
                        background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
                    }} />
                </div>

                <style jsx>{`
                    @keyframes slideIn {
                        0% {
                            transform: translateX(-50px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                    .slide-text {
                        animation: slideIn 1.5s ease-out forwards;
                    }
                `}</style>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={`banner__content ${isVisible ? "slide-text" : ""}`}>
                                <img
                                    src="/assets/img/banner/banner_shape01.png"
                                    alt="shape"
                                    className="shape alltuchtopdown"
                                />
                                <img
                                    src="/assets/img/banner/slider_shape.png"
                                    alt="shape"
                                    className="shape"
                                />
                                <span
                                    className="sub-title"
                                    data-aos="fade-right"
                                    data-aos-delay={200}
                                >
                                    Guaranteed Excellence, Zero Compromise!
                                </span>
                                <h3
                                    className="title tg-svg"
                                    data-aos="fade-right"
                                    data-aos-delay={400}
                                >
                                    Learn, Transform, Succeed{" "}
                                    <span className="position-relative">
                                        <span
                                            className="svg-icon"
                                            id="svg-2"
                                            data-svg-icon="assets/img/icons/title_shape.svg"
                                        />
                                        Digital
                                    </span>
                                    Solutions Redefined!
                                </h3>

                                <div
                                    className="banner__features"
                                    data-aos="fade-right"
                                    data-aos-delay={600}
                                >
                                    <div className="content">
                                        <p>
                                            <i
                                                className="fas fa-check-circle"
                                                style={{ color: "#007bff" }}
                                            />{" "}
                                            From Beginner to Pro - Code Your Way
                                            to Success!
                                        </p>
                                        <p>
                                            <i
                                                className="fas fa-check-circle"
                                                style={{ color: "#007bff" }}
                                            />{" "}
                                            Master the Tech Behind the Digital
                                            World!
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="banner__btn-wrap"
                                    data-aos="fade-right"
                                    data-aos-delay={800}
                                >
                                    <div className="tg-button-wrap">
                                        <Link
                                            href="/courses"
                                            className="btn tg-svg"
                                        >
                                            <span className="text">
                                                EXPLORE COURSES →
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner__phone">
                                        {/* Empty div kept for layout consistency */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}