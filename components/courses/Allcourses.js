import { useDispatch, useSelector } from "react-redux"
import jobs from "../../data/courses.json"
import CourseCard from "./CourseCard"
import Link from "next/link"

const Allcourses = () => {
    const { courseList, courseSort } = useSelector((state) => state.courseFilter)
    const { sort, perPage } = courseSort
    const dispatch = useDispatch()

    const sortFilter = (a, b) =>
        sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1

    let content = jobs
        ?.sort(sortFilter)
        .slice(perPage.start, perPage.end !== 0 ? perPage.end : 12)
        ?.map((item) => (
            <div className="col" key={item.id}>
                <CourseCard item={item} />
            </div>
        ))

    const sortHandler = (e) => {
        dispatch(addSort(e.target.value))
    }

    const perPageHandler = (e) => {
        const pageData = JSON.parse(e.target.value)
        dispatch(addPerPage(pageData))
    }

    const clearAll = () => {
        dispatch(addSort(""))
        dispatch(addPerPage({ start: 0, end: 0 }))
    }

    const courses = [
         {
            title: "E-Commerce Development",
            category: "E-Commerce",
            price: 30000,
            oldPrice: 50000,
            image: "/assets/img/courses/e-commerce.jpg",
            link: "/courses/ecommerce-development"
        },
          {
            title: "Web Development",
            category: "Development",
            price: 20000,
            oldPrice: 25000,
            image: "/assets/img/courses/web-development-1.jpg",
            link: "/courses/web-development"
        },
         {
            title: "Digital Marketing",
            category: "Digital Marketing",
            price: 30000,
            oldPrice: 50000,
            image: "/assets/img/courses/digital-marketing.jpg",
            link: "/courses/digital-marketing"
        },
        {
            title: "Graphic Design",
            category: "Design",
            price: 20000,
            oldPrice: 30000,
            image: "/assets/img/courses/graphic-design-1.jpg",
            link: "/courses/graphic-design"
        },
        {
            title: "Video Editing",
            category: "Videography",
            price: 20000,
            oldPrice: 30000,
            image: "/assets/img/courses/video-editing.jpg",
            link: "/courses/video-editing"
        },
    ]

    return (
        <>
            <div className="shop-top-wrap courses-top-wrap">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="shop-top-left">
                            <p>Showing all 5 results</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                            <div className="shop-top-right m-0 ms-md-auto">
                                <select
                                    value={sort}
                                    name="orderby"
                                    className="orderby"
                                    onChange={sortHandler}
                                >
                                    <option value="">Sort by</option>
                                    <option value="asc">Newest</option>
                                    <option value="des">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="course-grid-container">
                    {courses.map((course, idx) => (
                        <Link href={course.link} key={idx} className={`course-card-link card-${idx}`}>
                            <div className="course-card">
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
                                <div className={`course-category category-${idx}`}>
                                    {course.category}
                                </div>

                                <div style={{ padding: "20px" }}>
                                    <h3 className="course-card-title">{course.title}</h3>
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
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .course-grid-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2rem;
                justify-content: start; /* Changed from 'center' to 'start' */
                margin-top: 2rem;
                padding-left: 20px; /* Additional left padding if needed */
            }

                @media (min-width: 1024px) {
                    .course-grid-container {
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-areas:
                            "card-0 card-1 card-2"
                            "card-3 . card-4";
                    }
                    .card-0 { grid-area: card-0; }
                    .card-1 { grid-area: card-1; }
                    .card-2 { grid-area: card-2; }
                    .card-3 { grid-area: card-3; }
                    .card-4 { grid-area: card-4; }
                }

                .course-card-link {
                    text-decoration: none;
                    color: inherit;
                }

                    /* E-Commerce */
                    .category-0 {
                        color: #166534; /* green-800 */
                        background-color: #bbf7d0; /* green-200 */
                    }

                    /* Web Development */
                    .category-1 {
                        color: #9d174d; /* pink-800 */
                        background-color: #fbcfe8; /* pink-200 */
                    }

                    /* Digital Marketing */
                    .category-3 {
                        color: #854d0e; /* amber-800 */
                        background-color: #fde68a; /* amber-200 */
                    }

                    /* Design */
                    .category-2 {
                        color: #86198f; /* fuchsia-800 */
                        background-color: #f5d0fe; /* fuchsia-200 */
                    }

                    /* Videography */
                    .category-4 {
                        color: #5b21b6; /* violet-800 */
                        background-color: #ddd6fe; /* violet-200 */
                    }
            `}</style>
        </>
    )
}

export default Allcourses
