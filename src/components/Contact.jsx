import React from "react";
import linkedIn from "../assets/linkedIn.svg";
import EmailImg from "../assets/EmailImg.svg";
import githubimg from "../assets/githubimg.svg";
import twitterimg from "../assets/twitterimg.svg";

const Testimonial = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-100 via-red-200 to-yellow-100">
        <div className="m-auto max-w-7xl ">
          <div className="lg:mx-12 mx-4 pt-14 pb-1" id="contact">
            <div className="">
              <div id="contact" className="lg:px-12 px-4">
                <div className="mb-20 text-center">
                  <p className="text-xl text-black font-semibold mb-5">
                    Get In Touch
                  </p>
                  <h2 className="md:text-5xl text-4xl text-black font-bold">
                    Contact me
                  </h2>
                  
                  {/* grid */}
                  <section class="text-gray-600 body-font">
                    <div class="container px-5 py-16 mx-auto">
                      <div class="flex flex-wrap -m-2">
                        <a
                          href="https://linkedin.com/in/abhishek0103"
                          target="_blank"
                          className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        >
                          <div class="">
                            <div class="relative group cursor-pointer transform transition duration-500 hover:scale-105">
                              <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                              <div class="relative px-5 py-4 bg-gradient-to-r from-red-200 via-red-300 to-rose-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <div class="space-y-2">
                                  <div class="h-full flex items-center  p-4 rounded-lg">
                                    <img
                                      alt="linkedIn"
                                      class="w-20 h-20  object-cover object-center flex-shrink-0 rounded-lg mb-6 mr-4"
                                      src={linkedIn}
                                    />
                                    <div class="flex-grow">
                                      <h2 class="text-black title-font font-bold">
                                        LinkedIn
                                      </h2>
                                      <p class="text-gray-600  text-sm">
                                        Let's Connect.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a
                          href="https://github.com/absingh0103/"
                          target="_blank"
                          className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        >
                          <div class="">
                            <div class="relative group cursor-pointer transform transition duration-500 hover:scale-105">
                              <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                              <div class="relative px-5 py-4 bg-gradient-to-r from-red-200 via-red-300 to-rose-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <div class="space-y-2">
                                  <div class="h-full flex items-center  p-4 rounded-lg">
                                    <img
                                      alt="github"
                                      class="w-20 h-20  object-cover object-center flex-shrink-0 rounded-lg mb-6 mr-4"
                                      src={githubimg}
                                    />
                                    <div class="flex-grow">
                                      <h2 class="text-black title-font font-bold">
                                        Github
                                      </h2>
                                      <p class="text-gray-600  text-sm">
                                        Check out my Repos.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://twitter.com/Abhishe57725489"
                          target="_blank"
                          className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        >
                          <div class="">
                            <div class="relative group cursor-pointer transform transition duration-500 hover:scale-105">
                              <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                              <div class="relative px-5 py-4 bg-gradient-to-r from-red-200 via-red-300 to-rose-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <div class="space-y-2">
                                  <div class="h-full flex items-center  p-4 rounded-lg">
                                    <img
                                      alt="twitter"
                                      class="w-20 h-20  object-cover object-center flex-shrink-0 rounded-lg mb-6 mr-4"
                                      src={twitterimg}
                                    />
                                    <div class="flex-grow">
                                      <h2 class="text-black title-font font-bold">
                                        X
                                      </h2>
                                      <p class="text-gray-600  text-sm">
                                        What's happening?
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="mailto:abhiishek0103@gmail.com"
                          target="_blank"
                          className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        >
                          <div class="">
                            <div class="relative group cursor-pointer transform transition duration-500 hover:scale-105">
                              <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                              <div class="relative px-5 py-4 bg-gradient-to-r from-red-200 via-red-300 to-rose-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <div class="space-y-2">
                                  <div class="h-full flex items-center  p-4 rounded-lg">
                                    <img
                                      alt="Email"
                                      class="w-20 h-20  object-cover object-center flex-shrink-0 rounded-lg mb-6 mr-4"
                                      src={EmailImg}
                                    />
                                    <div class="flex-grow">
                                      <h2 class="text-black title-font font-bold">
                                        Email
                                      </h2>
                                      <p class="text-gray-600  text-sm">
                                        Let's get in touch.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
