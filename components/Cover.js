import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Cover = () => {
    return (
        <div id='cover' className='container-layout'>
            <div className='md:ml-[256px] mt-[-75px]'>
                <AnimatePresence>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2}}>
                        <p className='text-5xl text-sky-700'>create forever.</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Cover;
