import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

const ParticleNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const getParticleCount = () => {
            const area = window.innerWidth * window.innerHeight;
            return Math.min(Math.max(Math.floor(area / 12000), 40), 120);
        };

        const createParticles = () => {
            const count = getParticleCount();
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: Math.random() * 2 + 1,
                });
            }
        };

        const connectDistance = 180;

        const drawTriangles = (ctx: CanvasRenderingContext2D) => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx1 = particles[i].x - particles[j].x;
                    const dy1 = particles[i].y - particles[j].y;
                    const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                    if (dist1 > connectDistance) continue;

                    for (let k = j + 1; k < particles.length; k++) {
                        const dx2 = particles[i].x - particles[k].x;
                        const dy2 = particles[i].y - particles[k].y;
                        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                        if (dist2 > connectDistance) continue;

                        const dx3 = particles[j].x - particles[k].x;
                        const dy3 = particles[j].y - particles[k].y;
                        const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
                        if (dist3 > connectDistance) continue;

                        const avgDist = (dist1 + dist2 + dist3) / 3;
                        const opacity = Math.max(0, 1 - avgDist / connectDistance) * 0.06;

                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.lineTo(particles[k].x, particles[k].y);
                        ctx.closePath();
                        ctx.fillStyle = `rgba(30, 144, 255, ${opacity})`;
                        ctx.fill();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update positions
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Keep in bounds
                p.x = Math.max(0, Math.min(canvas.width, p.x));
                p.y = Math.max(0, Math.min(canvas.height, p.y));
            });

            // Draw filled triangles
            drawTriangles(ctx);

            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectDistance) {
                        const opacity = (1 - dist / connectDistance) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(30, 144, 255, ${opacity})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            // Draw glowing nodes
            particles.forEach((p) => {
                // Outer glow
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
                gradient.addColorStop(0, "rgba(30, 144, 255, 0.3)");
                gradient.addColorStop(1, "rgba(30, 144, 255, 0)");
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(65, 105, 225, 0.8)";
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        resize();
        createParticles();
        animate();

        const handleResize = () => {
            resize();
            createParticles();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: "transparent" }}
        />
    );
};

export default ParticleNetwork;
