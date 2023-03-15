import sinachImg from "../public/assets/projects/sinachpat.PNG";
import ubuluImg from "../public/assets/projects/ubulu.PNG";
import estherImg from "../public/assets/projects/estherAF.PNG";
import virenImg from "../public/assets/projects/virens.PNG";
// import Image from "next/image";
import ProjectItem from "./projectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto px-2 py-16 lg:p-0 ">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          projects
        </p>
        <h2 className="py-4">Projects I have Worked On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sinachpat | Portfolio"
            bgImg={sinachImg}
            framework="React Js"
            projectUrl="/sinachpat"
          />
          <ProjectItem
            title="Ubulu Africa"
            bgImg={ubuluImg}
            framework="React Js"
            projectUrl="/ubulu"
          />
          <ProjectItem
            title="Esther African Foods"
            bgImg={estherImg}
            framework="WordPress CRM"
            projectUrl="/esther"
          />
          <ProjectItem
            title="Virens Power"
            bgImg={virenImg}
            framework="WordPress CRM"
            projectUrl="/virens"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
