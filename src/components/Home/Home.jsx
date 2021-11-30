import React from 'react'
import Achievements from '../Achievements/Achievements'
import Banner from '../Banner/Banner'
import Bio from '../Bio/Bio'
import Rank from '../Rank/Rank'
import Sponsors from '../Sponsors/Sponsors'

function Home() {
    return (
        <main>
            <Rank />
            <Bio />
            <Banner />
            <Achievements />
            <Sponsors />
        </main>
    )
}

export default Home
