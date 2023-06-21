import React from "react";
import HeroPicture from "../assets/images/xcc-min.png";
import about from "../assets/images/about.png";
import advancedStudies from "../assets/images/advansed-studies.png";

function Home() {
  return (
    <div>
      <div>
        <nav className="  bg-black">
          <div className="max-w-screen-xxl mx-auto flex flex-wrap items-center justify-between px-4 py-2.5 md:px-6">
            <a href="/" className="step-1 flex items-center max-sm:mb-3">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white ">
                Ido
              </span>
            </a>
            <div className="flex items-center pt-2 max-sm:w-full">
              <ul className="nav-step-3 mr-6 mt-0   flex flex-row   flex-wrap font-medium">
                <li>
                  <a
                    href="#about"
                    className="rounded-full px-3	 py-2 text-lg text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <div class="ml-1 mr-1 h-8 w-[1.5px] bg-black"></div>
                <li>
                  <a
                    href="#skills"
                    className="rounded-full px-3 py-2 text-lg text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    Skills
                  </a>
                </li>
                <div class="ml-1 mr-1 h-8 w-[1.5px] bg-black"></div>
                <li>
                  <a
                    href="#projects"
                    className="rounded-full px-3 py-2 text-lg text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    Projects
                  </a>
                </li>
                <div class="ml-1 mr-1 h-8 w-[1.5px] bg-black"></div>
                <li>
                  <a
                    href="/signup"
                    className=" rounded-full px-3 py-2 text-lg text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <section className="h-[100vh] bg-gray-100" id="home">
        <div className=" p-[5vw]">
          <div className="max-md:w-full">
            <div className="flex justify-between">
              <div className="mt-11 flex flex-col pt-12">
                {/* <h1 className="mb-4 max-w-2xl text-left text-4xl font-extrabold leading-none tracking-tight md:text-5xl  xl:text-6xl">
                  Hi, i'm ido fullstack developer
                </h1> */}
                <h1 className="mb-4 flex max-w-2xl text-left text-4xl font-extrabold leading-none tracking-tight md:text-5xl  xl:text-6xl">
                  <span class="chevron-left">&lt;</span>
                  <h1>Coder</h1>
                  <span class="chevron-right">&gt;</span>
                </h1>

                <p className="mb-6 max-w-2xl text-left  font-light text-gray-600 md:text-lg lg:mb-8 lg:text-xl">
                  Hi, i'm ido fullstack developer i like to create a clean code
                  with REACT and nodeJS
                  {/* From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack. */}
                </p>
                <div className=" flex">
                  <div className="m-1 mt-5 flex">
                    <a
                      href="/getStarted"
                      className="inline-flex items-center  rounded-lg bg-green-700  px-5 py-3 text-center text-base font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-900 "
                    >
                      Get CV
                    </a>
                  </div>
                  <div className="m-1 mt-5 flex">
                    <a
                      href="/getStarted"
                      className="inline-flex items-center  rounded-lg bg-green-700  px-5 py-3 text-center text-base font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-900 "
                    >
                      Contact me
                    </a>
                  </div>
                </div>
              </div>

              <img
                src={HeroPicture}
                alt=""
                className="hidden w-[500px] max-w-md rounded-full lg:block"
              />
            </div>
          </div>
          <div className="w-1/2 max-md:w-full  "></div>
        </div>
      </section>
      <section className="" id="about">
        <div className="flex h-[50vw]  justify-center bg-gray-100 ">
          <div className="flex items-center">
            <img src={about} alt="" className="h-[400px] w-[400px] " />
            <div className="flex w-[300px] flex-col  ">
              <div class="leading-14 relative bottom-16 text-3xl font-bold uppercase">
                About me
              </div>
              <div class="font-roboto text-sm font-normal text-gray-600">
                A Full-stack Developer, proficient in React, NodeJS, and other
                programming tools. With a background in technology work
                environment and experience in leading successful tech projects.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" id="skills">
        <div className="flex h-[50vw]  justify-center bg-gray-100 ">
          <div className="flex items-center">
            <div className="flex  flex-col  ">
              <div class="leading-14 relative bottom-16 text-3xl font-bold uppercase">
                Skills
              </div>
              <div className="flex">
                <div className="m-2 flex h-[250px] w-[200px] items-center justify-center rounded bg-gray-200 p-2">
                  <div class="font-roboto text-xl font-normal text-gray-600">
                    dfdgdfg
                  </div>
                </div>
                <div className="m-2 flex h-[250px] w-[200px] items-center justify-center rounded bg-gray-200 p-2">
                  <div class="font-roboto text-xl font-normal text-gray-600">
                    dfdgdfg
                  </div>
                </div>
                <div className="m-2 flex h-[250px] w-[200px] items-center justify-center rounded bg-gray-200 p-2">
                  <div class="font-roboto text-xl font-normal text-gray-600">
                    dfdgdfg
                  </div>
                </div>
                <div className="m-2 flex h-[250px] w-[200px] items-center justify-center rounded bg-gray-200 p-2">
                  <div class="font-roboto text-xl font-normal text-gray-600">
                    dfdgdfg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" id="projects">
        <div className="flex  justify-center bg-gray-100 ">
          <div className="flex items-center">
            <div className="flex  flex-col  ">
              <div class="leading-14 p-3  text-3xl font-bold uppercase">
                Projects
              </div>
              <div className="flex flex-col">
                <div className=" m-2 flex h-[290px] w-[90vw] items-center justify-center rounded bg-gray-200 p-14 ">
                  <div class="font-roboto m-5  text-left text-xl font-normal text-black">
                    Snowbound Ski vacation planning tool. The website is for
                    those who want to plan their next ski vacation on their own.
                    You can see the highest rated ski resorts around the globe,
                  </div>
                  <img src={advancedStudies} alt="" className="w-[500px] " />
                </div>
                <div className="m-2 flex h-[290px] w-[90vw] items-center justify-center rounded bg-gray-200 p-9">
                  <img src={advancedStudies} alt="" className="w-[500px] " />
                  <div class="font-roboto m-5  text-left text-xl font-normal text-black">
                    Snowbound Ski vacation planning tool. The website is for
                    those who want to plan their next ski vacation on their own.
                    You can see the highest rated ski resorts around the globe,
                  </div>
                </div>
                <div className="m-2 flex h-[290px] w-[90vw] items-center justify-center rounded bg-gray-200 p-[100px]">
                  <div class="font-roboto m-5  text-left text-xl font-normal text-black">
                    Snowbound Ski vacation planning tool. The website is for
                    those who want to plan their next ski vacation on their own.
                    You can see the highest rated ski resorts around the globe,
                  </div>
                  <img src={advancedStudies} alt="" className="w-[500px] " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
