import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, bgImg, projectUrl, framework }) => {
  return (
    <div className="relative flex items-center justify-center h-auto shadow-xl w-full shadow-gray-400 rounded-xl p-8 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={bgImg}
        alt=""
        width="500"
        height="300"
        className="rounded-xl group-hover:opacity-10 w-full"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-[18px] lg:text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{framework}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
