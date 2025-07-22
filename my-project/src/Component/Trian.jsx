import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function Trian() {
  return (
    <section className="py-5 md:py-15 lg:py-10 xl:py-10 bg-[#002228]   lg:px-12 px-3 md:px-7 xl:px-16 ">
      <div className=" py-10 rounded-md bg-[url(Frame17.png)]   bg-no-repeat w-full bg-cover  ">
        <div className="  grid text-white mx-auto justify-center ">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[#FFFFFF] mb-3  ">
            Train your aiDR on your... <br />{" "}
            <span className="italic text-[#0FF1F6]">prefered email st|</span>
          </h2>

          <p className="text-[#f1f1f1] text-lg md:text-xl lg:text-[21px] lg:max-w-sm max-w-xs  py-3">
            You’re in control. Train your aiDR on elements of your Marketing
            strategy.
          </p>
          
        </div>

       

   <div className="grid md:justify-center justify-start">
        <div className="flex flex-col md:flex-row   md:items-center   gap-0 md:gap-8  pt-4 lg:pt-7 ">
            <div className="flex  items-center md:justify-center justify-start gap-1 lg:gap-3 py-2 lg:py-0">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#14BCB2]"
              />
              <p className="text-[16px] md:text-[20px] text-[#14BCB2]">
               Quick to ramp
              </p>
            </div>

            <div className="flex  items-center md:justify-center justify-start gap-1 py-2 lg:py-0">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#14BCB2]"
              />
              <p className="text-[16px] md:text-[20px] text-[#14BCB2]">
               Easy to optimize
              </p>
            </div>
          </div>





           <div className="flex flex-col md:flex-row lg:items-center gap-0 md:gap-8 pt-2 lg:pt-4">
            <div className="flex items-center md:justify-center justify-start gap-1 py-2 lg:py-0">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#14BCB2]"
              />
              <p className="text-[16px] md:text-[20px] text-[#14BCB2]">
               Quick to scale up
              </p>
            </div>

            <div className="flex items-center lg:justify-center justify-start gap-1 py-2 lg:py-0">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[#14BCB2]"
              />
              <p className="text-[16px] md:text-[20px] text-[#14BCB2]">
                 Works with all your existing tools
              </p>
            </div>
          </div>
          </div>
         
        

      </div>
    </section>
  );
}

export default Trian;
