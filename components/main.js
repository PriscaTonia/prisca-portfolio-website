import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto px-2 pt-36 pb-2 lg:pt-20 flex justify-center items-center ">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600 ">
            LET&apos;S BUILD SOMETHING AMAZING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#a3320b]"> Prisca </span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            A frontend developer who loves to create beautiful and amazing UI
            designs while writing clean and efficient code. I believe that great
            design and user experience can make all the difference 😊. Take a
            look around my portfolio and see for yourself how I can help bring
            your ideas to life!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/prisca-ebube-6805971a1/">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://twitter.com/EbubePrisca">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <a href="mailto:priscaebueb@gmail.com">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="https://github.com/PriscaTonia">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                {" "}
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
