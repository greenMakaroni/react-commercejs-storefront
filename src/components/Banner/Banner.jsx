import React from 'react'
import BannerVideo from "./vid.mp4";

function Banner() {
    return (
        <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }}>
            <source src={BannerVideo} type="video/mp4" />
        </video>
    )
}

export default Banner
