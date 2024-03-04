import { useEffect, useState } from "react";
import githubimg from "../assets/tools/githubimg.svg";
import amazon from "../assets/projects/amazon.png";
import ShopNow from "../assets/projects/ShopNow.png";
import code from "../assets/code.svg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Amazon Clone",
      description:
        "The Amazon Clone project replicates key functionalities of Amazon, featuring user authentication, product listings, cart management, and more. It demonstrates expertise in developing scalable web applications and integrating diverse APIs.",
      techStack: "React, Tailwind, Node, Express, MongoDB, Stripe, JWT",
      image: amazon,
      live: "https://amazon.cyclic.cloud/",
      github: "https://github.com/absingh0103/Amazon",
    },
    {
      id: 2,
      name: "ShopNow",
      description:
        "ShopNow provides a comprehensive shopping experience, offering product browsing and secure payments. It reflects dedication to user-friendly interfaces and efficient backend systems, ensuring an enjoyable shopping journey.",
      techStack:
        "React, Redux, Tailwind, Node, Express, MongoDB, Stripe, PassportJS",
      image: ShopNow,
      live: "https://shopnow-nkp0.onrender.com/",
      github: "https://github.com/absingh0103/ShopNow-Server",
    },
    {
      id: 3,
      name: "Coming Soon...",
      description: "New projects are currently under development.",
      image: code,
      imgcss: "pl-10",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-red-50 via-red-100 to-yellow-50">
      <div className="m-auto max-w-7xl ">
        <div className="lg:mx-12 mx-4 pt-16 pb-12" id="project">
          <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
            <div>
              <h2 className="md:text-5xl text-4xl text-headingcolor font-extrabold">
                My Projects
              </h2>
            </div>
            <a href="https://github.com/absingh0103/" target="_blank">
              <button className="py-3 px-4 text-black font-medium rounded-lg transition duration-300 ease-in-out hover:scale-105  bg-gray-400 w-2/3 active:bg-gray-500  sm:w-auto">
                <img
                  className="w-8 h-8 inline-block mr-2"
                  src={githubimg}
                  alt="git"
                />
                Visit my github
              </button>
            </a>
          </div>

          {/* project card */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className=" shadow-xl rounded-lg bg-gradient-to-r from-red-100 via-red-200 to-red-100 hover:-translate-y-5 transition-all duration-500 hover:shadow-[5px_5px_rgba(194,_30,_86,_0.4),_8px_8px_rgba(194,_30,_86,_0.3),_12px_12px_rgba(194,_30,_86,_0.2),_15px_15px_rgba(194,_30,_86,_0.1),_18px_18px_rgba(194,_30,_86,_0.05)]"
              >
                <img
                  src={project.image}
                  alt=""
                  className={`rounded-lg w-fit h-64 ${project.imgcss}`}
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2 text-black">
                    {project.name}
                  </h3>
                  <p className="text-body mb-4">{project.description}</p>
                  <p className="text-body  font-semibold mb-2">
                    {project.techStack}
                  </p>
                  {project.imgcss ? null : (
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div class="rounded-md shadow">
                        <a
                          class="w-full flex items-center justify-center px-2 py-3 cursor-pointer text-base leading-6 font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500 hover:text-white focus:ring ring-offset-2 ring-pink-400 focus:outline-none transition duration-150 ease-in-out md:py-2 md:text-lg md:px-3"
                          href={project.live}
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-3 ">
                        <a
                          class="w-full flex items-center justify-center px-2 py-3 cursor-pointer text-base leading-6 font-medium rounded-md text-purple-700 dark:text-purple-700 bg-purple-100 hover:bg-purple-50 hover:text-purple-600 focus:ring ring-offset-2 ring-purple-100 focus:outline-none transition duration-150 ease-in-out md:py-2 md:text-lg md:px-3"
                          href={project.github}
                          rel="noopener"
                          target="_blank"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
