import { motion } from "framer-motion"

export default function LandingPage() {
    return (
        <main className="max-h-screen  text-white w-full overflow-hidden  bg-[url('./bg.jpeg')] bg-cover bg-center ">

            {/* Main Content */}
            <div className="  w-[100%] px-4 pt-20 pb-20 flex flex-col items-center h-[100%] justify-center  ">

                {/* TEDx subtitle */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-20 z-10"
                >
                    <h2 className="text-red-500 text-xl md:text-2xl font-bold mb-1">TEDx<span className="text-white">ACE</span></h2>
                    <p className="text-gray-300 text-sm">IDEAS WORTH SPREADING</p>
                </motion.div> */}

                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="w-full max-w-3xl mt-10 mb-12 z-10"
                >
                    <img
                        src="/assets/Logo.png"
                        alt="Alchemy of Ideas"
                        width={800}
                        height={300}
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Event Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mb-12 z-10"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl">
                        <h3 className="font-bold text-amber-500">13TH MAR, 2024</h3>
                        <span className="hidden md:block text-gray-400">|</span>
                        <div className="flex items-center gap-2">
                            <span className="text-amber-500">@ATHARVACOE,</span>
                            <span className="text-amber-500">MALAD</span>
                        </div>
                    </div>
                    <p className="text-gray-400 mt-2">10:30 AM ONWARDS</p>
                </motion.div>

                {/* CTA button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="z-20"
                >
                    <button className="bg-purple-600 hover:bg-purple-700  text-white text-lg px-8 py-6 rounded-md border border-purple-400">
                        RESERVE A SEAT
                    </button>
                </motion.div>
                <div
                    className={
                        `absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/95 to-black bg-opacity-50 z-0`
                    }
                ></div>
                
            </div>

        </main>
    )
}

