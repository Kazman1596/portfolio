import { React, useState } from 'react';
import Image from 'next/image';
import MenuItem from './MenuItem';
import { LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(!open)
    const closeMenu = () => setOpen(false)

    // closeMobileMenu does not work at the moment //


    return (
        <div>

            {/* Menu Button */}

            <div onClick={handleClick} className='absolute z-10 m-5 top-5 right-0 md:hidden cursor-pointer text-sky-700 hover:text-amber-500 duration-200'>
                {open ? <CloseIcon /> : <MenuIcon /> }
            </div>

            {/* Menu */}

            <div className='relative z-10'>
                <div className={`${open ? 'flex' : 'hidden' } md:flex bg-gray-50 fixed p-8 h-full`}>
                    <div className='justify-center text-center'>
                        <Image className='rounded-full ml-5' src={'/images/profile_img.jpg'} width={150} height={150} alt={'profile_img'} />
                        <h1 className='font-labelle text-3xl m-5'>Stephen</h1>
                        <MenuItem onClick={() => closeMenu} link='#about' text='about'/>
                        <MenuItem onClick={() => closeMenu} link='#cover' text='home'/>
                        <MenuItem onClick={() => closeMenu} link='#projects' text='projects'/>
                        <MenuItem onClick={() => closeMenu} link='#cv' text='cv'/>
                        <h1 className='font-labelle text-3xl m-5'>Contact</h1>
                        <div className='flex justify-center mb-2'>
                            <MenuItem onClick={() => closeMenu} link='https://github.com/Kazman1596' Icon={GitHub} />
                            <MenuItem onClick={() => closeMenu} link='https://www.linkedin.com/in/kazman1596/' Icon={LinkedIn} />
                        </div>
                        <a href='mailto:srkaz94@gmail.com' className='m-1 text-sky-700 border-sky-700 hover:border-b-2 hover:text-amber-500 duration-200 cursor-pointer'>email me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;