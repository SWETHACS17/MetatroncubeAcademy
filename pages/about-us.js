
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function AboutUs() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">Who we are</span>
                                            <h2 className="title tg-svg">Building Careers with <span className="position-relative"><span className="svg-icon" id="about-svg" data-svg-icon="assets/img/icons/title_shape.svg" />Industry-Ready</span>  Skills </h2>
                                        </div>
                                        <p className="fw-medium">At Metatron Cube Academy, we believe in empowering individuals with skills that make a difference!!</p>
                                        <p>As an extension of Metatron Software Solutions, we bring years of expertise in Digital Marketing, Web Development, and Tech Solutions to our academy. Our goal is to bridge the gap between education and industry needs by providing hands-on, career-focused training.</p>
                                       <div className="tg-button-wrap">
                                        <Link href="/courses" className="btn tg-svg flex items-center gap-2">
                                            <span className="text">Explore Courses</span>
                                            <img
                                            src="/assets/img/icons/btn-arrow.svg"
                                            alt="arrow icon"
                                            className="w-4 h-4"
                                            />
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/assets/img/others/about_img03.jpg" alt="img" />
                                        </div>
                                        <div className="column">
                                            <img src="/assets/img/others/about_img04.jpg" alt="img" />
                                            <img src="/assets/img/others/about_img05.jpg" alt="img" />
                                        </div>
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="fact-area fact-bg" data-background="/assets/img/bg/fact_bg.jpg">
                    <section className="vision-mission-area" style={{backgroundImage: "url(/assets/img/bg/fact_bg.jpg)"}}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
                <div className="row gx-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="vision-card h-100 p-4 p-lg-5 text-center" 
                             style={{
                                 backgroundColor: 'rgba(9, 35, 111, 0.9)',
                                 borderRadius: '10px',
                                 color: 'white',
                                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                             }}>
                            <h2 className="mb-3 position-relative pb-3  text-white">Our Vision</h2>
                            <p className="mb-0  text-white">To create industry-ready professionals through innovative learning.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mission-card h-100 p-4 p-lg-5 text-center" 
                             style={{
                                 backgroundColor: 'rgb(9, 35, 111, 0.9)',
                                 borderRadius: '10px',
                                 color: 'white',
                                 boxShadow: '0 10px 30px rgba(255, 254, 254, 0.2)'
                             }}>
                            <h2 className="mb-3 position-relative pb-3 text-white">Our Mission</h2>
                            <p className="mb-0 text-white">To equip learners with practical skills that drive success in the digital world.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
                    </section>
                    <section className="cta-area-two position-relative">
                        <div className="cta__bg" data-background="/assets/img/bg/cta_bg.jpg" />
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-10">
                                    <div className="cta__content">
                                        <p>Metatroncube Academy</p>
                                        <h2 className="title">Join us and become part of a learning revolution where knowledge meets opportunity!</h2>
                                        <div className="tg-button-container">
                                        <div className="tg-button-container">
                                        <Link
                                            href="/courses"
                                            className="btn tg-svg w-fit px-4 py-2 flex items-center gap-2"
                                        >
                                            <span className="text text-sm">Explore Courses</span>
                                            <span className="svg-icon" id="about-btn">
                                            <img src="/assets/img/icons/btn-arrow.svg" alt="arrow" />
                                            </span>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="cta__shapes">
                            <img src="/assets/img/objects/cta_shape001.svg" alt="img" className="position-absolute" data-aos="fade-down-right" data-aos-delay={300} />
                            <img src="/assets/img/objects/cta_shape002.png" alt="img" className="position-absolute" />
                            <img src="/assets/img/objects/cta_shape003.svg" alt="img" className="position-absolute" data-aos="fade-up-left" data-aos-delay={300} />
                        </div>
                    </section>
                    <section className="events-area position-relative section-pt-120 section-pb-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <img src="/assets/img/others/what_makes_us_different.png" alt="img" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <div className="section__title">
                                    <span className="sub-title">Metatroncube Academy</span>
                                    <h3 className="title tg-svg">What Makes Us <span className="position-relative"><span className="svg-icon" id="about-svg" data-svg-icon="assets/img/icons/title_shape.svg" />Different!</span></h3>
                                </div>
                                <div className="content">
                                    <p><b>Hands-On Learning: </b>Work on real-world projects, not just theory.</p>
                                    <p><b>Top-Tier Instructors: </b>Learn from experienced professionals.</p>
                                    <p><b>Comprehensive Curriculum: </b>Stay ahead with cutting-edge skills.</p>
                                    <p><b>Career-Focused Approach: </b>Get guidance on freelancing, job placements, and entrepreneurship.</p>
                                    <p><b>Join us and take the first step toward a successful digital career!</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </Layout>
        </>
    )
}