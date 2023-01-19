import React from 'react';
import {useRecoilState} from 'recoil'
import { modalState } from '../atom/projectAtom';
import { keyState } from '../atom/keyAtom';

const ProjectModal = () => {
    const [open, setOpen] = useRecoilState(modalState)
    const [id, setId] = useRecoilState(keyState)

    return (
        <div className='absolute'>
            {console.log(id)}
            <h1>This is the modal</h1>
            {open && <h1>This is a {id} test</h1>}
        </div>
    );
}

export default ProjectModal;