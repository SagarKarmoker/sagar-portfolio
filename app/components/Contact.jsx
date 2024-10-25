import React from 'react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Contact() {
    return (
        <div>
            <div className='flex justify-center'>
                <Badge className='text-xl'>Contact</Badge>
            </div>
            <div>
                <h4 className="text-4xl text-center mt-4 font-bold">Get in Touch</h4>
                <p className="text-xl text-center mt-4">
                    Want to chat? Just shoot
                    <span className="hover:cursor-pointer hover:underline text-blue-500">
                        <Link href="https://www.linkedin.com/in/sagarkarmoker" target='_blank'> me a DM with a direct question on LinkedIn</Link>
                        </span>,
                    and {`I'll`} respond whenever I can. I will ignore all soliciting.
                </p>
            </div>

        </div>
    )
}
