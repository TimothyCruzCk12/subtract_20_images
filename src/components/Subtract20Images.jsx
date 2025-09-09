import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Container } from './ui/reused-ui/Container.jsx'
import { Items } from './Items.jsx'

const Subtract20Images = () => {
    // State Management

    // Variable Management

    // Functions

	return (
        <Container
            text="Cross Out Subtraction 2"
            showResetButton={false}
            borderColor="#FF7B00"
            showSoundButton={true}
        >
            {/* Intro Text */}
            <div className='text-center text-sm text-gray-500 p-5 pb-3 flex-start'>
                Find which equation below properly shows the cross out subtraction below!
            </div>

            {/* Images */}
            <div className='flex flex-wrap justify-center items-center'>
                {Items.map((ItemComponent, index) => (
                    <ItemComponent key={index} />
                ))}
            </div>

        </Container>
)
};


export default Subtract20Images;