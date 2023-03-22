import ProjectItem from "./projectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto px-2 py-16 lg:p-0 ">
        <p className="text-xl uppercase tracking-widest text-[#a3320b]">
          projects
        </p>
        <h2 className="py-4">Projects I have Worked On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sinachpat | Portfolio"
            bgImg="/assets/projects/sinachpat.PNG"
            framework="React Js"
            projectUrl="/sinachpat"
          />
          <ProjectItem
            title="Ubulu Africa"
            bgImg="/assets/projects/ubulu.PNG"
            framework="React Js"
            projectUrl="/ubulu"
          />
          <ProjectItem
            title="Esther African Foods"
            bgImg="/assets/projects/estherAF.PNG"
            framework="WordPress CRM"
            projectUrl="/esther"
          />
          <ProjectItem
            title="Virens Power"
            bgImg="/assets/projects/virens.PNG"
            framework="WordPress CRM"
            projectUrl="/virens"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
