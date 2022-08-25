import React from 'react'
import "./intro.scss"
import {KeyboardArrowDown} from "@material-ui/icons";
import { useEffect,useRef } from 'react';
import { init } from 'ityped';
export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor : false,
      strings : ["Software Engineering Student","Full Stack Developer"],
      backDelay : 1500,

    } );
  },[])
  return (
    <div className="intro" id = "intro" >
  <div className="left">
    <div className="imgContainer">
      <img src="assets/pdp.png" alt="profile picture" />
    </div>
  </div>
  <div className="right">
    <div className="wrapper">
      <h2>Hi There, I'm</h2>
      <h1>Mohamed Boutaieb</h1>
      <h3> I am a <span ref={textRef}></span></h3>
      <a href="#portfolio">
      <KeyboardArrowDown className="downArr"/>
    </a>
    </div>
   
  </div>

  </div>
  )
}
