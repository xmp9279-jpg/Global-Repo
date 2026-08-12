interface Props {
  navigate: (page: string) => void;
}

export default function TeamSelectPage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-teal-700 flex flex-col relative overflow-hidden">
      {/* Welcome text above the circle */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 text-center px-4">
        <p className="text-white font-bold text-lg md:text-xl text-center" style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
          Welcome! Which User would you like to sign in today?
        </p>
      </div>

      {/* Top-left title — clickable back to profile */}
      <div className="px-8 pt-6">
        <button
          onClick={() => navigate('profile')}
          className="text-white font-bold text-2xl md:text-3xl tracking-wide hover:text-yellow-300 transition-colors cursor-pointer text-left"
          style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
        >
          WE ARE THE T –Tech Titans©
        </button>
        <div className="border-b border-white mt-2 w-full opacity-60" />
      </div>

      {/* Name grid + center T */}
      <div className="flex-1 flex items-center justify-center relative px-8 py-6">
        {/* Ripple rings behind the T */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[240, 290, 340, 390, 440].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-yellow-500 opacity-30"
              style={{ width: size, height: size }}
            />
          ))}
          {/* Side wave lines */}
          {[-1, 1].map((side) =>
            [80, 110, 140].map((offset, i) => (
              <div
                key={`${side}-${i}`}
                className="absolute border-l-2 border-yellow-500 opacity-20 rounded-full"
                style={{
                  width: 60,
                  height: 180,
                  left: side === -1 ? `calc(50% - ${offset + 220}px)` : `calc(50% + ${offset + 160}px)`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderRadius: '50%',
                  border: 'none',
                  borderLeft: side === -1 ? '2px solid rgb(234 179 8 / 0.4)' : 'none',
                  borderRight: side === 1 ? '2px solid rgb(234 179 8 / 0.4)' : 'none',
                }}
              />
            ))
          )}
        </div>

        {/* Names layout */}
        <div className="relative w-full max-w-2xl" style={{ minHeight: 420 }}>
          {/* Bianca — top left */}
          <div className="absolute top-0 left-4">
            <button
              onClick={() => navigate('bianca')}
              className="text-white font-bold text-xl underline hover:text-yellow-300 transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
            >
              Bianca
            </button>
          </div>

          {/* Jada — top right */}
          <div className="absolute top-0 right-4">
            <button
              onClick={() => navigate('jada')}
              className="text-white font-bold text-xl underline hover:text-yellow-300 transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
            >
              Jada
            </button>
          </div>

          {/* Xavier — mid left */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <button
              onClick={() => navigate('xavier')}
              className="text-white font-bold text-xl underline hover:text-yellow-300 transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
            >
              Xavier
            </button>
          </div>

          {/* Mohamed — mid right */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <button
              onClick={() => navigate('mohamed')}
              className="text-white font-bold text-xl underline hover:text-yellow-300 transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
            >
              Mohamed
            </button>
          </div>

          {/* Mubarak — bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <button
              onClick={() => navigate('mubarak')}
              className="text-white font-bold text-xl underline hover:text-yellow-300 transition-colors cursor-pointer"
              style={{ fontFamily: 'Georgia, serif', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
            >
              Mubarak
            </button>
          </div>

          {/* Center T circle */}
          <div className="flex items-center justify-center" style={{ minHeight: 420 }}>
            <div
              className="rounded-full flex items-center justify-center relative"
              style={{
                width: 240,
                height: 240,
                background: 'radial-gradient(circle at 35% 35%, #2a1a00, #000)',
                border: '12px solid #d4a017',
                boxShadow: '0 0 40px rgba(212,160,23,0.4), inset 0 0 30px rgba(0,0,0,0.6)',
              }}
            >
              {/* Circuit board texture overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 240 240">
                <line x1="60" y1="0" x2="60" y2="240" stroke="#00ffcc" strokeWidth="0.5" />
                <line x1="120" y1="0" x2="120" y2="240" stroke="#00ffcc" strokeWidth="0.5" />
                <line x1="180" y1="0" x2="180" y2="240" stroke="#00ffcc" strokeWidth="0.5" />
                <line x1="0" y1="60" x2="240" y2="60" stroke="#00ffcc" strokeWidth="0.5" />
                <line x1="0" y1="120" x2="240" y2="120" stroke="#00ffcc" strokeWidth="0.5" />
                <line x1="0" y1="180" x2="240" y2="180" stroke="#00ffcc" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="3" fill="#00ffcc" />
                <circle cx="180" cy="60" r="3" fill="#00ffcc" />
                <circle cx="60" cy="180" r="3" fill="#00ffcc" />
                <circle cx="180" cy="180" r="3" fill="#00ffcc" />
              </svg>
              {/* Big T */}
              <span
                className="relative z-10 font-extrabold select-none"
                style={{
                  fontSize: 140,
                  color: '#d4a017',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(212,160,23,0.6)',
                  fontFamily: 'Impact, Arial Black, sans-serif',
                }}
              >
                T
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
