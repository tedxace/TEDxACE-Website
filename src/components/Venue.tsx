
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

const Venue = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

        gsap.from(".venue_box", {
            opacity: 0,
            translateY: 100
        })

        gsap.to(".venue_box", {
            opacity: 1,
            translateY: 0,
            scrollTrigger: {
                toggleActions: "restart resumme stop reverse",
                trigger: ".venue_box",
                start: 'top center',

            }
        })
        gsap.from(".venue_box2", {
            opacity: 0,
            translateY: 100
        })

        gsap.to(".venue_box2", {
            opacity: 1,
            translateY: 0,
            scrollTrigger: {
                toggleActions: "restart resumme stop reverse",
                trigger: ".venue_box",
                start: 'top center',

            }
        })
    }, [])
    return (
        <div className="flex overflow-hidden   items-center justify-center flex-col gap-8 pt-10  min-h-screen bg-black text-white" id="venue_container">
            <div className="flex  md:flex-row flex-col justify-between items-center w-full ">
                <div className="flex flex-col items-center gap-4  w-1/2 ">
                    <div className="flex md:flex-col flex-col-reverse justify-center items-center gap-10 venue_box ">
                    <div className="md:block hidden md:w-[520px] md:p-10 py-10">
                            <h1 className="text-2xl text-gray-400">Venue : <p className=" text-3xl md:text-5xl text-white font-bold text-wrap w-full md:leading-20 ">Atharva College of Engineering</p></h1>
                        </div>
                        <div className="flex flex-col w-[200px] h-[300px] md:w-[400px] md:h-[600px]   rounded-2xl bg-[url('https://res.cloudinary.com/dlsaawg9j/image/upload/v1740032521/venue1_jltdsi.png')] bg-cover bg-center relative">
                            <div className="md:absolute bottom-10 right-0 md:-mr-30 bg-[#111]  text-white px-10 py-5 md:w-[300px] h-auto md:flex hidden text-xl flex-col rounded-xl gap-2">
                                <h1 className="text-gray-300 font-bold text-lg">Venue 1: </h1>
                                <p className="capitalize">Phase Three ground floor lobby</p>
                            </div>
                        </div>
                        <div className="md:hidden bottom-10 right-0 md:-mr-30 bg-[#111]    text-white px-10  py-5 w-[200px]  lg:w-[300px] h-auto flex text-xl flex-col rounded-xl gap-2">
                            <h1 className="text-gray-300 font-bold text-lg">Venue 1: </h1>
                            <p className="capitalize">Phase Three ground floor lobby</p>
                        </div>
                        <div className="md:hidden block md:w-[520px] md:p-10 py-10">
                            <h1 className="text-2xl text-gray-400">Venue : <p className=" text-3xl md:text-5xl text-white font-bold text-wrap w-full md:leading-20 ">Atharva College of Engineering</p></h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center venue_box2">
                    <div className="flex flex-col-reverse items-center gap-4  lg:w-1/2">
                        <div className="text-left py-10">
                            <h1 className="text-2xl">Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.</h1>
                        </div>
                        <div className="w-[200px]  h-[300px] lg:w-[400px] lg:h-[600px]  rounded-2xl bg-[url('https://res.cloudinary.com/dlsaawg9j/image/upload/v1740032518/venue2_cyivtk.png')] bg-cover bg-center relative">
                            <div className="sm:absolute top-10 left-0 lg:-ml-30 bg-[#111]  text-white px-10 py-5 lg:w-[300px] h-auto lg:flex hidden text-xl flex-col rounded-xl gap-2">
                                <h1 className="text-gray-300 font-bold text-lg">Venue 2: </h1>
                                <p className="capitalize">Seminar Hall Phase Three 4th floor</p>
                            </div>
                        </div>
                        <div className="lg:hidden bottom-10 right-0 mt-5 lg:-ml-30 bg-[#111]  text-white px-10 py-5 lg:w-[300px] h-auto flex text-xl flex-col rounded-xl gap-2">
                            <h1 className="text-gray-300 font-bold text-lg">Venue 2: </h1>
                            <p className="capitalize">Seminar Hall Phase Three 4th floor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venue