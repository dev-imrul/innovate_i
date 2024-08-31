import React from 'react';
import Banner1 from '../../assets/banner1.png'
import Banner2 from '../../assets/banner2.png'
import SocialMedia from '../../assets/socialMedia_group.png'
import Twitter from '../../assets/Twitter.png'
import BannerVector1 from '../../assets/banner_vector1.png'
import ThreeDImg from "../../assets/3D Images.png"
import CurveLineImg from "../../assets/CurveLine.png"
import DhongImg from '../../assets/Dhong.png'
const Banner = () => {
    return (
        <div className="relative container mx-auto flex justify-between items-center pb-[145px]">

            <div>
                <img src={DhongImg} alt="" />
                <p className="text-[72px] font-extrabold font-Osan text-[#192239] w-[686px]">
                    We Are Digital <span className="text-orange-500">Marketing</span> Agency
                </p>
                <p className="text-[#6C7D93] w-[571px] leading-[36px] text-[20px] mt-[20px] mb-[32px] font-Papri">
                    Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing.
                </p>
                <a href="#" className=" bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600">
                    Get Free Quote
                </a>
            </div>
            <div className='mt-[400px]'>
                <div className='w-[461px] h-[433px] border-[#D5E3F6] border-8 rounded-[28px] relative z-[2000] ml-[-550px]'>
                    <img src={Banner1} alt="" className='w-[461px]  h-[433px] rounded-[28px] object-cover shadow-2xl shadow-green-400' />
                </div>
                <img src={Banner2} alt="" className='w-[458px] h-[430px] rounded-[28px] object-cover absolute top-[120px] right-[-150px] z-[1500] shadow-2xl shadow-blue-700' />
                <img src={BannerVector1} alt="" className='w-[500px] h-[500px] absolute top-[200px] right-[-350px]' />
                <img src={SocialMedia} alt="" className='absolute top-[250px] right-[-150px] z-[-500]' />
            </div>
            <img src={Twitter} alt="" className='absolute bottom-[200px] left-[-110px] z-[-1000]' />
            <img src={ThreeDImg} alt="" className='absolute top-[-40px] left-[-200px] z-[1000]' />
            <img src={CurveLineImg} alt="" className='absolute top-[-200px] left-[-300px]' />

        </div>
    );
};

export default Banner;
