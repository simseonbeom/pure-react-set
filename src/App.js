
import './styles/App.css';
import './styles/reset.css';
import React , {useState,useRef,useEffect} from 'react'
import Header from './Components/Header/Header'
import Visual from './Components/Visual/Visual'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import gsap from 'gsap'  
import ScrollTrigger from 'gsap/dist/ScrollTrigger' 
import Scrollbar from 'smooth-scrollbar';
import {Route, Routes} from 'react-router-dom'



function App() {


  const [scrollBarCreated, setScrollBarCreated] = useState(false);
  const scroller = useRef();
  const bodyScrollBar = useRef();

  useEffect(() => {

    scroller.current = document.querySelector(".scroller");
    bodyScrollBar.current = Scrollbar.init(scroller.current,{
      damping: 0.1,
      continuousScrolling: true,
      alwaysShowTracks: false,
      renderByPixels: !('ontouchstart' in document),
      delegateTo: scroller.current,
      
    });
    setScrollBarCreated(true);
  }, []);

  useEffect(() => {
    if (scrollBarCreated) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.scrollerProxy(scroller.current, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.current.scrollTop = value;
          }
          return bodyScrollBar.current.scrollTop;
        }
      });
      bodyScrollBar.current.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: scroller.current });
    }
  }, [scrollBarCreated]);



  return (
    
    <div className="App">
      <div className="loadingScreen"></div>
      <div className="scroller">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Visual />} />
            <Route path='about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
