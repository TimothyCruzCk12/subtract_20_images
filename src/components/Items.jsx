import React from 'react';
import './Items.css';

const Apple = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative">
                {/* Apple body */}
                <div className="w-10 h-10 bg-red-500 rounded-full relative"/>
                {/* Apple stem */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-amber-800 rounded-sm rotate-[-5deg]"/>
                {/* Apple leaf */}
                <div className="absolute -top-1 left-1/2 transform translate-x-[0px] w-3 h-2 bg-green-500 rounded-full rotate-[-45deg]"/>
                {/* Apple highlight */}
                <div className="absolute top-2 left-2 w-3 h-4 bg-red-300 rounded-full opacity-60 rotate-[15deg]"/>
            </div>
        </div>
    )
}

const Orange = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative">
                {/* Orange body */}
                <div className="w-10 h-10 bg-orange-500 rounded-full relative"/>
                {/* Orange texture dots */}
                <div className="absolute top-2 left-3 w-1 h-1 bg-orange-600 rounded-full"/>
                <div className="absolute top-4 left-2 w-1 h-1 bg-orange-600 rounded-full"/>
                <div className="absolute top-3 right-3 w-1 h-1 bg-orange-600 rounded-full"/>
                <div className="absolute bottom-3 left-4 w-1 h-1 bg-orange-600 rounded-full"/>
                <div className="absolute bottom-4 right-2 w-1 h-1 bg-orange-600 rounded-full"/>
                {/* Orange stem area */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1 bg-green-600 rounded-full"/>
                {/* Orange highlight */}
                <div className="absolute top-2 left-2 w-2 h-3 bg-orange-300 rounded-full opacity-70 rotate-[10deg]"/>
            </div>
        </div>
    )
}

const Candy = () => {
    return (
        <div
			className="w-10 h-10 relative inline-flex items-center justify-center px-3"
		>
			<div className="relative rotate-[15deg]">
				<svg
					className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-3 opacity-100"
					viewBox='0 0 16 24'
					preserveAspectRatio='none'
				>
					<defs>
						<clipPath id="leftClip">
							<path d='M16 12 L0 0 C2 4, 2 8, 0 12 C2 16, 2 20, 0 24 Z' />
						</clipPath>
					</defs>
					<path
						d='M16 12 L0 0 C2 4, 2 8, 0 12 C2 16, 2 20, 0 24 Z'
						fill="#e11d48"
						stroke="#e11d48"
						strokeWidth='1'
					/>
					<g clipPath="url(#leftClip)">
						<path d='M0 7 L16 9' stroke="#fde047" strokeWidth='1.5' strokeLinecap='round' />
						<path d='M0 17 L16 15' stroke="#fde047" strokeWidth='1.5' strokeLinecap='round' />
					</g>
				</svg>
				<div
					className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full border shadow-sm overflow-hidden opacity-100"
					style={{ backgroundColor: "#e11d48", borderColor: "#e11d48" }}
				>
					<svg
						className='absolute inset-0 w-full h-full'
						viewBox='0 0 40 40'
						preserveAspectRatio='none'
					>
						<defs>
							<radialGradient id="highlightGrad" cx='12' cy='12' r='18' gradientUnits='userSpaceOnUse'>
								<stop offset='0' stopColor='#ffffff' stopOpacity='0.55' />
								<stop offset='1' stopColor='#ffffff' stopOpacity='0' />
							</radialGradient>
							<linearGradient id="shadeGrad" x1='0' y1='0' x2='1' y2='1'>
								<stop offset='0' stopColor='#000000' stopOpacity='0' />
								<stop offset='1' stopColor='#000000' stopOpacity='0.25' />
							</linearGradient>
							<filter id="noiseFilter" x='-20%' y='-20%' width='140%' height='140%'>
								<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' seed='2' />
								<feColorMatrix type='saturate' values='0' />
							</filter>
						</defs>
						<g transform='rotate(90 20 20)'>
							<path d='M-6 6 C4 1, 36 11, 46 6' stroke="#fde047" strokeWidth='3' strokeLinecap='round' fill='none' />
							<path d='M-6 20 C8 16, 32 24, 46 20' stroke="#fde047" strokeWidth='3' strokeLinecap='round' fill='none' />
							<path d='M-6 34 C4 29, 36 39, 46 34' stroke="#fde047" strokeWidth='3' strokeLinecap='round' fill='none' />
						</g>
						<rect x='0' y='0' width='40' height='40' fill="url(#shadeGrad)" />
						<circle cx='12' cy='12' r='18' fill="url(#highlightGrad)" />
						<rect x='0' y='0' width='40' height='40' filter="url(#noiseFilter)" opacity='0.06' />
					</svg>
				</div>
				<svg
					className="absolute -right-2 top-1/2 -translate-y-1/2 h-6 w-3 opacity-100"
					viewBox='0 0 16 24'
					preserveAspectRatio='none'
				>
					<defs>
						<clipPath id="rightClip">
							<path d='M0 12 L16 0 C14 4, 14 8, 16 12 C14 16, 14 20, 16 24 Z' />
						</clipPath>
					</defs>
					<path
						d='M0 12 L16 0 C14 4, 14 8, 16 12 C14 16, 14 20, 16 24 Z'
						fill="#e11d48"
						stroke="#e11d48"
						strokeWidth='1'
					/>
					<g clipPath="url(#rightClip)">
						<path d='M0 9 L16 7' stroke="#fde047" strokeWidth='1.5' strokeLinecap='round' />
						<path d='M0 15 L16 17' stroke="#fde047" strokeWidth='1.5' strokeLinecap='round' />
					</g>
				</svg>
			</div>
		</div>
    )
}

const Cupcake = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative flex flex-col items-center">
                <div className="flex flex-col items-center translate-y-[3px]">
                    {/* Cherry stem */}
                    <div className="w-0.5 h-0.5 bg-green-600"/>
                    {/* Cherry on top */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"/>
                </div>
                 {/* Frosting swirl */}
                 <div className="w-9 h-4 bg-pink-200 border border-pink-300 translate-y-[2px] z-10 relative" style={{borderRadius: '50px 50px 20px 20px'}}/>
                {/* Cupcake wrapper/base */}
                <div className="relative w-7 h-4 bg-amber-100 border border-amber-200 rounded-b-lg flex justify-between">
                    {/* Wrapper ridges */}
                    <div className="ml-0.5 w-px bg-amber-300 rotate-[-2deg]"/>
                    <div className="w-px bg-amber-300 rotate-[-1deg]"/>
                    <div className="w-px bg-amber-300 rotate-[1deg]"/>
                    <div className="mr-0.5 w-px bg-amber-300 rotate-[2deg]"/>
                </div>
            </div>
        </div>
    )
}

const Pencil = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative rotate-12 w-10">
                {/* Pencil eraser */}
                <div className="w-2 h-1.5 translate-y-[3px] bg-pink-400 rounded-t-sm border border-pink-500 mx-auto"/>
                {/* Metal ferrule */}
                <div className="w-2 h-1 bg-gray-300 border-x border-gray-400 mx-auto">
                    <div className="w-full h-px bg-gray-400 mt-0.5"/>
                </div>
                {/* Pencil body */}
                <div className="flex justify-between w-2 h-6 bg-yellow-500 mx-auto relative">
                    {/* Wood grain lines */}
                    <div className="w-px h-full bg-yellow-600"/>
                    <div className="w-px h-full bg-yellow-600"/>
                    <div className="w-px h-full bg-yellow-600"/>
                </div>
                {/* Pencil tip wood */}
                <div className="w-2 h-1.5 bg-amber-200 mx-auto" style={{clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)'}}/>
                {/* Pencil tip graphite */}
                <div className="w-1 h-1 bg-gray-800 mx-auto" style={{clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'}}/>
            </div>
        </div>
    )
}

const Items = [
    Apple,
    Orange,
    Candy,
    Cupcake,
    Pencil
]

export { Items };