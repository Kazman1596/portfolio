import React from 'react';
import Project from './Project';
import { travelBlog, festivalFinder, barBack } from '../project_data/project_data';

const Projects = () => {

    return (
        <div id='projects' className='container-layout'>
            <div className='w-full h-full md:ml-[256px]'>
                <h1 className='t-0 p-[30px] border-b-2 border-sky-700 text-4xl text-sky-700'>projects.</h1>
                <div className='m-5 max-h-[800px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-scroll'>
                    <Project id={travelBlog.id} img={travelBlog.img} title={travelBlog.title} description={travelBlog.description} />
                    <Project id={festivalFinder.id} img={festivalFinder.img} title={festivalFinder.title} description={festivalFinder.description} />
                    <Project id={barBack.id} img={barBack.img} title={barBack.title} description={barBack.description} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
