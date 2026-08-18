import React, { useEffect, useRef } from "react";

export const FinancialOrbCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates for particle repulsion
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3D Particles for financial sphere & orbital rings
    interface Particle {
      x: number;
      y: number;
      z: number;
      radius: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      color: string;
      speed: number;
      angle: number;
      orbitRadius: number;
      inclination: number;
    }

    const particles: Particle[] = [];
    const numSphereParticles = 140;
    const numRingParticles = 80;
    const sphereRadius = Math.min(width, height) * 0.28;

    // Create Fibonacci sphere particles
    for (let i = 0; i < numSphereParticles; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numSphereParticles);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      const isRed = Math.random() > 0.4;

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: isRed ? Math.random() * 2.2 + 1.2 : Math.random() * 1.5 + 0.8,
        color: isRed ? "#FF3B30" : Math.random() > 0.5 ? "#FF9500" : "#FFFFFF",
        speed: 0.008 + Math.random() * 0.004,
        angle: Math.random() * Math.PI * 2,
        orbitRadius: sphereRadius,
        inclination: 0,
      });
    }

    // Create outer orbital ring particles
    for (let i = 0; i < numRingParticles; i++) {
      const angle = (i / numRingParticles) * Math.PI * 2;
      const orbitR = sphereRadius * (1.35 + Math.sin(i * 3) * 0.15);
      const x = orbitR * Math.cos(angle);
      const z = orbitR * Math.sin(angle);
      const y = Math.sin(angle * 2) * 25;

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: Math.random() * 2 + 1,
        color: i % 2 === 0 ? "#FF3B30" : "#FF6B6B",
        speed: 0.012,
        angle,
        orbitRadius: orbitR,
        inclination: 0.45,
      });
    }

    let rotationAngle = 0;

    const render = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw pulsating core ambient glow
      const pulse = Math.sin(Date.now() * 0.003) * 0.15 + 0.85;
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        sphereRadius * 1.4 * pulse
      );
      gradient.addColorStop(0, "rgba(255, 59, 48, 0.4)");
      gradient.addColorStop(0.35, "rgba(255, 59, 48, 0.15)");
      gradient.addColorStop(0.7, "rgba(255, 149, 0, 0.04)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius * 1.4 * pulse, 0, Math.PI * 2);
      ctx.fill();

      rotationAngle += 0.008;

      // Mouse influence on tilt
      const tiltX = ((mouseY - centerY) / height) * 0.4;
      const tiltY = ((mouseX - centerX) / width) * 0.4;

      // Project & Render 3D particles
      const projected: { x: number; y: number; z: number; radius: number; color: string; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D rotation Y axis
        const cosY = Math.cos(rotationAngle + tiltY);
        const sinY = Math.sin(rotationAngle + tiltY);
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;

        // 3D rotation X axis
        const cosX = Math.cos(tiltX + 0.3);
        const sinX = Math.sin(tiltX + 0.3);
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + z2);

        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;
        const alpha = Math.max(0.15, Math.min(1, (z2 + sphereRadius) / (sphereRadius * 2) * 0.8 + 0.2));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          radius: p.radius * scale,
          color: p.color,
          alpha,
        });
      }

      // Sort by depth (back to front)
      projected.sort((a, b) => a.z - b.z);

      // Draw interconnecting financial node lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i += 3) {
        for (let j = i + 1; j < Math.min(i + 5, projected.length); j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 55) {
            const lineAlpha = (1 - dist / 55) * 0.25 * projected[i].alpha;
            ctx.strokeStyle = `rgba(255, 59, 48, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (const p of projected) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.color === "#FF3B30" ? 12 : 6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[580px] flex items-center justify-center pointer-events-auto">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
