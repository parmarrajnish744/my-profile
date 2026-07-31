"use client";

import React, { useEffect, useRef } from "react";

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    function syncSize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    syncSize();
    window.addEventListener("resize", syncSize);

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        vec2 mouseNorm = u_mouse / u_resolution;
        
        // Organic moving blobs using sine/cosine and time
        float noise1 = sin(uv.x * 3.0 + u_time * 0.4 + mouseNorm.x * 1.5) * cos(uv.y * 2.0 + u_time * 0.3 + mouseNorm.y * 1.5);
        float noise2 = sin(uv.y * 4.0 - u_time * 0.35) * cos(uv.x * 3.0 + u_time * 0.5);
        
        // Deep Space Background (#0b1326)
        vec3 color = vec3(0.043, 0.074, 0.149);
        
        // Primary Blue Glow (#3B82F6)
        vec3 primary = vec3(0.23, 0.51, 0.96);
        float glow1 = smoothstep(0.25, 0.85, noise1 + 0.5);
        color = mix(color, primary, glow1 * 0.35);
        
        // Secondary Purple Glow (#8B5CF6)
        vec3 secondary = vec3(0.54, 0.36, 0.96);
        float glow2 = smoothstep(0.35, 0.9, noise2 + 0.5);
        color = mix(color, secondary, glow2 * 0.25);
        
        // Accent Cyan Glow (#06B6D4)
        vec3 accent = vec3(0.02, 0.71, 0.83);
        float glow3 = smoothstep(0.55, 1.0, (noise1 * noise2) + 0.5);
        color = mix(color, accent, glow3 * 0.2);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vertShader = compileShader(gl.VERTEX_SHADER, vsSource);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(prog, "u_time");
    const uResLoc = gl.getUniformLocation(prog, "u_resolution");
    const uMouseLoc = gl.getUniformLocation(prog, "u_mouse");

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = window.innerHeight - e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTimeLoc) gl.uniform1f(uTimeLoc, t * 0.001);
      if (uResLoc) gl.uniform2f(uResLoc, canvas.width, canvas.height);
      if (uMouseLoc) gl.uniform2f(uMouseLoc, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", syncSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60 dark:opacity-40 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/30 to-background pointer-events-none" />
    </div>
  );
}
