import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const Ubulu = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full left-0 h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          src="/assets/projects/ubulu.PNG"
          alt=""
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ubulu Africa</h2>
          <h3>React Js / Css Modules</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Ubulu Africa is an innovation management group dedicated to helping
            individuals and organizations use technology to achieve the
            Sustainable Development Goals (SDGs). Working on this project was
            fairly okay and fast too, as this was a single page web app.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://ubulu.africa/">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/Yibaebi/ubulu">Code</a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shado-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS Modules
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

export default Ubulu;
