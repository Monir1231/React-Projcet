import React from "react";

function Improvement() {
  const percen = [
    {
      per: "32%",
      des: "Improvement in Open Rates",
    },
    {
      per: "75%",
      des: "Improvement in Ramp Time",
    },
    {
      per: "35%",
      des: "Improvement in Meetings Booked",
    },
  ];
  return (
    <>
      <section className="px-4 md:px-6 lg:px-12 xl:px-24 py-20 md:py-24 lg:py-20 bg-[#002228]">
        <div className="py-10 rounded-md bg-[url(Frame18.png)]   bg-no-repeat  w-full bg-cover">
          <div className="  grid text-white  px-6">
            <h2 className="text-[28px] md:text-[32px] lg:text-[32px] font-bold text-[#FFFFFF] mb-3 lg:max-w-lg ">
              Allocate effort where your reps make an inpact.
            </h2>

            <h2 className="italic text-[#0FF1F6] text-[28px] md:text-[32px] lg:text-[32px] font-bold mb-3">
              {" "}
              prefered email st|
            </h2>

            <p className="text-[#f1f1f1] text-lg md:text-xl lg:text-[21px] lg:max-w-sm max-w-xs  py-3 font-sans">
              You’re in control. Train your aiDR on elements of your Marketing
              strategy.
            </p>

            <div className="flex flex-col sm:flex-col md:flex-row md:items-center gap-12 md:gap-6 mt-7 md:mt-10 lg:mt-16 xl:mt-20">
              {percen.map((item, index) => (
                <div key={index} className="">
                  <h2 className="text-[#0FF1F6] text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-4">
                    {item.per}
                  </h2>

                  <p className="text-[#E9EEF1] text-lg lg:text-[20px] lg:max-w-[190px] ">
                    {item.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Improvement;
