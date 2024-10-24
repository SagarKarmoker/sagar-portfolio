import React from 'react'
import Image from 'next/image'

export default function Work({ details }) {
    const { image, org, position, time } = details;
    return (
        <div className='flex justify-between'>
            <div className='flex gap-x-4'>
                <div>
                    <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                        className="rounded-full object-cover border"
                    />
                </div>
                <div>
                    <p className='font-semibold'>{org}</p>
                    <p>{position}</p>
                </div>
            </div>
            <div className='text-slate-500'>
                {time}
            </div>
        </div>
    )
}
