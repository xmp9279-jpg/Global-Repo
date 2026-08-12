interface Props {
  navigate: (page: string) => void;
}

export default function XavierPage({ navigate }: Props) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(160deg, #4b2d7a 0%, #3a1f60 50%, #2d1550 100%)' }}>
      {/* Top two bubbles */}
      <div className="flex items-start gap-4 px-6 pt-6 mb-4">
        {/* Top-left light circle bubble */}
        <div
          className="flex-1 rounded-full text-gray-900 p-5 text-sm leading-relaxed"
          style={{ background: '#c8b4e8', minHeight: 140, display: 'flex', alignItems: 'center' }}
        >
          Learning from this program, I feel like my confidence in coding and technology has risen significantly. This program has taught me well and I would rate it a 9/10!
        </div>

        {/* Top-right star + speech bubble */}
        <div className="flex-1 relative">
          {/* Yellow star */}
          <div className="absolute -top-2 -left-4">
            <svg viewBox="0 0 50 50" className="w-10 h-10 fill-yellow-400">
              <polygon points="25,3 30,18 46,18 33,28 38,43 25,33 12,43 17,28 4,18 20,18" />
            </svg>
          </div>
          <div
            className="rounded-2xl text-gray-900 p-4 text-sm leading-relaxed ml-6"
            style={{ background: '#fef08a' }}
          >
            One of my strengths that I have been using lately is my understanding of technology, and this program had led me to further explore it. While still exploring the topics behind coding
          </div>
        </div>
      </div>

      {/* Center Knowledge House icon */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-indigo-900 rounded flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 56 56" className="w-16 h-16">
            <polygon points="28,4 52,24 52,52 4,52 4,24" fill="#f59e0b" />
            <rect x="20" y="34" width="16" height="18" fill="#1e1b4b" />
          </svg>
        </div>
      </div>

      {/* Curved decorative arrows */}
      <div className="flex justify-between px-16 mb-2 pointer-events-none">
        <svg viewBox="0 0 80 60" className="w-20 h-14 opacity-60">
          <path d="M10,50 Q30,10 70,20" stroke="#ffd700" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="65,12 78,20 65,28" fill="#ffd700" />
        </svg>
        <svg viewBox="0 0 80 60" className="w-20 h-14 opacity-60">
          <path d="M70,50 Q50,10 10,20" stroke="#ffd700" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="15,12 2,20 15,28" fill="#ffd700" />
        </svg>
      </div>

      {/* Middle two bubbles */}
      <div className="flex items-start gap-4 px-6 mb-4">
        {/* Middle-left teal bubble */}
        <div
          className="flex-1 rounded-2xl text-gray-900 p-4 text-sm leading-relaxed"
          style={{ background: '#5eead4' }}
        >
          A project me and some fellows have collaborated on were very accomplishing and have made me proud. I've never had any prior experience in coding or designing but after learning these topics wor a couple of weeks, helped me grasp an idea of how to use them.
        </div>

        {/* Yellow star */}
        <div className="flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 50 50" className="w-10 h-10 fill-yellow-400">
            <polygon points="25,3 30,18 46,18 33,28 38,43 25,33 12,43 17,28 4,18 20,18" />
          </svg>
        </div>

        {/* Middle-right dark teal box */}
        <div
          className="flex-1 rounded-2xl text-white p-4 text-sm leading-relaxed"
          style={{ background: '#0d9488' }}
        >
          I'm fulfilled of participating in this opportunity and the chance to meet many fellows and people!
        </div>
      </div>

      {/* Bottom dark panel */}
      <div
        className="mx-4 mb-6 rounded-2xl p-5 flex items-start gap-5"
        style={{ background: '#1a0a2e' }}
      >
        {/* Avatar + name */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <div
            className="w-20 h-20 rounded-full border-4 border-gray-400 overflow-hidden flex items-center justify-center"
            style={{ background: '#f5f5dc' }}
          >
            {/* Stick figure avatar */}
            <svg viewBox="0 0 60 70" className="w-16 h-16">
              <circle cx="30" cy="12" r="10" fill="#333" />
              <line x1="30" y1="22" x2="30" y2="50" stroke="#333" strokeWidth="3" />
              <line x1="30" y1="30" x2="10" y2="45" stroke="#333" strokeWidth="3" />
              <line x1="30" y1="30" x2="50" y2="45" stroke="#333" strokeWidth="3" />
              <line x1="30" y1="50" x2="15" y2="68" stroke="#333" strokeWidth="3" />
              <line x1="30" y1="50" x2="45" y2="68" stroke="#333" strokeWidth="3" />
            </svg>
          </div>
          <button
            onClick={() => navigate('team-select')}
            className="text-white font-bold text-lg underline hover:text-yellow-300 transition-colors cursor-pointer"
            style={{ fontFamily: 'serif' }}
          >
            – Xavier –
          </button>
        </div>

        {/* Bio + tags */}
        <div className="flex-1">
          <p className="text-white text-sm leading-relaxed mb-4">
            Hey! my name is Xavier, I enjoy many things whether they're new or stuff I am returning to. Coding and technology is a good example. As I, myself, am quite interested in the topic of technology. Usually, I help my family whenever they face tech issues. While coding is an entirely new topic I am exploring.
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-1 text-white text-sm">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white"><path d="M10 2L3 7v11h5v-5h4v5h5V7z" /></svg>
              Digital Animation
            </div>
            <div className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-1 text-white text-sm">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white"><path d="M9 3a6 6 0 100 12A6 6 0 009 3zM1 9a8 8 0 1116 0A8 8 0 011 9z" /><path d="M9 6v4l3 2" stroke="white" strokeWidth="1.5" fill="none" /></svg>
              Music Composing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
