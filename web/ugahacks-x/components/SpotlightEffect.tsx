'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/SpotlightEffect.module.css';

const SpotlightEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [outlineSize, setOutlineSize] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    console.log(outlineSize)

    useEffect(() => {
        // Function to handle mouse movement and update position
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX + window.scrollX, // Account for horizontal scroll
                y: event.clientY + window.scrollY, // Account for vertical scroll
            });
        };

        // Function to dynamically calculate outline size
        const calculateOutlineSize = () => {
            const minDimension = Math.min(window.innerWidth, window.innerHeight);
            let calculatedSize = minDimension * 2;

            let newSize;
            // Conditional: if the calculated outline size is less than 2000, set it to a static size
            if (calculatedSize < 2000) {
                newSize = 2800;
            } else {
                newSize = calculatedSize;
            }

            setOutlineSize(newSize);
        };


        // Function to check if screen width is less than 600px (mobile)
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 600); // Keep the threshold for mobile at 600px
        };

        // Initial check for mobile screen
        checkMobile();

        // Set initial size based on the screen size
        calculateOutlineSize();

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', calculateOutlineSize); // Recalculate size on resize
        window.addEventListener('resize', checkMobile); // Recheck if mobile on resize

        return () => {
            // Cleanup event listeners
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', calculateOutlineSize);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // If the screen width is below checkmobile amount, don't render the spotlight
    if (isMobile) {
        return null;
    }
    return (
        <>
            <div
                className={styles.cursorDot}
                style={{
                    left: `${mousePosition.x - 10}px`, // Adjust to center dot (half of 20px)
                    top: `${mousePosition.y - 10}px`,
                }}
            />
            <div
                className={styles.cursorOutline}
                style={{
                    // width: `${outlineSize}px`,
                    // height: `${outlineSize}px`,
                    width: `${outlineSize}px`,
                    height: `${outlineSize}px`,
                    left: `${mousePosition.x - outlineSize / 2}px`, // Keep outline centered
                    top: `${mousePosition.y - outlineSize / 2}px`,
                }}
            />
        </>
    );
};

export default SpotlightEffect;
