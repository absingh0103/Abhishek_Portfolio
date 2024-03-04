
import office2 from "../assets/office2.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-red-100 via-red-200 to-yellow-100">
      <div className="m-auto max-w-7xl ">
        <div className="mt-[18]" id="home">
          <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
            <div className="md:w-1/2 w-full">
              <img src={office2} alt="avtar" className="w-full" />
            </div>
            {/* left side */}
            <div className="md:w-1/2 w-full mt-5">
              <p className="text-2xl text-headingcolor font-semibold mb-5">
                Hi there, I'm{" "}
                <span className="text-red-600 font-extrabold text-5xl">
                  Abhishek
                </span>
              </p>
              <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
                I turn <span className="text-rose-600">ideas</span> into a
                stunning <span className="text-rose-600">digital reality.</span>
              </h1>
              <p className="text-xl font-mono font-semibold text-body leading-9 mb-8">
                I'm a dedicated software engineer based in India, Specializing
                in dynamic web applications. With a focus on captivating visuals
                and robust backend functionality with high performance, I
                deliver top-tier solutions that exceed expectations. My goal is
                to empower businesses and individuals to achieve their digital
                aspirations.
              </p>
              <a
                href="https://www.linkedin.com/in/abhishek0103"
                target="_blank"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Hire me
                </span>
              </a>
            </div>
            {/* rigth side */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
