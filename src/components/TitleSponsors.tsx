
import { ArrowRight } from 'lucide-react'

const TitleSponsors = () => {
  return (
    <div className='md:h-full flex flex-col items-center justify-center bg-[#000000] text-white'>
        <h1 className='text-4xl font-[Ysabeau] font-bold my-10'>Title Sponsor</h1>
        <img src="/sponsors/autograph_advisor.png" alt="" width={500} className='md:p-4 p-4'/>
        <div className='grid md:grid-cols-2 grid-cols-1 mx-auto md:w-1/2 p-10   gap-12 '>
            <div>
                <h2 className='font-semibold my-2 text-xl '>Unlock Your Potential with Our Expert Guidance</h2>
                <p>Ready to transcend excellence? Our education counseling and study abroad services help you break boundaries. From university applications to major selection, we provide strategic guidance to elevate your academic journey. </p>

            </div>
            <div>
                <h2 className='font-semibold my-2 text-xl '> Excel in Your Career with Our Strategic Support</h2>
                <p>Accelerate your career with our comprehensive strategy and preparation services. From world-class resumes to top-tier performance reviews, we enhance your executive presence and help you achieve high-value outcomes. </p>
            </div>
            <div>
                <h2 className='font-semibold my-2 text-xl '>Stand Out with Our Special Projects and International Opportunities</h2>
                <p>Passionate about unique challenges? Our special projects and international opportunities offer valuable skills and global experiences. Whether upskilling or leading extra-curricular activities, we help you excel. </p>

            </div>
            <div>
                <h2 className='font-semibold my-2 text-xl '> Join Our Community of Relentless Thinkers and Achievers</h2>
                <p>Join our community of relentless thinkers dedicated to revolutionizing conventions. Partner with us to push beyond mediocrity and achieve your grand visions.</p>
            </div>
             
        </div>
        <a href="https://www.autographadvisors.com/" target='_blank'  className={'border-2 border-[#8940B2] text-[#8940B2] font-bold text-lg  rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-center flex gap-2 items-center  bg-[#0E0014]  uppercase  md:px-10 md:py-6 p-4'}>
            Explore more work <ArrowRight/>
        </a>
    </div>
  )
}

export default TitleSponsors