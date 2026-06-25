import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Progress from 0 to 1 over the duration of the composition
  const progress = frame / durationInFrames;

  // We want the animation to loop perfectly, so we use sine and cosine
  // where the angle goes from 0 to 2*PI.
  const angle = progress * Math.PI * 2;

  // Create smooth coordinates for floating orbs
  // Orb 1 (Teal #1D7671 / #83e6d6)
  const orb1X = 50 + 30 * Math.sin(angle);
  const orb1Y = 50 + 20 * Math.cos(angle);

  // Orb 2 (Orange/Red #fd5c3d / #e87858)
  const orb2X = 50 + 25 * Math.sin(angle + Math.PI / 1.5);
  const orb2Y = 50 + 30 * Math.cos(angle * 2 + Math.PI / 1.5);

  // Orb 3 (Dark Blue #0068a1)
  const orb3X = 50 + 35 * Math.sin(angle * 1.5 + Math.PI);
  const orb3Y = 50 + 25 * Math.cos(angle + Math.PI);

  return (
    <AbsoluteFill style={{ backgroundColor: '#ffefd0', overflow: 'hidden' }}>
      {/* Background gradients */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        filter: 'blur(200px)',
        opacity: 0.8,
      }}>
        {/* Orb 1 */}
        <div style={{
          position: 'absolute',
          top: `${orb1Y}%`,
          left: `${orb1X}%`,
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          backgroundColor: '#83e6d6',
          transform: 'translate(-50%, -50%)',
        }} />

        {/* Orb 2 */}
        <div style={{
          position: 'absolute',
          top: `${orb2Y}%`,
          left: `${orb2X}%`,
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          backgroundColor: '#fd5c3d',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
        }} />

        {/* Orb 3 */}
        <div style={{
          position: 'absolute',
          top: `${orb3Y}%`,
          left: `${orb3X}%`,
          width: '80vw',
          height: '80vw',
          borderRadius: '50%',
          backgroundColor: '#0068a1',
          transform: 'translate(-50%, -50%)',
          opacity: 0.4,
        }} />
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
        mixBlendMode: 'overlay',
      }} />
    </AbsoluteFill>
  );
};
