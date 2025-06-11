import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ handleMobileMenu = () => {} }) {
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

    const handleLinkClick = (e) => {
        e.preventDefault()
        handleMobileMenu()
        
        const href = e.currentTarget.getAttribute('href')
        if (href && href !== '#') {
            setTimeout(() => {
                window.location.href = href
            }, 100)
        }
    }

    return (
        <>
            <ul className="navigation">
                <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link href="/about-us" onClick={handleLinkClick}>About Us</Link></li>
                <li className="menu-item-has-children">
                    <Link href="/courses" onClick={handleLinkClick}>Courses</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/video-editing" onClick={handleLinkClick}>Video Editing</Link></li>
                        <li><Link href="/graphic-design" onClick={handleLinkClick}>Graphic Design</Link></li>
                        <li><Link href="/digital-marketing" onClick={handleLinkClick}>Digital Marketing</Link></li>
                        <li><Link href="/web-development" onClick={handleLinkClick}>Web Development</Link></li>
                        <li><Link href="/e-commerce-development" onClick={handleLinkClick}>E-Commerce Development</Link></li>
                       
                    </ul>
                    <div 
                        className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} 
                        onClick={() => handleToggle(2)}
                    >
                        <span className="plus-line" />
                    </div>
                </li>
                <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
                <li><Link href="/blog" onClick={handleLinkClick}>Blog</Link></li>
            </ul>
        </>
    )
}