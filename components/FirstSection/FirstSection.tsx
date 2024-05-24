'use client';
import React from 'react'


import Image from "next/image";

import CardImage from "@/public/cropped.png"


import { HeartHandshake } from 'lucide-react';

import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';



function FirstSection() {
  return (
    <div className='flex flex-col-1 gap-2 mb lg:flex w-full items-center h-screen bg-[#172554]'>
      <div className='flex flex-col items-center justify-center p-14 w-full md:w-1/2 '>
        <div className='space-y-3 w-full  md:w-96 mx-auto mt-16'>
          <p className='font-extrabold text-3xl text-white text-center md:font-extrabold md:text-6xl '>I'm </p>
          <p className='text-white font-extrabold text-center text-3xl md:font-extrabold md:text-6xl '>Jamugisa Peter Paul</p>
          <div>
            <p className='text-purple-500 text-center font-bold text-xl lg:text-4xl'>FrontEnd Developer</p>
            <p className='text-orange-600 text-center '>Crafting the Future, One Pixel at a Time</p>
          </div>


          <div className="grid grid-rows-1 grid-flow-col gap-1 pt-16 justify-center">
            <div className='flex flex-col items-center justify-center '>
              <div onClick={() => window.open('https://github.com/Peter-Jamugisa?tab=repositories', '_blank')} className='cursor-pointer'>
                <Github className='w-14 h-14 bg-[#FFFFFF] text-[#000000] rounded-lg  md:h-16 md:w-16 py-4 px-4 ' />
              </div>
              <p className='text-center justify-center text-base font-semibold text-white pr-2'>Github</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div onClick={() => window.open('https://www.linkedin.com/in/jamugisa-peter-43b895295/', '_blank')} className='cursor-pointer'>
                <Linkedin className='w-14 h-14 bg-[#1d4ed8] text-[#FFFFFF] rounded-lg  md:h-16 md:w-16 py-4 px-4' />
              </div>
              <p className='text-center justify-center text-base font-semibold text-white pl-1'>Linkedin</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div onClick={() => window.open('https://whatsapp.com/dl/', '_blank')} className='cursor-pointer'>
                <Phone className='h-14 w-14 bg-[#76CD26] text-[#ffffff] rounded-lg  md:h-16 md:w-16 py-4 px-4' />

              </div>
              <p className='text-center justify-center text-base font-semibold text-white pl-1'>Whatsapp</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div onClick={() => window.open('https://medium.com/@jamugisapeter21', '_blank')} className='cursor-pointer'>
                <HeartHandshake className='h-14 w-14 bg-[#FFD978] text-[#7C5900] rounded-lg  md:h-16 md:w-16 py-4 px-4' />
              </div>

              <p className='text-center justify-center text-base font-semibold text-white'>Blog</p>
            </div>


          </div>


          {/* leave */}
        </div>
      </div>

      <div className='hidden relative w-1/2 h-full md:flex items-center justify-center'>
        <div className=' relative w-40 h-40 rounded-full bg-gradient-to-b from-[#cbd5e1] to-[#000080] md:w-full md:h-full '>
          <div className='absolute inset-0 flex justify-center items-center overflow-hidden -mb-20'>
            <Image
              src={CardImage}
              className='object-cover'
              alt=''
              width={700}
              height={800}
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', clipPath: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;