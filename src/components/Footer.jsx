
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-red-100 via-red-200 to-yellow-100">
      <hr className=" bg-white" />
      <hr className=" bg-white" />

      <div className="m-auto max-w-7xl ">
        <div className=" py-20 md:px-12 px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 ">
            <a href="/" className="text-black font-bold">
              Abhishek Singh
            </a>
            <div className="flex flex-col md:flex-row md:items-center flex-wrap text-gray-700 font-semibold">
              Created with &#10084; by Abhishek
            </div>
            <div className="flex items-center gap-4 ml-4">
              <a href="mailto:abhiishek0103@gmail.com" target="_blank">
                <FaEnvelope className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-rose-600" />
              </a>
              <a href="https://github.com/absingh0103/" target="_blank">
                <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-rose-600" />
              </a>
              <a href="https://twitter.com/Abhishe57725489" target="_blank">
                <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-rose-600" />
              </a>
              <a href="https://linkedin.com/in/abhishek0103" target="_blank">
                <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-rose-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
