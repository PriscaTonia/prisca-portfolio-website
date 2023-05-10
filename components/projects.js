import ProjectItem from "./projectItem";

const Projects = () => {
  const projectList = [
    {
      title: "Sinachpat | Portfolio",
      bgImg: "/assets/projects/sinachpat.PNG",
      framework: "React Js",
      url: "/sinachpat",
    },
    {
      title: "Ubulu Africa",
      bgImg: "/assets/projects/ubulu.PNG",
      framework: "React Js",
      url: "/ubulu",
    },
    {
      title: "Esther African Foods",
      bgImg: "/assets/projects/estherAF.PNG",
      framework: "WordPress CRM",
      url: "/esther",
    },
    {
      title: "Virens Power",
      bgImg: "/assets/projects/virens.PNG",
      framework: "WordPress CRM",
      url: "/virens",
    },
    {
      title: "Multi-Step Form",
      bgImg: "/assets/projects/multi-step-form.PNG",
      framework: "React Js",
      url: "/multiForm",
    },
    {
      title: "Space Tourism Website",
      bgImg: "/assets/projects/space-tourism.PNG",
      framework: "React Js",
      url: "/spaceTourism",
    },
  ];

  return (
    <div id="projects" className="w-full p-2 pt-16 pb-8">
      <div className="max-w-[1240px] mx-auto px-2 lg:p-0 ">
        <p className="text-xl uppercase tracking-widest text-[#a3320b]">
          projects
        </p>
        <h2 className="py-4">Major Projects I have Worked On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((item) => {
            return (
              <ProjectItem
                key={item.title}
                title={item.title}
                bgImg={item.bgImg}
                framework={item.framework}
                projectUrl={item.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
