const OurClients = ()=> {
    return (
        <section className="ourClients">
            <div className="container pt-5 px-5">
                <div className="row">
                    <div className="col-lg-12 justify-content-center">
                        <div className="deskripsi-clients mb-5">
                            <h1 data-aos="fade-up" data-aos-delay="100">Our Clients</h1>
                            <p  data-aos="fade-up" data-aos-delay="200">We have been working with some Fortune 500+ clients</p>
                        </div>
                        <div className="logo-clients mb-5">
                            <img src="/img/logo.png" data-aos="fade-up" data-aos-delay="400" alt="logo" style={{ width: "48px", height: "48px" }} />
                            <img src="/img/logo (1).png" data-aos="fade-up" data-aos-delay="500" alt="logo" style={{ width: "48px", height: "48px" }} className="img-fluid" />
                            <img src="/img/logo (2).png" data-aos="fade-up" data-aos-delay="600" alt="logo" style={{ width: "48px", height: "48px" }} className="img-fluid" />
                            <img src="/img/logo (3).png" data-aos="fade-up" data-aos-delay="700" alt="logo" style={{ width: "48px", height: "48px" }} className="img-fluid" />
                            <img src="/img/logo (4).png" data-aos="fade-up" data-aos-delay="800" alt="logo" style={{ width: "48px", height: "48px" }} className="img-fluid" />
                            <img src="/img/logo (5).png" data-aos="fade-up" data-aos-delay="900" alt="logo" style={{ width: "48px", height: "48px" }} className="img-fluid" />
                            <img src="/img/logo (6).png" data-aos="fade-up" data-aos-delay="1000" alt="logo" style={{ width: "48px", height: "48px" }} className="img-fluid" />
                        </div>
                        <div className="deskripsi-clients2 mb-5 justify-content-center">
                            <h2 data-aos="fade-up" data-aos-delay="100">Manage your entire community <br/> in a single system</h2>
                            <p data-aos="fade-up" data-aos-delay="200">Who is Nextcent suitable for?</p>
                        </div>
                        <div className="all-card justify-content-center">
                            <div className="card p-4" data-aos="fade-up" data-aos-delay="300"  style={{ border:"none" }}>
                                <img src="/img/icon (1).png" alt="logo" className="" style={{ width: "65px", height: "65px" }} />   
                                <h3>Membership Organisations</h3>
                                <p>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                            <div className="card p-4" data-aos="fade-up" data-aos-delay="400"  style={{ border:"none" }}>
                                <img src="/img/icon (2).png" alt="logo" className="" style={{ width: "65px", height: "65px" }} />   
                                <h3>National Associations</h3>
                                <p>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                            <div className="card p-4" data-aos="fade-up" data-aos-delay="500" style={{ border:"none" }}>
                                <img src="/img/icon (3).png" alt="logo" className="" style={{ width: "65px", height: "65px" }} />   
                                <h3>Clubs And Groups</h3>
                                <p>Our membership management software provides full automation of membership renewals and payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-lg-5 px-5 pb-5">
                <div className="row">
                    <div className="setelah-card d-flex justify-content-center"> 
                        <div className="col-lg-5 align-self-center">
                            <div className="image-setelah-card" data-aos="fade-right" data-aos-delay="100">
                                <img src="/img/rafiki.png" alt="logo" className="img-fluid"/>   
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="deskripsi-setelah-card">
                                <h1 className="mb-4 pe-5" data-aos="fade-up" data-aos-delay="100">The unseen of spending three years at Pixelgrade</h1>
                                <p className="mb-4" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                                <button type="button" className="btn-learnmore" data-aos="fade-up" data-aos-delay="300">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClients;