import React, { useEffect } from 'react';
import gsap from 'gsap';


const Home = () => {
    
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".h1", {opacity: 0, duration: 0.41})
        tl.to(".s2", {opacity: 0, duration: 0.41})
        tl.to(".s3", {opacity: 0, duration: 0.41})
        tl.to(".s4", {opacity: 0, duration: 0.41})
        tl.to(".s5", {opacity: 0, duration: 0.41})
        tl.to(".a1", {opacity: 0, duration: 0.41})
        tl.to(".a2", {opacity: 0, duration: 0.41})
        tl.to(".a3", {opacity: 0, duration: 0.41})
        tl.to(".a4", {opacity: 0, duration: 0.41})
        tl.to(".a5", {opacity: 0, duration: 0.41})
        tl.to(".a6", {opacity: 0, duration: 0.41})
        tl.to(".a7", {opacity: 0, duration: 0.41})
        tl.to(".s1", {height: "100vh", width: "50%"})
    }, [])


    return (
        <div id='intro'>
            <div className='intro__top'>
                <div className='sec s1'></div>
                <div className='sec s2'></div>
                <div className='sec s3'></div>
                <div className='sec s4'></div>
                <div className='sec s5'></div>
            </div>
            <div className="intro__inner">
                <div className='h1'>selected <em>works</em></div>
            </div>
            <div className='intro__bom'>
                <div className='sec a1'></div>
                <div className='sec a2'></div>
                <div className='sec a3'></div>
                <div className='sec a4'></div>
                <div className='sec a5'></div>
                <div className='sec a6'></div>
                <div className='sec a7'></div>
            </div>
        </div>
    )
}

export default Home