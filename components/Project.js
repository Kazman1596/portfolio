import React from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/projectAtom';
import { keyState } from '../atom/keyAtom';


const Project = ({img, title, description, key}) => {
    const [open, setOpen] = useRecoilState(modalState)
    const [id, setId] = useRecoilState(keyState)

    return (
        <div onClick={()=> setOpen(true) && setId(key)} className='mb-5 rounded-[15px] border-sky-700 hover:cursor-pointer scale-95 hover:scale-100 hover:shadow-lg duration-100'>
            <Image className='p-2 rounded-[15px]' src={img} width={400} height={500} alt='test'/>
            <h1 className='m-2 font-labelle text-2xl underline'>{title}</h1>
            <p className='m-2 text-sm'>{description}</p>
            <button className='m-2 text-xs'>See More...</button>
        </div>
    );
}

export default Project;
