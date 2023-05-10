import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const EstherAF = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full left-0 h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          src="/assets/projects/multi-step-form.PNG"
          alt=""
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Multi-Step Form</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="pb-4">Overview</h2>
          <p>
            The Multi-Step Form is a frontend challenge from Frontend Mentors,
            with a dificulty level of &quot;Advanced&quot;. This project was
            built with React Js for Javascript framework, Tailwind Css for
            styles, React Hook Form for form validation and Framer Motion for
            the subtle animations. This project was a little bit challenging,
            but definitely worth the effort. The form values at each step were
            being stored in the local storage to save progress, but once a user
            reaches the final step, the local storage is cleared. For effective
            State Management through out the project, the React UseContext hook
            was used.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://multi-step-form-ntb.vercel.app">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/PriscaTonia/Multi-Step-Form">Code</a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shado-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind Css
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Framer Motion
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Hook Form
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> UseContext for State
                Management
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
