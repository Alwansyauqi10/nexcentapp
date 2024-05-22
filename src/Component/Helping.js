const Helping = ()=> {
    return (
      <section className="help">
        <div className="container p-5">
            <div className="row">
                <div className="helping col-lg-12 d-flex justify-content-center">
                    <div className="deskripsi-helping col-lg-6 align-self-center mb-4">
                        <h1 data-aos="fade-right" data-aos-delay="100">Helping a local <br/><span>business reinvent itself</span></h1>  
                        <p data-aos="fade-right" data-aos-delay="100">We reached here with our hard work and dedication</p> 
                    </div>
                    <div className="jumlah col-lg-6 d-flex align-self-center px-5">
                        <div className="jumlah-1 justify-content-center">
                            <div className="member d-flex align-self-center mb-5" data-aos="fade-up" data-aos-delay="100">
                                <div className="img-member">
                                    <img src="/img/icon (4).png" alt="logo" className="" style={{ width: "48px", height: "52px" }}/> 
                                </div>
                                <div className="member-info">
                                    <h2>2,245,341</h2>
                                    <p>Members</p>
                                </div>  
                            </div>
                            <div className="member d-flex align-self-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="img-member">
                                    <img src="/img/icon (6).png" alt="logo" className="" style={{ width: "48px", height: "52px" }}/> 
                                </div>
                                <div className="member-info">
                                    <h2>828,867</h2>
                                    <p>Event Bookings</p>
                                </div>  
                            </div>
                        </div>
                        <div className="jumlah-1 justify-content-center">
                            <div className="member d-flex align-self-center mb-5" data-aos="fade-up" data-aos-delay="100">
                            <div className="img-member">
                                    <img src="/img/icon (5).png" alt="logo" className="" style={{ width: "48px", height: "52px" }}/> 
                                </div>
                                <div className="member-info">
                                    <h2>46,328</h2>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div className="member d-flex align-self-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="img-member">
                                    <img src="/img/icon (7).png" alt="logo" className="" style={{ width: "48px", height: "52px" }}/> 
                                </div>
                                <div className="member-info">
                                    <h2>1,926,436</h2>
                                    <p>Payments</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
}

export default Helping;