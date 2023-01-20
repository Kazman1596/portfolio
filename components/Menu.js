import { React, useState } from 'react';
import Image from 'next/image';
import MenuItem from './MenuItem';
import { LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // closeMobileMenu does not work at the moment //


    return (
        <span>
            <div onClick={handleClick} className='absolute m-5 top-5 right-0 md:hidden cursor-pointer text-sky-700 hover:text-amber-500 duration-200'>
                {click ? <MenuIcon /> : <CloseIcon /> }
            </div>
            <div className={`${click ? 'hidden' : 'flex' } md:flex bg-gray-50 fixed p-8 h-full`}>
                <div className='justify-center text-center'>
                    <Image className='rounded-full ml-5' src={'/images/profile_img2.jpg'} width={150} height={150} alt={'profile_img'} />
                    <h1 className='font-labelle text-3xl m-5'>Stephen</h1>
                    <MenuItem onClick={closeMobileMenu} link='#cover' text='home'/>
                    <MenuItem onClick={closeMobileMenu} link='#about' text='about'/>
                    <MenuItem onClick={closeMobileMenu} link='#projects' text='projects'/>
                    <MenuItem onClick={closeMobileMenu} link='#cv' text='cv'/>
                    <h1 className='font-labelle text-3xl m-5'>Contact</h1>
                    <div className='flex justify-center'>
                        <MenuItem onClick={closeMobileMenu} link='https://github.com/Kazman1596' Icon={GitHub} />
                        <MenuItem onClick={closeMobileMenu} link='/' Icon={LinkedIn} />
                        <MenuItem onClick={closeMobileMenu} link='https://www.facebook.com/stephen.kaczmarowski/' Icon={Facebook} />
                        <MenuItem onClick={closeMobileMenu} link='https://www.instagram.com/stephen_kaz/' Icon={Instagram} />
                    </div>
                    <span className='m-1 text-sky-700 border-sky-700 hover:border-b-2 hover:text-amber-500 duration-200 cursor-pointer'>email me</span>
                </div>
            </div>
        </span>
    );
}

export default Menu;