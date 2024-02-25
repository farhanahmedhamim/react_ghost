import React from "react";


function Singlbaner(props) {
    return (
        <div className="bannerwrap" style={{ backgroundImage: `linear-gradient(0deg, #0000008c, #0000008c), url(${props.val.img})` }}>
            <div className="bannerText">
                <h1>{props.val.title}</h1>
                <div className="banMidle">
                    <p className="pppp"><span className="rrrr">R</span> <i className="fa-solid fa-circle"></i> 1hr44mins <i className="fa-solid fa-circle"></i> 2018 <i className="fa-solid fa-circle"></i> </p>
                    <button>Action</button>
                </div>
                <p className="parag">{props.val.desc}</p>
                <div className="butter">
                    <button className="mlpokn">PLAY NOW</button>
                    <div className="play"><i className="fa-solid fa-play"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Singlbaner