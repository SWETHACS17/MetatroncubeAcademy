import Link from "next/link"

export default function BlogCard2({ item }) {
    return (
        <>
            <div className="blog__standard-post">
                <div className="blog__standard-thumb">
                    <Link href={`/blog/${item.id}`}>
                        <img src={`/assets/img/blog/${item.img}`} className="w-100" alt="img" />
                    </Link>
                </div>
                <div className="blog__standard-content">
                    <Link href="#" className="cat">{item.category}</Link>
                    <h3 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h3>
                    <ul className="list-wrap blog__post-meta">
                        <li><i className="flaticon-account" /><Link href="#">By Team Metatroncube Academy</Link></li>
                        <li><i className="flaticon-calendar-date" /> May 1, 2025</li>
                        <li><i className="flaticon-help" />Comments</li>
                    </ul>
                    <p>Introduction The world is rapidly moving online, and businesses are focusing more on digital channels to reach their target audience. In 2025, digital marketing has become one of the most […]</p>
                    <div className="tg-button-wrap">
                        <Link href={`/blog/${item.id}`} className="btn tg-svg"><span className="text">Continue Reading</span> <span className="svg-icon" id="blog-btn01" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
