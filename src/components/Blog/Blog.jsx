import React from 'react'
import DhongImg from '../../assets/Dhong.png'
import Blog_1 from '../../assets/blog_1.jpeg'
import Blog_2 from '../../assets/blog_2.jpeg'
import Blog_3 from '../../assets/blog_3.jpeg'
const Blog = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-col items-center pb-[100px] pt-[80px]'>
                <div className='mb-[16px]'>
                    <img src={DhongImg} alt="" />
                </div>

                <div className='flex flex-col items-center'>
                    <p className="text-[48px] font-extrabold font-Osan text-[#192239] text-center">Our Latest Blog</p>
                    <p className="text-[#6C7D93] mt-[15px] w-[412px] leading-[36px] text-[18px] text-center font-Papri">We provide digital experience services to startups and small businesses.
                    </p>
                </div>
                <div className='flex justify-around items-center mt-[52px]'>
                    <div className='w-[370px] h-[468px] group'>
                        <div className='rounded-t-[20px] shadow-lg group-hover:shadow-2xl'>
                            <img src={Blog_1} alt="" className='w-[370px] h-[241px] object-cover rounded-t-[20px]' />
                        </div>
                        <div className='py-[30px] pl-[30px] pr-[68px] group-hover:bg-orange-500 rounded-b-[20px] shadow-lg group-hover:shadow-2xl'>
                            <h3 className="text-[#202427] text-[24px] font-Osan font-medium leading-[32px] transition-all duration-700 group-hover:text-white">How to Be Ahead of Stock Changes</h3>
                            <p className="text-[#474747] text-[18px] font-normal leading-[24px] transition-all duration-700 group-hover:text-gray-300 font-Osan mt-[16px]">
                                By John  - 5 Comments
                            </p>
                            <div className="relative mt-[30px]">
                                <a href="" className="text-[#141135] text-[18px] font-bold leading-[24px] transition-all duration-500 group-hover:text-white font-Osan ">Read More</a>
                                <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[-13px] transition-all duration-700 group-hover:w-[130px] group-hover:bg-white group-hover:rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[370px] h-[468px] ml-[30px] group'>
                        <div className='rounded-t-[20px] shadow-lg group-hover:shadow-2xl'>
                            <img src={Blog_2} alt="" className='w-[370px] h-[241px] object-cover rounded-t-[20px]' />
                        </div>
                        <div className='py-[30px] pl-[30px] pr-[68px] group-hover:bg-orange-500 rounded-b-[20px] shadow-lg hover:shadow-2xl'>
                            <h3 className="text-[#202427] text-[24px] font-Osan font-medium leading-[32px] transition-all duration-700 group-hover:text-white">Online Reputation And Management</h3>
                            <p className="text-[#474747] text-[18px] font-normal leading-[24px] transition-all duration-700 group-hover:text-gray-300 font-Osan mt-[16px]">
                                By Amin  - 10 Comments
                            </p>
                            <div className="relative mt-[30px]">
                                <a href="" className="text-[#141135] text-[18px] font-bold leading-[24px] transition-all duration-500 group-hover:text-white font-Osan ">Read More</a>
                                <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[-13px] transition-all duration-700 group-hover:w-[130px] group-hover:bg-white group-hover:rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[370px] h-[468px] ml-[30px] group'>
                        <div className='rounded-t-[20px] shadow-lg group-hover:shadow-2xl'>
                            <img src={Blog_3} alt="" className='w-[370px] h-[241px] object-cover rounded-t-[20px]' />
                        </div>
                        <div className='py-[30px] pl-[30px] pr-[68px] group-hover:bg-orange-500 rounded-b-[20px] shadow-lg group-hover:shadow-2xl'>
                            <h3 className="text-[#202427] text-[24px] font-Osan font-medium leading-[32px] transition-all duration-700 group-hover:text-white">Tips To Move Your Project More Forward</h3>
                            <p className="text-[#474747] text-[18px] font-normal leading-[24px] transition-all duration-700 group-hover:text-gray-300 font-Osan mt-[16px]">
                                By Insider  - 15 Comments
                            </p>
                            <div className="relative mt-[30px]">
                                <a href="" className="text-[#141135] text-[18px] font-bold leading-[24px] transition-all duration-500 group-hover:text-white font-Osan ">Read More</a>
                                <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[-13px] transition-all duration-700 group-hover:w-[130px] group-hover:bg-white group-hover:rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog
