import React from 'react';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import robotImage from '../assets/Hero/robot.png';
import alertImage from '../assets/Hero/alert.svg';
import gateImage from '../assets/Hero/gate.svg';
import carsImage from '../assets/Hero/cars.svg';
import gridImage from '../assets/Hero/grid.svg';
import folderImage from '../assets/Hero/folder.svg';
import './Hero.css'

const HeroImage = () => {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const maxVerticalMovement = 20; // max vertical wobble in pixels

    // limit vertical movement within [-30px, 30px]
    const constrainedY = (factor) => {
        return Math.max(-maxVerticalMovement, Math.min(maxVerticalMovement, scrollTop * factor));
    };

    return (
        <div className='flex-none w-1/2 flex items-center justify-center h-full'>
            <img src={robotImage} alt="Trailer with camera" className="robotImage"></img>
        </div>
                //     <div
                //         style={{
                //             position: 'absolute',
                //             top: '48vh',
                //             left: '40vw',
                //             zIndex: '3',
                //             transform: `translateY(${constrainedY(0.7)}px)`,
                //         }}
                //     >
                //         <img src={alertImage} alt="Intrusion alert message" className="alertImage"></img>
                //     </div>
                //     <div
                //         style={{
                //             position: 'absolute',
                //             top: '51vh',
                //             left: '45vw',
                //             zIndex: '2',
                //             transform: `translateY(${constrainedY(0.4)}px)`,
                //         }}
                //     >
                //         <img src={gateImage} alt="Person attempting break in" className="gateImage"></img>
                //     </div>
                //     <div
                //         style={{
                //             position: 'absolute',
                //             top: '25vh',
                //             left: '78vw',
                //             zIndex: '0',
                //             transform: `translateY(${constrainedY(0.6)}px)`,
                //         }}
                //     >
                //         <img src={gridImage} alt="Grid of videos" className="gridImage"></img>
                //     </div>
                //     <div
                //         style={{
                //             position: 'absolute',
                //             top: '75vh',
                //             left: '83vw',
                //             zIndex: '2',
                //             transform: `translateY(${constrainedY(0.2)}px)`,
                //         }}
                //     >
                //         <img src={carsImage} alt="Grid of videos" className="carsImage"></img>
                //     </div>
    );
};

export default HeroImage;
