import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header>
                <div id="sticky-header" className={`tg-header__area transparent-header ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div className="logo" style={{ flex: '0 0 auto', marginRight: 'auto' }}>
                                            <Link href="/">
                                                <img src="/assets/img/logo/logo.png" alt="Logo" style={{ width: '250px', maxWidth: 'none' }}/>
                                            </Link>
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex" style={{ marginLeft: 'auto' }}>
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
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}