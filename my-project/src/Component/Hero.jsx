import React from "react";
import {Button} from "@heroui/react";

function Hero() {
  return (
    <>
      <section className='bg-black lg:py-6 max-w-[1440px] mx-auto'>
        <div className=" px-2.5 lg:px-10 xl:px-20 text-white py-12 lg:py-20 text-center md:text-left">
        <h4 className="text-[#0FF1F6] text-base lg:text-2xl font-semibold">AI SDRs (aiDRs)</h4>
        <h1 className=" text-[40px] lg:text-[64px]  font-bold  text-[#FFFFFF] py-2">More <span className=" italic">leads, <br/> </span>less <span  className=" italic"> people.</span></h1>
        <p className="lg:max-w-md text-[18px] lg:text-[20px] py-2 text-[#f1f1f1]">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>

         <Button variant="solid" className="text-black bg-[#0FF1F6] mt-3 lg:mt-2 w-full md:w-fit rounded-full py-3">
           Sign Up for the Beta
          </Button>

        </div>
      </section>
    </>
  );
}

export default Hero;
