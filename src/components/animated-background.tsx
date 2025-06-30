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
    <div className="absolute" style={{...style, filter: 'blur(8px)'}}>
      <div className="relative w-full h-full">
          <div className="absolute bg-white/80 rounded-full" style={{ width: '60%', height: '60%', top: '20%', left: '10%' }} />
          <div className="absolute bg-white/80 rounded-full" style={{ width: '80%', height: '80%', top: '0%', left: '30%' }} />
          <div className="absolute bg-white/80 rounded-full" style={{ width: '60%', height: '60%', top: '20%', right: '10%' }} />
      </div>
    </div>
);

const Butterfly = ({ style, flutterStyle }: { style: React.CSSProperties; flutterStyle: React.CSSProperties }) => (
  <div className="absolute" style={style}>
    <div style={flutterStyle}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-foreground"
      >
          <path d="M12,2L8,7.2V11H6V8L2,12L6,16V13H8V16.8L12,22L16,16.8V13H18V16L22,12L18,8V11H16V7.2L12,2Z" />
      </svg>
    </div>
  </div>
)

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [stars, setStars] = useState<React.CSSProperties[]>([])
  const [shootingStars, setShootingStars] = useState<React.CSSProperties[]>([])
  const [clouds, setClouds] = useState<React.CSSProperties[]>([])
  const [butterflies, setButterflies] = useState<{ pathStyle: React.CSSProperties; flutterStyle: React.CSSProperties }[]>([])

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
          opacity: `${Math.random() * 0.4 + 0.6}`
        };
      });
      setClouds(newClouds);
    };

    const generateButterflies = () => {
      const newButterflies = Array.from({ length: 7 }).map(() => ({
        pathStyle: {
          top: `${Math.random() * 80 + 10}%`,
          left: '0',
          animation: `fly-butterfly ${Math.random() * 20 + 20}s linear infinite ${Math.random() * 30}s`,
          transform: `scale(${Math.random() * 0.4 + 0.6})`,
          opacity: `${Math.random() * 0.5 + 0.5}`
        },
        flutterStyle: {
          animation: `flutter ${Math.random() * 0.2 + 0.3}s ease-in-out infinite alternate`,
        }
      }));
      setButterflies(newButterflies)
    };


    generateStars()
    generateShootingStars()
    generateClouds()
    generateButterflies()

  }, [])

  return (
    <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden transition-colors duration-500 bg-transparent">
      {theme === 'dark' ? (
        <div id="night-sky" className="relative w-full h-full">
          {stars.map((style, i) => <Star key={`star-${i}`} style={style} />)}
          {shootingStars.map((style, i) => <ShootingStar key={`sstar-${i}`} style={style} />)}
        </div>
      ) : (
        <div id="day-sky" className="relative w-full h-full">
          {clouds.map((style, i) => <Cloud key={`cloud-${i}`} style={style} />)}
          {butterflies.map((b, i) => <Butterfly key={`butterfly-${i}`} style={b.pathStyle} flutterStyle={b.flutterStyle} />)}
        </div>
      )}
    </div>
  )
}
