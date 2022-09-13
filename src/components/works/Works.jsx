import {React, useState }from 'react'
import "./works.scss"
import ChevronRight  from "@material-ui/icons/ChevronRight";
import {Work,School,Group} from "@material-ui/icons";

export default function Works() {
  const [currentSlider,setCurrentSlider] = useState(0);
  const data = [
    {
      id:1,
      icon: <Work/>,
      title:"Internship At Kaoun"
      ,desc:"Backend Summer Internship At Kaoun, Flouci ,a payment app that allow you to manage your bank account",
      img:"https://www.disruptunisia.com/logo/5abdfc4da88d7.png"
    },
    {
      id:2,
      icon: <Work/>,
      title:"Internship at Cognira"
      ,desc:"Backend Internship about creating a notification Api between Slack and the Companie's main Software",
      img:"https://fabskill.com/assets/img/bus-logo/cropped/508_1607963253.png",
      about :"https://cognira.com/"
    },
    {
      id:3,
      icon: <School/>,
      title:"Brainnest Frontend Training program"
      ,desc:"A summer Training program organised by brainnest to learn about Frontend development",
      img:"https://static.wixstatic.com/media/4fa9c2_0b28731f38304ed0989a8c0582f953a3~mv2.png/v1/fill/w_2500,h_2500,al_c/4fa9c2_0b28731f38304ed0989a8c0582f953a3~mv2.png"
    },
    {
      id:4,
      icon: <School/>,
      title:"INSAT Student"
      ,desc:"Currently Studying software Engineering at National Insitute of Applied Science And Technologies , Tunisia",
      img:"https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/134663835_154116216509145_9179712154365388698_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zEqMo8ir3tIAX8p_hwC&_nc_ht=scontent.ftun10-1.fna&oh=00_AT8DqMFIMiVAyW-tam5YYEa69zHfmfZIFlNC9JKSlIbxhg&oe=6331833B",
      about:"http://www.insat.rnu.tn/Fr/accueil_46_34"
    },
    ,
    {
      id:5,
      icon: <Group/>,
      title:"IEEE member 2019-2022"
      ,desc:"3 years full of associative life, various experiences and events managements and participations",
      img:"https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/243352176_4518651261506741_4332306842444445477_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IK5iXFUrKjUAX-FVxUS&_nc_ht=scontent.ftun9-1.fna&oh=00_AT9UJmhcfM50dLgRxd1MJSfCShhXY6NabXAz0kLrXMMGGA&oe=63254702",
      about:"http://www.insat.rnu.tn/Fr/accueil_46_34"
    },
  ]
  return (
    <div className="works"  id="works">
       <div className="slider" style = {{transform:`translateX(-${currentSlider*100}vw)`}}>
        {data.map(
          item =>(

         <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                 <div className="imgContainer">
                   {item.icon}
                 </div>
                 <h2>{item.title}</h2>
                 <p>
                 {item.desc}
                 </p>
                 <span><a href={item.about} target="_blank">About</a></span>
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>
         )
         )}
      </div>
      <img src="assets/arrow.png" className="arrow right" onClick = {()=>setCurrentSlider((currentSlider+1) %5)} />
      <img src="assets/arrow.png" className="arrow left" onClick = {()=>setCurrentSlider((currentSlider-1 +5) %5)}/>
    </div>
  )
}
