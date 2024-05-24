import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'

function Services() {
    return (
        <div className='bg-gray-800'>
            <div >
                <p className='font-extrabold text-center text-4xl pb-8 pt-4 text-white'>Services</p>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-8"> {/* Adjusted gap for better spacing */}
                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/arduino.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Aurduino Programing</p>
                        <p className="font-bold text-white">(Robotics)</p>
                    </Card>
                </div>

                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/software.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Software Development</p>
                        <p className="font-bold text-white">(Frontend)</p>
                    </Card>
                </div>

                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/data.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Data Analytics</p>

                    </Card>
                </div>

                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/website.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Website Design</p>
                    </Card>
                </div>

                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/marketing.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Digital Marketing</p>
                    </Card>
                </div>

                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/pencil.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Pencil Potraits</p>
                    </Card>
                </div>

                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/graphics.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Graphics Design</p>

                    </Card>
                </div>

                <div className="flex items-center justify-center h-auto"> {/* Changed h-screen to h-auto */}
                    <Card className="h-60 w-60 bg-[url('/math.jpeg')] bg-cover rounded-full flex flex-col items-center justify-center">
                        <p className="font-bold text-white text-xl">Mathematics</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Services
