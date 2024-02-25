import React from "react";


function Simglmost(props) {
    return (
        <div className="singlcar">
            <div className="sincarTop">
                <div className="opicter"></div>
                <div className="circl"><i className="fa-solid fa-play"></i></div>
                <img className="imager" src={props.val.img} alt="" />
                <ul className="bobinbox">
                    <li><i className="fa-solid fa-heart"></i></li>
                    <li><i className="fa-solid fa-share-nodes"></i></li>
                    <li><i className="fa-solid fa-plus"></i></li>
                </ul>
            </div>
            <div className="sincarBtm">
                <h3>{props.val.title}</h3>
                <p>1 hrs 24 mins . <span>Action</span></p>
            </div>
        </div>
    )
}


export default Simglmost