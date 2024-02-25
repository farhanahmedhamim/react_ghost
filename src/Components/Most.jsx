import React, { useEffect, useState } from "react";
import './most.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';


import q from '../images/17.jpg'
import w from '../images/26-1.jpg'
import e from '../images/1-1.jpg'
import r from '../images/7.jpg'
import t from '../images/18.jpg'
import Simglmost from "./Simglmost";
import Singlur from "./Singlur";



function Most() {

    const [slide, setSlide] = useState(0)

    const hamim = () => {
        setSlide(window.innerWidth)
    }


    const [prd, setPrd] = useState([])
    const [midl, setMidl] = useState([])
    const [bad, setBad] = useState([])

    useEffect(() => {
        setPrd([
            {
                img: q,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: w,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: e,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: r,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: t,
                title: "REBUNEKA THE DOLL"
            }
        ])
        hamim()
        window.addEventListener("resize", hamim)
    }, [])


    useEffect(() => {
        setMidl([
            {
                img: t,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: r,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: e,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: w,
                title: "REBUNEKA THE DOLL"
            },
            {
                img: q,
                title: "REBUNEKA THE DOLL"
            }
        ])
        hamim()
        window.addEventListener("resize", hamim)
    }, [])



    useEffect(() => {
        setBad([
            {
                img: q,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: w,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: e,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: r,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: t,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: t,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: r,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: e,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: w,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: q,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            }
        ])
    }, [])



    return (
        <section className="mosts">
            <div className="mostop">
                <div className="toptoper">
                    <h2>Most Popular</h2>
                    <button>MORE VIDEOS</button>
                </div>
                <div className="topbotomn">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={slide > 900 ? 4 : slide > 700 ? 3 : slide > 500 ? 2 : 1}
                        spaceBetween={40}
                        navigation
                    >
                        {
                            prd.map((val, ind) => {
                                return <SwiperSlide key={ind}><Simglmost val={val} /></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className="slodor">
                <div className="toptoper">
                    <h2>Most Popular</h2>
                    <button>MORE VIDEOS</button>
                </div>
                <div className="slidtwor">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={slide > 900 ? 4 : slide > 700 ? 3 : slide > 500 ? 2 : 1}
                        spaceBetween={40}
                        navigation
                    >
                        {
                            midl.map((val, ind) => {
                                return <SwiperSlide key={ind}><Simglmost val={val} /></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className="slidethree">
                <div className="perview">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                    >
                        {
                            bad.map((val, ind) => {
                                return <SwiperSlide key={ind}><Singlur val={val} /></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
                <div className="toptoper">
                    <h2>Powerful Crime Thrillers</h2>
                    <button>MORE VIDEOS</button>
                </div>
            </div>
        </section>
    )
}

export default Most