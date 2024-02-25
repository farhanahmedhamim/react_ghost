import React, { useEffect, useRef, useState } from "react";
import './header.css'

import a from '../images/one.png'

function Header() {


    const [togolrun, setTogolrun] = useState(false)



    const refOne = useRef()
    const refTwo = useRef()
    const refThree = useRef()
    const refFour = useRef()
    const refFive = useRef()

    const [ind, setInd] = useState(null)
    const [itemHeight, setItemHeight] = useState(0)

    const drop = (i) => {
        setInd(prev => prev === i ? null : i)
        if (i === 0) {
            setItemHeight(refOne.current.clientHeight)
        } else if (i === 1) {
            setItemHeight(refTwo.current.clientHeight)
        } else if (i === 2) {
            setItemHeight(refThree.current.clientHeight)
        } else if (i === 3) {
            setItemHeight(refFour.current.clientHeight)
        } else if (i === 4) {
            setItemHeight(refFive.current.clientHeight)
        }
    }



    const [widthe, setWidth] = useState(0)
    const [height, setHeight] = useState(0)







    const togol = () => {
        setTogolrun(prev => prev ? false : true)
    }


    useEffect(() => {
        setHeight(window.scrollY)
        window.addEventListener("scroll", () => {
            setHeight(window.scrollY)
        })
        setWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [])


    return (
        <header className={height > 99 ? "active" : ""}>
            <div className="overlay" onClick={togol} style={{ opacity: togolrun ? "1" : "0", pointerEvents: togolrun ? "all" : "none" }}></div>
            <div className="headerLeft">
                <img src={a} alt="" />
            </div>
            <div className="headerCenter" style={{ left: togolrun ? "0px" : "-300px" }}>
                <i className="fa-solid fa-bars" onClick={togol}></i>
                <ul className="menu">
                    <li className="contain" onClick={e => widthe < 1101 && drop(0)} style={{ height: ind === 0 ? `${itemHeight + 70}px` : "50px" }}>Home<i className="fa-solid fa-chevron-down"></i>
                        <div className="maxwidee" ref={refOne}>
                            <ul className="more">
                                <li>Main Home</li>
                                <li>Movies Home</li>
                                <li>Tv Shows Home</li>
                                <li>Video Home</li>
                            </ul>
                        </div>
                    </li>
                    <li className="contain" onClick={e => widthe < 1101 && drop(1)} style={{ height: ind === 1 ? `${itemHeight + 70}px` : "50px" }}>Movies<i className="fa-solid fa-chevron-down"></i>
                        <div className="maxwide" ref={refTwo}>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Slider 1</li>
                                    <li>Slider 2</li>
                                    <li>Scroll 3</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="contain" onClick={e => widthe < 1101 && drop(2)} style={{ height: ind === 2 ? `${itemHeight + 70}px` : "50px" }}>Tv Shows<i className="fa-solid fa-chevron-down"></i>
                        <div className="maxwide" ref={refThree}>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Style Slider 1</li>
                                    <li>Style Slider 2</li>
                                    <li>Infinite Scroll 3</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="contain" onClick={e => widthe < 1101 && drop(3)} style={{ height: ind === 3 ? `${itemHeight + 70}px` : "50px" }}>Vodeo<i className="fa-solid fa-chevron-down"></i>
                        <div className="maxwide" ref={refFour}>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Style Slider 1</li>
                                    <li>Style Slider 2</li>
                                    <li>Infinite Scroll 3</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                            <div className="singlhead">
                                <h3 className="h33">Movie List</h3>
                                <ul className="some">
                                    <li>Load More</li>
                                    <li>Paganitation</li>
                                    <li>Infinite Scroll</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="contain" onClick={e => widthe < 1101 && drop(4)} style={{ height: ind === 4 ? `${itemHeight + 70}px` : "50px" }}>Pages<i className="fa-solid fa-chevron-down"></i>
                        <div className="maxwidee" ref={refFive}>
                            <ul className="more">
                                <li>Main Home</li>
                                <li>Movies Home</li>
                                <li>Tv Shows Home</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="headerRight">
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="profile"><i className="fa-solid fa-user"></i></div>
                <button>SUBSCRIBE</button>
                <i className="fa-solid fa-bars" onClick={togol}></i>
            </div>
        </header>
    )
}

export default Header