import './Banner.css'
import React from 'react'

function Banner() {

    let depth, diff, scale, horizontalSum, difftop


    document.onscroll = () => {

        depth = window.scrollY
        // Menu collapse effect
    
        if (depth > 100) {
            document.querySelector('.Header__nav').classList.add('show')
        } else {
            document.querySelector('.Header__nav').classList.remove('show')
        }

        
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
