import React from 'react';
import Image from 'next/image';
import MenuItem from './MenuItem';
import { LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { modalState } from '../atom/projectAtom';
import { useRecoilState } from 'recoil'

const Menu = () => {
    return (
        <div className='hidden md:flex bg-gray-50 fixed p-8 h-full'>
            <div className='justify-center text-center'>
                <Image className='rounded-full ml-5' src={'/images/profile_img2.jpg'} width={150} height={150} alt={'profile_img'} />
                <h1 className='font-labelle text-3xl m-5'>Stephen</h1>
                <MenuItem text='about'/>
                <MenuItem text='projects'/>
                <MenuItem text='cv'/>
                <h1 className='font-labelle text-3xl m-5'>Contact</h1>
                <div className='flex justify-center'>
                    <MenuItem Icon={GitHub} />
                    <MenuItem Icon={LinkedIn} />
                    <MenuItem Icon={Facebook} />
                    <MenuItem Icon={Instagram} />
                </div>
                <span className='m-1 text-sky-700 border-sky-700 hover:border-b-2 hover:text-amber-500 duration-200 cursor-pointer'>email me</span>
            </div>
        </div>
    );
}

export default Menu;
