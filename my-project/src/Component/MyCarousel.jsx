import React from "react";

function MyCarousel() {
  const sliderList = [
    {
      title:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      heading: "John Doe",
      des: "Chief Strategy Officer @ Company",
    },
    {
      title:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      heading: "John Doe",
      des: "Chief Strategy Officer @ Company",
    },
    {
      title:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      heading: "John Doe",
      des: "Chief Strategy Officer @ Company",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-8 lg:px-12 xl:px-24 py-7 lg:py-30 mx-auto mx-w-[1440px] bg-[#002228] text-center">
        <div className="text-center flex items-center justify-center mx-auto w-[60px]">
          <img src="quota.png" />
        </div>

        <div>
          {sliderList.map((item, index) => (
            <div key={index} className="px-10">
              <p className="text-[#FFFFFF] text-[24px] lg:text-[32px] pt-8 lg:pt-12 font-sans ">
                {item.title}
              </p>
              <h4 className="text-[16px] pt-6 lg:text-2xl text-[#0FF1F6] font-semibold">
                {item.heading}
              </h4>
              <p className="text-[18px] md:text-[text-20] font-sans text-[#96ACAF] pt-6">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
import { form } from "@heroui/react";

export default MyCarousel;
