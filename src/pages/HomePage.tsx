import { Globe, Home, User } from 'lucide-react';

interface Props {
  navigate: (page: 'home' | 'translator' | 'profile') => void;
}

export default function HomePage({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-serif">
      {/* Header */}
      <header className="border-b-4 border-teal-700 px-6 py-3 flex items-center gap-3">
        <div className="w-10 h-10 bg-teal-800 flex items-center justify-center text-white font-bold text-lg rounded-sm">T</div>
        <div className="flex items-center gap-1 text-3xl font-bold tracking-wide text-gray-800">
          GL<Globe className="inline w-8 h-8 text-blue-500" />BAL
        </div>
        <span className="ml-4 text-teal-600 italic text-base tracking-widest hidden sm:block">
          Your community just a few taps away.
        </span>
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 py-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Left text */}
          <div className="flex-1 text-sm leading-relaxed text-gray-800">
            <p className="font-semibold mb-2">The Global App is simple.</p>
            <p className="font-bold mb-2">
              All you have to do is type or speak in your native language and the
              system in the app will translate what you said into the language you want.
            </p>
            <p className="mb-2">
              The Same could be done with taking a picture of something with a
              language you don't know and it will be translated so you could understand what you see.
            </p>
            <p className="mb-2">
              This app is very flexiable and has a positive impact on the world.
            </p>
            <p>
              Our services offers a wide range of languages to begin learning or
              translating and you can begin at anytime for free!
            </p>
          </div>

          {/* Right green box */}
          <div className="w-full md:w-64 bg-green-500 text-white font-bold text-xl text-center flex items-center justify-center rounded p-6 min-h-36">
            Helping the world understand each other using language as our power.
          </div>
        </div>

        {/* Blue/purple translator banner */}
        <div className="bg-blue-300 border-2 border-blue-400 rounded py-4 px-6 mb-4 text-center">
          <button
            onClick={() => navigate('translator')}
            className="text-xl font-bold underline text-gray-800 hover:text-blue-800 transition-colors cursor-pointer"
          >
            Translator (Translate between languages) 📱
          </button>
        </div>

        {/* Red/pink find crowd banner */}
        <div className="bg-red-400 rounded py-4 px-6 mb-6 text-center">
          <p className="text-2xl font-bold text-white">
            Find your crowd! (People who speak your language!) 👥
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left bottom content */}
          <div className="flex-1 space-y-6">
            {/* Map + text */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center text-3xl">
                🗺️
              </div>
              <p className="text-sm text-gray-800 mt-2">
                This app can be used by many people from tourist to immigrants or even students traveling
              </p>
            </div>

            {/* Profile section */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-sm text-gray-800 mt-2 underline">
                <button
                  onClick={() => navigate('profile')}
                  className="font-semibold hover:text-teal-700 transition-colors cursor-pointer text-left"
                >
                  Profile
                </button>{' '}
                – who you are. What do you like. Most importantly what language
              </p>
            </div>
          </div>

          {/* Right pink box */}
          <div className="w-full md:w-64 bg-pink-400 text-white font-bold text-xl text-center flex flex-col items-center justify-center rounded p-6 min-h-36 gap-3">
            <span>Many languages!</span>
            <span className="text-3xl">🌐</span>
            <span>Start Learning TODAY 📚</span>
          </div>
        </div>
      </main>

      {/* Bottom navigation */}
      <nav className="border-t-2 border-gray-300 py-3 flex justify-center gap-12 text-sm">
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-1 underline font-semibold hover:text-teal-700 transition-colors"
        >
          🏠 Home
        </button>
        <button
          onClick={() => navigate('translator')}
          className="flex items-center gap-1 underline font-semibold hover:text-teal-700 transition-colors"
        >
          🌐 <span className="underline">Translate</span>
        </button>
        <button
          onClick={() => navigate('profile')}
          className="flex items-center gap-1 underline font-semibold hover:text-teal-700 transition-colors"
        >
          👤 <span className="underline">Profile</span>
        </button>
      </nav>
    </div>
  );
}
