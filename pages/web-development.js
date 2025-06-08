import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

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
            <Layout headerStyle={3} footerStyle={1}>
                <section className="courses__breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="courses__breadcrumb-content">
                                    <Link href="#" className="category">Development</Link>
                                    <h3 className="title">Web Development</h3>
                                    <p>Shape the Future of the Web! Learn to design and develop high-performance websites and applications using the…</p>
                                    <ul className="courses__item-meta list-wrap">
                                        <li>
                                            <div className="author">
                                                <Link href="#"><img src="/assets/img/courses/course_author02.png" alt="img" /></Link>
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
                        <img src="/assets/img/courses/web-development-1.jpg" alt="img" className="courses-details-bg"  style={{marginTop:'55px', height:'500px'}} />
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
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
                                                <h6>Shape the Future of the Web!</h6>
                                                <p>Learn to design and develop high-performance websites and applications using the latest industry technologies. Whether you aim to become a full-stack developer, front-end expert, or back-end specialist, this course equips you with hands-on experience.</p>
                                                <ui>
                                                    <li>From Beginner to Pro – Code Your Way to Success!</li>
                                                    <li>Craft Stunning Websites & High-Performance Apps!</li>
                                                    <li>Master the Tech Behind the Digital World!</li>
                                                </ui>
                                                <h6>Turn Your Ideas into Reality – Start Learning Today!</h6>
                                                <div className="courses__details-inner">
                                                    <h3 className="title">What Will You Learn?</h3>
                                                    <div className="event-details-list">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" />Full Stack Development – Front-end & Back-end mastery</li>
                                                            <li><i className="fas fa-check-circle" />HTML, CSS, JavaScript – The foundation of web design</li>
                                                            <li><i className="fas fa-check-circle" />React, Angular – Build dynamic and interactive UIs</li>
                                                            <li><i className="fas fa-check-circle" />Node.js, Python – Power up your back-end development</li>
                                                            <li><i className="fas fa-check-circle" />WordPress & Wix – Create websites with no coding</li>
                                                            <li><i className="fas fa-check-circle" />Database & API Integration – Build scalable web apps</li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                           
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane active" : "tab-pane"}>
                                            <div className="courses__details-reviews">
                                                <h4 className="title">Student Ratings  Reviews</h4>
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
                            <div className="col-xl-3 col-lg-4 " style={{marginTop:'-500px'}}>
                                <aside className="courses__details-sidebar">
                                    <div className="event-widget">  
                                        <div className="event-cost-wrap">
                                            <h4 className="price"><strong></strong>₹20,000 <span>₹30,000</span></h4>
                                            <Link href="#" className="btn">Add to Cart</Link>
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
                                   <div className="blog-widget" style={{ border: '1px solid #ddd', borderRadius: '6px', padding: '16px' }}>
                                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                                        A course by
                                    </h4>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <img src="/assets/img/others/TM.png" alt="img" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />

                                        <div style={{ lineHeight: '1.6', fontWeight: '800', color: '#2D61AD', fontSize: '19px', marginLeft:'8px' }}>
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
                </section>

            </Layout>
        </>
    )
}