import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const EstherAF = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full left-0 h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          src="/assets/projects/estherAF.PNG"
          alt=""
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Esther African Foods</h2>
          <h3>WordPress Content Management System</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="pb-4">Overview</h2>
          <p>
            Esther African Foods is an e-commerce website that sells African
            groceries to Africans in Diaspora. This project was built with
            WordPress by Natural Tech Babe, Yours Truly 😉. i forgot to tell
            y&apos;all, I use wordpress too. So if you want a website like this
            one, which is amaizing by the way, and you want to be able to manage
            your backend by yourself, I can build it for you, with WordPress!
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://estherafricanfoods.com/">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://estherafricanfoods.com/">Code</a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shado-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> WordPress
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Woo Commerce
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Divi Theme
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

export default EstherAF;
