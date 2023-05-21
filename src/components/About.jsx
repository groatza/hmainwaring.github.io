import React from 'react'

function About() {
    return (
        <section className="flex flex-col justify-center h-screen bg-bg2">
            <div className='flex px-40 items-start'>
                <div className='flex justify-center w-1/2'>
                    <img src="src\assets\qcomputing_upscale.png" alt="Queen's Computing Logo" className='h-96'/>
                </div>
                <div className='flex flex-col gap-6 w-1/2'>
                    <h1>About Me</h1>
                    <p>
                        Outgoing and ambitious soon to be graduate, with an eye for design and the technical
                        background to see it realized in browser. I have robust skills in HTML, CSS, JavaScript and its
                        related libraries, as well as Python. I also have experience with PHP, Node.js, SQL, as well as
                        Adobe Illustrator and Photoshop.
                    </p>
                    <p>
                        My professional intention is to become a full stack developer and I believe your team is
                        the perfect opportunity to further hone my skills and widen my knowledge.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;