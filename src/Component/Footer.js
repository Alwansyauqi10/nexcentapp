
import { Form} from 'react-bootstrap';

const Footer = ()=> {
    
    return (
       <section className="footer">
        <div className="container p-5" data-aos="fade-up" data-aos-delay="200">
            <div className="row">
                <div className="footers col-lg-12 d-flex">
                    <div className="footer-menu col-lg-5">
                        <a className="navbar-brand mb-4 mt-1" href="#" style={{ display: 'flex', alignItems: 'center' }}> 
                            <img src={process.env.PUBLIC_URL + '/img/Icon1.png'} alt="Nexcent Logo" width="30" height="20" className="d-inline-block align-center me-1" loading="lazy" />
                            <p className="" style={{ margin: '0', fontSize: '30px' }}>Nexcent</p>
                        </a>
                        <p>Copyright © 2020 Nexcent ltd.<br/>All rights reserved</p>
                    </div>
                    <div className="footer-menu col-lg-2 mt-3">
                        <h5 className="mb-4">Company</h5>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>Pricing</p>
                        <p>Testimonial</p>
                    </div>
                    <div className="footer-menu col-lg-2 mt-3">
                        <h5 className="mb-4">Support</h5>
                        <p>Help Center</p>
                        <p>Terms of Service</p>
                        <p>Legal</p>
                        <p>Privacy Policy</p>
                        <p>Status</p>
                    </div>
                    <div className="footer-menu col-lg-3 mt-3">
                        <h5 className="mb-4">Stay Up to Date</h5>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}

export default Footer;