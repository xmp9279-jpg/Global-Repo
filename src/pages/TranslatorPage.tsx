import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Loader2 } from 'lucide-react';

interface Props {
  navigate: (page: 'home' | 'translator' | 'profile') => void;
}

const LANGUAGES: Record<string, string> = {
  English: 'en',
  Spanish: 'es',
  French: 'fr',
  German: 'de',
  Italian: 'it',
  Portuguese: 'pt',
  Japanese: 'ja',
  Chinese: 'zh',
  Arabic: 'ar',
  Russian: 'ru',
};

async function translateText(text: string, fromCode: string, toCode: string): Promise<string> {
  if (!text.trim()) return '';
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromCode}|${toCode}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Translation request failed');
  const data = await res.json();
  return data?.responseData?.translatedText ?? '';
}

export default function TranslatorPage({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<'translate' | 'scan'>('translate');
  const [sourceLang, setSourceLang] = useState('English');
  const [targetLang, setTargetLang] = useState('Spanish');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [translating, setTranslating] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!inputText.trim()) {
      setOutputText('');
      return;
    }
    setTranslating(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const result = await translateText(inputText, LANGUAGES[sourceLang], LANGUAGES[targetLang]);
        setOutputText(result);
      } catch {
        setOutputText('Translation failed. Please try again.');
      } finally {
        setTranslating(false);
      }
    }, 600);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [inputText, sourceLang, targetLang]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-serif">
      {/* Header */}
      <header className="border-b-4 border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1 text-3xl font-bold tracking-wide text-gray-800">
          GL<Globe className="inline w-8 h-8 text-blue-500" />BAL
        </div>
        <div className="bg-red-600 text-white font-extrabold text-lg px-5 py-3 uppercase leading-tight text-right">
          Any Language<br />WE GOT IT!
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 py-6">
        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => { setActiveTab('translate'); navigate('translator'); }}
            className={`px-6 py-2 border-2 border-gray-400 font-semibold text-base transition-colors ${
              activeTab === 'translate' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
            }`}
          >
            Translate
          </button>
          <button
            onClick={() => setActiveTab('scan')}
            className={`px-6 py-2 border-2 border-gray-400 font-semibold text-base transition-colors ${
              activeTab === 'scan' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'
            }`}
          >
            Scan 🔦
          </button>
        </div>

        {/* Translation panel */}
        <div className="border-2 border-gray-400 mb-6">
          {/* Language selectors — clickable dropdown labels */}
          <div className="grid grid-cols-2 border-b-2 border-gray-400">
            <div className="border-r-2 border-gray-400 px-6 py-3 relative">
              <div className="relative inline-block">
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="appearance-none bg-transparent font-semibold text-lg cursor-pointer pr-7 focus:outline-none hover:text-teal-700 transition-colors"
                >
                  {Object.keys(LANGUAGES).map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              </div>
            </div>
            <div className="px-6 py-3 relative">
              <div className="relative inline-block">
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="appearance-none bg-transparent font-semibold text-lg cursor-pointer pr-7 focus:outline-none hover:text-teal-700 transition-colors"
                >
                  {Object.keys(LANGUAGES).map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Text areas */}
          <div className="grid grid-cols-2">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter Text to Translate Here"
              className="bg-gray-200 p-6 min-h-48 text-gray-800 text-base font-mono resize-none border-r-2 border-gray-400 focus:outline-none focus:bg-gray-100 placeholder:text-center placeholder:pt-8 placeholder:text-gray-500"
            />
            <div className="relative">
              <textarea
                value={outputText}
                onChange={(e) => setOutputText(e.target.value)}
                placeholder="Translated Text Appears Here"
                className="bg-gray-200 p-6 min-h-48 w-full text-gray-800 text-base font-mono resize-none focus:outline-none focus:bg-gray-100 placeholder:text-center placeholder:pt-8 placeholder:text-gray-500"
              />
              {translating && (
                <div className="absolute top-3 right-3">
                  <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* Feel included box */}
          <div className="border-2 border-dashed border-gray-600 px-6 py-5 flex items-center justify-center w-full md:w-44">
            <span className="font-extrabold text-xl text-gray-800 text-center tracking-wide">
              FEEL<br />INCLUDED
            </span>
          </div>

          {/* Tips */}
          <div className="flex-1 flex flex-col items-center justify-center text-center py-4">
            <p className="font-semibold text-lg mb-2">Tips 💡</p>
            <p className="text-sm text-gray-700">Hello, how are you? &nbsp;&nbsp;&nbsp; Hola, ¿cómo estás?</p>
            <p className="text-sm text-gray-700">Where is the station? &nbsp;&nbsp;&nbsp; ¿Dónde está la estación?</p>
          </div>

          {/* Understand box */}
          <div className="bg-green-500 text-white font-bold text-lg px-6 py-5 flex items-center justify-center text-center w-full md:w-44 rounded-sm">
            Understand<br />the world<br />better
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
