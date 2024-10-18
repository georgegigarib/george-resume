import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setActiveHash } from '@/store/hash/activeHashSlice';
import LanguageSwitcher from '@/components/organisms/NavBarDropdownMenu';
import { Sections } from '@/app/layout/navbarTypes';
import { RootState } from "@/store/hash/activeHashSlice";

import DevLink from '@/components/atoms/DevLink';
import MeLink from '@/components/atoms/MeLink.tsx';
import MusicLink from '@/components/atoms/MusicLink';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const activeHash = useSelector((state: RootState) => state.hash.activeHash);
  const [translateClass, setTranslateClass] = useState('');
  const [automaticScroll, setAutomaticScroll] = useState(true);

  const moveNavBar = (hash: string): void => {
    const getTranslateXForHash = (hash: string) => {
      switch (hash) {
        case Sections.Dev:
          return 'translate-x-[48%] xl:translate-x-[52%]';
        case Sections.Me:
          return '-translate-x-0';
        case Sections.Music:
          return '-translate-x-[44%] sm:-translate-x-[45%] md:-translate-x-[45%] xl:-translate-x-[50%]';
        default:
          return 'translate-x-0';
      }
    };

    setTranslateClass(getTranslateXForHash(hash));
  };

  const scrollToSection = (id: string, called?: boolean) => {
    const section = document.querySelector(id) as HTMLElement;
    if (section) {
      const offset = section.offsetLeft - window.innerWidth / 2 + section.clientWidth / 2;
      setAutomaticScroll(true);

      window.scrollTo({
        left: offset,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setAutomaticScroll(false);
      }, called ? 0 : 500);
    }
  };

  useEffect(() => {
    const hash = location.hash || Sections.Me;
    dispatch(setActiveHash(hash)); // Despacha la acción para establecer el hash activo
    moveNavBar(hash);

    if (automaticScroll) {
      scrollToSection(hash);
      return;
    }
  }, [location.hash, automaticScroll, dispatch]); // Asegúrate de incluir dispatch como dependencia

  useEffect(() => {
    if (automaticScroll) return;

    const handleScroll = () => {
      const scrollX = window.scrollX;
      const windowWidth = window.innerWidth;
      const documentWidth = document.body.scrollWidth;

      const scrollPercentage = (scrollX / (documentWidth - windowWidth)) * 100;

      if (scrollPercentage > 66) {
        moveNavBar(Sections.Music);
        dispatch(setActiveHash(Sections.Music));
        history.pushState(null, '', Sections.Music);
      } else if (scrollPercentage < 33) {
        moveNavBar(Sections.Dev);
        dispatch(setActiveHash(Sections.Dev));
        history.pushState(null, '', Sections.Dev);
      } else {
        moveNavBar(Sections.Me);
        dispatch(setActiveHash(Sections.Me));
        history.pushState(null, '', Sections.Me);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [automaticScroll, dispatch]);

  return (
    <nav className="bg-transparent border-transparent fixed w-full z-20 top-0 start-0 border-b nav-bottom-oval h-12 md:h-20">
      <LanguageSwitcher />

      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-8">
        <div
          className={`justify-between flex mt-0 md:mt-2 h-16 gap-20 xs:gap-28 sm:gap-56 md:gap-80 lg:gap-[450px] xl:gap-[600px] transform ${translateClass} animated-transform`}
          id="navbar-sticky"
        >
          <DevLink scrollToSection={scrollToSection} setAutomaticScroll={setAutomaticScroll} activeHash={activeHash} />
          <MeLink scrollToSection={scrollToSection} setAutomaticScroll={setAutomaticScroll} activeHash={activeHash} />
          <MusicLink scrollToSection={scrollToSection} setAutomaticScroll={setAutomaticScroll} activeHash={activeHash} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
