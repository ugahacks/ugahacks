'use client'
// src/components/CustomCursor.tsx
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const particlesLayerRef = useRef<HTMLDivElement | null>(null);
    const lastPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            lastPosRef.current = { x: e.clientX, y: e.clientY };
            // Tune these offsets so the *tip* of your wand is the emission point
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-20%, -190%)`;
        };

        const handleMouseDown = () => {
            const { x, y } = lastPosRef.current;
            spawnParticles(x, y);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    const spawnParticles = (x: number, y: number) => {
        const layer = particlesLayerRef.current;
        if (!layer) return;

        const COUNT = 16; // number of particles per burst
        for (let i = 0; i < COUNT; i++) {
            const p = document.createElement('div');
            p.className = 'wand-particle';
            // randomize direction, distance, size, and color
            const angle = Math.random() * Math.PI * 2;
            const distance = 60 + Math.random() * 80; // px
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
            const size = 3 + Math.random() * 4; // px
            // sparkly gold-white range; tweak as you like
            const hue = 45 + Math.random() * 15;      // yellows
            const sat = 90 + Math.random() * 10;      // %
            const light = 60 + Math.random() * 20;    // %

            p.style.left = `${x}px`;
            p.style.top = `${y}px`;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.setProperty('--dx', `${dx}px`);
            p.style.setProperty('--dy', `${dy}px`);
            p.style.setProperty('--clr', `hsl(${hue} ${sat}% ${light}%)`);

            // remove after animation ends
            p.addEventListener('animationend', () => p.remove());
            layer.appendChild(p);
        }
    };

    return (
        <>
            {/* Optional: global cursor hide. You can move this to globals.css if preferred */}
            <style jsx global>{`
        html, body, * { cursor: none !important; }
      `}</style>

            {/* Particle keyframes + styling */}
            <style jsx global>{`
        @keyframes wandPop {
          from {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
            filter: drop-shadow(0 0 4px var(--clr));
          }
          to {
            transform: translate3d(var(--dx), var(--dy), 0) scale(0.7);
            opacity: 0;
            filter: drop-shadow(0 0 0 var(--clr));
          }
        }
        .wand-particle {
          position: fixed;
          left: 0;
          top: 0;
          translate: -50% -50%;            /* center the tiny dot on (x,y) */
          background: radial-gradient(circle at 50% 50%, var(--clr), transparent 70%);
          border-radius: 9999px;
          pointer-events: none;
          z-index: 60;                      /* above page, below the cursor itself */
          animation: wandPop 550ms ease-out forwards;
          will-change: transform, opacity, filter;
        }
      `}</style>

            {/* Particle layer */}
            <div
                ref={particlesLayerRef}
                className="fixed inset-0 pointer-events-none z-[55]"
            />

            {/* The wand cursor */}
            <div
                ref={cursorRef}
                className="fixed pointer-events-none z-[70] w-12 h-12 bg-contain bg-no-repeat"
                style={{
                    backgroundImage: "url('/Cursor.png')",
                    transform: "translate3d(0,0,0)",
                }}
            />
        </>
    );
};

export default CustomCursor;
