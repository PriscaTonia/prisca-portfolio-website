import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import virenImg from "../public/assets/projects/virens.PNG";

const Virens = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full left-0 h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          src={virenImg}
          alt=""
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Virens Power</h2>
          <h3>WordPress Content Management System</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Viren&apos;s Power is a Solar Panel installation company installs
            Solar Panels for either your home or workplace. They also carry out
            installation tutorials to educate your team on the proper ways of
            installing a panel . This project was built with WordPress by
            Natural Tech Babe, Yours Truly 😉. Feel free to check it out.
          </p>
          <p>PS: I love the video background y&apos;all.</p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://virenspower.com/">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://virenspower.com/">Code</a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shado-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                WordPress
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Elementor Theme
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

export default Virens;
