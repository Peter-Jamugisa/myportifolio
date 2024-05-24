'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import { Button } from "../ui/button"

function Projects() {
    return (
        <div className="justify-center items-center h-96">
            <p className="mt-10 font-extrabold text-4xl justify-center text-center">Projects</p>
            <Accordion type="single" collapsible className="w-full mt-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl font-extrabold">Software Projects</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 sm:w-1/2 lg:w-1/3">
                        <Button onClick={() => window.open('https://mind-peace-two-eta.vercel.app/', '_blank')} className=" bg-green-700 font-bold">Mind Peace</Button>
                        <Button onClick={() => window.open('https://github.com/Peter-Jamugisa/fasting_companion', '_blank')} className="font-bold bg-green-700">Fasting companion</Button>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl font-extrabold">Robotics</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 sm:w-1/2 lg:w-1/3">
                        <Button onClick={() => window.open('https://www.ugandapartners.org/2024/04/ucu-duo-seeks-to-create-affordable-robotic-wheelchair/', '_blank')} className="font-bold bg-green-700">Robotic Wheel Chair</Button>
                        <Button onClick={() => window.open('https://example.com', '_blank')} className="font-bold bg-green-700">Radar System</Button>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl font-extrabold ">Fine Art</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 sm:w-1/2 lg:w-1/3">
                        <Button onClick={() => window.open('https://example.com', '_blank')} className="font-bold bg-green-700">View Projects</Button>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Projects