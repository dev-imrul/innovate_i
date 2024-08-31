import React from 'react'
import DhongImg from '../../assets/Dhong.png'
import work1 from '../../assets/work_1.jpg'
import work2 from '../../assets/work_2.png'
import work3 from '../../assets/work_3.jpg'
import work4 from '../../assets/work_4.png'
import work5 from '../../assets/work_5.png'
import work6 from '../../assets/work_6.png'
const Work = () => {
    return (
        <div className='pt-[60px] pb-[100px]'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='mb-[16px]'>
                    <img src={DhongImg} alt="" />
                </div>
                <p className="text-[48px] font-extrabold font-Osan text-[#192239] w-[686px] text-center">Work Showcase</p>
            </div>
            <div className='container mx-auto w-[1170px]'>
                <div className="flex space-x-10 text-[24px] font-semibold text-[#6C7D93] font-Osan mt-[47px]">
                    <a href="#" className="hover:text-[#FF7628] hover:underline text-Osan font-semibold text-[18px] ">All</a>
                    <a href="#" className="hover:text-[#FF7628] hover:underline text-Osan font-semibold text-[18px] ">Digital Mkt</a>
                    <a href="#" className="hover:text-[#FF7628] hover:underline text-Osan font-semibold text-[18px] ">Branding</a>
                    <a href="#" className="hover:text-[#FF7628] hover:underline text-Osan font-semibold text-[18px] ">Content Mkt</a>
                    <a href="#" className="hover:text-[#FF7628] hover:underline text-Osan font-semibold text-[18px] ">Social Media Mkt</a>
                </div>
                <div className='mx-auto grid grid-cols-4 gap-[30px] mt-[22px]'>
                    <div className='col-span-1 w-[276px] h-[344px] rounded-[20px] shadow-2xl transition-all duration-300 hover:p-[5px] hover:shadow-amber-500'><img src={work1} alt="" className='w-[276px] h-[344px] object-cover rounded-[20px]' /></div>
                    <div className='col-span-2 w-[561px] mx-auto h-[344px] rounded-[20px] shadow-2xl hover:shadow-amber-500 hover:p-[5px] transition-all duration-300'><img src={work2} alt="" className='w-[561px] h-[344px] object-cover rounded-[20px]' /></div>
                    <div className='col-span-1 w-[270px] h-[344px] rounded-[20px] shadow-2xl hover:shadow-amber-500 hover:p-[5px] transition-all duration-300'><img src={work3} alt="" className='w-[270px] h-[344px] object-cover rounded-[20px]' /></div>
                </div>
                <div className='mx-auto grid grid-cols-3 gap-[30px] mt-[30px]'>
                    <div className='col-span-1 w-[413px] h-[432px] rounded-[20px] shadow-2xl hover:shadow-amber-500 hover:p-[5px] transition-all duration-300'>
                        <img src={work4} alt="" className='w-[413px] h-[432px] object-cover rounded-[20px]' />
                    </div>
                    <div className='col-span-1 w-[327px] h-[432px] ml-[42px] rounded-[20px] shadow-2xl hover:shadow-amber-500 hover:p-[5px] transition-all duration-300 flex justify-center items-center mx-auto'>
                        <img src={work6} alt="" className='w-[327px] h-[432px] object-cover rounded-[20px]' />
                    </div>
                    <div className='col-span-1 w-[370px] h-[432px] rounded-[20px] shadow-2xl hover:shadow-amber-500 hover:p-[5px] transition-all duration-300'>
                        <img src={work5} alt="" className='w-[370px] h-[432px] object-cover rounded-[20px]' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Work
