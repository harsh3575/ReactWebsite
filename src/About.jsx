import React from 'react'
import web from "./Rocket-Man.svg"
import Common from './Common'

const About = () => {
    return (<>
        <Common
            title="Welcome to About Page"
            note=" We the team of talented developer making websites"
            btn="Contact Now"
            visit='/contact'
            photo={web}
        />
    </>)
}

export default About