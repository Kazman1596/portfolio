import React from 'react';
import Modal from 'react-modal'
import {useRecoilState, useRecoilValue} from 'recoil'
import { modalState } from '../atom/projectAtom';
import { keyState } from '../atom/keyAtom';
import { projectArray } from '../project_data/project_data';
import Image from 'next/image';
import { GitHub, Mood } from '@mui/icons-material';

export default function ProjectModal() {
    
    const [open, setOpen] = useRecoilState(modalState)
    const [projectId, setProjectId] = useRecoilState(keyState)
    const openProject = projectArray.find(project => project.id === projectId)
    
    return (
        <div>
            {open && (
            <Modal
                className='max-w-lg w-[90%] p-6 absolute top-[5%] lg:top-[10%] left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md focus:ring-0'
                isOpen={open}
                onRequestClose={()=>{
                    setOpen(false)
                    setProjectId(null)
                }}
                ariaHideApp={false}
            >
                <div className=''>
                    <img className='rounded-[5px] pb-3' src={openProject.gif} alt='project_gif' />
                    <h1 className='font-labelle text-2xl text-center m-2'>{openProject.title}</h1>
                    <p className='text-sm text-center'>{openProject.description}</p>
                    {openProject.link && (<div> <a target='_blank' rel='noreferrer' href={openProject.repo} className='flex p-1 text-sky-700 justify-end items-center cursor-pointer border-b-2 hover:border-b-sky-700 hover:text-amber-500 duration-200'>
                            <GitHub className='' />
                            <p className='ml-2 text-xs'>repository.</p>
                    </a>
                    <a target='_blank' rel='noreferrer' href={openProject.link} className='flex p-1 text-sky-700 justify-start items-center cursor-pointer border-b-2 hover:border-b-sky-700 hover:text-amber-500 duration-200'>
                            <Mood />
                            <p className='ml-2 text-xs'>go to application</p>
                    </a> </div>)}
                </div>
                
            </Modal>
            )}
        </div>
    );
}

// Things to work on in the future:

//      - ariaHideApp={false} is not recommended. ComponentWillMount may be
//          required to let the Modal know what to attach itself to.

//      - The WAR: Cannot register Modal instance while it is already open
//      most likely has to do with the conditional rendering of the modal itself,
//      rather than letting isOpen{open} take care of the modal.

// Would love to destructure openProject (when it is undefined)
// For now, I am going to leave as is to continue with the bulk of my application.
