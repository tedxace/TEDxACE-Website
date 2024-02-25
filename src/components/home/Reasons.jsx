import React from 'react'
import hehe from "../../assets/hehe.jpg";
import redscroll from "../../assets/redscroll.png"

export default function Reasons() {
    return (
        <>
            <section className={`relative h-[92vh]  w-screen flex flex-col py-0 justify-center md:bg-left-top bg-center   md:justify-center bg-cover items-center gap-6 overflow-hidden  md:-translate-y-10 -translate-y-0 `}
                    style={{ backgroundImage: `url(${require("../../assets/reasonsbg.png")})` }}>
                <div className='relative flex items-center justify-center mt-0 mb-7 pt-0'>
                    <img src={redscroll} alt="error" className='w-2/5 mt-0 pt-0'></img>
                    <h1 className={` absolute z-40 top-16 font-bold text-tedx-heading cursor-default text-2xl mb-10 mt-0 drop-shadow-lg `}>WHY SHOULD YOU ATTEND ?</h1>
                </div>
                <div className='flex flex-wrap'>
                    <div className={` grid grid-cols-2 gap-3 mx-10`}>
                        <div className='flex'>
                            <img src={hehe} alt='error' className='w-36 mx-7 mb-5 rounded-full shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out'></img>
                            <div className='flex flex-col'>
                                <h1 className='mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-400 px-1 '>Learn From The Best</h1>
                                <p className='text-tedx-preasons'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, libero repudiandae. Veniam fuga necessitatibus cupiditate autem. Exercitationem inventore voluptas quaerat!</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={hehe} alt='error' className='w-36 mx-7 mb-5 rounded-full shadow-md shadow-yellow-500  hover:scale-105 duration-300 ease-in-out'></img>
                            <div className='flex flex-col'>
                                <h1 className='mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  '>Be The Part Of Community</h1>
                                <p className='text-tedx-preasons'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, libero repudiandae. Veniam fuga necessitatibus cupiditate autem. Exercitationem inventore voluptas quaerat!</p>
                            </div>
                        </div >
                        <div className='flex'>
                            <img src={hehe} alt='error' className='w-36 mx-7 mb-5 rounded-full shadow-md shadow-yellow-500  hover:scale-105 duration-300 ease-in-out'></img>
                            <div className='flex flex-col'>
                                <h1 className='mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  '>Discovery Sessions</h1>
                                <p className='text-tedx-preasons'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, libero repudiandae. Veniam fuga necessitatibus cupiditate autem. Exercitationem inventore voluptas quaerat!</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={hehe} alt='error' className='w-36 mx-7 mb-5 rounded-full shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out'></img>
                            <div className='flex flex-col'>
                                <h1 className='mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  '>Find The Magic</h1>
                                <p className='text-tedx-preasons'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, libero repudiandae. Veniam fuga necessitatibus cupiditate autem. Exercitationem inventore voluptas quaerat!</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={hehe} alt='error' className='w-36 mx-7 mb-5 rounded-full shadow-md shadow-yellow-500  hover:scale-105 duration-300 ease-in-out'></img>
                            <div className='flex flex-col'>
                                <h1 className='mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  '>Build Life Long Connections</h1>
                                <p className='text-tedx-preasons'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, libero repudiandae. Veniam fuga necessitatibus cupiditate autem. Exercitationem inventore voluptas quaerat!</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={hehe} alt='error' className='w-36 mx-7 mb-5 rounded-full shadow-md shadow-yellow-500  hover:scale-105 duration-300 ease-in-out'></img>
                            <div className='flex flex-col'>
                                <h1 className='mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  '>Join Movement</h1>
                                <p className='text-tedx-preasons'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, libero repudiandae. Veniam fuga necessitatibus cupiditate autem. Exercitationem inventore voluptas quaerat!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
