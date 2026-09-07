import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function OrganicCanvas({ variant = "hero", className = "" }) {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Architectural Sleek Geometry (TorusKnot / Structured Ribbon - No Blobs/Jelly)
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.35, 128, 32, 2, 3);

    // Material setup tailored to variant
    let material;

    if (variant === 'cta') {
      material = new THREE.MeshPhysicalMaterial({
        color: 0xF5F1E8,
        roughness: 0.3,
        metalness: 0.2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        wireframe: false,
        side: THREE.DoubleSide,
      });
    } else {
      // Hero default: Architectural Silk Metallic Sculpture (Clean, structured)
      material = new THREE.MeshPhysicalMaterial({
        color: 0x163D32,
        emissive: 0x0A2019,
        roughness: 0.2,
        metalness: 0.5,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
        wireframe: true,
      });
    }

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Subtle Architectural Lights
    const ambientLight = new THREE.AmbientLight(
      variant === 'cta' ? 0x163D32 : 0xF5F1E8, 
      variant === 'cta' ? 1.5 : 1.2
    );
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xFFFFFF, variant === 'cta' ? 2.5 : 1.8);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xD9785B, 1.0);
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    // Track cursor movement smoothly
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.targetX = x * 0.4;
      mouseRef.current.targetY = y * 0.4;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY || 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop with smooth rotation (NO vertex noise morphing / NO jelly blobs)
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Gentle architectural rotation
      const scrollFactor = scrollRef.current * 0.0004;
      mesh.rotation.x = elapsedTime * 0.08 + mouseRef.current.y * 0.2 + scrollFactor;
      mesh.rotation.y = elapsedTime * 0.12 + mouseRef.current.x * 0.2 + scrollFactor * 0.5;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [variant]);

  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
