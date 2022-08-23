import React from 'react'
import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">.genius</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span> +phone number</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span> mohamedboutaieb1459@gmail.com </span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
