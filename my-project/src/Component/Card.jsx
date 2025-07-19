import React from 'react'

function MyCard() {

  const cardList =[
        {
            cardImg:"ph_magic-wand-duotone.png",
            title: "You’re in Control",
            dis: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {
            cardImg:"ph_graph-duotone.png",
            title: "Infinitely Scalable",
            dis: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {
            cardImg:"Vector.png",
            title: "Incredibly Flexible",
            dis: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        }
    ]
  return (
    <section className='py-20 lg:py-20 xl:py-24 bg-[#002228]'>
         <div className='px-3 md:mx-8 lg:px-20 flex flex-col  lg:flex-row items-center justify-between gap-12'>
          {cardList.map((item,index)=>(
                 <div key={index} className='  '>
               <div className='w-2/4'>
                 <img   src={item.cardImg}/>
               </div>
               <h4 className='text-[#f1f1f1] text-[24px]  lg:text-[28px] py-4  font-semibold'>{item.title}</h4>
               <p className='text-gray-300 text-[17px] font-sans '>{item.dis}</p>
            </div>
          ))}
         </div>
    </section>
  )
}

export default MyCard