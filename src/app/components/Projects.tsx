import React from "react";
import { projects } from "../../data/projects"; // 配列をインポート
import { AiFillBulb } from "react-icons/ai";

const Projects = () => {
  return (
    <section className="px-6 py-10" id="projects">
      <div className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
        <p className="flex font-bold">
          <span className="pr-1">
            <AiFillBulb className="w-4 h-4" />
          </span>
          サンプル
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 max-xs:grid-cols-1 gap-4 mt-10">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <p className="text-white font-semibold text-lg">
                {project.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
