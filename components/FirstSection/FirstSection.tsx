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
    <div className='flex w-full items-center h-screen bg-[#172554]'>
      <div className='flex flex-col items-center justify-center p-14 w-full md:w-1/2 '>
        <div className='space-y-3 md:w-96 mx-auto'>
          <p className='text-white text-center font-extrabold text-6xl '>I'm </p>
          <p className='text-white text-center font-extrabold text-6xl '>Jamugisa Peter Paul</p>
          <div>
            <p className='text-white text-center text-4xl'>FrontEnd Developer</p>
            <p className='text-white text-center'>Crafting the Future, One Pixel at a Time</p>
          </div>
          {/* leave */}
          {/* <div className="relative space-y-[-10]">
            <div className="absolute inset-x-0 top-0 h-5 bg-green-500"></div>
          </div> */}


          <div className="grid grid-rows-1 grid-flow-col gap-10 pt-16">
            <div className='flex flex-col items-center justify-center space-y-[10]'>
              <div onClick={() => window.open('https://github.com/Peter-Jamugisa?tab=repositories', '_blank')} className='cursor-pointer'>
                <Github className='h-16 w-16 bg-[#FFFFFF] text-[#000000] py-4 px-4 rounded-lg' />
              </div>
              <p className='text-center justify-center text-xl font-bold text-white'>Github</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div onClick={() => window.open('https://www.linkedin.com/in/jamugisa-peter-43b895295/', '_blank')} className='cursor-pointer'>
                <Linkedin className='h-16 w-16 bg-[#1d4ed8] text-[#FFFFFF] rounded-lg py-4 px-4' />
              </div>
              <p className='text-center justify-center text-xl font-bold text-white'>Linkedin</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div onClick={() => window.open('https://whatsapp.com/dl/', '_blank')} className='cursor-pointer'>
                <Phone className='h-16 w-16 bg-[#76CD26] text-[#ffffff] rounded-lg py-4 px-4' />

              </div>
              <p className='text-center justify-center text-xl font-bold text-white'>Whatsapp</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <div onClick={() => window.open('https://medium.com/@jamugisapeter21', '_blank')} className='cursor-pointer'>
                <HeartHandshake className='h-16 w-16 bg-[#FFD978] text-[#7C5900] rounded-lg py-4 px-4' />
              </div>

              <p className='text-center justify-center text-xl font-bold text-white'>Blog</p>
            </div>


          </div>


          {/* leave */}
        </div>
      </div>

      <div className='hidden relative w-1/2 h-full md:flex items-center justify-center'>
        <div className='relative w-full h-full rounded-full bg-gradient-to-b from-[#cbd5e1] to-[#000080]'>
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