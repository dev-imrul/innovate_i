import React from 'react'
import DhongImg from '../../assets/Dhong.png'
import Partner_logo from '../../assets/partner logo.png'
import We_1 from '../../assets/We_1.png'
import We_2 from '../../assets/We_2.png'
import We_3 from '../../assets/We_element.png'

const We = () => {
    return (
        <div className='py-[100px]'>
            <div className='container mx-auto flex justify-around items-center'>
            <div className='relative'>
                <div className='w-[296px] h-[279px] border-[#D5E3F6] border-8 rounded-[28px] relative z-[2000]'>
                    <img src={We_1} alt="" className='w-[296px] h-[279px] rounded-[28px] object-cover shadow-2xl shadow-green-400' />
                </div>
                <img src={We_2} alt="" className='w-[440px] h-[467px] rounded-[28px] object-cover absolute top-[-230px] left-[200px] z-[1500] shadow-2xl shadow-blue-700' />
                <img src={We_3} alt="" className='absolute top-[-130px] left-[20px]' />
            </div>

                <div className='flex flex-col'>
                    <div className='mb-[16px] flex items-start w-full'>
                        <img src={DhongImg} alt="" />
                    </div>
                    <p className="text-[48px] font-extrabold font-Osan text-[#192239] w-[686px]">Who We Are</p>
                    <p className="text-[#6C7D93] mt-[15px] w-[442px] leading-[30px] text-[18px] font-Papri">We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
                    <p className='text-[#6C7D93] mt-[15px] w-[442px] leading-[30px] text-[12px] font-Papri'>Join the 10.000+ Companys Trusting</p>
                    <img src={Partner_logo} alt="" />
                </div>


            </div>

        </div>
    )
}

export default We
