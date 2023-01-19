import React from 'react';
import Image from 'next/image';

const CV = () => {
    return (
        <div id='cv' className='container-layout'>
            <div className='w-full h-full md:ml-[256px]'>
                <h1 className='t-0 p-[30px] border-b-2 border-sky-700 text-4xl text-sky-700'>cv/resume.</h1>
                <div className='xl:flex'>
                    <Image src='/resume/resume_1.jpg' alt='page1' width='700' height='700' />
                    <Image src='/resume/resume 2.jpg' alt='page2' width='700' height='700' />
                </div>
            </div>
        </div>
    );
}

export default CV;
