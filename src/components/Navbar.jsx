import React from 'react'

function Navbar() {
    return (
        <nav className='fixed top-0 z-10 flex justify-between items-center py-6 px-16 h-20 w-screen bg-white shadow-md'>
            <h2 className='font-bold'>Hugh Mainwaring</h2>
            <div className=''>
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="">Home</a>
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="">About</a>
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="">Projects</a>
                <a className='m-2 font-bold hover:text-red-800 transition-all' href="">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;