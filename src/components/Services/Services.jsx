import React from 'react'
import DhongImg from '../../assets/Dhong.png'
import Service1_Img from '../../assets/results 1.png'
import Service2_Img from '../../assets/results 2.png'
import Service3_Img from '../../assets/results 3.png'
const Services = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='mb-[16px]'>
                    <img src={DhongImg} alt="" />
                </div>

                <div className='flex flex-col items-center'>
                    <p className="text-[48px] font-extrabold font-Osan text-[#192239] text-center">Our Services</p>
                    <p className="text-[#6C7D93] mt-[15px] w-[332px] leading-[36px] text-[18px] text-center font-Papri">We have been providing great flooring solutions service.</p>
                </div>

                <div className='mt-[52px] flex space-x-10 pb-[100px]'>
                    <div className="text-center relative bg-[#EBF7E9] w-[380px] shadow-lg rounded-[20px] py-[52px] px-[48px] transition-all duration-700 hover:bg-[#FF7628] group">
                        <div className='flex justify-center'>
                            <img src={Service1_Img} alt="" />
                        </div>
                        <h3 className="text-[#202427] text-[30px] font-Osan font-semibold leading-[36px] pt-[28px] mb-[20px] transition-all duration-700 group-hover:text-white">Marketing strategy</h3>
                        <p className="text-[#6C7D93] text-[18px] font-normal leading-[30px] w-[278px] mx-auto transition-all duration-700 group-hover:text-gray-700 font-Papri">
                            Social Media has changed the way we interact & do business while creating
                        </p>
                        <div className="relative mt-[24px]">
                            <a href="" className="text-[#141135] text-[18px] font-bold leading-[24px] transition-all duration-500 group-hover:text-white font-Osan ">Read More</a>
                            <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[77px] transition-all duration-700 group-hover:w-[130px] group-hover:bg-white group-hover:rounded-full"></div>
                        </div>
                    </div>

                    <div className="text-center relative bg-[#D8EAFF] w-[380px] shadow-lg rounded-[20px] py-[52px] px-[48px] transition-all duration-700 hover:bg-[#FF7628] group">
                        <div className='flex justify-center'>
                            <img src={Service2_Img} alt="" />
                        </div>
                        <h3 className="text-[#202427] text-[30px] font-Osan font-semibold leading-[36px] pt-[28px] mb-[20px] transition-all duration-700 group-hover:text-white">Social Marketing</h3>
                        <p className="text-[#6C7D93] text-[18px] font-normal leading-[30px] w-[278px] mx-auto transition-all duration-700 group-hover:text-gray-800 font-Papri">
                            Social Media has changed the way we interact & do business while creating
                        </p>
                        <div className="relative mt-[24px]">
                            <a href="" className="text-[#141135] text-[18px] font-bold leading-[24px] transition-all duration-500 group-hover:text-white font-Osan ">Read More</a>
                            <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[77px] transition-all duration-700 group-hover:w-[130px] group-hover:bg-white group-hover:rounded-full"></div>
                        </div>
                    </div>

                    <div className="text-center relative bg-[#FBF1EC] w-[380px] shadow-lg rounded-[20px] py-[52px] px-[48px] transition-all duration-700 hover:bg-[#FF7628] group">
                        <div className='flex justify-center'>
                            <img src={Service3_Img} alt="" />
                        </div>
                        <h3 className="text-[#202427] text-[30px] font-Osan font-semibold leading-[36px] pt-[28px] mb-[20px] transition-all duration-700 group-hover:text-white">Content Marketing</h3>
                        <p className="text-[#6C7D93] text-[18px] font-normal leading-[30px] w-[278px] mx-auto transition-all duration-700 group-hover:text-gray-600 font-Papri">
                            Content Marketing is the other fold of online advertisement. If you are looking to build
                        </p>
                        <div className="relative mt-[24px]">
                            <a href="" className="text-[#141135] text-[18px] font-bold leading-[24px] transition-all duration-500 group-hover:text-white font-Osan ">Read More</a>
                            <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[77px] transition-all duration-700 group-hover:w-[130px] group-hover:bg-white group-hover:rounded-full"></div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Services
