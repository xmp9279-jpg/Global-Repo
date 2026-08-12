interface Props {
  navigate: (page: string) => void;
}

export default function JadaPage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-white p-5 font-sans">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Hi my name is{' '}
            <button
              onClick={() => navigate('team-select')}
              className="underline italic hover:text-blue-700 transition-colors cursor-pointer"
            >
              jada
            </button>
          </h1>
          <p className="font-semibold text-gray-800 text-sm mb-3">Fun facts about me 🏐 🏈</p>

          <div className="space-y-2 text-sm text-gray-800">
            <p>I love sports i love playing volleyball and flag football</p>
            <p>I love to learn new skills and to grow as a person</p>
            <p>Im interested in being better at tech</p>
            <p>I love to do art my art work was even at the Barkclay center</p>
          </div>
        </div>

        {/* Knowledge House logo */}
        <div className="flex flex-col items-center flex-shrink-0 ml-4">
          <div className="w-14 h-14 bg-indigo-800 flex items-center justify-center mb-1">
            <svg viewBox="0 0 56 56" className="w-12 h-12">
              <polygon points="28,4 52,24 52,52 4,52 4,24" fill="#f59e0b" />
              <rect x="20" y="34" width="16" height="18" fill="#1e1b4b" />
            </svg>
          </div>
          <p className="font-bold text-gray-900 text-xs text-center leading-tight">THE<br />KNOWLEDGE<br />HOUSE</p>
        </div>
      </div>

      {/* Main 2-column section */}
      <div className="flex gap-4 mb-4">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Pink summary box */}
          <div className="bg-pink-300 rounded p-4 text-sm text-gray-900 leading-relaxed">
            Overall, I am very happy to learn new technologies, improve my HTML skills, and overcome challenges. I enjoy growing both personally and professionally by continuously developing my knowledge and abilities.
          </div>

          {/* Bottom images row */}
          <div className="flex gap-3 items-end mt-auto">
            {/* Thank you card */}
            <div className="w-24 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded flex items-center justify-center text-sm font-bold text-gray-700 italic shadow">
              Thank<br />you
            </div>

            {/* HTML badge */}
            <div className="w-24 h-20 bg-orange-100 border-2 border-orange-300 rounded flex flex-col items-center justify-center">
              <span className="text-orange-600 font-extrabold text-xs">HTML</span>
              <div className="w-10 h-6 bg-orange-500 flex items-center justify-center mt-1">
                <span className="text-white font-bold text-xs">5</span>
              </div>
            </div>

            {/* CSS badge */}
            <div className="w-24 h-20 bg-gray-900 flex flex-col items-center justify-center rounded">
              <span className="text-blue-400 font-extrabold text-xl tracking-widest">CSS</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-3">
          {/* TKH experience box — blue */}
          <div className="bg-blue-300 rounded p-4 text-sm text-gray-900 leading-relaxed flex-1">
            <p className="font-bold text-base mb-2">My experience with TKH</p>
            <p>
              In this program im happy to say i have grown in my overall skills with tech and web design .There has been times where i felt like giving up but with the help of my peers and the community as well as attending office hours it has helped me overcome the mind challenges and learn more about HTML,CSS,AI and even python.
            </p>
          </div>

          {/* Yellow proud box */}
          <div className="bg-yellow-200 rounded p-4 text-sm text-gray-900 leading-relaxed">
            Im most proud of creating my own animation with HTML and CSS because it took me 2 days to complete and i learned a lot of new things during that process.
          </div>
        </div>
      </div>
    </div>
  );
}
