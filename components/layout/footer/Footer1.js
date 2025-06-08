import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
                <div className="footer__top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer__about">
                                        <div className="footer__logo">
                                            <Link href="/"><img src="/assets/img/logo/secondary_logo.png" alt="img" /></Link>
                                        </div>
                                        <p style={{color: "white"}}>MetatronCube Academy is an educational initiative of MetatronCube Software Solutions, committed to equipping aspiring professionals with the skills needed to excel in the digital era.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Quick Links</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/about-us">About</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms and Conditions</Link></li>
                                        <li><Link href="#">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Courses</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="#">Video Editing</Link></li>
                \                    <li><Link href="#">Graphic Design</Link></li>
                                        <li><Link href="#">Digital Marketing</Link></li>
                                        <li><Link href="#">Web Development</Link></li>
                                        <li><Link href="#">Ecommerce Development</Link></li>                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Contact</h4>
                                    <div className="footer__working-lis">
                                        <div className="footer__working-item">
                                            <span className="day"><i className="fas fa-map-marker-alt"></i> Waterloo, Ontario, Canada.</span>
                                        </div>
                                        <div className="footer__working-item">
                                            <span className="day"><i className="fas fa-phone-alt"></i> +1-647-679-7651</span>
                                        </div>
                                        <div className="footer__working-item">
                                            <span className="day"><i className="fas fa-envelope"></i> info@metatroncubeacademy.com</span>
                                        </div>
                                        <div className="footer__working-item">
                                            <span className="day"><i className="fas fa-clock"></i> Mon - Sat: 9:00 Am to 6:00 Pm</span>
                                        </div>
                                        <ul className="list-wrap m-0 p-0">
                                          <li className="socials" style={{ display: 'flex', gap: '30px' }}>
                                            <Link href="https://www.facebook.com/people/Metatroncube-Academy/61573783917030/" style={{ color: 'white' }}><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://x.com/Metatronedu/" style={{ color: 'white' }}><i className="fab fa-twitter" /></Link>
                                            <Link href="https://www.instagram.com/metatroncube_academy/" style={{ color: 'white' }}><i className="fab fa-instagram" /></Link>
                                            <Link href="https://www.linkedin.com/company/metatroncube-academy/" style={{ color: 'white' }}><i className="fab fa-linkedin-in" /></Link>
                                           </li>
                                        </ul>
                                    </div>
                                </div>     
                                
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright__wrapper">
                            <div className="container">
                                <div className="row">
                                    <div>
                                        <div className="copyright__text">
                                            <p>Copyright © {new Date().getFullYear()} <Link href="https://metatroncubeacademy.com">Metatroncubeacademy</Link>. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>
            )
        }
