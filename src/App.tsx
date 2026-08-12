import { useState } from 'react';
import HomePage from '@/pages/HomePage';
import TranslatorPage from '@/pages/TranslatorPage';
import ProfilePage from '@/pages/ProfilePage';
import TeamSelectPage from '@/pages/TeamSelectPage';
import MubarakPage from '@/pages/members/MubarakPage';
import MohamedPage from '@/pages/members/MohamedPage';
import XavierPage from '@/pages/members/XavierPage';
import JadaPage from '@/pages/members/JadaPage';
import BiancaPage from '@/pages/members/BiancaPage';

type Page = 'home' | 'translator' | 'profile' | 'team-select' | 'mubarak' | 'mohamed' | 'xavier' | 'jada' | 'bianca';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: string) => setPage(p as Page);

  return (
    <div className="min-h-screen bg-white">
      {page === 'home' && <HomePage navigate={navigate} />}
      {page === 'translator' && <TranslatorPage navigate={navigate} />}
      {page === 'profile' && <ProfilePage navigate={navigate} />}
      {page === 'team-select' && <TeamSelectPage navigate={navigate} />}
      {page === 'mubarak' && <MubarakPage navigate={navigate} />}
      {page === 'mohamed' && <MohamedPage navigate={navigate} />}
      {page === 'xavier' && <XavierPage navigate={navigate} />}
      {page === 'jada' && <JadaPage navigate={navigate} />}
      {page === 'bianca' && <BiancaPage navigate={navigate} />}
    </div>
  );
}
