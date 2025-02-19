
// const Speakers = () => {
//     const speakers = [
//         {
//             name: "John Doe",
//             title: "Senior Developer",
//             image: "https://randomuser.me/api/portraits/women/1.jpg",
//         },
//         {
//             name: "Jane Doe",
//             title: "Senior Developer",
//             image: "https://randomuser.me/api/portraits/women/2.jpg",
//         },
//         {
//             name: "Alice",
//             title: "Senior Developer",
//             image: "https://randomuser.me/api/portraits/men/1.jpg",
//         },
//         {
//             name: "Bob",
//             title: "Senior Developer",
//             image: "https://randomuser.me/api/portraits/men/2.jpg",
//         },
//         {
//             name: "Charlie",
//             title: "Senior Developer",
//             image: "https://randomuser.me/api/portraits/women/3.jpg",
//         },
//     ];

//     return (
//         <div className="flex  items-center justify-center flex-col gap-8 h-screen bg-black text-white ">
//             <h1>Speakers</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {speakers.map((speaker, index) => (
//                     <div key={index} className={"flex items-center gap-4"}>
//                         {/* Create Card */}
//                         <div className="w-[200px] h-[200px]  overflow-hidden">
//                             <img src={speaker.image} alt={speaker.name} className="object-cover" />
//                             <p>{speaker.name}</p>
//                         </div>
                        
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Speakers

import React, { useState } from "react";
import SpeakerCard from "./SpeakerCard";
// import Image from "../assets/bottle.png";

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      image: "https://www.tutorialmonsters.com/wp-content/uploads/2011/02/html.jpg",
      name: "John Doe",
      role: "Author",
      description:
        "AuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthorAuthor",
    },
    {
      id: 2,
      image: "https://www.tutorialmonsters.com/wp-content/uploads/2011/02/html.jpg",
      name: "Jane Smith",
      role: "Cricketer",
      description: "Jane is a legendary cricketer with numerous records.",
    },
    {
      id: 3,
      image: "https://www.tutorialmonsters.com/wp-content/uploads/2011/02/html.jpg",
      name: "Sam Wilson",
      role: "Musician",
      description: "Sam is a Grammy-winning musician and producer.",
    },
    {
      id: 4,
      image: "https://www.tutorialmonsters.com/wp-content/uploads/2011/02/html.jpg",
      name: "Sara Lee",
      role: "Chef",
      description: "Sara is a renowned chef specializing in fusion cuisine.",
    },
    {
      id: 5,
      image: "https://www.tutorialmonsters.com/wp-content/uploads/2011/02/html.jpg",
      name: "Michael Brown",
      role: "Photographer",
      description: "Michael is a travel photographer with global acclaim.",
    },
  ];
  return (
    <div className="bg-black w-full min-h-screen border   p-16 relative ">

      {/* Background Bottle Image */}
      {/* <div className="absolute top-0 left-[478px] opacity-40 transform -translate-x-1/2 w-full h-[1600px] overflow-visible z-0">
        <img
          src={"./venue1.png"}
          alt="Background"
          className="w-[1088px] h-[1600px] object-cover"
        />
      </div> */}

      {/* Speaker Text */}
      <div className="relative z-10">
        <h1 className="text-center font-semibold text-[40px] text-white mt-[160px] mb-12">
          Speakers
        </h1>
      </div>

      {/* Speaker Cards */}
      <div className=" z-10">
        {/* First row of 3 speakers */}
        <div className="flex lg:flex-row flex-col md:items-baseline items-center justify-center gap-[80px] mb-16">
          {speakers.slice(0, 3).map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>

        {/* Second row of 2 speakers */}
        <div className="flex lg:flex-row flex-col md:items-baseline items-center justify-center gap-[80px]">
          {speakers.slice(3).map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Speakers;