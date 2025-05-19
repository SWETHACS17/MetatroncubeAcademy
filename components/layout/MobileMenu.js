import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
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
            <ul className="navigation">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="menu-item-has-children">
                    <Link href="#">Courses</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/courses">All Courses</Link></li>
                        <li><Link href="/course-details">Course Details</Link></li>
                    </ul>
                    <div 
                        className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} 
                        onClick={() => handleToggle(2)}
                    >
                        <span className="plus-line" />
                    </div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </>
    )
}