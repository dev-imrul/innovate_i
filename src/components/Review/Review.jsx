import React, { useState, useEffect } from 'react';
import DhongImg from '../../assets/Dhong.png';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import ReviewItem from './ReviewItem';
import reviewData from '../../data/reviewData';

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reviewData.length - 2 : prevIndex - 2
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex >= reviewData.length - 2 ? 0 : prevIndex + 2
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='py-[100px]'>
            <div className='container mx-auto flex justify-evenly items-center'>
                <div className='flex flex-col w-[350px]'>
                    <div className='mb-[16px] flex items-start w-full'>
                        <img src={DhongImg} alt="Dhong" />
                    </div>
                    <p className="text-[48px] font-extrabold font-Osan text-[#192239] w-[686px]">Client Review</p>
                    <p className="text-[#6C7D93] mt-[20px] w-[331px] leading-[30px] text-[18px] font-Papri">people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.</p>
                    <div className='flex'>
                        <IoIosArrowDropleftCircle
                            onClick={handlePrevClick}
                            className='w-[64px] h-[64px] text-orange-200 hover:text-orange-500 cursor-pointer'
                        />
                        <IoIosArrowDroprightCircle
                            onClick={handleNextClick}
                            className='w-[64px] h-[64px] text-orange-500 ml-[25px] cursor-pointer'
                        />
                    </div>
                </div>

                <div className='flex'>
                    {reviewData.slice(currentIndex, currentIndex + 2).map((review, index) => (
                        <ReviewItem
                            key={index}
                            comment={review.comment}
                            imgUrl={review.imgUrl}
                            name={review.name}
                            designation={review.designation}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Review;
