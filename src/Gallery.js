// src/Gallery.js
import React, { useState, useEffect, useRef } from 'react';

import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import './gallery.css'

import img1 from './img/our-first-date.png'
import img2 from './img/our-first-officially-dating.png'
import img3 from './img/my-time-first-make-u-cry.png'
import img4 from './img/our-first-sleepover.png'
import img5 from './img/our-first-vacation.png'
import img6 from './img/your-first-visit-to-my-apart.png'
import img7 from './img/our-first-time-spend-new-year-eve-tgth.png'
import img8 from './img/my-favorite-pict-of-you.png'
import herFavoriteSong from './audio/The_Moldy_Peaches_Anyone_Else_But_You.mp3'

import natArts from './img/us-in-nat-art.png'

const Gallery = () => {
  const [text, setText] = useState("");
  const [anchor, setAnchor] = useState(null);
  const [currentStyle, setCurrentStyle] = useState('slider');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(false);
  
  const audioRef = useRef(null);

  const getImg = (imgSrc) => {
    console.warn(imgSrc)
  }
  
  const toggleStyle = (event, index) => {
    switch (index) {
      case 1:
        setText("01/02/2025. OUR FIRST DATE\n until now... IM SORRY FOR RUNNING FROM YOU WHEN WE FIRST MEET (gue takut). this is our very first meet in real life, but idk why for someone that you just met we really not that awkward. this is one of my happiest day i've ever experience thanks to you");
        break;
      case 2:
        setText("15/03/2025. OUR FIRST OFFICIALLY DATING\n This is my first time confessing my feeling to someone (even tho im covering my face with a hoodie), and until very now im so glad that you screaming saying yes, i want to be your girfriend to me at that time");
        break;
      case 3:
        setText("26/07/2025. MY FIRST TIME MADE U CRY\n im already sorry for what happens. but the weird thing is, after u cried why tf kita baikan dan ngobrol panjang banget soal hal yang ga berhubungan sama sekali tentang kenapa kamu nangis. we both talked about my family tree and about how all my family member name start with G lmaoo.");
        break;
      case 4:
        setText("07/12/2025. OUR FIRST SLEEPOVER\n like the title said... i cant really said anything about this, bukan karena kita aneh aneh ya tapi karena aku kan ngurusin kamu yang sakit doang pas pertama sleep over maa... kalo yang ketiga di apart aku sihh... tuturututtt ANYWAYYY even tho this our first and short sleep over i really enjoyy every second of it because u were there. in the whole year of 2025 this is what become the most precious times i've spent \n\n ps: we both know is not our pict from the first sleepover wkwkwk");
        break;
        case 5:
          setText("20/12/2025 - 25/12/2025. OUR FIRST VACATION(?) TOGETHER");
          break;
      case 6:
        setText("31/12/2025. YOUR FIRST TIME VISIT ME IN MY APART");
        break;
      case 7:
        setText("01/01/2026. OUR FIRST TIME CELEBRATING THE NEW YEAR EVE TOGETHER");
        break;
      case 8:
        setText("{DATE}. EXAMPLE TEXT (write something romantic for your partner/ something for your loved one) ");
        break;
      default:
        setText(":3");
    }

    setAnchor(anchor ? null : event.currentTarget);
    setCurrentStyle(currentStyle === 'slider' ? 'sliderPause' : 'slider');
  };

  const handlenatArtsClick = async () => {
    try {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.log("Audio play error:", error);
    }
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;

  const customStyle = (i) => {
    return {
      '--i': i,
    };
  };

  useEffect(() => {
    let timeoutId;
    if (isZoomed) {
      timeoutId = setTimeout(() => {
        setIsZoomed(!isZoomed);
      }, 200);
    }
    return () => clearTimeout(timeoutId);
  }, [isZoomed]);

  useEffect(() => {
    const checkOrientation = () => {
      setIsHorizontal(window.innerWidth > window.innerHeight);
    };

    checkOrientation();

    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <>
      <div style={{ marginLeft: isHorizontal ? "10vw" : "10vw", marginTop: "-16vh" }}>     
        <div style={{ marginLeft: isHorizontal ? "7vw" : "4vw", marginBottom: "5vh" }}>
          <img 
            style={{ 
              height: isHorizontal ? "60%" : "80%", 
              width: isHorizontal ? "60%" : "80%",
              cursor: 'pointer'
            }} 
            className={isZoomed ? 'zoomed' : 'notzoomed'}  
            src={natArts} 
            alt="" 
            onClick={handlenatArtsClick}
          /> 
        </div>
   
        <div style={{ position: "relative", zIndex: 1, marginLeft: "15vw", display: "flex" }} className={currentStyle}>
          <BasePopup id={id} open={open} anchor={anchor}>
            <PopupBody>{text}</PopupBody>
          </BasePopup>      
          <span style={customStyle(1)}> <img className="zoom" src={img1} alt="" onClick={(e) => toggleStyle(e, 1)} /> </span>
          <span style={customStyle(2)}> <img className="zoom" src={img2} alt="" onClick={(e) => toggleStyle(e, 2)} /> </span>
          <span style={customStyle(3)}> <img className="zoom" src={img3} alt="" onClick={(e) => toggleStyle(e, 3)} /> </span>
          <span style={customStyle(4)}> <img className="zoom" src={img4} alt="" onClick={(e) => toggleStyle(e, 4)} /> </span>
          <span style={customStyle(5)}> <img className="zoom" src={img5} alt="" onClick={(e) => toggleStyle(e, 5)} /> </span>
          <span style={customStyle(6)}> <img className="zoom" src={img6} alt="" onClick={(e) => toggleStyle(e, 6)} /> </span>
          <span style={customStyle(7)}> <img className="zoom" src={img7} alt="" onClick={(e) => toggleStyle(e, 7)} /> </span>
          <span style={customStyle(8)}> <img className="zoom" src={img8} alt="" onClick={(e) => toggleStyle(e, 8)} /> </span>
        </div>
      </div>

        <audio ref={audioRef} loop>
          <source src= {herFavoriteSong} type="audio/mpeg" />
        </audio>
    </>
  );
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const PopupBody = styled('div')(
  ({ theme }) => `
    width: ${window.innerWidth > window.innerHeight ? '50vw' : '85vw'};
    
    padding: 5px 5px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#F5F5DC'};
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    font-family: 'DM Sans', sans-serif;
    font-size: ${window.innerWidth > window.innerHeight ? '1vw' : '1vh'};
    z-index: 1;
    white-space: pre-line;
  `,
);

export default Gallery;