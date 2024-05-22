import Card from 'react-bootstrap/Card';

const CaringMarketing = ()=> {
    return (
       <section>
            <div className="container pt-5 px-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="col-lg-12 text-center mb-5">
                            <h1 data-aos="fade-up" data-aos-delay="100">Caring is the new marketing</h1>
                            <p data-aos="fade-up" data-aos-delay="200">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                        </div>
                        <div className="card-CaringMarketing col-lg-12">
                            <div className="image-container" data-aos="fade-up" data-aos-delay="100">
                                <img src="/img/image 18.png" alt="logo" className="img-fluid" />
                                <div className="description-container">
                                    <Card className="description-card">
                                    <Card.Body>
                                        <p className="cardbody" style={{ fontSize: '16px' }}>Creating Streamlined Safeguarding Processes with OneRen</p>
                                        <a href="#" className="link-MeetAllCustomers">Readmore</a>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="image-container" data-aos="fade-up" data-aos-delay="200">
                                <img src="/img/image 19.png" alt="logo" className="img-fluid" />
                                <div className="description-container">
                                    <Card className="description-card">
                                    <Card.Body>
                                        <p className="cardbody" style={{ fontSize: '16px' }}>What are your safeguarding responsibilities and how can you manage them?</p>
                                        <a href="#" className="link-MeetAllCustomers">Readmore</a>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="image-container" data-aos="fade-up" data-aos-delay="300">
                                <img src="/img/image 20.png" alt="logo" className="img-fluid" />
                                <div className="description-container">
                                    <Card className="description-card">
                                    <Card.Body>
                                        <p className="cardbody" style={{ fontSize: '16px' }}>Revamping the Membership responsibilities Model with Triathlon Australia</p>
                                        <a href="#" className="link-MeetAllCustomers">Readmore</a>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className='margin-bayangan p-5'>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default CaringMarketing;