import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head"

export default function VideoEditing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>  
             <Head>
                <link rel="stylesheet" href="/styles/course-cards.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout headerStyle={3} footerStyle={1}>
                <section className="courses__breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="courses__breadcrumb-content">
                                    <Link href="#" className="category">Digital Marketing</Link>
                                    <h3 className="title">Digital Marketing</h3>
                                    <p>Master the Art of Online Growth! Learn the secrets of driving online success through SEO, social media,…</p>
                                    <ul className="courses__item-meta list-wrap">
                                        <li>
                                            <div className="author">
                                                <Link href="#"><img src="/assets/img/courses/empty-logo.jpg" alt="img" style={{height:'43px'}} /></Link>
                                                <Link href="#">by Team Metatroncube Academy</Link>
                                            </div>
                                        </li>
                                        <li><i className="flaticon-file" /> 0</li>
                                        <li><i className="flaticon-timer" /> 0</li>
                                        <li><i className="flaticon-user-1" /> 0</li>
                                        <li>
                                            <div className="rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span className="rating-count">(5)</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="courses-details-area section-pb-120">
                    <div className="container">
                        <img src="/assets/img/courses/digital-marketing.jpg" alt="img" className="courses-details-bg"  style={{marginTop:'55px', height:'500px'}} />
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 order-lg-1 order-2">
                                <div className="courses__details-wrapper">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Course Info</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Curriculum</button>
                                        </li>
                                         <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>Reviews</button>
                                        </li>
                                         <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex === 4 ? "nav-link active" : "nav-link"}>Announcements</button>
                                        </li>
                                    </ul>
                                   <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-content">
                                                <h6>Master the Art of Online Growth!</h6>
                                                <p>Learn the secrets of driving online success through SEO, social media, and paid advertising. This course prepares you to dominate the digital world and turn brands into market leaders.</p>
                                                <ui>
                                                    <li>Grow Brands, Drive Sales & Boost Visibility!</li>
                                                    <li>Master the Skills That Power Digital Success!</li>
                                                    <li>Stay Ahead with Data-Driven Marketing!</li>
                                                    <li>Google Ads, Facebook Ads & influencer marketing</li>
                                                    <li>Email, WhatsApp & content marketing strategies</li>
                                                    <li>Data-driven insights & conversion optimization</li>
                                                </ui>
                                                <h6>Become a Digital Marketing Expert – Enroll Now!</h6>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">What Will You Learn?</h3>
                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li style={{fontSize:'17px'}}><i className="fas fa-check-circle" />SEO – Rank higher & attract organic traffic</li>
                                                            <li style={{fontSize:'17px'}}><i className="fas fa-check-circle" />SMM – Social media growth strategies</li>
                                                            <li style={{fontSize:'17px'}}><i className="fas fa-check-circle" />PPC & Google Ads – Maximize paid marketing ROI</li>
                                                            <li style={{fontSize:'17px'}}><i className="fas fa-check-circle" />Email & WhatsApp Marketing – Convert leads into customers</li>
                                                            <li style={{fontSize:'17px'}}><i className="fas fa-check-circle" />SEM – Search engine marketing for instant visibility</li>
                                                            <li style={{fontSize:'17px'}}><i className="fas fa-check-circle" />Analytics & Conversion Optimization</li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                           
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-reviews">
                                                <h4 className="title">Student Ratings & Reviews</h4>
                                                <div className="course-rate">
                                                    <div className="course-rate__summary">
                                                        <div className="course-rate__summary-value">4.8</div>
                                                        <div className="course-rate__summary-stars">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="course-rate__summary-text">
                                                            Total 2 Rating
                                                        </div>
                                                    </div>
                                                    <div className="course-rate__details">
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                5
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '80%' }} title="80%" />
                                                                <span className="rating-count">2</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                4
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '50%' }} title="50%" />
                                                                <span className="rating-count">1</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                3
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                2
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-rate__details-row">
                                                            <div className="course-rate__details-row-star">
                                                                1
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="course-rate__details-row-value">
                                                                <div className="rating-gray" />
                                                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                                                <span className="rating-count">0</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="course-reviews">
                                                    <h4 className="course-review-head">Reviews (01)</h4>
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <div className="review-author">
                                                                <img src="/assets/img/blog/comment01.png" alt="img" />
                                                            </div>
                                                            <div className="review-author-info">
                                                                <div className="review-stars-rated">
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <h5 className="user-name">Admin <span className="date">August 5, 2023</span></h5>
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu meature areawtyt totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="course-review-form">
                                                    <h4 className="course-review-head">Write a review</h4>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <input type="text" placeholder="Your Name" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="email" placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <input type="text" placeholder="Review Title" />
                                                        <div className="course-form-rating">
                                                            <span>Select Rating:</span>
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <textarea placeholder="Type Comments" />
                                                        <button className="btn">Submit your Review</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 order-lg-2 order-1" >
                                <aside className="courses__details-sidebar" style={{marginTop:'-860px', position:'sticky', top:'100px'}}>
                                    <div className="event-widget">  
                                        <div className="event-cost-wrap">
                                            <h4 className="price"><strong></strong>₹20,000 <span>₹30,000</span></h4>
                                            <Link href="#" className="btn" style={{backgroundColor:'#3956D9'}}>
                                                <img src="/assets/img/objects/cart2.png" alt="cart" className="cart-icon" />
                                                Add to Cart
                                            </Link>
                                           <div>
                                            <ul className="list-wrap" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px',fontSize:'15px' }}>
                                                <i className="flaticon-timer" /> Intermediate
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px',fontSize:'15px' }}>
                                                <i className="flaticon-user-1" /> 0 Total Enrolled
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px',fontSize:'15px' }}>
                                                <i className="flaticon-file" /> English
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px',fontSize:'15px' }}>
                                                <i className="flaticon-flash" /> March 1, 2025 Last Updated
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                   <div className="course-by-widget">
                                    <h4 className="course-by-title">
                                        A course by
                                    </h4>

                                    <div className="course-by-content">
                                        <img src="/assets/img/others/TM.png" alt="img" className="course-by-logo" />

                                        <div className="course-by-name"  style={{color:'#3C5A8D'}}>
                                            <div>Team</div>
                                            <div>Metatroncube</div>
                                            <div>Academy</div>
                                        </div>
                                    </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                      <div className="container" style={{marginTop:'100px'}}>
                        <div className="section__title">
                            <span className="sub-title">Top courses</span>
                        </div>
                    </div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#fff", padding: "50px 20px" }}>
                        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                            <div className="courses-header-container">
                                <div>
                                    <h2 style={{ fontSize: "32px", color: "#0D0E43", fontWeight: 700, marginBottom: "1px", marginTop: '-50px', marginLeft:'20px' }}>
                                        More Courses By
                                    </h2>
                                    <h2 style={{  color:'#1366e3', fontSize: "32px", fontWeight: 700, position: "relative", display: "inline-block", marginBottom: "40px", marginLeft:'20px' }}>
                                        Team Metatroncube Academy
                                        <span style={{ position: "absolute", bottom: "-5px", left: 0, width: "100%", height: "10px", background: "url('/assets/yellow-underline.png') no-repeat center bottom", backgroundSize: "contain" }} />
                                    </h2>
                                </div>
                                <div className="explore-courses-btn">
                                    <Link href="/courses" className="btn btn-primary tg-svgs">
                                        <span className="text">VIEW ALL COURSES</span>
                                        <span className="svgs-icons">
                                            <img src="/assets/img/icons/btn-arrow.svg" alt="arrow" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            
                            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                                {[
                                    {
                                        title: "Graphic Design",
                                        category: "Design",
                                        price: 20000,
                                        oldPrice: 30000,
                                        image: "/assets/img/courses/graphic-design-1.jpg",
                                    },
                                    {
                                        title: "Video Editing",
                                        category: "Videography",
                                        price: 30000,
                                        oldPrice: 50000,
                                        image: "/assets/img/courses/e-commerce.jpg",
                                    },
                                    {
                                        title: "Digital Marketing",
                                        category: "Digital Marketing",
                                        price: 30000,
                                        oldPrice: 50000,
                                        image: "/assets/img/courses/digital-marketing.jpg",
                                    },
                                ].map((course, idx) => (
                                    <div key={idx} className="course-card">
                                        <div className="course-card-image-container">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="course-card-image"
                                            />
                                          
                                        </div>
                                         
                                          <div className="course-logo-overlay">
                                                <img src="/assets/img/courses/empty-logo.jpg" alt="logo" />
                                            </div>
                                          <div className="course-category">
                                                {course.category}
                                            </div>
                                        <div style={{ padding: "20px" }}>
                                            <h3 className="course-card-title">
                                                {course.title}
                                            </h3>
                                          
                                            <div className="course-card-meta">
                                                <span className="course-card-meta-item">
                                                    <i className="flaticon-file" style={{ marginRight: "5px" }} /> 0
                                                </span>
                                                <span className="course-card-meta-item">
                                                    <i className="flaticon-user-1" style={{ marginRight: "5px" }} /> 0
                                                </span>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <div className="course-card-price">
                                                    <span style={{ color: "#3554D1", fontWeight: 700, fontSize: "16px" }}>
                                                        ₹{course.price.toLocaleString("en-IN")}.00
                                                    </span>
                                                    <br />
                                                    <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "14px" }}>
                                                        ₹{course.oldPrice.toLocaleString("en-IN")}.00
                                                    </span>
                                                </div>
                                                <button className="add-to-cart-btn">
                                                    <img src="/assets/img/objects/cart.png" alt="cart" className="cart-icon" />
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
