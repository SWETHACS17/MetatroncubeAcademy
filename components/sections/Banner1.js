import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content">
                                <img src="/assets/img/banner/bshape_01.png" alt="shape" className="shape alltuchtopdown" />
                                <img src="/assets/img/banner/bshape_02.png" alt="shape" className="shape" />
                                <span className="sub-title" data-aos="fade-right" data-aos-delay={200}>Guaranteed Excellence, Zero Compromise!</span>
                                <h3 className="title tg-svg" data-aos="fade-right" data-aos-delay={400}>Learn, Transform, Succeed <span className="position-relative"><span className="svg-icon" id="svg-2" data-svg-icon="assets/img/icons/title_shape.svg" />Digital</span>Solutions Redefined!</h3>
                                <div className="banner__features" data-aos="fade-right" data-aos-delay={600}>
                                    <p><span className="tick-mark">✓</span> From Beginner to Pro - Code Your Way to Success!</p>
                                    <p><span className="tick-mark">✓</span> Master the Tech Behind the Digital World!</p>
                                </div>
                                <div className="banner__btn-wrap" data-aos="fade-right" data-aos-delay={800}>
                                    <div className="tg-button-wrap">
                                        <Link href="/courses" className="btn tg-svg">
                                            <span className="text">EXPLORE COURSES →</span>
                                        </Link>
                                    </div>
                                    <div className="banner__phone">
                                        {/* Empty div kept for layout consistency */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__images">
                                <img src="/assets/img/banner/banner_img.png" alt="img" className="main-img" />
                                <img src="/assets/img/banner/bshape_03.png" alt="shape" className="shape" data-aos="fade-down-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_04.png" alt="shape" className="shape" data-aos="fade-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_05.png" alt="shape" className="shape" data-aos="fade-down-left" data-aos-delay={1200} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}