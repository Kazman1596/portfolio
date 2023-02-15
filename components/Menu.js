import { React, useState } from 'react';
import Image from 'next/image';
import MenuItem from './MenuItem';
import { LinkedIn, GitHub, Facebook, Instagram } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { menuState } from '../atom/menuAtom';
import { useRecoilState } from 'recoil';
import { AnimatePresence, motion } from 'framer-motion';

const Menu = () => {
    const [openMenu, setOpenMenu] = useRecoilState(menuState)

    const handleClick = () => setOpenMenu(!openMenu)
    const closeMenu = () => setOpenMenu(false)

    return (
        <div>

            {/* Menu Button */}

            <div onClick={handleClick} className='absolute rounded-full bg-gray-200 hover:bg-gray-300 p-2 z-10 my-3 mx-5 shadow-lg top-5 right-0 md:hidden cursor-pointer text-sky-700 hover:text-amber-500 duration-200'>
                {openMenu ? (
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        whiteTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: '100%'
                        }}
                    >
                        <CloseIcon />
                    </motion.div>
                    ):(
                        <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: '100%'
                        }}
                    >
                        <MenuIcon />
                    </motion.div>
                )}
            </div>

            {/* Menu */}

            <div className='relative z-10'>
                <AnimatePresence>
                    <motion.div 
                        key={openMenu}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                    >
                        <div className={`${openMenu ? 'flex' : 'hidden' } md:flex bg-gray-50 fixed p-8 h-full`}>
                            <div className='justify-center text-center'>
                                <Image className='rounded-full ml-5' src={'/images/profile_img.jpg'} width={150} height={150} alt={'profile_img'} />
                                <h1 className='font-labelle text-3xl m-5'>Stephen</h1>
                                <MenuItem onClick={closeMenu} link='/' text='home'/>
                                <MenuItem onClick={closeMenu} link='#about' text='about'/>
                                <MenuItem onClick={closeMenu} link='#projects' text='projects'/>
                                <MenuItem onClick={closeMenu} link='https://drive.google.com/file/d/1kheenQnorwq8CR34xSeMWFIPtb0iO4em/view?usp=sharing' text='resume'/>
                                <h1 className='font-labelle text-3xl m-5'>Contact</h1>
                                <div className='flex justify-center mb-2'>
                                    <MenuItem onClick={closeMenu} link='https://github.com/Kazman1596' Icon={GitHub} />
                                    <MenuItem onClick={closeMenu} link='https://www.linkedin.com/in/kazman1596/' Icon={LinkedIn} />
                                </div>
                                <a href='mailto:srkaz94@gmail.com' className='m-1 text-sky-700 border-sky-700 hover:border-b-2 hover:text-amber-500 duration-200 cursor-pointer'>email me</a>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Menu;