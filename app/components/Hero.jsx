import React from 'react'
import Image from 'next/image'
import ProfilePic from '@/public/my.jpeg'

function Hero() {
    return (
        <div className="flex justify-center items-center space-x-5">
            <div className="flex flex-col space-y-4">
                <div className="font-bold lg:text-6xl text-3xl">{`Hi, I'm Sagar 👋`}</div>
                <div className="lg:text-xl">Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.</div>
            </div>
            <div>
                <Image
                    src={ProfilePic}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="rounded-full"
                />
            </div>
        </div>
    )
}

export default Hero