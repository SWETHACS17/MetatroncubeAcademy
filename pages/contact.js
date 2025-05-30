import Header1 from "@/components/layout/header/Header1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {
    return (
        <>  
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact">
                <div>
                    <section className="contact-area section-py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="contact-info-wrap">
                                        <h2 className="title">Let’s Connect & Build Your Future Together</h2>
                                        <p>Have questions or need guidance? Our team is here to help!</p>
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-pin-1" />
                                                </div>
                                                <div className="content">
                                                    <p>Waterloo, Canada</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:0123456789">+1-647-679-7651</Link>
                                                    
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-email" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:info@gmail.com">info@metatroncubeacademy.com</Link>
                                                   
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact-form-wrap">
                                        <h4 className="title">Get in Touch</h4>
                                        <form id="contact-form" action="assets/mail.php" method="POST">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="name" type="text" placeholder="Name *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="email" type="email" placeholder="E-mail *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="phone" type="number" placeholder="Phone *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="subject" type="text" placeholder="Your Subject *" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="Message" required />
                                            </div>
                                            

                                            <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="name" type="text" placeholder="30 - 10 *" required />
                                                    </div>
                                                </div>


                                            <button type="submit" className="btn">Send Message</button>
                                        </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* contact-map */}
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4967.075050950504!2d-0.12136992389207055!3d51.50335002024389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1748627038783!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}

