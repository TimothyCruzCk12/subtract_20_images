import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Container } from './ui/reused-ui/Container.jsx'
import { Items } from './Items.jsx'
import './Subtract20Images.css'
import './ui/reused-animations/fade.css'

const Subtract20Images = () => {
    // State Management
    const [itemIndex, setItemIndex] = useState(null);
    const [totalItems, setTotalItems] = useState(null);
    const [crossedItems, setCrossedItems] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [shakingIndex, setShakingIndex] = useState(null);
    const [buttonsFadingOut, setButtonsFadingOut] = useState(false);
    const [showGreatJob, setShowGreatJob] = useState(false);
    const [isProcessingCorrectAnswer, setIsProcessingCorrectAnswer] = useState(false);

    // Variable Management
    const messages = [
        'Great Job!',
        'Awesome!',
        'Fantastic Job!',
        'That\'s correct!',
        'Great Work!',
        'That\'s right!',
        'You got it!'
    ]

    // Functions
    const generateImages = () => {
        let newItemIndex;
        
        // Avoid using the same item twice in a row (if there are multiple items available)
        if (itemIndex !== null && Items.length > 1) {
            do {
                newItemIndex = Math.floor(Math.random() * Items.length);
            } while (newItemIndex === itemIndex);
        } else {
            newItemIndex = Math.floor(Math.random() * Items.length);
        }
        
        const newTotalItems = Math.floor(Math.random() * 13) + 7;
        const newCrossedItems = Math.floor(Math.random() * (newTotalItems - 1)) + 1;
        
        setItemIndex(newItemIndex);
        // setTotalItems(newTotalItems);
        setTotalItems(20);
        setCrossedItems(newCrossedItems);
        
        // Reset fade states for new question
        setButtonsFadingOut(false);
        setShowGreatJob(false);
        setIsProcessingCorrectAnswer(false);
    }

    useEffect(() => {
        generateImages();
    }, []);

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
        
        // Store the correct answer before shuffling
        setCorrectAnswer(correctEquation);
        
        // Shuffle the answers so correct answer isn't always first
        const shuffledAnswers = [...newAnswers].sort(() => Math.random() - 0.5);
        setAnswers(shuffledAnswers);
    }

    useEffect(() => {
        if (totalItems !== null && crossedItems !== null) {
            generateAnswers();
        }
    }, [totalItems, crossedItems]);

    const handleAnswerClick = (answer, index) => {
        if (answer === correctAnswer && !isProcessingCorrectAnswer) {
            // Prevent multiple clicks on correct answer
            setIsProcessingCorrectAnswer(true);
            
            confetti({ particleCount: 120, spread: 70, origin: { y: 0.5 } });
            
            // Start fade-out animation for buttons
            setButtonsFadingOut(true);
            
            // After buttons fade out, show great job message
            setTimeout(() => {
                setShowGreatJob(true);
            }, 200); // Wait for fade-out animation to complete
            
            // After total 3 seconds, generate new images
            setTimeout(() => {
                generateImages();
            }, 4000);
        } else if (answer !== correctAnswer) {
            // Trigger shake animation for incorrect answer
            setShakingIndex(index);
            setTimeout(() => {
                setShakingIndex(null);
            }, 500); // Duration matches the CSS animation duration
        }
    }

	return (
        <Container
            text="Cross Out Subtraction 2"
            showResetButton={false}
            borderColor="#FF7B00"
            showSoundButton={true}
        >
            {/* Intro Text */}
            <div className='text-center text-sm text-gray-500 p-5 pb-3 flex-start'>
                Find which of the four equations properly shows the image cross out subtraction below!
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

             {/* Answer Buttons or Great Job Message */}
             <div className='absolute bottom-[3%] w-[100%] flex justify-center items-center px-3'>
                 {!showGreatJob ? (
                     <div className={`w-full grid grid-cols-2 justify-items-center items-center gap-2 ${buttonsFadingOut ? 'fade-out-up-animation' : ''}`}>
                         {answers.map((equation, index) => (
                             <button 
                                key={index} 
                                className={`w-full h-12 bg-blue-500 border border-blue-700 border-4 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition-colors ${shakingIndex === index ? 'shake' : ''}`}
                                onClick={() => handleAnswerClick(equation, index)}
                            >
                                {equation}
                             </button>
                         ))}
                     </div>
                 ) : (
                     <div className='flex w-[100%] h-[104px] justify-center items-center mb-[15px]'>
                        <span className='flex flex-col justify-center items-center text-green-500 text-lg font-bold'>
                            <span className='text-4xl text-green-600 font-extrabold'>{correctAnswer}</span>
                            {messages[Math.floor(Math.random() * messages.length)]}
                         </span>
                     </div>
                 )}
             </div>

             {/* Just to take up space */}
             <div className='h-[104px]'/>
        </Container>
)
};


export default Subtract20Images;