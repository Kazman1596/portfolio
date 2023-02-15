import Link from 'next/link';
import React from 'react';
import { menuState } from '../atom/menuAtom';
import { useRecoilState } from 'recoil';

const MenuItem = ({text, link, Icon}) => {
    const [openMenu, setOpenMenu] = useRecoilState(menuState)
    
    return (
        <div className='m-2'>
             <a onClick={() => setOpenMenu(false)} target={link.startsWith('http') ? '_blank' : '_self'} rel={'noreferrer'} href={link} className='text-sky-700 hover:text-amber-500 duration-200'>
                {Icon ? <Icon className='cursor-pointer' /> : null}
                <span className='m-1 border-sky-700 hover:border-b-2 duration-200 cursor-pointer'>{text}</span>
            </a>
        </div>
    );
}

export default MenuItem;
