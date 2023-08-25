import React from "react";
import { useInView } from 'react-intersection-observer';
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import git from "../assets/images/git.png";
import ts from "../assets/images/ts.png";
import tailwind from "../assets/images/tailwind.png";
import firebase from "../assets/images/firebase.png";
import nodejs from "../assets/images/nodejs.png";
import python from "../assets/images/python.png";
import mongo from "../assets/images/mongo.png";
import aws from "../assets/images/aws.png";
import logo from "../assets/images/logo.png";
import Card from "../components/Card";


function SkillsSection() {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
  return (
    <section
    className="flex flex-col justify-start bg-[#22577a] p-10"
    id="skills"
    ref={ref}
  >
    <div class=" flex  justify-center text-3xl font-bold uppercase">
      Skills
    </div>
    <div className="relative flex w-[100%vw] justify-center  ">
      <div className="absolute left-2 top-20 z-0">
        <div className="ellipse  -rotate-45 transform"></div>
      </div>

      <div className={`flex flex-col md:flex-row `}  >
        <Card title={"Frontend"} i>
          <img  src={js} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[300ms] `} alt="" />
          <img src={ts} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[600ms]`} alt="" />
          <img src={react} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[900ms]`} alt="" />
          <img src={tailwind} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[1200ms]`} alt="" />
        </Card>
        <Card title={"Backend"} >
          <img src={nodejs} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[1500ms]`} alt="" />
          <img src={firebase} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[1800ms]`} alt="" />
          <img src={mongo} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[2100ms]`} alt="" />
          <img src={python} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[2400ms]`} alt="" />
        </Card>
        <Card title={"ci/cd"} >
          <img src={git} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[2700ms]`} alt="" />
          <img src={aws} className={`m-2  ${inView ? "block" : "hidden"} h-20 animate-fade-left animate-duration-100 animate-delay-[3100ms]`} alt="" />
        </Card>
      </div>
    </div>
  </section>
  
  );
}

export default SkillsSection;
