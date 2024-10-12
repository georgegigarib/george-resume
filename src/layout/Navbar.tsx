import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../components/Settings/DropdownMenu';
import { useTranslation } from 'react-i18next';

enum Sections {
  Dev = '#dev',
  Me = '#me',
  Music = '#music',
}

const Navbar = () => {
  const [activeHash, setActiveHash] = useState('');
  const [translateClass, setTranslateClass] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [automaticScroll, setAutomaticScroll] = useState(true);
  const { t } = useTranslation();

  function moveNavBar(hash: string): void {
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
  }

  const scrollToSection = (id: string, called?: boolean) => {
    const section = document.querySelector(id) as HTMLElement;
    if (section) {
      const offset = section.offsetLeft - window.innerWidth / 2 + section.clientWidth / 2;
      setAutomaticScroll(true);

      window.scrollTo({
        left: offset,
        behavior: 'smooth',
      });

      setTimeout(
        () => {
          setAutomaticScroll(false);
        },
        called ? 0 : 500,
      );
    }
  };

  useEffect(() => {
    const hash = location.hash || Sections.Me;
    setActiveHash(hash);
    moveNavBar(hash);

    if (automaticScroll) {
      scrollToSection(hash);
      return;
    }
  }, [location.hash, automaticScroll]);

  useEffect(() => {
    if (automaticScroll) {
      return;
    }

    const handleScroll = () => {
      const scrollX = window.scrollX;
      const windowHeight = window.innerWidth;
      const documentHeight = document.body.scrollWidth;

      const scrollPercentage = (scrollX / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 66) {
        moveNavBar(Sections.Music);
        setActiveHash(Sections.Music);
      } else if (scrollPercentage < 33) {
        moveNavBar(Sections.Dev);
        setActiveHash(Sections.Dev);
      } else {
        moveNavBar(Sections.Me);
        setActiveHash(Sections.Me);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollX]);

  return (
    <nav className="bg-transparent border-transparent fixed w-full z-20 top-0 start-0 border-b nav-bottom-oval h-12 md:h-20">
      <LanguageSwitcher />

      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-8">
        <div
          className={`justify-between flex mt-0 md:mt-2 h-16 gap-20 xs:gap-28 sm:gap-56 md:gap-80 lg:gap-[450px] xl:gap-[600px] transform ${translateClass} animated-transform`}
          id="navbar-sticky"
        >
          <a
            onClick={() => {
              scrollToSection(Sections.Dev, true);
              navigate(Sections.Dev);
              setAutomaticScroll(false);
            }}
            className={`block rounded md:p-0 ${
              activeHash === Sections.Dev
                ? 'text-white font-bold animated-transform translate-y-[15%] md:translate-y-[45%] scale-130'
                : activeHash === Sections.Music
                ? '-translate-y-[60%] md:-translate-y-[80%] 2xl:-translate-y-[50%] animated-transform'
                : 'text-gray-900 animated-transform rotate-[18deg] -translate-y-[20%] sm:rotate-12 md:translate-y-[0%] xl:rotate-3 opacity-40 font-bold 2xl:translate-y-[20%]'
            }`}
            aria-current={activeHash === Sections.Dev ? 'page' : undefined}
          >
            {t('navbar.dev')}
          </a>
          <a
            onClick={() => {
              scrollToSection(Sections.Me, true);
              navigate(Sections.Me);
              setAutomaticScroll(false);
            }}
            className={`block pt-8 rounded md:p-0 ${
              activeHash === Sections.Me
                ? 'text-white font-bold animated-transform -translate-y-[50%] md:translate-y-[50%] scale-130'
                : 'text-gray-900 -translate-y-[75%] sm:-translate-y-[70%] animated-transform md:dark:hover:bg-transparent opacity-40 font-bold'
            } ${
              activeHash === Sections.Music
                ? 'rotate-[18deg] sm:rotate-6 md:-translate-y-[10%] 2xl:translate-y-[15%] lg:rotate-3'
                : activeHash === Sections.Dev
                ? '-rotate-[18deg] sm:-rotate-6  md:translate-y-[0%]  2xl:translate-y-[15%] lg:-rotate-3'
                : ''
            }`}
          >
            {t('navbar.me')}
          </a>
          <a
            onClick={() => {
              scrollToSection(Sections.Music, true);
              navigate(Sections.Music);
              setAutomaticScroll(false);
            }}
            className={`block rounded md:p-0 ${
              activeHash === Sections.Music
                ? 'text-white font-bold animated-transform translate-y-[15%] md:translate-y-[45%] scale-130 -rotate-5'
                : activeHash === Sections.Dev
                ? '-translate-y-[60%] md:-translate-y-[80%] 2xl:-translate-y-[50%] animated-transform'
                : 'text-gray-900 -rotate-[17deg] -translate-y-[20%] sm:-rotate-12 md:translate-y-[0%] xl:-rotate-3 animated-transform opacity-40 font-bold 2xl:translate-y-[20%]'
            }`}
          >
            {t('navbar.music')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
