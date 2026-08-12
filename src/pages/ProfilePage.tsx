import { Globe } from 'lucide-react';

interface Props {
  navigate: (page: 'home' | 'translator' | 'profile') => void;
}

export default function ProfilePage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-serif">
      {/* Header with nav */}
      <header className="border-b-4 border-gray-800 px-6 py-3 flex items-center gap-8">
        <div className="flex items-center gap-1 text-3xl font-bold tracking-wide text-gray-800">
          GL<Globe className="inline w-8 h-8 text-blue-500" />BAL
        </div>
        <nav className="flex gap-8 text-sm ml-auto">
          <button
            onClick={() => navigate('home')}
            className="underline font-semibold hover:text-teal-700 transition-colors"
          >
            🏠 Home
          </button>
          <button
            onClick={() => navigate('translator')}
            className="underline font-semibold hover:text-teal-700 transition-colors"
          >
            🌐 <span className="underline">Translate</span>
          </button>
          <button
            onClick={() => navigate('profile')}
            className="underline font-semibold hover:text-teal-700 transition-colors"
          >
            👤 <span className="underline">Profile</span>
          </button>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-6 relative">
        {/* Profile info row */}
        <div className="flex items-start gap-4 mb-8">
          {/* Avatar circle — clickable to team select */}
          <button
            onClick={() => navigate('team-select')}
            className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0 border-2 border-gray-500 hover:border-teal-600 hover:scale-105 transition-all cursor-pointer"
            title="Welcome! Which User would you like to sign in today?"
          >
            <svg viewBox="0 0 80 80" className="w-16 h-16 text-gray-200 fill-current">
              <circle cx="40" cy="28" r="16" />
              <ellipse cx="40" cy="70" rx="26" ry="18" />
            </svg>
          </button>
          <div>
            <p className="font-bold italic text-base">Personal Information</p>
            <p className="text-sm text-gray-700">Profile page/name</p>
            <p className="text-sm text-gray-700">Introduce yourself to the WORLD.</p>
          </div>

          {/* SHINE star — top right */}
          <div className="ml-auto flex-shrink-0">
            <div className="relative flex items-center justify-center w-24 h-24">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-yellow-400 fill-current drop-shadow">
                <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
              </svg>
              <span className="relative z-10 font-extrabold text-gray-800 text-base">SHINE</span>
            </div>
          </div>
        </div>

        {/* 4 green boxes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Languages you speak */}
          <div className="border-2 border-green-500 rounded-xl p-5 bg-white">
            <p className="font-semibold text-sm mb-2">Languages you speak (example</p>
            <ul className="text-sm space-y-1 pl-2">
              <li>• 🇺🇸 English</li>
              <li>• 🇪🇸 Spanish</li>
              <li>• 🇫🇷 French</li>
            </ul>
          </div>

          {/* Locate buddy */}
          <div className="border-2 border-green-500 rounded-xl p-5 bg-white flex items-center">
            <p className="font-bold text-lg">
              Locate, Find a language buddy Near U! 👀🔍
            </p>
          </div>

          {/* Language levels */}
          <div className="border-2 border-green-500 rounded-xl p-5 bg-white">
            <p className="font-semibold text-sm mb-2">Language levels (example</p>
            <ul className="text-sm space-y-1 pl-2">
              <li>• 🇺🇸 English – C2</li>
              <li>• 🇪🇸 Spanish – Native</li>
              <li>• 🇫🇷 French – A1</li>
            </ul>
          </div>

          {/* Explore */}
          <div className="border-2 border-green-500 rounded-xl p-5 bg-white flex items-center">
            <p className="font-semibold text-base">
              Explore, Discover languages you never knew about
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
          {/* Cyan languages box */}
          <div className="bg-teal-400 text-white font-extrabold text-2xl px-6 py-8 rounded-sm w-44 text-center leading-tight">
            Languages connect people.
          </div>

          {/* Arrow + text */}
          <div className="flex flex-col items-center flex-1 text-center gap-2">
            <div className="text-4xl font-thin leading-none">↑</div>
            <div className="text-xl mb-1">🙌</div>
            <p className="text-sm text-gray-700">once you start you can only go UP!</p>
          </div>

          {/* Learn Now button */}
          <button className="bg-indigo-700 text-white font-extrabold text-lg rounded-full px-8 py-5 hover:bg-indigo-800 transition-colors">
            learn Now!!
          </button>
        </div>
      </main>
    </div>
  );
}
