import React from "react";
import { Button } from "@heroui/react";

function Beta() {
  return (
    <section className=" py-16 md:py-20 lg:py-30 bg-[#002228] ">
      <div className="text-center px-4 md:px-6 lg:px-12 xl:px-20">
        <h4 className="text-[18px] lg:text-[20px] text-[#0FF1F6] ">
          GET STARTED
        </h4>

        <h2 className="italic  text-[28px] md:text-[32px] lg:text-[32px] font-bold  text-[#FFFFFF] mt-2 mb-4">
          Embrace the new era of outbound.
        </h2>

        <p className="text-[#f1f1f1] text-lg md:text-xl lg:text-[21px] lg:max-w-xl font-sans max-w-sm   mx-auto">
          Wizia lets you train, activate, and optimize aiDRs. Take your outbound
          to new levels of performance and efficiency.
        </p>

        
          
              <Button
          variant="solid"
          className="text-black bg-[#0FF1F6] mt-8  lg:mt-10 w-full md:w-fit rounded-full py-3 "
        >
          Sign Up for the Beta
        </Button>
         
       
      </div>
    </section>
  );
}

export default Beta;
