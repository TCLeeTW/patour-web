import React from "react";
import MainLogo from '../img/Main_Logo_18_Lb.png';

function HeaderSection() {
    return (

        <header id="header" className="fixed-top header-scrolled">
            <div className="container d-flex align-items-center justify-content-lg-between">

                {/* <h1 className="logo me-auto me-lg-0"><a href="index.html">Patour<span>.</span></a></h1> */}
                <a href="index.html" className="logo me-auto me-lg-0"><img src={MainLogo} alt="" className="img-fluid" /></a>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li className="nav-link scrollto dropdown"><a href="#about"><span>About</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">The Company</a></li>
                                <li><a href="#team">The Team</a></li>
                                <li><a href="#">Testimonial</a></li>
                            </ul>
                        </li>
                        <li className="nav-link scrollto dropdown"><a href="#services"><span>Services</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Trading</a></li>
                                <li><a href="#">Distribution</a></li>
                                <li><a href="#">Sourcing</a></li>
                                <li className="dropdown"><a href="#"><span>Consulting</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Company Setting in Hungary</a></li>
                                        <li><a href="#">Visa</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-link scrollto dropdown"><a href="#portfolio"><span>Products</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li className="dropdown"><a href="#"><span>By Brands</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">ExcluJess</a></li>
                                        <li><a href="#">Marie Jeanne</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#"><span>By Categories</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Candles</a></li>
                                        <li><a href="#">Perfumes</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">All Products</a></li>
                                
                            </ul>
                        </li>

                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <a href="#about" className="get-started-btn scrollto">Login</a>

            </div>
        </header>
    )
}

export default HeaderSection;