import React from 'react'
import Man from "../Images/man.png"
import { IoLogoWhatsapp } from "react-icons/io";

const Hero = () => {
    return (
        <>
            <div className='w-full xl:h-[80vh] lg:h-[80vh] md:h-[80vh] sm:h-[80vh] h-auto bg-[#F7EED3] p-6 flex xl:flex-row  lg:flex-row md:flex-row sm:flex-row flex-col-reverse '>
                <div className='w-full h-full  flex flex-col justify-center '>
                    <h1 className='xl:text-6xl lg:text-6xl md:text-5xl sm:text-3xl text-3xl font-extrabold'>Empowering Communities with Accessible Services</h1>
                    <p className='mt-2  '>Providing a wide range of government, financial, and digital services to make life easier for you and your community. From Aadhaar registration to digital literacy programs, I'm here to help you navigate and access essential services efficiently and conveniently. Explore the offerings and experience seamless, community-focused service today!</p>
                    <a href={`https://wa.me/+917209854286?text=Hi,%20I%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20provide%20more%20details?`}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        <div className='w-[200px] h-[40px] rounded-md bg-[#153448] text-white mt-8 flex justify-center items-center gap-4 cursor-pointer'> Contact Us <IoLogoWhatsapp className='text-white text-xl' /></div>
                    </a>

                </div>
                <div className='w-full h-full  flex '>
                    <img className='w-full h-full object-cover' src={Man} alt='dv.jpg' />
                </div>
            </div>
        </>
    )
}

export default Hero
