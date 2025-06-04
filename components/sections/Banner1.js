import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner1() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [animateKey, setAnimateKey] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setAnimateKey(prev => prev + 1);
            setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const banners = [
        {
            subtitle: "Guaranteed Excellence, Zero Compromise!",
            title: (
                <> 
                    Learn, Transform, Succeed{" "}
                    <div class="shine-underline-wrapper">
                    <span className="shine-underline" style={{ color: '#1366e3' }}>
                        Digital
                    </span></div>
                    Solutions Redefined!
                </>
            ),
            features: [
                "From Beginner to Pro - Code Your Way to Success!",
                "Master the Tech Behind the Digital World!",
            ],
            bgImage: "banner_img.avif"
        },
        {
            subtitle: "Your Success, Our Digital Strategy!",
            title: (
                <>
                   Driving Growth Through {" "}
                    <span className="shine-underline animate" style={{ color: '#1366e3' }}>
                        Digital
                    </span>{" "}
                     Innovation!
                </>
            ),
            features: [
                "Master the Art of Online Growth!",
                "Master techniques to grow brands, drive sales, and boost visibility",
            ],
            bgImage: "banner_img_1.jpg"
        },
        {
            subtitle: "Shape the Future of Design with Your Creativity!",
            title: (
                <>
                    Transform Ideas Into {" "}
                    <span className="shine-underline animate" style={{ color: '#1366e3' }}>
                        Stunning
                    </span>{" "}
                     Visuals!
                </>
            ),
            features: [
                "Learn how to create eye-catching graphics that sell",
                "Design Like a Pro - Unleash Your Creativity!",
            ],
            bgImage: "banner_img_2.png"
        },
    ];

    const current = banners[activeIndex];

    return (
        <>
            <style jsx>{`
                @media (max-width: 767px) {
                    .download-image {
                        top: 40px !important;
                        left: 20px !important;
                        max-width: 80px !important;
                    }
                }
            `}</style>
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
                {/* Animated download.png - slides from top to bottom (3rd in sequence) */}
                <img 
                    src="/assets/img/banner/download.png" 
                    alt="shape" 
                    key={`download-${animateKey}`}
                    className="download-image"
                    style={{
                        position: "absolute",
                        top: "80px",
                        left: "50px",
                        zIndex: 0,
                        animation: `slideDown 0.5s ease-out 1s forwards`,
                        opacity: 0,
                        maxWidth: "120px"
                    }}
                />

                {/* Animated slider_shape.png - slides from left to right (2nd in sequence) */}
                <img 
                    src="/assets/img/banner/slider_shape.png" 
                    alt="shape" 
                    key={`slider-${animateKey}`}
                    className="slider-shape-image"
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "10px",
                        zIndex: 0,
                        animation: `slideRight 0.5s ease-out 0.5s forwards`,
                        opacity: 0,
                        maxWidth: "400px"
                    }}
                />

                {/* Background image with fade effect on left - changes with each slide */}
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "10%",
                        bottom: "10%",
                        width: "50%",
                        backgroundImage: `url('/assets/img/banner/${current.bgImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        zIndex: 0,
                        transition: "background-image 0.5s ease-in-out"
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: "100px",
                            background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
                        }}
                    />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content" key={animateKey}>
                                <img
                                    src="/assets/img/banner/banner_shape01.png"
                                    alt="shape"
                                    className="shape alltuchtopdown"
                                />
                                <span className="sub-title slide-text" data-aos="fade-right" data-aos-delay={200}>
                                    {current.subtitle}
                                </span>
                                <h3 className="title tg-svg slide-text" data-aos="fade-right" data-aos-delay={400}>
                                    {current.title}
                                </h3>

                                <div className="banner__features slide-text" data-aos="fade-right" data-aos-delay={600}>
                                    <div className="content">
                                        {current.features.map((text, index) => (
                                            <p key={index} style={{ marginBottom: '8px' }}>
                                                <i className="fas fa-check-circle" style={{ color: "#007bff" }} />{" "}
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="banner__btn-wrap slide-text" data-aos="fade-right" data-aos-delay={800}>
                                    <div className="tg-button-wrap">
                                        <Link href="/courses" className="btn tg-svg" style={{ padding: '14px 24px', fontSize: '16px' }}>
                                            <span className="text">EXPLORE COURSES →</span>
                                        </Link>
                                    </div>
                                    <div className="banner__phone"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}