import React from 'react';
import Image from 'next/image';

const CV = () => {
    return (
        <div id='cv' className='flex bg-gray-100 justify-center items-center h-full w-full snap-start overflow-y-scroll'>
            <div className='w-full h-full md:ml-[256px]'>
                <h1 className='t-0 p-[30px] border-b-2 border-sky-700 text-4xl text-sky-700'>resume.</h1>
                <div className='xl:flex'>
                    <Image className='m-5 shadow-lg' src='/resume/dev_resume_1.png' alt='page1' width='700' height='700' />
                    <Image className='m-5 shadow-lg' src='/resume/dev_resume_2.png' alt='page2' width='700' height='700' />
                </div>
            </div>
        </div>
    );
}

export default CV;
