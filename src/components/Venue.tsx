
const Venue = () => {
    return (
        <div className="flex   items-center justify-center flex-col gap-8  min-h-screen bg-black text-white">
            <div className="flex  md:flex-row flex-col justify-between items-center w-full ">
                <div className="flex flex-col  items-center gap-4  w-1/2 ">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="md:text-left  py-10">
                            <h1 className="text-2xl text-gray-400">Venue : <p className="text-5xl text-white font-bold text-wrap w-2/3 leading-20">Atharva College of Engineering</p></h1>
                        </div>
                        <div className="w-[200px] h-[300px] md:w-[400px] md:h-[600px]  rounded-2xl bg-[url('./venue1.png')] bg-cover bg-center relative">
                            <div className="md:absolute bottom-10 right-0 md:-mr-30 bg-[#111]  text-white px-10 py-5 md:w-[300px] h-auto md:flex hidden text-xl flex-col rounded-xl gap-2">
                                <h1 className="text-gray-300 font-bold text-lg">Venue: </h1>
                                <p className="capitalize">Phase Three ground floor lobby</p>
                            </div>
                        </div>
                        <div className="md:hidden bottom-10 right-0 md:-mr-30 bg-[#111] mb-5  text-white px-10 py-5 w-[200px]  lg:w-[300px] h-auto flex text-xl flex-col rounded-xl gap-2">
                                <h1 className="text-gray-300 font-bold text-lg">Venue: </h1>
                                <p className="capitalize">Phase Three ground floor lobby</p>
                            </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center ">
                    <div className="flex flex-col-reverse items-center gap-4  lg:w-1/2">
                        <div className="text-left py-10">
                            <h1 className="text-2xl">Explore new ideas at astoundingly beautiful venues. Attend Tech Startup Conferences and meet new brilliant minds from all over the world.</h1>
                        </div>
                        <div className="w-[200px]  h-[300px] lg:w-[400px] lg:h-[600px]  rounded-2xl bg-[url('./venue2.png')] bg-cover bg-center relative">
                            <div className="sm:absolute bottom-10 right-0 lg:-mr-30 bg-[#111]  text-white px-10 py-5 lg:w-[300px] h-auto lg:flex hidden text-xl flex-col rounded-xl gap-2">
                                <h1 className="text-gray-300 font-bold text-lg">Venue: </h1>
                                <p className="capitalize">Seminar Hall Phase Three 4th floor</p>
                            </div>
                        </div>
                        <div className="lg:hidden bottom-10 right-0 lg:-mr-30 bg-[#111]  text-white px-10 py-5 lg:w-[300px] h-auto flex text-xl flex-col rounded-xl gap-2">
                                <h1 className="text-gray-300 font-bold text-lg">Venue: </h1>
                                <p className="capitalize">Seminar Hall Phase Three 4th floor</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venue