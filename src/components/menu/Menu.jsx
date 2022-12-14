import React from 'react'
import "./menu.scss"
export default function Menu(props) {
  return (
    <div className={"menu " + (props.menuOpen && "active")}>
        <ul>
            <li onClick={()=> props.setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=> props.setMenuOpen(false)}>
                <a href="#works">Experience</a>
            </li>
       {/*  <li onClick={()=> props.setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
  </li>*/}
            <li onClick={()=> props.setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
    </div>
  )
}
