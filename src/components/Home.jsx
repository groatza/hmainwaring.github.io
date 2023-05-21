import React from 'react'
import ProfileImage from './ProfileImage';

function Home() {
    return (
        <section className="flex flex-col justify-center items-start pt-10 h-screen">
            <div className="flex relative px-40">
                <div className='flex flex-col gap-6 relative w-1/2 justify-center'>
                    <h1 className='font-bold'>
                        Hello Potential Employer!
                    </h1>
                    <p>
                        My name is Hugh Mainwaring. I'm a passionate and driven front-end developer. Please, have a look around!
                    </p>
                    <div>
                        <h3 className='mb-2 font-bold underline underline-offset-2'>Skills:</h3>
                        <ul className='flex gap-8'>
                            <li><img src="src\assets\icons\html5.svg" alt="html" className='icon' /></li>
                            <li><img src="src\assets\icons\css3-alt.svg" alt="css" className=' icon' /></li>
                            <li><img src="src\assets\icons\js.svg" alt="javascript" className='icon' /></li>
                            <li><img src="src\assets\icons\react.svg" alt="react" className='icon' /></li>
                            <li><img src="src\assets\icons\sass.svg" alt="sass" className='icon' /></li>
                            <li><img src="src\assets\icons\tailwind.svg" alt="tailwind" className='icon' /></li>
                            <li><img src="src\assets\icons\three.js.svg" alt="three.js" className='icon' /></li>
                        </ul>
                    </div>
                </div>
                <div id='canvas' className='flex flex-col w-1/2'>
                    <ProfileImage />
                </div>
            </div>
        </section>
    );
}

export default Home;