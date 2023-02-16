import React from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/projectAtom';
import { keyState } from '../atom/keyAtom';


const Project = ({img, gif, title, description, id}) => {
    const [open, setOpen] = useRecoilState(modalState)
    const [projectId, setProjectId] = useRecoilState(keyState)

    const clickEvent = () => {
        setOpen(true);
        setProjectId(id)
        console.log(id)
    }

    return (
        <div onClick={()=> clickEvent()} className='mb-5 rounded-[15px] bg-gray-200 text-center hover:cursor-pointer scale-95 hover:scale-100 hover:shadow-lg duration-100'>
            <div className='flex justify-center'>
                <Image className='p-2 rounded-[15px]' src={img} width={300} height={300} alt='test'/>
            </div>
            <h1 className='m-2 font-labelle text-2xl underline'>{title}</h1>
            <p className='m-2 text-sm'>{description}</p>
            <button className='m-2 text-xs'>See More...</button>
        </div>
    );
}

export default Project;

// image size: 500 x 350
