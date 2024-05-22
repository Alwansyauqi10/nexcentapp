const HeroSection = ()=> {
    return (
        <section className="hero">
            <div className="hero-container container px-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-7 p-lg-5 pt-3 align-self-center">
                        <div className="judul mb-4">
                            <h1 className="lesson animate__animated animate__fadeInUp">Lessons and insights</h1>
                            <h1 className="from8years animate__animated animate__fadeInUp">from 8 years</h1>
                            <p className="wheretogrow animate__animated animate__fadeInUp">Where to grow your business as a photographer: site or social media?</p>
                        </div>
                        <div className="register">
                            <button type="button" className="btn-register animate__animated animate__fadeInUp">Register</button> 
                        </div>
                    </div>
                    <div className="hero-image animate__animated animate__fadeInRight col-lg-5 p-lg-5 pt-3 mb-3 d-flex justify-content-center align-items-center">
                        <img src="/img/Illustration.png" alt="Deskripsi Gambar" className="img-fluid" style={{margin: 'auto'}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;