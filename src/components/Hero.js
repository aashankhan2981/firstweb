import React from "react";
import Girl from "../svgs/girl.svg";
// import pause from "../svgs/pause.svg";
// import rotate from "../svgs/rotation.svg";
import heading from "../svgs/heading.svg";
import pausefull from "../svgs/pausefull.svg";

export const Hero = () => {
  return (
      <>
    <div className="container  mx-auto sm:px-2 px-8  sm:flex sm:flex-row flex flex-col-reverse  justify-between items-start">
      <div className="flex flex-col  ">
        <h1 className="font-bold text-2xl md:text-4xl relative lg:text-6xl text-left">
          Learn the
          <span className="">
            <img
              src={heading}
              className='absolute right-0 -top-4'
              alt="icon"
            />
          </span> best ways for staying productive
          
         
        </h1>
        <p className="text-left text-lg lg:text-xl pt-6 sm:pb-8 pb-4 font-normal sub-heading">
          Working at home is definitely a convenient option and makes sense in
          these unprecedented times.
        </p>
        <div className="flex items-center   ">
          <button className="bg-brand-button1 hover:bg-yellow-400 mr-5 w-36 h-9 sm:w-40 sm:h-11 text-white font-bold text-lg rounded-lg">
            Get Tips
          </button>
          <img
            src={pausefull}
            alt="pause" 
            className="relative animate-pulse  top-0.5 sm:pause  pause2"
          /> 
          {/* <img src={rotate} alt="rotate" className="sm:rotate  rotate2 relative right-11" /> */}
        </div>
      </div>
      <div className="flex items-end sm:mb-0 mb-14  ">
        <img
          src={Girl}
          alt="girl"
          className="sm:desktop-bag3   md:desktop-bag2 lg:desktop-bag relative top-2  border-black border-b-2 border-opacity-25 "
        />
      </div>
    </div>
    {/* second section */}
   
    </>
  );
};
