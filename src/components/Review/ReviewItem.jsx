import React, { useState, useEffect } from 'react';
import ReviewIcon from '../../assets/Review_icon.png';

function ReviewItem({ imgUrl, comment, name, designation, reviewIndex }) {

    return (
        <>
            <div key={reviewIndex} className='w-[370px] h-[378px] pl-[40px] pt-[25px] pr-[60px] bg-[#D8EAFF] rounded-[20px] mx-[10px]'>
                <p className='font-Papri font-normal text-[18px] leading-[30px] text-[#6C7D93]'>{comment}</p>

                <div className='mt-[23px] flex items-center'>
                    <div className='bg-[#192239] rounded-full w-[94px] h-[94px] relative'>
                        <img src={imgUrl} className="rounded-full w-[94px] h-[94px] object-cover" alt="" />
                        <div className='absolute bottom-0 right-0'><img src={ReviewIcon} alt="Review Icon" /></div>
                    </div>
                    <div className='ml-[10px]'>
                        <p className='font-Osan font-semibold text-[24px] tracking-[0.5px] text-[#202427]'>{name}</p>
                        <p className='font-Osan font-semibold text-[18px] tracking-[0.5px] text-[#202427]'>{designation}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewItem;
