import Link from "next/link"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
}

const imageStyle = {
    width: "200px",        // default for laptop/desktop
    height: "auto",
    objectFit: "contain",
    transition: "transform 0.3s ease"
}

// Use media query with inline `style` by adjusting dynamically if needed — or go with Tailwind if available

export default function BrandSlider1() {
    return (
        <Slider {...settings} className="brand-active">
            {["brand01", "brand02", "brand03", "brand04", "brand05"].map((brand, i) => (
                <div
                    className="brand__item"
                    key={i}
                    style={{
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Link href="#">
                        <img
                            src={`/assets/img/brand/${brand}.png`}
                            alt="brand"
                            style={imageStyle}
                        />
                    </Link>
                </div>
            ))}
        </Slider>
    )
}
