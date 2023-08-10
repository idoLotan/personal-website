import React from "react";
import HeroPicture from "../assets/images/xcc-min.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import git from "../assets/images/git.png";
import ts from "../assets/images/ts.png";
import tailwind from "../assets/images/tailwind.png";
import firebase from "../assets/images/firebase.png";
import coder from "../assets/images/coder.jpg";
import nodejs from "../assets/images/nodejs.png";
import python from "../assets/images/python.png";
import mongo from "../assets/images/mongo.png";
import aws from "../assets/images/aws.png";
import logo from "../assets/images/logo.png";
import matrix from "../assets/images/matrix.png";

import cv from "../assets/idocv.pdf";
import hevanti from "../assets/images/hevanti.jpg";
import advancedStudies from "../assets/images/advansed-studies.png";
import profilePic from "../assets/images/profilepic.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Home() {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = "ddd";

    // Access the values of the form elements

    // Add the checked items to the form data

    emailjs.sendForm(
      "service_7uqnsxy",
      "template_1z3aoin",
      form,
      "Q0KuceYtG9tHt_72N"
    );
  };

  const handleDownload = () => {
    const fileName = "idoCV.pdf"; // Specify the desired file name
    const filePath = "/static/media/idocv.3411d03ce24c6b145664.pdf"; // Specify the path to your local PDF file

    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <div>
      <div>
        <nav className="  bg-[#51a79a]">
          <div className="max-w-screen-xxl mx-auto flex flex-wrap items-center justify-between px-4 py-2.5 md:px-6">
            <a href="/" className="step-1 flex items-center max-sm:mb-3">
              <img src={logo} alt="" className="h-10" />
            </a>
            <div className="flex items-center pt-2 max-sm:w-full">
              <ul className="nav-step-3 mr-6 mt-0   flex flex-row   flex-wrap font-medium">
                <li>
                  <a
                    href="#about"
                    className="rounded-full px-3	 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-blue-300 hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <div class="ml-1 mr-1 h-8 w-[1.5px] bg-black"></div>
                <li>
                  <a
                    href="#skills"
                    className="rounded-full px-3 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-blue-300 hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    Skills
                  </a>
                </li>
                <div class="ml-1 mr-1 h-8 w-[1.5px] bg-black"></div>
                <li>
                  <a
                    href="#projects"
                    className="rounded-full px-3 py-2 text-lg  transition-all hover:-translate-y-0.5 hover:bg-blue-300 hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="">
        <div class=" border-bl-200 border-tr-200 grid-cols-auto h-143 transform-will-change relative col-span-2 w-full flex-none justify-self-start overflow-hidden bg-green-500"></div>
      </div>

      <section
        className="flex items-start justify-center  bg-[#51a79a] "
        id="home"
      >
        <div className=" p-[5vw]">
          <div className="max-md:w-full">
            <div className="flex flex-col  justify-between md:flex-row">
              <div className="mt-11 flex flex-col  ">
                <div className="flex flex-col items-center justify-center  md:items-start">
                  <h1 className="mb-4 flex max-w-2xl  flex-col text-left font-[Gloock] text-4xl text-[64px] font-bold leading-none tracking-tight  text-black ">
                    <div className="flex">
                      <span class="chevron-left">&lt;</span>
                      <h1>coder</h1>
                      <span class="chevron-right">&gt;</span>
                    </div>
                  </h1>

                  <p className="mb-6 max-w-2xl  text-center font-light   text-gray-600 md:text-left md:text-lg lg:mb-8 lg:text-xl">
                    A Fullstack Developer fluent in React and Node.js, I enjoy
                    building dynamic and robust web applications that empower
                    users with intuitive interfaces and scalable functionality.
                  </p>
                </div>

                <div className=" flex justify-center md:justify-start">
                  <div className="m-1 mt-5 flex">
                    <div
                      onClick={handleDownload}
                      className=" inline-flex cursor-pointer items-center rounded-full   bg-[#295a52]  px-5 py-3 text-center text-base font-medium text-white hover:bg-black focus:ring-4 focus:ring-green-600 "
                    >
                      Get CV
                    </div>
                  </div>
                  <div className="m-1 mt-5 flex">
                    <a
                      href="#contact"
                      className="inline-flex items-center  rounded-full bg-[#295a52]  px-5 py-3 text-center text-base font-medium text-white hover:bg-black focus:ring-4 focus:ring-green-900 "
                    >
                      Contact me
                    </a>
                  </div>
                </div>
              </div>
              <img src={coder} alt="" className="h-96 rounded-full" />
            </div>
          </div>
          <div className="w-1/2 max-md:w-full  "></div>
        </div>
      </section>
      <section className="relative  z-10" id="about">
        <div className="z-10 flex flex-col items-center justify-center bg-black p-10 ">
          <img
            src={profilePic}
            alt=""
            className="h-[300px] w-[300px] rounded-full  filter"
          />
          <div className="flex w-[60vw] justify-start">
            <div className="max-w-2xl ">
              <h1 className="mb-4 flex max-w-2xl  flex-col text-left font-[Gloock] text-4xl text-[74px] font-bold leading-none tracking-tight  text-[#38A3A5] ">
                About me
              </h1>
              <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
                Hello, my name is Ido Lotan and I am a passionate Full-Stack
                developer based in Hafia, Israel. I enjoy building complex
                applications with great UI and powerful backends. Programming
                and development, become a passion of mine in recent years. once
                i exposed to it i didn't stop codeing ever since
              </p>

              <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
                After I got my BSc in Environmental science, I started my first
                job as technical system implementor in the water tech industry.
                I learn how to code in collage, and I kept coding as a hobby.
                after a while I decided to become a pro. then I joined the
                Israel Tech Challenge bootcamp to upgrade my skills
              </p>
              <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
                i started to work as a freelancer on Fievrr in order to get a
                Real experience in web development and working with clients.
                thanks to Fievrr I got to work on a cool project with designers
                and managers
              </p>
              <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
                I am seeking my first professional position as a Full-Stack
                developer. My goals are to learn as much as possible, prove my
                knowledge and skills, and make a significant impact on a
                real-life products.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-start bg-[#22577a] p-10"
        id="skills"
      >
        <div class=" flex  justify-center text-3xl font-bold uppercase">
          Skills
        </div>
        <div className="relative flex w-[100%vw] justify-center  ">
          <div className="absolute left-2 top-20 z-0">
            <div className="ellipse  -rotate-45 transform"></div>
          </div>

          <div className="flex flex-col md:flex-row ">
            <Card title={"Frontend"}>
              <img src={js} className=" m-2 h-20" alt="" />
              <img src={ts} className=" m-2 h-20" alt="" />
              <img src={react} className="m-2 h-20 rounded-full" alt="" />
              <img src={tailwind} className=" m-2 h-20" alt="" />
            </Card>
            <Card title={"Backend"}>
              <img src={nodejs} className=" m-2 h-20" alt="" />
              <img src={firebase} className="m-2 h-20" alt="" />
              <img src={mongo} className="m-2 h-20" alt="" />
              <img src={python} className="m-2 h-20" alt="" />
            </Card>
            <Card title={"ci/cd"}>
              <img src={git} className=" m-2 h-12" alt="" />
              <img src={aws} className=" m-2 h-20" alt="" />
            </Card>
          </div>
        </div>
      </section>
      <section className="relative w-[100%]  bg-[#22577a]" id="projects">
        <div className="flex justify-center  ">
          <div className="flex items-center">
            <div className="flex  flex-col  ">
              <div class="leading-14 p-3  text-3xl font-bold uppercase">
                Projects
              </div>
              <div className="absolute left-2 top-20 z-0">
                <div className="ellipse  absolute z-0 rotate-45 transform"></div>
                <div className="ellipse  -rotate-45 transform"></div>
              </div>
              <div className="z-10 flex  flex-col items-center justify-center ">
                <div className="m-2 flex  w-[100vw] flex-col items-center justify-center rounded p-14  md:flex-row ">
                  <div className="m-10 w-[300px]">
                    <h1 className="mb-4 flex max-w-2xl  flex-col text-left font-[Gloock] text-3xl text-[74px] font-bold leading-none tracking-tight  text-[#80ED99] ">
                      Advanaced Studies
                    </h1>
                    <div class="font-roboto  m-5 text-left text-xl font-bold text-[#80ED99]  ">
                      A platform for science education making science fun to
                      learn!
                    </div>
                  </div>

                  <div className="group">
                    <Link to="https://advanced-studies-client.vercel.app/">
                      <img
                        src={advancedStudies}
                        alt=""
                        className="cursor-pointer   rounded-xl md:min-w-[800px] "
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="z-10 flex  flex-col items-center  justify-center">
                <div className=" m-2 flex  w-[100vw] flex-col items-center  justify-center rounded p-14  md:flex-row ">
                  <div className=" order-2 md:order-1">
                    <Link to="https://meveen.org ">
                      <img
                        src={hevanti}
                        alt=""
                        className="   cursor-pointer rounded-xl "
                      />
                    </Link>
                  </div>

                  <div className="order-1 m-10 w-[300px] md:order-2">
                    <h1 className="mb-4 flex max-w-2xl  flex-col text-left font-[Gloock] text-3xl text-[74px] font-bold leading-none tracking-tight  text-[#80ED99] ">
                      Hevanti
                    </h1>
                    <div class="font-roboto  m-5 text-left text-xl font-bold text-[#80ED99]  ">
                      A site for a cleint how has a education buisness
                    </div>
                  </div>
                </div>

                <div className=" order-2 md:order-1 ">
                  <div className="flex w-[100%]  md:h-[50rem] md:w-[100rem] flex-col md:flex-row items-center">
                    <div className="">
                      <h1 className="mb-4 flex max-w-2xl  flex-col text-left font-[Gloock] text-3xl text-[74px] font-bold leading-none tracking-tight  text-[#80ED99] ">
                        Hevanti presentation
                      </h1>
                      <div class="font-roboto  m-5 text-left text-xl font-bold text-[#80ED99]  "></div>
                    </div>
                    <iframe
                      className="h-full w-full rounded-xl "
                      src="https://www.youtube.com/embed/uq7n9-EQles"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative   w-[100%] bg-[#163c55] p-10" id="contact">
        <header className="p-4 text-2xl font-bold">contact me</header>
        <div className="flex  flex-wrap items-center justify-evenly gap-4 text-xl md:gap-0">
          <div
            onClick={handleDownload}
            className="underline-animation flex font-bold"
          >
            My C.V
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv "
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="UploadFileIcon"
            >
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"></path>
            </svg>
          </div>
          <a
            className=" underline-animation font-bold"
            href="https://github.com/idoLotan"
            target="_blank"
          >
            Github
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="GitHubIcon"
            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
          </a>
          <a
            className=" underline-animation font-bold"
            href="https://www.linkedin.com/in/ido-lotan-12097a223/"
            target="_blank"
          >
            Linked
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LinkedInIcon"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
            </svg>
          </a>
          <a
            class=" underline-animation font-bold"
            href="mailto: idolotan91@gmail.com"
          >
            Email
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EmailIcon"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
          </a>
        </div>
        <div class="flex flex-col items-center justify-center ">
          <header className="text-center text-xl">Send me a messge</header>
          <div className="relative flex w-[410px] flex-col items-center justify-center  pb-12">
            <div className=" flex  w-full items-center justify-center ">
              <input
                name="user_name"
                required=""
                placeholder="Name"
                type="text"
                className="m-2 p-2"
                value=""
              />
              <input
                name="user_email"
                required=""
                placeholder="Email"
                type="email"
                className="m-2 p-2"
                value=""
              />
            </div>
            <div className=" flex w-full  flex-col items-center justify-center ">
              <input
                name="subject"
                required=""
                placeholder="Subject"
                type="text"
                className=" m-2 w-full p-2"
                value=""
              />
              <textarea
                name="message"
                required=""
                placeholder="Message"
                className="m-2 w-full  p-2"
              ></textarea>
            </div>
            <button
              onClick={sendEmail}
              type="submit"
              className=" absolute bottom-0 right-0 inline-flex items-center rounded-md   bg-[#757575]  px-5 py-3 text-center text-base font-medium text-white hover:bg-black focus:ring-4 focus:ring-green-600 "
            >
              send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
