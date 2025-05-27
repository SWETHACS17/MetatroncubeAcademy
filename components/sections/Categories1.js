import Link from "next/link"

export default function Categories1() {
    return (
        <>
            <section className="categories-area section-py-130">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-8 col-md-10">
                            <div className="categories__title-wrap text-center text-xl-start">
                                <div className="section__title">
                                    <span className="sub-title">Learn Different, Stand Out!</span>
                                    <h2 className="title tg-svg">Explore Our <span className="position-relative"><span className="svg-icon" id="svg-5" data-svg-icon="assets/img/icons/title_shape.svg" />Categories!</span>
                                    </h2>
                                </div>
                                <p>Are you ready to master the art of digital marketing? Our course covers all the essential elements of online marketing, giving you the skills and confidence to create, implement, and manage successful campaigns. From SEO to social media marketing and everything in between, our curriculum is designed to provide you with a 360-degree understanding of the digital marketing world.</p>
                                <div className="tg-button-wrap justify-content-center justify-content-xl-start">
                                    <Link href="/courses" className="btn btn-border tg-svg"><span className="text">All
                                        Categories</span> <span className="svg-icon" id="svg-6" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-9">
                            <div className="categories__wrap">
                                <img src="/assets/img/objects/categories_shape03.svg" alt="shape" data-aos="fade-right" />
                                <img src="/assets/img/objects/categories_shape04.svg" alt="shape" data-aos="fade-left" />
                                <div className="row justify-content-center row-cols-2 row-cols-md-3">
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <i className="flaticon-graphic-design" />
                                                <span className="name">Graphic Design</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <i className="flaticon-email-marketing" />
                                                <span className="name">Digital Marketing</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center row-cols-2 row-cols-sm-3">
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <i className="flaticon-bars" />
                                                <span className="name">E-commerce Development</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <i className="flaticon-programming-language" />
                                                <span className="name">Video <br></br> Editing
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="categories__item">
                                            <Link href="/courses">
                                                <i className="flaticon-atom" />
                                                <span className="name">Web Development</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories__shapes">
                    <div className="categories__shapes-item rotateme"><img src="/assets/img/objects/categories_shape01.png" alt="shape" /></div>
                    <div className="categories__shapes-item" data-aos="fade-up"><img src="/assets/img/objects/categories_shape02.png" alt="shape" /></div>
                </div>
            </section>
        </>
    )
}
