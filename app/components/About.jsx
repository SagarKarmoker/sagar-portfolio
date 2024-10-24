import React from 'react'

function About() {
    return (
        <div className=''>
            <p className='font-bold text-xl'>About</p>
            <div className='text-slate-500 font-semibold text-justify'>
                Welcome to my portfolio website! {`I'm`} Sagar Karmoker, a passionate Computer Science and Engineering student at <span className='text-black underline hover:cursor-pointer'>East West University</span> in Bangladesh. I enjoy exploring new technologies and solving real-world problems through software development and <span className='text-black underline hover:cursor-pointer'>blockchain</span> innovation.
                <br />
                <span className='mt-5 font-semibold text-black'>What I Do:</span>
                <br />
                <ul>
                    <li><span className='text-black'>Blockchain Development:</span> I specialize in developing decentralized applications (dApps) using Solidity, Ethers.js, and smart contracts. My focus is on building secure and efficient blockchain solutions.</li>
                    <li><span className='text-black'>Web & Mobile App Development:</span> Proficient in React, Vite, Tailwind CSS for front-end, and Node.js for back-end development. {`I'm`} also skilled in mobile development with Kotlin and Jetpack Compose for Android apps.</li>
                    <li><span className='text-black'>Programming Languages:</span> Experienced in C, C++, Java, Python, and more, with a solid foundation in data structures, algorithms, and software engineering concepts.</li>
                </ul>



            </div>
        </div>
    )
}

export default About