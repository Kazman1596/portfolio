import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import React from 'react';
import { motion } from 'framer-motion';

const Scroll = ({nextPage}) => {
    return (
        <a 
            href={nextPage} 
            target='_self' 
            rel='noreferrer' 
            className='cursor-pointer'
        >
                <motion.div
                    whileHover={{ scale: 1.2, transition: {duration: .5 }}}
                    >
                    <div className='flex justify-center'>
                        <p className='font-labelle'>Scroll</p>
                    </div>
                    <div className='flex justify-center m-[-10px]'>
                        <KeyboardArrowDownOutlined className='text-4xl' />
                    </div>
                </motion.div>
        </a>
    );
}

export default Scroll;
