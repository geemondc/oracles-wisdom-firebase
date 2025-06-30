"use client"

import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute rounded-full bg-white"
    style={style}
  ></div>
)

const ShootingStar = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute h-0.5 w-20 bg-gradient-to-r from-white to-transparent"
    style={style}
  ></div>
)

const Cloud = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute" style={style}>
    <div className="relative w-full h-full">
        <div className="absolute bg-white/80 rounded-full" style={{ width: '60%', height: '60%', top: '20%', left: '10%' }} />
        <div className="absolute bg-white/80 rounded-full" style={{ width: '80%', height: '80%', top: '0%', left: '30%' }} />
        <div className="absolute bg-white/80 rounded-full" style={{ width: '60%', height: '60%', top: '20%', right: '10%' }} />
    </div>
  </div>
);


const Bird = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute text-foreground" style={style}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM12 2c-3.333 3.333-5 5-5 5"/>
        <path d="M12 2c3.333 3.333 5 5 5 5"/>
        <path d="M7 7c-3.333 3.333-5 5-5 5"/>
        <path d="M17 7c3.333 3.333 5 5 5 5"/>
    </svg>
  </div>
)

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [stars, setStars] = useState<React.CSSProperties[]>([])
  const [shootingStars, setShootingStars] = useState<React.CSSProperties[]>([])
  const [clouds, setClouds] = useState<React.CSSProperties[]>([])
  const [birds, setBirds] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    // Only run on client
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
      }))
      setStars(newStars)
    }

    const generateShootingStars = () => {
        const newShootingStars = Array.from({ length: 3 }).map(() => ({
            top: `${Math.random() * 50}%`,
            left: '0',
            animation: `shooting-star ${Math.random() * 10 + 10}s ease-in-out infinite ${Math.random() * 15}s`,
          }))
          setShootingStars(newShootingStars)
    }

    const generateClouds = () => {
      const newClouds = Array.from({ length: 15 }).map(() => {
        const size = Math.random() * 100 + 50;
        return {
          top: `${Math.random() * 60}%`,
          left: '0%',
          width: `${size}px`,
          height: `${size}px`,
          animation: `float-cloud ${Math.random() * 60 + 60}s linear infinite ${Math.random() * 20}s`,
          opacity: `${Math.random() * 0.6 + 0.4}`
        };
      });
      setClouds(newClouds);
    };

    const generateBirds = () => {
      const newBirds = Array.from({ length: 5 }).map(() => ({
        top: `${Math.random() * 40 + 5}%`,
        left: '0',
        animation: `fly-bird ${Math.random() * 15 + 20}s linear infinite ${Math.random() * 25}s`,
      }));
      setBirds(newBirds)
    };


    generateStars()
    generateShootingStars()
    generateClouds()
    generateBirds()

  }, [])

  return (
    <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden transition-colors duration-500 bg-background">
      {theme === 'dark' ? (
        <div id="night-sky" className="relative w-full h-full">
          {stars.map((style, i) => <Star key={`star-${i}`} style={style} />)}
          {shootingStars.map((style, i) => <ShootingStar key={`sstar-${i}`} style={style} />)}
        </div>
      ) : (
        <div id="day-sky" className="relative w-full h-full">
          {clouds.map((style, i) => <Cloud key={`cloud-${i}`} style={style} />)}
          {birds.map((style, i) => <Bird key={`bird-${i}`} style={style} />)}
        </div>
      )}
    </div>
  )
}
