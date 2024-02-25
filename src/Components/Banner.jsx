import React, { useEffect, useState } from "react";
import './banner.css'
import g from '../images/8.jpg'
import gg from '../images/3-1.jpg'
import ggg from '../images/27.jpg'
import Singlbaner from "./Singlbaner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';




function Banner() {


    const [baber, setBaber] = useState([])
    useEffect(() => {
        setBaber([
            {
                img: g,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: gg,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            },
            {
                img: ggg,
                title: "REBUNEKA THE DOLL",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum sed inventore! Cum placeat non consectetur distinctio eos. Mollitia perferendis ut quos sed itaque repudiandae ea culpa aperiam deserunt natus."
            }
        ])
    }, [])



    return (
        <section className="banner">
            <div className="wraperbb">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation
                >
                    {
                        baber.map((val, ind) => {
                            return <SwiperSlide key={ind}><Singlbaner val={val} /></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section >
    )
}

export default Banner
