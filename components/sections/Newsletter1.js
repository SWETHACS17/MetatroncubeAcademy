export default function Newsletter1() {
    return (
        <section className="newsletter-area section-py-55">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-6 col-lg-5">
                        <div className="newsletter__img-wrap">
                            <div className="newsletter__img">
                                <img src="/assets/img/others/contact.png" alt="Contact illustration" height={200} width={700} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="newsletter__form">
                            <form action="#">
                                <div className="newsletter__form-content">
                                    <div className="form-group">
                                        <p>Your Name</p>
                                        <input type="text" id="name" placeholder="" required />
                                    </div>
                                    <div className="form-group">
                                        <p>Your Email</p>
                                        <input type="text" id="email" placeholder="" required />
                                    </div>
                                    <div className="form-group">
                                        <p>Phone Number</p>
                                        <input type="tel" id="phone" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <p>Your Message</p>
                                        <textarea id="message" rows="4" placeholder="" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <p>20-5=?</p>
                                        <input type="text" id="captcha" placeholder="" required />
                                    </div>
                                    <div className="form-submit">
                                        <button type="submit" className="submit-btn">SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}