import React from 'react';
import Image from 'next/image';
import { aboutParagraph } from '../project_data/project_data';

const AboutMe = () => {
    return (
        <div>
            <div className='flex m-5 justify-around'>
                <div className='flex items-center p-4 border-2 border-sky-700 rounded-[15px] max-w-lg'>
                    <p className='text-sm text-center'>{aboutParagraph}</p>
                </div>
                
                <Image className='hidden lg:flex first-letter:flex ml-[50px] m-5 border-2 border-sky-700 rounded-[15px] h-fit' src='/images/profile_img.jpg' width={200} height={200} alt='picture'></Image>
            </div>
        </div>
    );
}

export default AboutMe;
