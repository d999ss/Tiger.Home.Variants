'use client';

import { useEffect, useRef, useState } from 'react';

export default function PageLoader() {
  const circleRef = useRef<SVGCircleElement>(null);
  const glowCircleRef = useRef<SVGCircleElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [solidLine, setSolidLine] = useState(false);

  // Get video duration when it loads
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // If already loaded
    if (video.readyState >= 1) {
      setVideoDuration(video.duration);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // Animate the circle based on video duration
  useEffect(() => {
    if (!circleRef.current || !glowCircleRef.current || !videoDuration) return;

    const radius = circleRef.current.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const glowLength = circumference * 0.08; // Glow covers 8% of circle (shorter, tighter)
    const totalDistance = circumference * 2; // Two full rotations

    let progress = 0;
    const duration = videoDuration * 1000; // Match full video duration
    const interval = 30;
    const baseSpeed = totalDistance / (duration / interval);
    let currentSpeed = baseSpeed;

    // Start with no visible stroke
    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = `0, ${circumference}`;
      circleRef.current.style.strokeDashoffset = '0';
    }

    // Setup glow circle
    if (glowCircleRef.current) {
      glowCircleRef.current.style.strokeDasharray = `${glowLength}, ${circumference}`;
      glowCircleRef.current.style.strokeDashoffset = '0';
    }

    const timer = setInterval(() => {
      const progressRatio = progress / totalDistance;

      // Ease in at the start (first 10%) - start at 50% speed, not 0%
      if (progressRatio < 0.1) {
        const easeInFactor = 0.5 + (progressRatio / 0.1) * 0.5; // 0.5 to 1
        currentSpeed = baseSpeed * easeInFactor;
      }
      // Ease out at the end (last 20%)
      else if (progressRatio > 0.8) {
        const easeOutFactor = 1 - ((progressRatio - 0.8) / 0.2) * 0.7; // Slow to 30% speed
        currentSpeed = baseSpeed * easeOutFactor;
      }
      // Full speed in the middle
      else {
        currentSpeed = baseSpeed;
      }

      progress += currentSpeed;

      // When we've completed two rotations, stop and exit
      if (progress >= totalDistance) {
        if (circleRef.current) {
          circleRef.current.style.strokeDasharray = `${circumference}, ${circumference}`;
        }
        if (glowCircleRef.current) {
          glowCircleRef.current.style.strokeDasharray = `0, ${circumference}`;
        }
        clearInterval(timer);

        // Fade line to fully solid bright over 600ms (the crescendo!)
        setTimeout(() => {
          setSolidLine(true);
        }, 200);

        // Hold for much longer - 8 seconds to really let the dramatic moment sit, then fade out
        setTimeout(() => setIsLoading(false), 8800);
        return;
      }

      if (circleRef.current) {
        // Show the full circle (always complete after first rotation)
        const visibleLength = Math.min(progress, circumference);
        circleRef.current.style.strokeDasharray = `${visibleLength}, ${circumference}`;
      }

      if (glowCircleRef.current) {
        // Move the glowing segment to follow the drawing head
        const glowOffset = -progress;
        glowCircleRef.current.style.strokeDashoffset = `${glowOffset}`;
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [videoDuration]);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative w-[100px] h-[100px] md:w-[132px] md:h-[132px]">
        {/* SVG with mask and ring */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <mask id="circleMask">
              <circle cx="50" cy="50" r="49.5" fill="white" />
            </mask>
          </defs>

          {/* Video inside mask */}
          <foreignObject x="0" y="0" width="100" height="100" mask="url(#circleMask)">
            <div className="w-full h-full flex items-center justify-center bg-black overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  animation: 'slowZoom 9s ease-in-out forwards'
                }}
              >
                <source src="/tiger-animation.mp4" type="video/mp4" />
              </video>
            </div>
          </foreignObject>
          <style>{`
            @keyframes slowZoom {
              from {
                transform: scale(1.1) translateY(0);
              }
              to {
                transform: scale(1.5) translateY(-5%);
              }
            }
          `}</style>
        </svg>

        {/* Black overlay with circular cutout to hide white edges */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <defs>
            <mask id="overlayMask">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              <circle cx="50" cy="50" r="45.5" fill="black" />
            </mask>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="black" mask="url(#overlayMask)" />
        </svg>

        {/* Ring Loader */}
        <svg
          className="absolute top-1/2 left-1/2 w-[calc(100%+60px)] h-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 -rotate-90 pointer-events-none"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              {/* Outer glow */}
              <feGaussianBlur stdDeviation="4" result="outerBlur"/>
              {/* Medium glow */}
              <feGaussianBlur stdDeviation="2" result="mediumBlur"/>
              {/* Inner glow */}
              <feGaussianBlur stdDeviation="1" result="innerBlur"/>
              <feMerge>
                <feMergeNode in="outerBlur"/>
                <feMergeNode in="mediumBlur"/>
                <feMergeNode in="innerBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            {/* Gradient for the line - fades from light (oldest) to dark (newest) */}
            <linearGradient id="lineGradient" gradientTransform="rotate(-90)">
              <stop offset="0%" style={{ stopColor: '#DC2626', stopOpacity: 0.2 }} />
              <stop offset="30%" style={{ stopColor: '#DC2626', stopOpacity: 0.5 }} />
              <stop offset="70%" style={{ stopColor: '#DC2626', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
            </linearGradient>
            {/* Gradient for the glow trail - smooth fade */}
            <linearGradient id="trailGradient">
              <stop offset="0%" style={{ stopColor: '#DC2626', stopOpacity: 0.3 }} />
              <stop offset="40%" style={{ stopColor: '#EF4444', stopOpacity: 0.8 }} />
              <stop offset="70%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FF8888', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Inner shadow circle - only visible when solid */}
          {solidLine && (
            <circle
              cx="50%"
              cy="50%"
              r="38.4%"
              fill="none"
              stroke="black"
              strokeWidth="8"
              strokeOpacity="0.3"
              style={{
                filter: 'blur(8px)',
                transform: 'scale(0.98)',
                transformOrigin: 'center'
              }}
            />
          )}

          {/* Solid line that was already drawn (with fade effect) */}
          <circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r="38.4%"
            fill="none"
            stroke={solidLine ? '#FF4500' : 'url(#lineGradient)'}
            strokeWidth={solidLine ? 5 : 2}
            strokeLinecap="butt"
            style={{
              transition: 'stroke-width 600ms ease-in-out, stroke 600ms ease-in-out, filter 600ms ease-in-out',
              filter: solidLine ? 'drop-shadow(0 0 8px rgba(255, 69, 0, 1)) drop-shadow(0 0 16px rgba(255, 140, 0, 0.8)) drop-shadow(0 0 32px rgba(255, 69, 0, 0.4))' : 'none'
            }}
          />

          {/* Glowing trail at the drawing head */}
          <circle
            ref={glowCircleRef}
            cx="50%"
            cy="50%"
            r="38.4%"
            fill="none"
            stroke="url(#trailGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
          />
        </svg>
      </div>
    </div>
  );
}
