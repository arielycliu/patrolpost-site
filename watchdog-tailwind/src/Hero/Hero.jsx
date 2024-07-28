import HeroImage from "./HeroImage"
import './Hero.css'

const siteText = {
    heading: 'Real-Time Security for Real-World Safety',
    text: 'WatchDog provides top-notch remote monitoring solutions for schools, hospitals, construction sites, and more.'
}

export default function Hero() {
    return (
        <>
            <div className="flex w-full h-screen bg-white">
                <div className="w-1/2 flex flex-col justify-center pl-28">
                    <h2 className="pb-4 text-2xl font-semibold">For 
                        <span class="text-cycle"></span>
                    </h2>
                    <h1 className='text-6xl max-w-[37vw]'>{siteText.heading}</h1>
                    <p className='text-xl max-w-[37vw] pt-6'>{siteText.text}</p>
                </div>
                <HeroImage />
            </div>
        </>
    )
}