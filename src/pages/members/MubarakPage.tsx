interface Props {
  navigate: (page: string) => void;
}

export default function MubarakPage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-sky-400 flex flex-col p-6 gap-4">
      {/* Top row */}
      <div className="flex items-start gap-4">
        {/* Image placeholder */}
        <div className="w-36 h-28 bg-gray-200 border border-gray-400 flex items-center justify-center flex-shrink-0 text-xs text-gray-500 text-center">
          Image place holder
        </div>

        {/* Name + arrow */}
        <div className="flex-1 relative">
          <div className="flex items-center gap-3">
            {/* Arrow */}
            <svg viewBox="0 0 200 30" className="w-40 h-8 flex-shrink-0">
              <defs>
                <linearGradient id="arrowGold" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#b8860b" />
                  <stop offset="100%" stopColor="#ffd700" />
                </linearGradient>
              </defs>
              <line x1="0" y1="15" x2="170" y2="15" stroke="url(#arrowGold)" strokeWidth="3" />
              <polygon points="170,6 200,15 170,24" fill="#c8a000" />
            </svg>
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
              Yo! Hello! Im{' '}
              <button
                onClick={() => navigate('team-select')}
                className="underline hover:text-blue-900 transition-colors cursor-pointer"
              >
                Mubarak
              </button>
            </h1>
          </div>
        </div>

        {/* Knowledge House logo */}
        <div className="w-44 h-28 bg-yellow-50 border border-gray-300 flex flex-col items-center justify-center flex-shrink-0 p-2">
          <div className="w-10 h-10 bg-indigo-700 flex items-center justify-center mb-1">
            <svg viewBox="0 0 40 40" className="w-8 h-8 fill-yellow-400">
              <path d="M20 5 L35 18 L35 35 L5 35 L5 18 Z" />
              <rect x="15" y="25" width="10" height="10" fill="#1e1b4b" />
            </svg>
          </div>
          <p className="font-bold text-gray-800 text-xs text-center leading-tight">THE<br />KNOWLEDGE<br />HOUSE</p>
        </div>
      </div>

      {/* Bio text */}
      <div className="bg-sky-400">
        <p className="underline text-gray-900 text-sm leading-relaxed mb-2" style={{ fontFamily: 'serif' }}>
          Before this I did have some coding experience making a few little games on Code.Org when I was younger. Came here not fully knowing code like I used to since then.
        </p>
        <p className="font-semibold text-gray-900 text-sm mb-2" style={{ fontFamily: 'serif' }}>Now Im confident I can</p>
        <ul className="text-sm text-gray-900 space-y-1 pl-2" style={{ fontFamily: 'serif' }}>
          <li>• Brainstorm an Idea and implement it with HTML and Python</li>
          <li>• Design the idea with CSS</li>
          <li>• Troubleshoot problems after (Might take a bit but it could be done)</li>
        </ul>
      </div>

      {/* Bottom row */}
      <div className="flex items-end gap-4 mt-auto">
        {/* Yellow/fire blob image */}
        <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              background: 'radial-gradient(ellipse at bottom, #ff4500 0%, #ff8c00 30%, #ffd700 60%, #fffacd 100%)',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            }}
          />
        </div>

        {/* Arrow diagonal */}
        <div className="flex-1 flex items-end justify-end pr-12 pb-4">
          <svg viewBox="0 0 200 200" className="w-48 h-48 opacity-70">
            <defs>
              <linearGradient id="arrowGold2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#b8860b" />
                <stop offset="100%" stopColor="#ffd700" />
              </linearGradient>
            </defs>
            <line x1="30" y1="30" x2="160" y2="160" stroke="url(#arrowGold2)" strokeWidth="4" />
            <polygon points="148,165 175,145 165,172" fill="#c8a000" />
          </svg>
        </div>

        {/* Bottom-right grey box */}
        <div className="w-56 h-36 bg-gray-200 border border-gray-300 flex-shrink-0" />
      </div>
    </div>
  );
}
