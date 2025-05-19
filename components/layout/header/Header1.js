import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                {/* Added Topbar Section */}
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row align-items-center">
                            {/* Desktop/Tablet View */}
                            <div className="col-md-6 d-none d-md-block">
                                <ul className="tg-header__top-info list-wrap">
                                    <li><i className="flaticon-email" /> <Link href="mailto:info@gmail.com">info@metatroncubeacademy.com</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <ul className="tg-header__top-social list-wrap">
                                    <li>Follow Us On:</li>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                </ul>
                            </div>
                            
                            {/* Mobile View */}
                            <div className="col-12 d-md-none text-center">
                                <ul className="tg-header__top-social list-wrap" style={{ justifyContent: 'center' }}>
                                    <li>Follow Us:</li>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Existing Header Content */}
                <div id="sticky-header" className={`tg-header__area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12" style={{ marginTop: '40px'}}>
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap"  >
                                    <nav className="tgmenu__nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div className="logo" style={{ flex: '0 0 auto', marginRight: 'auto' }}>
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo.png" alt="Logo" style={{ width: '250px', maxWidth: 'none' }}/>
                                            </Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex" style={{ marginLeft: 'auto'  }}>
                                            <ul className="navigation" style={{ display: 'flex', gap: '30px', marginLeft: 'auto' }}>
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about-us">About Us</Link></li>
                                                <li className="menu-item-has-children"><Link href="#">Courses</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/courses">All Courses</Link></li>
                                                        <li><Link href="/course-details">Course Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">Contact</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                                        <div className="nav-logo">
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo.png" alt="Logo" style={{ width: '150px', maxWidth: 'none' }}/>
                                            </Link>
                                        </div>
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        {/* Added Mobile Social Links */}
                                        <div className="social-links" style={{ 
                                            padding: '15px 0', 
                                            textAlign: 'center',
                                            borderTop: '1px solid rgba(255,255,255,0.1)'
                                        }}>
                                            <ul className="list-wrap" style={{ 
                                                display: 'flex', 
                                                justifyContent: 'center', 
                                                gap: '15px',
                                                margin: 0,
                                                padding: 0
                                            }}>
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu}  />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}