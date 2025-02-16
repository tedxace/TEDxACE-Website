import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Video = () => {
    const Video1 = () => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center h-full font-[Ysabeau] pt-20 p-10 gap-10 "
            >
                <div className="flex flex-col  items-center gap-4">
                    <p>Join us for the ride</p>
                    <h1 className="text-4xl font-bold">To Unleash The Magic Within Ideas</h1>
                    <button className="bg-violet-800 px-8 flex py-4 rounded-xl">Buy Tickets <ArrowRight /></button>
                </div>
                <div className="flex items-center flex-col">
                    <video className="w-3/4 md:w-1/2 rounded-xl ease-in" autoPlay muted controls={false} loop src="./assets/speakers.mp4">
                    </video>
                </div>
            </motion.div>
        );
    };

    const Video2 = () => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex md:flex-row flex-col items-center justify-center md:h-screen  gap-32  ease-in pt-20 md:items-start"
            >
                <div className="flex flex-col  bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-auto m-4 md:w-[320px] gap-10">
                    <h1 className="text-3xl w-auto font-semibold font-[Ysabeau]">These Ideas Are Worth Spreading</h1>
                    <span className="text-gray-500">Talks</span>
                </div>
                <div className="flex items-center flex-col relative flex-1 ">
                    <video className="w-3/4 md:w-[500px] rounded-xl " autoPlay muted loop src="./assets/sponsor.mp4">
                    </video>
                    <button className="bg-violet-800 px-8 flex absolute bottom-5  py-4 rounded-xl z-10 gap-2">Buy Tickets <ArrowRight /></button>

                </div>
                <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-[300px] mt-32 gap-10">
                    <p className="font-sans text-gray-400 text-xl">TEDx events spotlight groundbreaking ideas and innovations that can drive meaningful change.</p>
                </div>
            </motion.div>
        );
    };

    const Video3 = () => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex md:flex-row flex-col items-center md:h-screen  justify-center  gap-32  ease-in pt-20 md:items-start"
            >
                <div className="flex flex-col gap-10 ">
                    {/* <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-[320px] gap-10">
                        <span className="text-gray-500">Talks</span>
                    </div> */}
                    <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-auto m-4 md:w-[320px] gap-10 ">
                        <h1 className="text-3xl w-auto  font-semibold font-[Ysabeau]">Network With Innovators</h1>
                        <span className="text-gray-500">Sponsors</span>
                    </div>
                </div>
                <div className="flex items-center flex-col relative flex-1 ">
                    <video className="w-3/4  md:w-[500px] rounded-xl h-[700px] object-cover opacity-85 " autoPlay muted loop src="./assets/speakers.mp4">
                    </video>
                    <button className="bg-violet-800 px-8 flex absolute bottom-5  py-4 rounded-xl z-10 gap-2">Buy Tickets <ArrowRight /></button>

                </div>
                <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-[300px] mt-32 gap-10">
                    <p className="font-sans text-gray-400 text-xl">Connect with innovators and leaders, sparking collaborations and idea exchanges that fuel your personal and professional growth.</p>
                </div>
            </motion.div>
        );
    };

    const Video4 = () => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex md:flex-row flex-col items-center justify-center  gap-32  ease-in pt-20 md:items-start"

            >
                <div className="flex flex-col gap-10 ">
                    {/* <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-[320px] gap-10">
                        <span className="text-gray-500">Talks</span>
                    </div>
                    <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-[320px] gap-10">
                        <span className="text-gray-500">Sponsors</span>
                    </div> */}
                    <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap m-4 md:w-[320px] gap-10">
                        <h1 className="text-3xl w-auto font-semibold font-[Ysabeau]">Find the magic within people</h1>
                        <span className="text-gray-500">Our Team</span>
                    </div>
                </div>
                <div className="flex items-center flex-col relative flex-1 ">
                    <video className="w-3/4  md:w-[500px] rounded-xl md:h-[700px] object-cover opacity-85 " autoPlay muted loop src="./assets/team.mp4">
                    </video>
                    <button className="bg-violet-800 px-8 flex absolute bottom-5  py-4 rounded-xl z-10 gap-2">Buy Tickets <ArrowRight /></button>

                </div>
                <div className="flex flex-col bg-[#0D0D0D] border border-gray-600 py-8 px-10 rounded-xl text-wrap w-[300px] mt-32 gap-10">
                    <p className="font-sans text-gray-400 text-xl">Expand your horizons, envision your future, and explore the unknown alongside trailblazers shaping tomorrow.</p>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#000000] text-white"> 
            <Video1 />
            <Video2/>
            <Video3/>
            <Video4/>
        </div>
    );
};

export default Video;