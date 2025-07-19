import React from "react";
import Marquee from "react-fast-marquee";

function Company() {
  return (
    <section className="py-5 lg:py-10 bg-[#07292F] ">
      <div className="px-4 lg:px-10 text-center">
        <h4 className="text-base text-[#0FF1F6]">our trusted partners</h4>
        <Marquee direction= "left" speed = "100">
        <div className='flex flex-wrap items-center justify-center pt-7 lg:pt-9 gap-10 lg:gap-30'>
        <img src='company.png'/>
         <img src='company.png'/>
         <img src='company.png'/>
           <img src='company.png'/>
            <img src='company.png'/>
          
            
       </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Company;
