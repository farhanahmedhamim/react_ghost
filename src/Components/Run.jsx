import React, { useEffect, useState } from "react";
import './run.css'

function Run() {
    
    const [ran, setRan] = useState(false)
    const doop = () => {
        window.scrollTo(0, 0)
    }


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY <= 200) {
                setRan(false)
            } else {
                setRan(true)
            }
        })
    }, [])


    return (
        <div className="ran" onClick={doop} style={{ opacity: ran ? "1" : "0" }}><i className="fa-solid fa-chevron-up"></i></div>
    )
}


export default Run