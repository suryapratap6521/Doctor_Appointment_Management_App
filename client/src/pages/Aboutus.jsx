import React from 'react'
import Aboutusfirst from '../components/Aboutusfirst'
import Aboutussecond from '../components/Aboutussecond'
import Footer from '../components/Footer'

export default function Aboutus() {
    const styles={
        marginTop: '120px',
    }

    return (
        <div className="pb-24" style={styles}>
            <div className="py-12">
                <h2 className="text-center text-6xl">About US</h2>
            </div>
            <Aboutusfirst/>
            <Aboutussecond/>
            {/* <Footer></Footer> */}
        </div>
    )
}
