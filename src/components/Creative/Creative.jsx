import React from 'react'
import DhongImg from '../../assets/Dhong.png'
import creativeData from '../../data/creativeData';
import CreativeItem from './CreativeItem';
function Creative() {
    return (
        <div className='container mx-auto flex flex-col items-center pb-[100px] pt-[80px]'>
            <div className='mb-[16px]'>
                <img src={DhongImg} alt="" />
            </div>

            <div className='flex flex-col items-center'>
                <p className="text-[48px] font-extrabold font-Osan text-[#192239] text-center">Our creative process</p>
                <p className="text-[#6C7D93] mt-[15px] w-[412px] leading-[36px] text-[18px] text-center font-Papri">We provide digital experience services to startups and small businesses.
                </p>
            </div>

            <div className='mx-auto grid grid-cols-6 gap-[30px] mt-[22px] items-center'>
                {creativeData.map((creative, index) => {

                    const customHoverClass = index === 1
                        ? 'bg-[#D8EAFF] hover:bg-[#67A0E2]'
                        : index === 2
                            ? 'bg-[#FBF1EC] hover:bg-[#FF7628]'
                            : 'bg-[#EBF7E9] hover:bg-[#10c674]';


                    return (
                        <CreativeItem
                            key={index}
                            step={creative.step}
                            header={creative.header}
                            textbody={creative.textbody}
                            imgUrl={creative.imgUrl}
                            isReversed={index % 2 === 0}
                            customHoverClass={customHoverClass}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Creative
