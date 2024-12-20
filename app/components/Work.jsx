import React from 'react'
import Image from 'next/image'

export default function Work({ details }) {
    const { image, org, position, time } = details;
    return (
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex gap-x-4'>
                <div>
                    <Image
                        src={image}
                        alt="Picture of the author"
                        className="rounded-full object-fit border h-12 w-12"
                    />
                </div>
                <div>
                    <p className='font-semibold'>{org}</p>
                    <p>{position}</p>
                </div>
            </div>
            <div className='text-slate-500 text-center'>
                {time}
            </div>
        </div>
    )
}
