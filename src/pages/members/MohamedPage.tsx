interface Props {
  navigate: (page: string) => void;
}

export default function MohamedPage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-cyan-400 p-5 font-sans">
      {/* Main yellow-bordered text box */}
      <div className="border-4 border-yellow-400 rounded p-5 mb-6 bg-cyan-400">
        <p className="text-gray-900 text-sm leading-relaxed mb-3">
          My Name is{' '}
          <button
            onClick={() => navigate('team-select')}
            className="underline font-semibold hover:text-blue-900 transition-colors cursor-pointer"
          >
            Mohamed
          </button>{' '}
          and through out my journey in this program I have learned many new things. Being introduced to HTML, CSS, and Python has been a major change for me.
        </p>
        <p className="text-gray-900 text-sm leading-relaxed mb-3">
          Prior to this program, I had only had experience with Java script. Each of these languages have taught me something new and helped me better understand technology.
        </p>
        <p className="text-gray-900 text-sm leading-relaxed mb-3">
          One of the most rewarding parts of this journey has been building projects. Creating websites has shown me how ideas can turn into something people can actually use and see. A strength am exploring is actually Figma and a concept I want to explore further is python.
        </p>
        <p className="text-gray-900 text-sm leading-relaxed mb-3">
          Each obstacle has helped me grow and become more confident in my coding skills.
        </p>
        <p className="text-gray-900 text-sm leading-relaxed mb-3">
          Personally, I love to play football but tech has always been of interest of mine. Opportunities are endless which make this field very intriguing. For canvas, I would rate myself a 4/5 because I feel confident in being able to use the tools on there very well.
        </p>
        <p className="text-gray-900 text-sm leading-relaxed mb-3">
          I am proud of being able to be focused on something until I get it done, not letting distractions stop me
        </p>
        <p className="text-gray-900 text-sm leading-relaxed">
          Am proud of my Java script skills and working on python/ HTML
        </p>
      </div>

      {/* Bottom section */}
      <div className="flex gap-4 items-start">
        {/* Code editor screenshot placeholder */}
        <div className="w-64 h-44 bg-gray-900 rounded border border-gray-600 flex-shrink-0 overflow-hidden">
          {/* Fake code editor */}
          <div className="bg-gray-700 px-3 py-1 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-gray-300 text-xs ml-2">script.js</span>
          </div>
          <div className="p-3 text-xs font-mono">
            <p className="text-blue-400">const <span className="text-yellow-300">greet</span> = <span className="text-green-400">() =&gt;</span> {'{'}</p>
            <p className="text-white ml-4">console.<span className="text-yellow-300">log</span>(<span className="text-orange-400">"Hello World"</span>);</p>
            <p className="text-blue-400">{'}'}</p>
            <p className="text-gray-500 mt-2">// My first JS project</p>
            <p className="text-white mt-1">greet();</p>
          </div>
          {/* Concentric circles decoration */}
          <div className="flex justify-center mt-1">
            {[40, 60, 80].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-gray-500 opacity-30"
                style={{ width: size, height: size, margin: 'auto' }}
              />
            ))}
            <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-gray-400" />
          </div>
        </div>

        {/* Right: caption + 3D figure */}
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-gray-900 text-sm leading-relaxed">
            <strong>This was one of my early projects using JavaScript</strong> and I have made better looking ones but this is very important to me because it marked the beginning of my journey in coding.
          </p>

          {/* 3D figure placeholder */}
          <div className="border-2 border-red-500 w-32 h-28 flex items-center justify-center bg-cyan-300 flex-shrink-0 self-end">
            {/* Simple person icon */}
            <svg viewBox="0 0 60 70" className="w-24 h-24">
              <circle cx="30" cy="12" r="10" fill="#4488cc" />
              <ellipse cx="30" cy="45" rx="15" ry="20" fill="#3377bb" />
              <ellipse cx="18" cy="38" rx="6" ry="14" fill="#5599dd" transform="rotate(-20 18 38)" />
              <ellipse cx="42" cy="38" rx="6" ry="14" fill="#5599dd" transform="rotate(20 42 38)" />
              <ellipse cx="22" cy="62" rx="5" ry="10" fill="#2266aa" />
              <ellipse cx="38" cy="62" rx="5" ry="10" fill="#2266aa" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
