import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Items.css';

const Apple = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative">
                {/* Apple body */}
                <div className="w-12 h-12 bg-red-500 rounded-full relative"/>
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
                <div className="w-12 h-12 bg-orange-500 rounded-full relative"/>
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
        <div>

        </div>
    )
}

const Cupcake = () => {
    return (
        <div>

        </div>
    )
}

const Pencil = () => {
    return (
        <div>

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