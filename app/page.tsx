import Image from "next/image";
import URI from '@/app/components/img/URI.png';
import woman from '@/app/components/img/woman.png'
import {Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'
import goggleone from '@/app/components/img/goggleone.jpg'
import goggletwo from'@/app/components/img/goggletwo.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <section className="lg:w-[640px] lg:h-[1089px] lg:top-[-35268px] lg:left-[77722px] lg:pt-[32px] lg:pr-[0px]
      lg:pb-[0px] lg:pl-[0px] lg:gap-[0px] lg:flex lg:flex-col lg:items-center lg:bg-[#FEFAFC]
      w-full h-[1010px] top-[-87px] left-[1454px] gap-[0px] pt-[28px] pr-[0px]
      pb-[0px] pl-[0px] flex flex-col items-center bg-[#FEFAFC] lg:mx-[300px]">
           {/* <section className="lg:w-[640px] lg:h-[1089px] lg:top-[-35268px] lg:left-[77722px] lg:pt-[32px] lg:pr-[0px]
      lg:pb-[0px] lg:pl-[0px] lg:gap-[0px] lg:flex lg:flex-col lg:items-center lg:bg-[#FEFAFC]
      w-full h-[2545px] top-[-87px] left-[1454px] gap-[0px] pt-[28px] pr-[0px]
      pb-[0px] pl-[0px] flex flex-col items-center bg-[#FEFAFC] lg:mx-[300px]"> */}

      <div className="lg:w-[576px] lg:h-[87px] lg:pt-[24px] lg:pr-[32px]
        lg:pb-[24px] lg:pl-[32px] lg:gap-[24px] lg:flex lg:bg-transparent w-full h-[64px]
        pt-[22px] pr-[30px]
        pb-[22px] pl-[30px] gap-[21px]">
        {/* URI Logo */}
        <div className="lg:ml-[-30px] ml-[-30px] lg:w-[60px] lg:h-[39px] lg:pt-[0px] lg:pr-[0.99px]
          lg:pb-[0.86px] lg:pl-[0px] lg:gap-[0px] 
          w-[55px] h-[39px] pt-[0px] pr-[0.99px]
          pb-[0.86px] pl-[0px] gap-[0px]">
          <Image src={URI} alt="" className="lg:w-[200.01px] lg:h-[50.14px] 
            lg:gap-[0px] w-[200.01px] h-[50.14px] gap-[0px]" />
        </div>
        {/* Image section */}
      </div>

      <div className="lg:w-[576px] lg:h-[685px] lg:pt-[32px] lg:pr-[20px]
        lg:pb-[0px] lg:pl-[17px] lg:gap-[16px] lg:bg-[#FFFFFF] w-full h-[645px] pt-[27px] pr-[17px]
        pb-[0px] pl-[20px] gap-[16px] bg-[#FFFFFF] ">

        <div className="lg:w-[346px] lg:h-[33px] lg:gap-[0px]">
          <h3 className="lg:text-[20px] lg:font-normal lg:leading-[33px] lg:text-left
            text-[18px] font-normal leading-[33px] text-left">Update on Your Request</h3>
            {/* Update on Your Booking Request */}

          <div className="lg:mt-4 lg:w-[506.89px] lg:h-[306px] lg:gap-[0px]  lg:bg-[#ffff] lg:flex lg:flex-col lg:justify-end 
        mt-4 w-full h-[306px] gap-[0px] bg-[#ffff] flex flex-col justify-end">

            <div className="lg:absolute lg:w-[506.8px] lg:h-[239.05px] lg:gap-[0px] lg:border lg:rounded-xl lg:bg-[#F2F0F1]
            w-full h-[239.05px] gap-[0px] border rounded-xl bg-[#F2F0F1]">
              <Image src={woman} alt="" className="lg:relative  lg:items-center lg:top-[-68px] lg:w-[292px] lg:h-[306px] lg:left-[100px] lg:gap-[0px]
              relative items-center top-[-68px] w-[280px] h-[306px] left-[50px] gap-[0px]" />
            </div>
            <div>
            </div>
          </div>
          {/*next*/}
          <div className="lg:mt-4 lg:w-[506.89px] lg:h-[283.05px] lg:gap-[0px] lg:bg-[#ffff]  lg:flex 
          lg:flex-col lg:justify-end  mt-4 w-full h-[247.05px] gap-[0px] flex 
          flex-col justify-end bg-[#FFFFFF]">
            <h2 className="lg:font-semibold lg:text-[16px]  lg:leading-[24px] lg:text-left lg:text-[#394150]
              font-semibold text-[15px] leading-[20px] text-left text-[#394150] 
             " style={{ 'fontFamily': 'Plus Jakarta Sans' }}>
              Dear [Clients Name],
            </h2>

            <div className="lg:w-[506.89px] lg:h-[239.05px] lg:top-[447px] lg-[32px] lg:gap-[0px] lg:bg-[#ffff] 
            w-full h-[239.05px] lg:-[440px] lg-[28px] gap-[0px]  bg-[#ffff] ">
              <h3 className="lg:text-[16px] lg:font-medium lg:leading-[24px] lg:text-left lg:text-[#394150] 
               text-[16px] font-medium leading-[21px] text-left text-[#394150] " style={{ 'fontFamily': 'Plus Jakarta Sans' }}>
                {/* lg:border lg:rounded-xl  */}
                <br /> We regret to inform you that “Creative’s name” has declined your booking request.<br />
                <br />
                We encourage you to explore other talented creatives on our platform. If you need any assistance,
                please don’t hesitate to reach out.
              </h3>
            </div>
            <div className="lg:w-[219px] lg:h-[42px] lg:pt-[12px] lg:pr-[24px]
          lg:pb-[12px] lg:pl-[24px] lg:gap-[10px] lg:border lg:rounded-md lg:bg-[#CD1B78] 
          lg:flex lg:items-center lg:justify-center lg:mb-7 w-[219px] h-[42px] pt-[12px] pr-[24px]
          pb-[12px] pl-[24px] gap-[10px] border rounded-md bg-[#CD1B78] 
          flex items-center justify-center mb-5">
            <h3 className="lg:w-[86px] lg:h-[15px] lg:gap-[0px] lg:text-[11px] lg:font-bold 
            lg:leading-[15px] lg:text-center lg:text-[#FFFFFF] w-[86px] h-[15px] gap-[0px] text-[10px] font-bold 
            leading-[15px] text-center text-[#FFFFFF]" style={{ 'fontFamily': 'Plus Jakarta Sans' }}>
          Explore Creatives
            </h3>

            </div>

          </div>
          <div className="lg:w-[562px] lg:h-[253.24px] lg:pt-[31px] lg:pr-[9px] lg:pb-[31px] lg:pl-[9px] lg:gap-32px]
            lg:flex lg:flex-col lg:items-center w-full h-[253.24px] pt-[31px] pr-[9px] pb-[31px] pl-[9px] gap-32px]
            flex flex-col items-center">
     <div className="lg:w-[246px] lg:h-[36.24px] lg:gap-[16px] lg:flex lg:justify-between
      w-[246px] h-[36.24px] gap-[16px] flex justify-between">
     <div className="lg:w-[120px] lg:h-[35.37px] lg:gap-[0px] w-[120px] h-[36.24px] gap-[0px] ">
   <Image src={goggleone} alt="" className="lg:rounded-md"/>
      </div>
     <div className="lg:w-[110px] lg:h-[36.24px] lg:gap-[0px] w-[120px] h-[36.24px] gap-[0px] ">
     <Image src={goggletwo} alt=""  className="lg:rounded-md"/>
      </div>
     </div>
     <div className="lg:w-[150px] lg:h-[25px] lg:gap-[16.67px] lg:mt-[30px] lg:flex flex 
     w-[150px] h-[25px] gap-[16.67px] mt-[30px] ">
      <div className="lg:w-[25px] lg:h-[25px] lg:gap-[0px] lg:rounded-md lg:bg-[#394150] 
      w-[25px] h-[25px] gap-[0px] rounded-md bg-[#394150]">
 <Link href="https://facebook.com" target="_blank"><Facebook  className="lg:text-white text-white"/></Link>
      </div>
      <div className="lg:w-[25px] lg:h-[25px] lg:gap-[0px] lg:rounded-md lg:bg-[#394150] 
         w-[25px] h-[25px] gap-[0px] rounded-md bg-[#394150]">
       <Link href="https://linkedin.com" target="_blank"><Linkedin  className="lg:text-white text-white"/></Link>
      </div>

      <div className="lg:w-[25px] lg:h-[25px] lg:gap-[0px] lg:rounded-md  lg:bg-[#394150]
         w-[25px] h-[25px] gap-[0px] rounded-md bg-[#394150]">
       <Link href="https://instagram.com" target="_blank"><Instagram  className="lg:text-white text-white"/></Link>
      </div>
      <div className="lg:w-[25px] lg:h-[25px] lg:gap-[0px] lg:rounded-md lg:bg-[#394150]
         w-[25px] h-[25px] gap-[0px] rounded-md bg-[#394150]">
        <Link href="https://twitter.com/your_twitter_handle" target="_blank"><Twitter  className="lg:text-white text-white"/></Link>
      </div>
     </div>
     <div className="lg:mt-8 lg:w-[544px] lg:h-[66px]  lg:items-center lg:justify-center lg:flex lg:flex-col
     mt-8 w-full h-[66px]  items-center justify-center flex flex-col">
      <h2 className="lg:text[14px] lg:font-normal lg:leading-[22.4px] lg:text-center lg:text-[#394150]
      text-[14px] font-normal leading-[22.4px] text-center text-[#394150]"  style={{ 'fontFamily': 'Plus Jakarta Sans' }}>

      Copyright © 2022<br/> Uri<br/> Powered by Pengrid technologies
      </h2>
          </div>
          </div>
         
        </div>

      </div>

    </section>
  );
}
