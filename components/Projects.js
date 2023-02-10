import React from 'react';
import Project from './Project';
import { artistBlog, instaConnect, videoSurf, comingSoon } from '../project_data/project_data';

const Projects = () => {

    return (
        <div id='projects' className='container-layout relative'>
            <div className='w-full h-full md:ml-[256px]'>
                <h1 className='t-0 p-[30px] border-b-2 border-sky-700 text-4xl text-sky-700'>projects.</h1>
                <div className='m-5 max-h-[800px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-scroll'>
                    <Project id={videoSurf.id} img={videoSurf.img} gif={videoSurf.gif} title={videoSurf.title} description={videoSurf.description} />
                    <Project id={artistBlog.id} img={artistBlog.img} gif={artistBlog.gif} title={artistBlog.title} description={artistBlog.description} />
                    <Project id={instaConnect.id} img={instaConnect.img} gif={instaConnect.gif} title={instaConnect.title} description={instaConnect.description} />
                    <Project id={comingSoon.id} img={comingSoon.img} gif={comingSoon.gif} title={comingSoon.title} description={comingSoon.description} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
