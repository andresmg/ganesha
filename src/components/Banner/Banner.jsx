import './Banner.css'
import React from 'react'

function Banner() {

    let diff, scale, horizontalSum, difftop


    document.onscroll = () => {
        const getBanner = document.querySelector('.Banner')

        diff = getBanner.getBoundingClientRect().bottom
        difftop = getBanner.getBoundingClientRect().y
        scale = getBanner.dataset.scale

        horizontalSum = diff * scale

        if (difftop > 200) {
            getBanner.style.backgroundSize = `${horizontalSum * scale}px`
        }

    }

    return (
        <section className="container-fluid Banner" data-scale="1.4"></section>
    )

}

export default Banner
