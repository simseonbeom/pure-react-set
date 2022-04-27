import * as S from "./About.styled";
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function About() {

  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    
    setTimeout(() => {
        
    
      gsap.to('.box', {
        rotation: 360,
        x: -500,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 400,
            scrub: true,
        }
      });

    

      gsap.to('.horizontal', {
        // rotation: 360,
        ease:'none',
        x: -(window.innerWidth * 3) ,
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "top top",
            pin:true,
            pinSpacing:false,
            // end: () => "+=" + 400,
            end: 'bottom bottom',
            scrub: true,
        }
      });
    

    }, 100);


  },[]);


  return (
    <>
    <S.section className="About">
        <section id="section01">About</section>
        <section id="section02">
          <div className="box"></div>
        </section>
        <section id="section03">
          <div className="trigger-this-3">
            <section className="horizontal">
              <section></section>
              <section></section>
              <section></section>
              <section></section>
            </section>
          </div>
        </section>
        <section id="section04">About</section>
    </S.section>
  </>
  )
}

export default About;