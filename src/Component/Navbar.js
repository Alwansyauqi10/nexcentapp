const Navbar = ()=> {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand animate__animated animate__fadeInDown" href="#" style={{ display: 'flex', alignItems: 'center' }}> 
                    <img src={process.env.PUBLIC_URL + '/img/Icon2.png'} alt="Nexcent Logo" width="30" height="20" className="d-inline-block align-center me-1" loading="lazy" />
                    <p style={{ margin: '0', fontSize: '30px' }}>Nexcent</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse animate__animated animate__fadeInDown" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#">Feature</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#">Testimonial</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                    </ul>
                    <div className="nav-button">
                            <a href="#" className="me-4 text-login">Login</a>
                        <button type="button" className="btn-signup">Sign Up</button>
                    </div>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;