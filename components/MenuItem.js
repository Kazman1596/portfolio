import Link from 'next/link';
import React from 'react';

const MenuItem = ({text, link, Icon}) => {
    
    return (
        <div className='m-2'>
             <a target={Icon ? '_blank' : '_self'} rel={'noreferrer'} href={link} className='text-sky-700 hover:text-amber-500 duration-200'>
                {Icon ? <Icon className='cursor-pointer' /> : null}
                <span className='m-1 border-sky-700 hover:border-b-2 duration-200 cursor-pointer'>{text}</span>
            </a>
        </div>
    );
}

export default MenuItem;
