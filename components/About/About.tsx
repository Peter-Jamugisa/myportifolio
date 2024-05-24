import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Image from "next/image";

import CardImage from "@/public/dp.png"

function About() {
  return (
    <div className="min-h-screen  flex flex-col gap-4 items-center justify-center p-4 h-full w-full mr-6 bg-[url('/back1.jpeg')] bg-cover">
      <p className='text-white text-4xl pb-8 font-extrabold text-center'>About me</p>
      <div className="max-w-4xl bg-[#334155] shadow-lg rounded-lg p-8">
        <blockquote className=" font-bold text-white text-xl lg:text-3xl">
          "Innovative Computer Scientist with a passion for technology and a proven track record of leveraging technical skills to solve complex problems."
          Highly motivated and adaptable, committed to continuous learning and staying at the forefront of technological advancements. Demonstrated expertise in tackling challenging projects and consistently delivering outstanding results under all circumstances.
          "Specialized in front-end development with a keen interest in enhancing user experience."
        </blockquote>
      </div>
    </div>
  )
}

export default About