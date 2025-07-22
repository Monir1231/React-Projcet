import React from "react";
import Marquee from "react-fast-marquee";

function Company() {
  return (
    <section className="py-4 lg:py-10 bg-[#07292F] ">
      <div className="text-center">
        <h4 className="text-base text-[#0FF1F6]">our trusted partners</h4>
        <Marquee direction= "left" speed = "100">
        <div className='flex flex-wrap items-center px-10 xl:px-0  justify-center pt-7 lg:pt-14 gap-20 lg:gap-30'>
        <img className="w-fit" src='company.png'/>
         <img className="w-fit" src='EasyEuro logo.png'/>
         <img className="w-fit" src='BackHub logo.png'/>
            <img className="w-fit" src= 'company.png '/>
           <img className="w-fit" src='AMD logo.png'/>
           
          
            
       </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Company;
