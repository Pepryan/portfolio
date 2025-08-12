"use client";
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/portfolio';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center text-center p-8">
      <div className="text-6xl mb-4 animate-bounce">🍉</div>

      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 via-green-400 to-blue-500 bg-clip-text text-transparent">
        404
      </h1>

      <p className="text-xl mb-4 text-gray-300">Halaman tidak ditemukan</p>
      <p className="text-lg mb-8 text-gray-400">Semua halaman telah dihentikan untuk solidaritas #FreePalestine</p>

      <div className="text-blue-400 mb-4">
        Mengalihkan ke halaman utama dalam: <span className="text-red-400 font-bold text-xl">{timeLeft}</span> detik
      </div>
    </div>
  );
}
