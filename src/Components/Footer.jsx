import React from "react";
import './footer.css'
import o from '../images/one.png'

import f from '../images/1.png'
import l from '../images/2.png'



function Footer() {

    return (
        <footer>
            <div className="footertop">
                <div className="footsingl">
                    <img src={o} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul className="eccco">
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-skype"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                    </ul>
                </div>
                <div className="footsingl">
                    <h2>Explore</h2>
                    <div className="mukit">
                        <ul className="lists">
                            <li><i className="fa-solid fa-circle"></i>Movies</li>
                            <li><i className="fa-solid fa-circle"></i>Video</li>
                            <li><i className="fa-solid fa-circle"></i>Busket ball</li>
                            <li><i className="fa-solid fa-circle"></i>Cross</li>
                        </ul>
                        <ul className="lists">
                            <li><i className="fa-solid fa-circle"></i>Home</li>
                            <li><i className="fa-solid fa-circle"></i>Tv Show</li>
                            <li><i className="fa-solid fa-circle"></i>Actors</li>
                            <li><i className="fa-solid fa-circle"></i>Celebrity</li>
                        </ul>
                    </div>
                </div>
                <div className="footsingl">
                    <h2>Company</h2>
                    <div className="mukit">
                        <ul className="lists">
                            <li><i className="fa-solid fa-circle"></i>Home</li>
                            <li><i className="fa-solid fa-circle"></i>Tv Show</li>
                            <li><i className="fa-solid fa-circle"></i>Actors</li>
                            <li><i className="fa-solid fa-circle"></i>Celebrity</li>
                        </ul>
                        <ul className="lists">
                            <li><i className="fa-solid fa-circle"></i>Movies</li>
                            <li><i className="fa-solid fa-circle"></i>Video</li>
                            <li><i className="fa-solid fa-circle"></i>Busket ball</li>
                            <li><i className="fa-solid fa-circle"></i>Cross</li>
                        </ul>
                    </div>
                </div>
                <div className="footsingl">
                    <h2>Downlaod App</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="sobis">
                        <img src={f} alt="" />
                        <img src={l} alt="" />
                    </div>
                </div>
            </div>
            <div className="footerbtm">
                <p>Copyright hamim_farhan 2022 All Rights Reserved</p>
            </div>
        </footer>
    )
}


export default Footer