// @ts-nocheck

import { sponsors2025 } from "@/constants/2025"

const Sponsors = () => {
  return (
    <div className="md:h-screen gap-4 w-full flex flex-col items-center justify-center bg-[#000000] text-white">
      <h4 className="text-gray-500">Meet our esteemed</h4>
      <h1 className="text-5xl uppercase font-bold font-[Ysabeau]">Sponsors</h1>
      {/* <div className="flex flex-col md:flex-row items-center p-10 gap-20">
            <div className="w-[200px] h-[100px] "></div>
            <div className="w-[200px] h-[100px] "></div>
            <div className="w-[200px] h-[100px] "></div>

        </div> */}

      <div style={{ marginTop: '4rem' }} className="p-10  flex flex-col  text-3xl">
        
        {sponsors2025.map((sponsor, index) => (
          <div key={index} className="flex flex-col  items-center justify-center gap-8">
            {sponsor.titleSponsor && (
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold font-[Ysabeau]] border-b-2">Title Sponsor</h1>
                <div className="flex flex-col gap-3">
                  <img src={sponsor.titleSponsor.image} alt={sponsor.title} className="w-auto h-20" />
                  <h1 className="text-lg uppercase text-center ">{sponsor.titleSponsor.sponsorName}</h1>
                </div>
              </div>
            )}
            <div className="flex md:flex-row flex-col gap-5 justify-between w-[50vw] mt-24 ">
              {sponsor.associate_sponsors.map((associateSponsor, index) => (
                <div key={index} className="flex flex-col  items-center justify-center gap-4">
                  <h1 className="text-4xl font-bold font-[Ysabeau] text-center mb-4 underline md:no-underline md:border-b-2">Associate Sponsor</h1>
                  <div className="flex flex-col gap-3">
                    <img src={associateSponsor.image} alt={sponsor?.title} className="w-30 h-30" />
                    <h1 className="text-lg  text-center">{associateSponsor.sponsorName}</h1>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>    </div>
  )
}

export default Sponsors