import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import sinachImg from "../public/assets/projects/sinachpat.PNG";

const Sinachpat = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full left-0 h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          src={sinachImg}
          alt=""
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Sinachpat Portfolio</h2>
          <h3>React Js / Styled Components</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This Portfolio App was built using React Js and Styled Components.
            Osinach Patrick is a food scientist turned a Project
            Manager/Designer and has successfully delivered several projects and
            case studies. This portfolio app was designed by him, and built by
            Natural Tech Babe, Yours Truly 😉. I had fun building this project
            as this was the first contract project I worked on after my HNG
            Internship. This project taught me to say Nothing is Impossible. If
            you know, you know. It was definitely a good project.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://www.sinachpat.me/">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/PriscaTonia/sinach-portfolio-website">
              Code
            </a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shado-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Styled Components
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Sinachpat;
