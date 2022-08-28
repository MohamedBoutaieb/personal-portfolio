import React from 'react'
import "./topbar.scss"
import {Person,Mail,Home} from "@material-ui/icons"
export default function Topbar(props) {
  return (
    <div className={"topbar "+ (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"><Home className="Home"/></a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span> +216 55 366 389</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span> mohamedboutaieb1459@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <span className="line1">

            </span>
            <span className="line2">
              
            </span>
            <span className="line3">
              
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
