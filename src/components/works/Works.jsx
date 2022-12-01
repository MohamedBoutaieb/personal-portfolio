import { React, useState } from "react";
import "./works.scss";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { Work, School, Group } from "@material-ui/icons";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: <Work />,
      title: "Internship at Cognira, summer 2022",
      desc: "Backend Internship about creating a notification Api between Slack and the Companie's main Software",
      img: "https://github.com/MohamedBoutaieb/personal-portfolio/blob/main/public/assets/cognira.png?raw=true",
      about: "https://cognira.com/",
    },

    {
      id: 2,
      icon: <School />,
      title: "INSAT Student",
      desc: "Currently Studying software Engineering at National Insitute of Applied Science And Technologies , Tunisia",
      img: "https://github.com/MohamedBoutaieb/personal-portfolio/blob/main/public/assets/insat.png?raw=true",
      about: "http://www.insat.rnu.tn/Fr/accueil_46_34",
    },
    {
      id: 3,
      icon: <Work />,
      title: "Part time Job ,Kaoun - present",
      desc: "Full stack part time job using Spring Boot and reactJs to develop Flouci web app",
      img: "https://www.disruptunisia.com/logo/5abdfc4da88d7.png",
      about: "https://flouci.com",
    },
    {
      id: 4,
      icon: <Work />,
      title: "Internship at Kaoun ,summer 2021",
      desc: "Backend Summer Internship At Kaoun, Flouci ,a payment app that allow you to manage your bank account",
      img: "https://www.disruptunisia.com/logo/5abdfc4da88d7.png",
      about: "https://flouci.com",
    },
    {
      id: 5,
      icon: <Work />,
      title: "Part time Job at Upkurs (sep.-nov. 2022)",
      desc: "Front end part time job using angular and bootstrap for one of the first e-learning tunisian websites ",
      img: "https://github.com/MohamedBoutaieb/personal-portfolio/blob/main/public/assets/upkurs.png?raw=true",
      about: "",
    },
    {
      id: 6,
      icon: <School />,
      title: "Brainnest Frontend Training program",
      desc: "A summer Training program organised by brainnest to learn about Frontend development",
      img: "https://static.wixstatic.com/media/4fa9c2_0b28731f38304ed0989a8c0582f953a3~mv2.png/v1/fill/w_2500,h_2500,al_c/4fa9c2_0b28731f38304ed0989a8c0582f953a3~mv2.png",
    },
    ,
    {
      id: 7,
      icon: <Group />,
      title: "IEEE member 2019-2022",
      desc: "3 years full of associative life, various experiences and events managements and participations",
      img: "https://github.com/MohamedBoutaieb/personal-portfolio/blob/main/public/assets/ieee.png?raw=true",
      about: "https://www.ieee.org",
    },
  ];
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>
                    <a href={item.about} target="_blank">
                      About
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} className="img" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow right"
        onClick={() => setCurrentSlider((currentSlider + 1) % (data.length-1))}
      />
      <img
        src="assets/arrow.png"
        className="arrow left"
        onClick={() => setCurrentSlider((currentSlider - 1 + 7) % (7))}
      />
    </div>
  );
}
