import React from 'react'
import "./testimonials.scss"
export default function Testimonials() {
  const data = [
    {
      id : 1,
      name : "Mohamed Boutaieb",
      title : "some JOB or POSITION",
      img :"https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg",
      icon :"assets/linkedin.png",
      desc:
      "lopierzei lsfjkgh lmjsgjklf gjkdfgh kjdfgh kdlfjgh kjdfgh kdfjghdfklj sqpoifddsio "
    },
    {
      id : 2,
      name : "Mohamed Boutaiebee",
      title : "some JOB or POSITION",
      img :"https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg",
      icon :"assets/linkedin.png",
      desc:
      "lopierzei lsfjkgh lmjsgjklf gjkdfgh kjdfgh kdlfjgh kjdfgh kdfjghdfklj sqpoifddsio ",
      featured : true,
    },
    {
      id : 3,
      name : "Mohamed Boutaieb",
      title : "some JOB or POSITION",
      img :"https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706__340.jpg",
      icon :"assets/linkedin.png",
      desc:
      "lopierzei lsfjkgh lmjsgjklf gjkdfgh kjdfgh kdlfjgh kjdfgh kdfjghdfklj sqpoifddsio "
    },
   
  ]
  return (
    <div className="testimonials" id ="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p)=>(
          <div className={p.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png"  className="left" alt="" /> 
            <img src={p.img}  className="user" alt="" />
            <img src={p.icon}   className="right" alt="" />
          </div>
          <div className="center"> {p.desc}</div>
          <div className="bottom">
            <h3> {p.name}</h3>
            <h4>{p.title}</h4>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}
