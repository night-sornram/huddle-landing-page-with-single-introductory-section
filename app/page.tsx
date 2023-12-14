import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram

} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className=' w-screen h-screen flex flex-col md:flex-row'>
      <div className=' w-12/12 md:w-7/12 p-10'>
        <Image
        width={264}
        height={49}
        alt='logo'
        src={"/images/logo.svg"}/>
        <Image
        width={1000}
        height={5060}
        alt='mockup'
        src={"/images/illustration-mockups.svg"}
        className=' mt-20'/>
      </div>
      <div className='md:pb-0 pb-32 w-full md:w-5/12 flex justify-center items-center md:items-start flex-col relative'>
        <div className=' text-xl text-center md:text-start md:text-2xl lg:text-3xl xl:text-5xl w-2/3 text-white font-bold'>
          Build The Community Your Fans Will Love 
        </div>
        <div className=' text-center md:text-startmd:text-sm lg:text-base w-4/5  mt-7 text-white'>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </div>
        <button className='  md:text-sm lg:text-base mt-7 bg-custom-100 text-white  px-10 py-3 md:px-10 lg:px-14 rounded-full'>
          Register
        </button>
        <div className=' flex flex-row absolute  bottom-10 right-auto md:bottom-5 md:right-10 xl:bottom-10 xl:right-20'>
          <div className=' text-white border-white rounded-full border-2 flex justify-center items-center hover:border-custom-100 hover:text-custom-100 cursor-pointer mr-5 w-10 h-10 xl:h-14 xl:w-14 xl:text-2xl text-lg '>
              <FontAwesomeIcon  icon={faFacebookF} />
            </div>
            <div className=' text-white border-white rounded-full border-2 flex justify-center items-center hover:border-custom-100 hover:text-custom-100 mr-5 cursor-pointer w-10 h-10 xl:h-14 xl:w-14 xl:text-2xl text-lg'>
              <FontAwesomeIcon  icon={faXTwitter} />
            </div>
            <div className=' text-white border-white rounded-full border-2 flex justify-center items-center hover:border-custom-100 hover:text-custom-100 cursor-pointer w-10 h-10 xl:h-14 xl:w-14 xl:text-2xl text-lg'>
              <FontAwesomeIcon   icon={faInstagram} />
            </div>
        </div>
      </div>

    </div>
  )}
   