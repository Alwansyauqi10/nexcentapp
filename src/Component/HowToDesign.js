const HowToDesign = ()=> {
    return (
       <section>
            <div className="container p-5">
                <div className="row">
                    <div className="howtodesign col-lg-12 d-flex justify-content-center">
                        <div className="col-lg-5 align-self-center">
                            <div className="image-howtodesign"data-aos="fade-right" data-aos-delay="100">
                                <img src="/img/pana.png" alt="logo" className="img-fluid"/>   
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="deskripsi-howtodesign">
                                <h1 className="mb-lg-4 pe-5" data-aos="fade-up" data-aos-delay="100">How to design your site footer like we did</h1>
                                <p className="mb-lg-4" data-aos="fade-up" data-aos-delay="200">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                                <button type="button" className="btn-learnmore" data-aos="fade-up" data-aos-delay="300">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default HowToDesign;