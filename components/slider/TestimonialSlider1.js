import { useEffect, useRef, useState } from "react"
import Slider from "react-slick"

const settings1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial__content-active',
    dots: false,
    arrows: false,
    fade: true,
    focusOnSelect: true
}
const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".testimonial__image-active",
    prevArrow: (
        <button type="button" className="slick-prev">
            <i className="flaticon-chevron"></i>
        </button>
    ),
    nextArrow: (
        <button type="button" className="slick-next">
            <i className="flaticon-chevron"></i>
        </button>
    ),
    appendArrows: ".testimonial__content-nav",
}

export default function TestimonialSlider1() {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const slider1Ref = useRef(null)
    const slider2Ref = useRef(null)

    useEffect(() => {
        setNav1(slider1Ref.current)
        setNav2(slider2Ref.current)
    }, [])

    return (
        <>
            <div className="row align-items-xl-center">
                <div className="col-lg-5 col-md-7 col-sm-9">
                    <div className="testimonial__image-wrapper position-relative">
                        <Slider {...settings1} asNavFor={nav2} ref={slider1Ref}>
                            <div>
                                <img src="/assets/img/others/testimonial01.png" alt="img" />
                            </div>
                            <div >
                                <img src="/assets/img/others/testimonial01.png" alt="img" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="testimonial__content-wrapper">
                                  <div className="section__title">
                            <span className="sub-title">Metatroncube Academy</span><h2 className="title tg-svg text-white">why <span className="position-relative"><span className="svg-icon" id="svg-5" data-svg-icon="assets/img/icons/title_shape.svg" /> Choose Us!</span></h2>
                        </div>
                        <Slider
                            {...settings2}
                            asNavFor={nav1}
                            ref={slider2Ref}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            className="testimonial__content-active testimonial__content-nav">
                            <div className="testimonial__content-item">
                                <p><p>✓ Industry-Driven Curriculum: Learn the latest trends, tools, and strategies.</p>
                                <p>✓ Practical Hands-On Training: Gain real-world experience with live projects.</p>
                                <p>✓ Expert Mentors: Get trained by professionals with years of industry experience.</p>
                                <p>✓ Career Support & Guidance: Assistance to secure jobs, freelance projects, or start your own business.</p></p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
};


