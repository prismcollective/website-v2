'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HolographicEffectProps {
  className?: string;
}

const HolographicEffect: React.FC<HolographicEffectProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Vertex shader
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment shader
    const fragmentShader = `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      varying vec2 vUv;
      
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,
                           0.366025403784439,
                          -0.577350269189626,
                           0.024390243902439);
        
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      
      void main() {
        float n1 = snoise(vUv * 0.5 + time * 0.05);
        float n2 = snoise(vUv * 0.8 - time * 0.07);
        float circle = length(vUv - 0.5) * 2.0;
        float wave = sin(circle * 3.0 - time * 0.3) * 0.5 + 0.5;
        
        float finalNoise = (n1 * 0.6 + n2 * 0.4) * 0.7 + wave * 0.3;
        finalNoise = smoothstep(0.2, 0.8, finalNoise);
        
        vec3 color = mix(color1, color2, finalNoise);
        color = mix(color, color3, sin(finalNoise * 3.14159 + time) * 0.5 + 0.5);
        
        float shimmer = sin(finalNoise * 8.0 + time * 1.5) * 0.1 + 0.95;
        color *= shimmer;
        
        float highlight = pow(sin(finalNoise * 6.0 + time), 2.0) * 0.2;
        color += vec3(highlight);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const scene = new THREE.Scene();
    
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: false,
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    renderer.domElement.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      display: block;
    `;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x87d9ff) }, // Light blue
        color2: { value: new THREE.Color(0xda70d6) }, // Orchid purple-pink
        color3: { value: new THREE.Color(0xff9ee8) }, // Pink
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height, false);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
      return animationId;
    };

    const animationId = animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
      style={{ 
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
      }}
    />
  );
};

export default HolographicEffect;