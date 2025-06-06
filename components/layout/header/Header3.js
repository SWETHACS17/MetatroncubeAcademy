import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header style={{ backgroundColor: '#fff' }}>
        {/* Topbar Section */}
        <div className="tg-header__top" style={{ backgroundColor: '#0b265a' }}>
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

        {/* Header Content */}
        <div
          id="sticky-header"
          className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}
          style={{
            backgroundColor: '#fff',
            zIndex: 999,
            position: scroll ? 'fixed' : 'relative',
            top: scroll ? 0 : 'auto',
            width: '100%',
            transition: 'all 0.3s ease'
          }}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12" style={{ marginTop: scroll ? '50px' : '0px' }}>
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="logo" style={{ flex: '0 0 auto', marginRight: 'auto' }}>
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" style={{ width: '250px', maxWidth: 'none',marginBottom:'15px' }} />
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex" style={{ marginLeft: 'auto' }}>
                      <ul className="navigation" style={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li className="menu-item-has-children"><Link href="/courses">Courses</Link>
                          <ul className="sub-menu" style={{ minWidth: "260px" }}>
                            <li><Link href="">Video Editing</Link></li>
                            <li><Link href="">Graphic Design</Link></li>
                            <li><Link href="">Digital Marketing</Link></li>
                            <li><Link href="">Web Development</Link></li>
                            <li><Link href="">E-Commerce Development</Link></li>
                            <li><Link href="/course-details">Course Details</Link></li>
                          </ul>
                        </li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu */}
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box" style={{ backgroundColor: '#fff' }}>
                    <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" style={{ width: '150px', maxWidth: 'none' }} />
                      </Link>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <MobileMenu />
                    </div>
                    {/* Social Links */}
                    <div className="social-links" style={{
                      padding: '15px 0',
                      textAlign: 'center',
                      borderTop: '1px solid rgba(1, 2, 4, 0)'
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
                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
