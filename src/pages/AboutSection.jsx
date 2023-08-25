
import { useInView } from 'react-intersection-observer';
import profilePic from "../assets/images/profilepic.png";



const AboutSection = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
  return (
    <section className="relative  z-10 " id="about" >
      <div className="z-10 flex  flex-col items-center justify-center bg-black p-10 h-[1100px] " >
        <img
          src={profilePic}
          alt=""
          className="h-[300px] w-[300px] rounded-full   filter"
        />
        <div className="flex w-[60vw] justify-start h-[50rem] "  ref={ref}>
          <div
            className={`max-w-2xl ${
              inView ? "block" : "hidden"
            }  animate-fade-right `}
          >
            <h1 className="mb-4 flex max-w-2xl  flex-col text-left font-[Gloock] text-4xl text-[74px] font-bold leading-none tracking-tight  text-[#38A3A5] ">
              About me
            </h1>
            <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
              Hello, my name is Ido Lotan and I am a passionate Full-Stack
              developer based in Hafia, Israel. I enjoy building complex
              applications with great UI and powerful backends. Programming and
              development, become a passion of mine in recent years. once i
              exposed to it i didn't stop codeing ever since
            </p>

            <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
              After I got my BSc in Environmental science, I started my first
              job as technical system implementor in the water tech industry. I
              learn how to code in collage, and I kept coding as a hobby. after
              a while I decided to become a pro. then I joined the Israel Tech
              Challenge bootcamp to upgrade my skills
            </p>
            <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
              i started to work as a freelancer on Fievrr in order to get a Real
              experience in web development and working with clients. thanks to
              Fievrr I got to work on a cool project with designers and managers
            </p>
            <p class="font-roboto pt-12 text-start text-xl font-normal text-[#C7F9CC]">
              I am seeking my first professional position as a Full-Stack
              developer. My goals are to learn as much as possible, prove my
              knowledge and skills, and make a significant impact on a real-life
              products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
