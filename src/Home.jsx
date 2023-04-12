import React from 'react'
import web from "./Rocket-Man.svg"
import Common from './Common'
const Home = () => {
    return (<>
        <Common
            title="Grow Your Business with"
            note="We the team of talented developer making websites"
            btn="Get Started"
            visit='/service'
            photo={web}
        />
    </>)
}

export default Home