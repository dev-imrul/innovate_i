import React from 'react';

function CreativeItem({ step, imgUrl, header, textbody, isReversed, customHoverClass }) {
    return (
        <>
            {isReversed  ? (
                <>
                    <div className='col-span-3 w-[570px] h-[324px] rounded-[20px]'>
                        <img src={imgUrl} alt="" className='w-[570px] h-[324px] object-cover rounded-[20px]' />
                    </div>
                    <div className={`col-span-3 relative w-[465px] h-[207px] shadow-lg rounded-[20px] pt-[30px] pb-[20px] px-[24px] transition-all duration-700 hover:shadow-2xl group ${customHoverClass}`}>
                        <div className="relative">
                            <a href="" className="text-[#141135] text-[24px] font-bold leading-[24px] transition-all duration-500 font-Osan ml-[25px] group-hover:text-white group-hover:ml-[5px]">{step}</a>
                            <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[0px] transition-all duration-700 group-hover:w-[110px] group-hover:bg-white group-hover:rounded-full group-hover:left-[-10px]"></div>
                        </div>

                        <h3 className="text-[#202427] text-[30px] font-Osan font-semibold leading-[32px] pt-[18px] mb-[20px] transition-all duration-700 group-hover:text-white">{header}</h3>
                        <p className="text-[#6C7D93] text-[18px] mt-[20px] font-normal leading-[30px] w-[356px] transition-all duration-700 group-hover:text-gray-700 font-Robot">
                            {textbody}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className={`col-span-3 relative w-[465px] h-[207px] shadow-lg rounded-[20px] pt-[30px] pb-[20px] px-[24px] transition-all duration-700 hover:shadow-2xl group ${customHoverClass}`}>
                        <div className="relative">
                            <a href="" className="text-[#141135] text-[24px] font-bold leading-[24px] transition-all duration-500 font-Osan ml-[25px] group-hover:text-white group-hover:ml-[5px]">{step}</a>
                            <div className="absolute w-[40px] h-[40px] bg-[#FF7628] opacity-30 rounded-full top-[-9px] left-[0px] transition-all duration-700 group-hover:w-[110px] group-hover:bg-white group-hover:rounded-full group-hover:left-[-10px]"></div>
                        </div>

                        <h3 className="text-[#202427] text-[30px] font-Osan font-semibold leading-[32px] pt-[18px] mb-[20px] transition-all duration-700 group-hover:text-white">{header}</h3>
                        <p className="text-[#6C7D93] text-[18px] mt-[20px] font-normal leading-[30px] w-[356px] transition-all duration-700 group-hover:text-gray-700 font-Robot">
                            {textbody}
                        </p>
                    </div>
                    <div className='col-span-3 w-[570px] h-[324px] rounded-[20px]'>
                        <img src={imgUrl} alt="" className='w-[570px] h-[324px] object-cover rounded-[20px]' />
                    </div>
                </>
            )}
        </>
    );
}

export default CreativeItem;
