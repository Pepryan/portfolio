"use client";
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

// Watermelon Seeds Component
function WatermelonSeeds() {
  const [seeds, setSeeds] = useState([]);

  useEffect(() => {
    const createSeed = () => {
      const seed = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 2
      };

      setSeeds(prev => [...prev, seed]);

      setTimeout(() => {
        setSeeds(prev => prev.filter(s => s.id !== seed.id));
      }, 5000);
    };

    const interval = setInterval(createSeed, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {seeds.map(seed => (
        <div
          key={seed.id}
          className="absolute w-1 h-1.5 bg-gray-800 rounded-full"
          style={{
            left: `${seed.left}%`,
            animation: `fall ${seed.animationDuration}s linear infinite`,
            animationDelay: `${seed.animationDelay}s`
          }}
        />
      ))}
    </div>
  );
}

// Palestine Flag Component
function PalestineFlag() {
  return (
    <div className="inline-block w-15 h-10 mx-2 relative rounded border overflow-hidden shadow-lg">
      <div className="absolute top-0 left-0 w-full h-1/3 bg-black"></div>
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-green-600"></div>
      <div className="absolute left-0 top-0 w-0 h-0 border-t-[20px] border-b-[20px] border-l-[25px] border-t-transparent border-b-transparent border-l-red-600"></div>
    </div>
  );
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(20);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef(null);
  const timeLeftRef = useRef(20);

  // Update ref when timeLeft changes
  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  useEffect(() => {
    setMounted(true);

    // Countdown timer
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          window.location.href = 'https://febryan.web.id';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Block navigation
    const handleBeforeUnload = (e) => {
      if (timeLeftRef.current > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const handlePopState = () => {
      history.pushState(null, null, location.href);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    history.pushState(null, null, location.href);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Manual redirect
  const redirectNow = () => {
    window.location.href = 'https://febryan.web.id';
  };

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Redirecting... | #FreePalestine</title>
        <meta httpEquiv="refresh" content="10;url=https://febran.web.id" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, #ff6b6b 2px, transparent 2px),
                radial-gradient(circle at 80% 70%, #ff6b6b 1px, transparent 1px),
                radial-gradient(circle at 40% 80%, #ff6b6b 1.5px, transparent 1.5px)
              `,
              backgroundSize: '100px 100px, 150px 150px, 80px 80px',
              animation: 'float 20s ease-in-out infinite'
            }}
          />
        </div>

        {/* Falling Seeds */}
        <WatermelonSeeds />

        <div className="text-center z-10 max-w-4xl px-4">
          {/* Watermelon */}
          <div className="text-8xl mb-8 animate-bounce filter drop-shadow-lg">
            🍉
          </div>

          {/* Main Title */}
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-green-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            #FreePalestine
          </h1>

          {/* Palestine Flag */}
          <PalestineFlag />

          {/* Subtitle */}
          <p className="text-2xl mb-8 text-gray-300">
            Solidaritas untuk Palestina yang Merdeka
          </p>

          {/* Message */}
          <div className="text-xl leading-relaxed mb-8 text-gray-200">
            <p className="mb-4">Proyek Blog NextJS ini telah dihentikan sebagai bentuk solidaritas.</p>
            <p className="mb-4">Kebebasan Palestina adalah hak asasi manusia yang tidak dapat ditawar.</p>
            <p className="text-2xl">🕊️ From the river to the sea, Palestine will be free 🕊️</p>
          </div>

          {/* Redirect Info */}
          <div className="text-lg text-blue-400 mb-4">
            Anda akan dialihkan ke{' '}
            <a href="https://febryan.web.id" className="text-blue-300 hover:text-red-400 font-bold transition-colors">
              febryan.web.id
            </a>
            {' '}dalam:
          </div>

          {/* Countdown */}
          <div className="text-4xl font-bold text-red-400 mb-6">
            {timeLeft} detik
          </div>

          {/* Control Button */}
          <div className="flex justify-center items-center mb-8">
            {/* Redirect Now Button */}
            <button
              onClick={redirectNow}
              className="group relative px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/30"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span className="text-lg">Pergi Sekarang</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="fixed bottom-5 right-5 max-w-xs bg-black bg-opacity-80 p-4 rounded-lg text-sm text-gray-300 opacity-0 animate-fade-in-delayed border border-gray-600">
          <div className="mb-2">💡 <strong className="text-yellow-400">Tahukah kamu?</strong></div>
          <div className="mb-2 text-gray-200">
            CEO Vercel (NextJS) mendukung zionis. Mari dukung alternatif yang lebih etis untuk masa depan web yang lebih baik.
          </div>
          <div className="text-xs text-green-400 mb-2">
            🍉 Semangka = simbol solidaritas Palestina
          </div>
          <div className="text-xs text-blue-400">
            Website baru: <span className="font-bold">febryan.web.id</span>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes fall {
            0% {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(2deg);
            }
          }

          @keyframes fade-in-delayed {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .animate-fade-in-delayed {
            animation: fade-in-delayed 2s ease-in-out 5s forwards;
          }
        `}</style>
      </div>
    </>
  );
}