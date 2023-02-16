import React from 'react';
import AboutMe from './AboutMe';
import RelTech from './RelTech';
import Image from 'next/image';
import { motion } from 'framer-motion'

const About = () => {

    return (
        <div id='about' className='container-layout'>
            <div className='w-full h-full md:ml-[256px]'>
                <h1 className='t-0 p-[30px] border-b-2 border-sky-700 text-4xl text-sky-700'>about me.</h1>
                <AboutMe />
                <div className='flex justify-center items-center sm:mt-[100px]'>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1, transition: {duration: 2, delay: 0.2}}}
                    >    
                        <Image
                            src='/images/logos/html_logo.png'
                            alt='html-logo' 
                            className='hidden sm:flex m-5 w-auto h-[100px]'
                            width='200'
                            height='200'
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1, transition: {duration: 2, delay: 0.7}}}
                    >
                        <Image
                            src='/images/logos/css_logo.png'
                            alt='css-logo'
                            className='hidden sm:flex m-5 w-auto h-[100px]'
                            width='200'
                            height='200'
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1, transition: {duration: 2, delay: 1.2}}}
                    >
                        <Image 
                            src='/images/logos/js_logo.png'
                            alt='js-logo'
                            className='m-5 w-auto h-[100px]'
                            width='200'
                            height='200'
                        />
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1, transition: {duration: 2, delay: 1.9}}}
                    >
                        <Image 
                            src='/images/logos/react_logo.png'
                            alt='react-logo'
                            className='m-5 w-auto h-[90px]'
                            width='200'
                            height='200'
                        />
                    </motion.div>
                </div>
                <RelTech />
            </div>
        </div>
    );
}

export default About;
