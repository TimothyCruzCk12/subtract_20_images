import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Container } from './ui/reused-ui/Container.jsx'
import { Items } from './Items.jsx'

const Subtract20Images = () => {
    // State Management
    const [itemIndex, setItemIndex] = useState(null);
    const [totalItems, setTotalItems] = useState(null);
    const [crossedItems, setCrossedItems] = useState(null);
    const [answers, setAnswers] = useState([]);

    // Variable Management

    // Functions
    const generateImages = () => {
        const newItemIndex = Math.floor(Math.random() * Items.length);
        const newTotalItems = Math.floor(Math.random() * 13) + 7;
        const newCrossedItems = Math.floor(Math.random() * (newTotalItems - 1)) + 1;
        
        setItemIndex(newItemIndex);
        // setTotalItems(newTotalItems);
        setTotalItems(20);
        setCrossedItems(newCrossedItems);
    }

    const generateAnswers = () => {
        if (totalItems === null || crossedItems === null) return;
        
        const correctAnswer = totalItems - crossedItems;
        const correctEquation = `${totalItems} - ${crossedItems} = ${correctAnswer}`;
        
        const newAnswers = [correctEquation];
        
        // Generate 3 incorrect answers with subtle variations
        const variations = [
            // Wrong result (off by 1 or 2)
            `${totalItems} - ${crossedItems} = ${correctAnswer + 1}`,
            `${totalItems} - ${crossedItems} = ${correctAnswer - 1}`,
            // Wrong subtrahend (off by 1)
            `${totalItems} - ${crossedItems + 1} = ${totalItems - (crossedItems + 1)}`,
        ];
        
        // Add variations, avoiding duplicates and ensuring they're different from correct answer
        for (let variation of variations) {
            if (newAnswers.length < 4 && !newAnswers.includes(variation)) {
                newAnswers.push(variation);
            }
        }
        
        // If we need more answers, add more variations
        while (newAnswers.length < 4) {
            const randomVariation = Math.random() < 0.5 
                ? `${totalItems} - ${crossedItems} = ${correctAnswer + (Math.random() < 0.5 ? 2 : -2)}`
                : `${totalItems - 1} - ${crossedItems} = ${(totalItems - 1) - crossedItems}`;
            
            if (!newAnswers.includes(randomVariation)) {
                newAnswers.push(randomVariation);
            }
        }
        
        // Shuffle the answers so correct answer isn't always first
        const shuffledAnswers = [...newAnswers].sort(() => Math.random() - 0.5);
        setAnswers(shuffledAnswers);
    }

    useEffect(() => {
        generateImages();
    }, []);

    useEffect(() => {
        if (totalItems !== null && crossedItems !== null) {
            generateAnswers();
        }
    }, [totalItems, crossedItems]);

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
            <div className='flex flex-grow flex-wrap justify-center items-center content-center gap-x-2 gap-y-2 pb-4 px-4'>
                {totalItems && itemIndex !== null && crossedItems !== null && Array.from({ length: totalItems }, (_, index) => {
                    const ItemComponent = Items[itemIndex];
                    const isCrossed = index < crossedItems;
                    return (
                        <div key={index} className={isCrossed ? 'crossed' : ''}>
                            <ItemComponent />
                        </div>
                    );
                })}
            </div>

             {/* Answer Buttons */}
             <div className='relative bottom-[3%] grid grid-cols-2 justify-items-center items-center gap-2 mx-2'>
                 {answers.map((equation, index) => (
                     <button 
                         key={index} 
                         className='w-full h-12 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors'
                     >
                         {equation}
                     </button>
                 ))}
             </div>
        </Container>
)
};


export default Subtract20Images;