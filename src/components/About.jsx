import office2 from "../assets/office2.png";
import Resume from "../assets/Resume.pdf";
const About = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 via-red-100 to-yellow-50">
      <div className="m-auto max-w-7xl pt-16 pb-16 ">
        <div className="lg:mx-12 mx-4" id="about">
          <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
            <div className="sm:w-1/2">
              <img src={office2} alt="" className="w-full sm:w-11/12" />
            </div>
            <div className="sm:w-1/2">
              <h2 className="md:text-5xl text-4xl text-headingcolor font-extrabold">
                About Me
              </h2>
              <p className="mt-8 md:pr-8 mb-8 text-gray-800 font-semibold text-lg font-mono">
                I am{" "}
                <span className="text-black font-bold">Abhishek Singh</span>, a
                dedicated web developer driven by passion since 2021. Throughout
                my journey, I've immersed myself in mastering an array of web
                development technologies including{" "}
                <span className="text-black font-bold">
                  JavaScript, React.js, Next.js, Node, Express, MongoDB, MySql{" "}
                </span>
                and more. My expertise extends to both front-end and back-end
                development, where I have honed my skills in crafting dynamic
                web applications.
                <br /> <br />I thrive on the challenges inherent in creating
                seamless user experiences, whether on the front-end or back-end.
                Thank you for taking the time to familiarize yourself with my
                background and work.
              </p>
              <a href={Resume} download="Abhishek_CV">
                <button
                  type="button"
                  class="px-4 py-3 bg-rose-600 rounded-md text-white outline-none focus:ring-4 focus:ring-rose-400 shadow-lg transform active:scale-x-75 transition-transform  inline-flex"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>

                  <span class="ml-2">Resume.pdf</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
