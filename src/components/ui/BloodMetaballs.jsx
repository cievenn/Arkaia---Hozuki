import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
uniform float u_time;
uniform vec2 u_resolution;

// Pseudo-random noise function
float random(in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    // Normalize coordinates
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    // Aspect ratio correction
    vec2 p = uv;
    p.x *= u_resolution.x / u_resolution.y;

    float sum = 0.0;
    
    // Generate 8 animated blobs
    for(int i = 0; i < 8; i++) {
        float fi = float(i);
        
        // Distribute bases mainly in the lower area
        float baseX = random(vec2(fi, 1.0)) * (u_resolution.x / u_resolution.y);
        float baseY = 0.7 + random(vec2(fi, 2.0)) * 0.3;
        
        // Different speeds and offsets
        float speed = 0.2 + random(vec2(fi, 3.0)) * 0.4;
        float offsetTime = u_time * speed + random(vec2(fi, 4.0)) * 10.0;
        
        vec2 pos = vec2(
            baseX + sin(offsetTime * 0.8) * 0.2,
            baseY + cos(offsetTime) * 0.2
        );
        
        float radius = 0.08 + random(vec2(fi, 5.0)) * 0.06;
        
        float dist = distance(p, pos);
        sum += (radius * radius) / (dist * dist);
    }
    
    // Smooth thresholding for metaballs effect
    float alpha = smoothstep(0.4, 0.9, sum);
    
    // Gradient from darker cyan on the edges to bright cyan in the center
    vec3 colorEdge = vec3(0.024, 0.714, 0.831); // rgba(6, 182, 212)
    vec3 colorCenter = vec3(0.133, 0.827, 0.933); // rgba(34, 211, 238)
    vec3 finalColor = mix(colorEdge, colorCenter, smoothstep(0.7, 1.5, sum));
    
    // Soft overall opacity
    gl_FragColor = vec4(finalColor, alpha * 0.2);
}
`;

const vertexShader = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

const MetaballsMaterial = () => {
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
      // Keep resolution uniform updated
      materialRef.current.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      transparent={true}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  );
};

export const BloodMetaballs = ({ count = 8, className = '' }) => {
  return (
    <>
      {/* 
        WebGL Canvas taking over the metaballs effect 
        Performance is drastically improved as calculations are done on the GPU 
      */}
      <div
        className={\`fixed inset-0 pointer-events-none z-0 overflow-hidden \${className}\`}
        aria-hidden="true"
        style={{ mixBlendMode: 'screen' }}
      >
        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
          <mesh>
            <planeGeometry args={[2, 2]} />
            <MetaballsMaterial />
          </mesh>
        </Canvas>
      </div>

      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, transparent 20%, rgba(2,6,23,0.95) 100%)',
        }}
      />
    </>
  );
};
