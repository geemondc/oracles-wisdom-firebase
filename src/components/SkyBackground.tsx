import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface Cloud {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  opacity: number;
}

function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, opacity: number) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "#ffffff";
  
  const r = h * 0.5;
  // Main body
  ctx.beginPath();
  ctx.ellipse(x, y, w * 0.5, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  // Left puff
  ctx.beginPath();
  ctx.ellipse(x - w * 0.25, y - h * 0.05, r * 0.9, r * 0.8, 0, 0, Math.PI * 2);
  ctx.fill();
  // Right puff
  ctx.beginPath();
  ctx.ellipse(x + w * 0.22, y - h * 0.08, r * 1.0, r * 0.9, 0, 0, Math.PI * 2);
  ctx.fill();
  // Top puff
  ctx.beginPath();
  ctx.ellipse(x + w * 0.02, y - h * 0.3, r * 0.85, r * 0.75, 0, 0, Math.PI * 2);
  ctx.fill();
  // Extra softness
  ctx.beginPath();
  ctx.ellipse(x - w * 0.1, y - h * 0.2, r * 0.7, r * 0.65, 0, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

export function SkyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: { x: number; y: number; r: number; speed: number; opacity: number; twinkleSpeed: number; phase: number }[] = [];
    const clouds: Cloud[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.3,
          speed: Math.random() * 0.15 + 0.02,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.008 + 0.002,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const initClouds = () => {
      clouds.length = 0;
      const count = 8 + Math.floor(Math.random() * 5);
      for (let i = 0; i < count; i++) {
        clouds.push({
          x: Math.random() * (canvas.width + 400) - 200,
          y: Math.random() * canvas.height * 0.7 + canvas.height * 0.05,
          width: 120 + Math.random() * 180,
          height: 50 + Math.random() * 60,
          speed: 0.15 + Math.random() * 0.35,
          opacity: 0.5 + Math.random() * 0.4,
        });
      }
    };

    const init = () => {
      resize();
      initStars();
      initClouds();
    };

    const drawNight = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.opacity = 0.3 + 0.7 * ((Math.sin(time * star.twinkleSpeed + star.phase) + 1) / 2);
        star.y -= star.speed;
        if (star.y < -2) star.y = canvas.height + 2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 195, 170, ${star.opacity})`;
        ctx.fill();
      }
    };

    const drawDay = () => {
      // Sky gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#4da6e8");
      grad.addColorStop(0.4, "#7ec8f0");
      grad.addColorStop(0.75, "#b5dff5");
      grad.addColorStop(1, "#d6ecfa");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate clouds
      for (const cloud of clouds) {
        cloud.x += cloud.speed;
        if (cloud.x - cloud.width > canvas.width + 100) {
          cloud.x = -cloud.width - 100;
          cloud.y = Math.random() * canvas.height * 0.65 + canvas.height * 0.05;
        }
        drawCloud(ctx, cloud.x, cloud.y, cloud.width, cloud.height, cloud.opacity);
      }
    };

    const draw = (time: number) => {
      if (theme === "dark") {
        drawNight(time);
      } else {
        drawDay();
      }
      animationId = requestAnimationFrame(draw);
    };

    init();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
