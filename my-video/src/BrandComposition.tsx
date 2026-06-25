import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Img, staticFile, spring } from 'remotion';

export const BrandComposition = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const progress = frame / durationInFrames;
  const angle = progress * Math.PI * 2;

  // Floating animations
  const floatY1 = Math.sin(angle) * 30;
  const floatX1 = Math.cos(angle) * 30;
  
  const floatY2 = Math.sin(angle + Math.PI) * 40;
  const floatX2 = Math.cos(angle + Math.PI) * 20;

  // Fade in the text
  const textOpacity = spring({
    frame: frame - 15,
    fps,
    config: { damping: 100 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#ffefd0', overflow: 'hidden' }}>
      
      {/* Background soft glow based on brand colors */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '60vw',
        height: '60vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(131,230,214,0.4) 0%, rgba(255,239,208,0) 70%)',
        transform: `translate(${floatX1}px, ${floatY1}px)`,
        filter: 'blur(80px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '70vw',
        height: '70vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29,118,113,0.3) 0%, rgba(255,239,208,0) 70%)',
        transform: `translate(${floatX2}px, ${floatY2}px)`,
        filter: 'blur(100px)'
      }} />

      {/* Floating SVGs */}
      <Img 
        src={staticFile("svg/art-02-bl.svg")} 
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '25vw',
          opacity: 0.8,
          transform: `translate(${Math.cos(angle * 2) * 20}px, ${Math.sin(angle * 2) * 20}px) rotate(${Math.sin(angle) * 5}deg)`
        }} 
      />

      <Img 
        src={staticFile("svg/art-03-tl.svg")} 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '30vw',
          opacity: 0.7,
          transform: `translate(${Math.sin(angle * 1.5) * 30}px, ${Math.cos(angle * 1.5) * 30}px) rotate(${Math.cos(angle) * -10}deg)`
        }} 
      />

      <Img 
        src={staticFile("svg/art-01-tr.svg")} 
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          width: '20vw',
          opacity: 0.6,
          transform: `translate(${Math.sin(angle * 3) * 15}px, ${Math.cos(angle * 3) * 15}px) rotate(${Math.sin(angle) * 15}deg)`
        }} 
      />

      {/* Elegant Typography fading in behind the main content (so it acts like a watermark/background element) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: textOpacity * 0.15, // Keep it subtle so it's a background
        transform: `scale(${1 + Math.sin(angle) * 0.05})`
      }}>
        <h1 style={{
          fontSize: '12vw',
          color: '#1D7671',
          margin: 0,
          fontWeight: 900,
          fontFamily: 'sans-serif',
          textShadow: '0px 10px 30px rgba(29,118,113,0.3)',
        }} dir="rtl">
          الاندية الشبابية
        </h1>
      </div>
      
      {/* Noise overlay for premium feel */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
        opacity: 0.4,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />

    </AbsoluteFill>
  );
};
