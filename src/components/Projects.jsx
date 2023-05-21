import React from 'react'

export default function Projects() {
    return (
        <section className='flex flex-col gap-6 justify-center px-40 h-screen'>
            <h1>Projects</h1>
            <div className='grid grid-cols-3 gap-10'>
                <ProjectCard image="https://picsum.photos/200" title="Title" desc="content"/>
                <ProjectCard image="https://picsum.photos/200" title="Title" desc="content"/>
                <ProjectCard image="https://picsum.photos/200" title="Title" desc="content"/>
            </div>
        </section>
    );
}

function ProjectCard({image, title, desc}) {
    return (
        <div className='card relative group flex border-2 border-black bg-white shadow-xl cursor-pointer hover:shadow-2xl transition-all '> {/*want it to be flush against the container ^ but have margin between cards*/}
            <div className='overflow-hidden'>
                <img src={image} alt="" className='group-hover:scale-105 transition-all'/>
            </div>
            <div className='pl-4 pt-1'>
                <h2 className='font-bold'>{title}</h2>
                <p>{desc}</p>
            </div>
            <div className='bg-gradient-to-b from-transparent via-white to-transparent
                            h-20 w-[2px] absolute -right-[2px] top-[60%] opacity-0
                            ease-out duration-300
                            group-hover:top-0 group-hover:opacity-100
                            z-1'>
            </div>
        </div>
    );
}