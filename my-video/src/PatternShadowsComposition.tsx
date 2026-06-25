import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

export const PatternShadowsComposition = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = frame / durationInFrames;
  const angle = progress * Math.PI * 2;

  // We apply a CSS filter that turns the colored SVGs into dark shadows.
  // brightness(0) makes them black, opacity(0.06) makes them very faint.
  // The drop-shadow adds a little depth to the shadow itself.
  const shadowFilter = 'brightness(0) opacity(0.06) drop-shadow(0px 20px 30px rgba(0,0,0,0.1)) blur(2px)';

  return (
    <AbsoluteFill style={{ backgroundColor: '#ffefd0', overflow: 'hidden' }}>
      
      {/* Texture overlay to make the background feel premium */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
      }} />

      {/* Shadow Pattern 1 */}
      <Img 
        src={staticFile("svg/art-02-bl.svg")} 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '60vw',
          filter: shadowFilter,
          transform: `translate(${Math.cos(angle) * 80}px, ${Math.sin(angle) * 50}px) rotate(${Math.sin(angle) * 10}deg) scale(${1 + Math.cos(angle)*0.1})`
        }} 
      />

      {/* Shadow Pattern 2 */}
      <Img 
        src={staticFile("svg/art-03-tr.svg")} 
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '70vw',
          filter: shadowFilter,
          transform: `translate(${Math.sin(angle + Math.PI) * 100}px, ${Math.cos(angle + Math.PI) * 70}px) rotate(${Math.cos(angle) * -15}deg) scale(${1 + Math.sin(angle)*0.1})`
        }} 
      />

      {/* Shadow Pattern 3 */}
      <Img 
        src={staticFile("svg/art-01-br.svg")} 
        style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '40vw',
          filter: shadowFilter,
          transform: `translate(${Math.cos(angle * 2) * 40}px, ${Math.sin(angle * 2) * 60}px) rotate(${Math.sin(angle * 2) * 20}deg)`
        }} 
      />

      {/* Shadow Pattern 4 */}
      <Img 
        src={staticFile("svg/art-02-tr.svg")} 
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '50vw',
          filter: shadowFilter,
          transform: `translate(${Math.sin(angle * 1.5) * 60}px, ${Math.cos(angle * 1.5) * 40}px) rotate(${Math.cos(angle * 1.5) * -10}deg)`
        }} 
      />

      {/* Noise overlay to blend the shadows smoothly */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'url(https://grainy-gradients.vercel.app/noise.svg)',
        opacity: 0.25,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />

    </AbsoluteFill>
  );
};
