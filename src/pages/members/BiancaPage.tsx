interface Props {
  navigate: (page: string) => void;
}

export default function BiancaPage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-purple-300 p-5 font-sans">
      {/* Header row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h1 className="font-extrabold text-gray-900 text-xl mb-1">
            Hi !! My name is{' '}
            <button
              onClick={() => navigate('team-select')}
              className="underline hover:text-purple-900 transition-colors cursor-pointer"
            >
              Bianca
            </button>
          </h1>
          <p className="text-gray-900 text-sm leading-relaxed max-w-lg">
            This is my first time learning about coding. I had no previous coding experience, so basically this program has allowed me to learning something new.
          </p>
        </div>
        {/* Knowledge House logo */}
        <div className="flex-shrink-0 flex flex-col items-center ml-4">
          <div className="w-14 h-14 bg-indigo-800 flex items-center justify-center mb-1">
            <svg viewBox="0 0 56 56" className="w-12 h-12">
              <polygon points="28,4 52,24 52,52 4,52 4,24" fill="#f59e0b" />
              <rect x="20" y="34" width="16" height="18" fill="#1e1b4b" />
              <circle cx="40" cy="12" r="6" fill="#f59e0b" opacity="0.7" />
            </svg>
          </div>
          <p className="font-bold text-gray-900 text-xs text-center leading-tight">THE<br />KNOWLEDGE<br />HOUSE</p>
        </div>
      </div>

      {/* "About me" oval + connecting lines area */}
      <div className="flex justify-center mb-3">
        <div className="bg-pink-200 rounded-full px-8 py-2 border-2 border-gray-800 font-bold text-gray-900 text-sm shadow">
          About me
        </div>
      </div>

      {/* 3-column middle section */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {/* Left — terracotta/orange */}
        <div className="bg-orange-700 text-white rounded p-3 text-sm leading-relaxed">
          <p className="mb-2">What I learned through this program is to manage and control the different elements of:</p>
          <div className="flex items-start justify-between gap-2">
            <ul className="space-y-1">
              <li className="ml-3">HTML</li>
              <li className="ml-3">CSS</li>
              <li className="ml-3">Codedex</li>
              <li className="ml-3">Python</li>
            </ul>
            {/* Code window icon */}
            <div className="w-14 h-10 bg-blue-800 rounded flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 40 28" className="w-12 h-8">
                <rect width="40" height="28" rx="3" fill="#1e3a5f" />
                <rect x="0" y="0" width="40" height="6" rx="2" fill="#2d5986" />
                <circle cx="4" cy="3" r="1.5" fill="#ef4444" />
                <circle cx="9" cy="3" r="1.5" fill="#f59e0b" />
                <circle cx="14" cy="3" r="1.5" fill="#22c55e" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="4" y1="16" x2="16" y2="16" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="4" y1="20" x2="18" y2="20" stroke="#60a5fa" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Center — cyan */}
        <div className="bg-cyan-400 rounded p-3 text-sm">
          <p className="font-bold text-yellow-600 mb-1">✏️ Things I value</p>
          <p>Creativity</p>
          <p>Continuous Learning</p>
          <p>Teamwork</p>
          <div className="flex justify-center my-2">
            <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-xl">♡</div>
          </div>
          <p className="font-bold text-pink-700 mb-1">📍 Fun Facts</p>
          <p className="text-xs">I really love trying new experiences.</p>
          <p className="text-xs">I enjoy being creative.</p>
          <p className="text-xs">I really like learn programming elements.</p>
        </div>

        {/* Right — teal */}
        <div className="bg-teal-500 text-white rounded p-3 text-sm leading-relaxed">
          <p className="font-bold text-yellow-300 mb-2">🏆 Achievements</p>
          <p className="mb-1">Designed multiple app projects.</p>
          <p className="mb-1">Balanced work and school successfully.</p>
          <p>Completed my first coding program.</p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex gap-3 items-end">
        {/* Left terracotta box */}
        <div className="bg-orange-700 text-white rounded p-3 text-sm leading-relaxed flex-1 max-w-xs">
          This program taught me how to built animations and new applications that integrate coding and IA functions. Regardless, It also taught me to become more persistent, improve my coding skills and my ability to create new ideas for app design.
        </div>

        {/* Code icon */}
        <div className="flex items-center justify-center">
          <div className="w-20 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 60 40" className="w-16 h-10">
              <rect width="60" height="40" rx="4" fill="#1e293b" />
              <text x="8" y="28" fontSize="20" fill="#22c55e" fontFamily="monospace" fontWeight="bold">{'</>'}</text>
            </svg>
          </div>
        </div>

        {/* Pink proud box */}
        <div className="bg-pink-500 text-white rounded-xl p-4 text-sm font-semibold leading-relaxed flex-1 text-center">
          I'm proud of how much I have grown through this program I started with no coding knowledge, and now I can create projects using HTML, CSS and Python.
        </div>
      </div>
    </div>
  );
}
