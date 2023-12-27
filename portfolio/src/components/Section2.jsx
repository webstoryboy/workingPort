import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const Section2 = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current, 
        start: "top center", 
        end: "bottom center", 
        scrub: true, 
      },
      x: 500,
      rotation: 360, 
      duration: 1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id='section2'>
      <div className='box' ref={boxRef}></div>
    </div>
  )
}

export default Section2