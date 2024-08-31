import React from 'react'
import Logo from '../../assets/Logo.png'
const Contact = () => {
    return (
        <div>
            <footer className="py-12">
                <div className="container mx-auto flex justify-between items-start">
                    <div className="w-1/2">
                        <img src={Logo} alt="Innovate Logo" className="mb-4" />
                        <p className="w-[449px] text-[18px] mt-[44px] font-normal font-Osan text-[#6C7D93] leading-[180%]">
                            Install Any Demo Or Template With A Single Click. You Can Mix And Match All The Demos & Templates. Every Demo Can Be Turned Into One Or Multi-Page.
                        </p>
                    </div>

                    <div className="flex space-x-[100px] w-1/2">
                        <div>
                            <h3 className="text-[24px] font-semibold font-Osan leading-[140%] text-[#413F45] mb-[33px]">Features</h3>
                            <ul className='text-[20px] font-semibold font-Osan leading-[120%] text-[#6C7D93]'>
                                <li className='py-[15px]'><a href="#" className=" hover:text-orange-500">Home</a></li>
                                <li className='py-[15px]'><a href="#" className=" hover:text-orange-500">About</a></li>
                                <li className='py-[15px]'><a href="#" className=" hover:text-orange-500">Benefit</a></li>
                                <li className='py-[15px]'><a href="#" className=" hover:text-orange-500">Pricing</a></li>
                                <li className='py-[15px]'><a href="#" className=" hover:text-orange-500">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-semibold font-Osan leading-[140%] text-[#413F45] mb-[33px]">Products</h3>
                            <ul className='text-[20px] font-semibold font-Osan leading-[120%] text-[#6C7D93]'>
                                <li className='py-[15px]'><a href="#" className="hover:text-orange-500">Task Management</a></li>
                                <li className='py-[15px]'><a href="#" class="hover:text-orange-500">Company Growth</a></li>
                                <li className='py-[15px]'><a href="#" className="hover:text-orange-500">Time Tracking</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-semibold font-Osan leading-[140%] text-[#413F45] mb-[33px]">Support</h3>
                            <ul className='text-[20px] font-semibold font-Osan leading-[120%] text-[#6C7D93]'>
                                <li className='py-[15px]'><a href="#" className="hover:text-orange-500">Customer Service</a></li>
                                <li className='py-[15px]'><a href="#" className="hover:text-orange-500">Accessibility</a></li>
                                <li className='py-[15px]'><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-[80px] font-normal text-[18px] font-Osan leading-[180%] flex justify-between items-center text-[#46C7D93]">
                    <p>&copy; 2024 Innovate. All Rights Reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                        <a href="#" className="hover:text-orange-500">Terms & Condition</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contact
