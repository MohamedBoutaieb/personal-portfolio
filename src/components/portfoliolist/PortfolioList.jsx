import React from 'react'
import "./portfoliolist.scss"
export default function  (props) {
  return (
    <li className={props.active ? "portfolioList active" : "PortfolioList"} onClick={()=>props.setSelected(props.item.id)}>
       {props.item.title}
    </li>
  )
}
