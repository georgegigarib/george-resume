import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../components/Settings/DropdownMenu';


const Navbar = () => {
  const [activeHash, setActiveHash] = useState('');
  const [translateClass, setTranslateClass] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [automaticScroll, setAutomaticScroll] = useState(true);
  const { t } = useTranslation()

  function moveNavBar(hash: string): void {
    const getTranslateXForHash = (hash: string) => {
      switch (hash) {
        case '#dev':
          return 'translate-x-[48%] xl:translate-x-[52%]';
        case '#me':
          return '-translate-x-0';
        case '#music':
          return '-translate-x-[44%] sm:-translate-x-[40%] md:-translate-x-[45%] xl:-translate-x-[50%]';
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

      setTimeout(() => {
        setAutomaticScroll(false);
      }, called ? 0 : 500)
    }
  };

  useEffect(() => {
    const hash = location.hash || '#me';
    setActiveHash(hash);
    moveNavBar(hash);

    if (automaticScroll) {
      scrollToSection(hash);
      return;
    }
  }, [location.hash]);

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
        navigate('/#music');
      } else if (scrollPercentage < 33) {
        navigate('/#dev');
      } else {
        navigate('/#me');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollX]);

  return (
    <nav className="bg-transparent border-transparent fixed w-full z-20 top-0 start-0 border-b nav-bottom-oval h-20">
      <LanguageSwitcher />

      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-8">
        <div
          className={`justify-between flex mt-2 h-16 xs:gap-28 sm:gap-56 md:gap-80 lg:gap-[450px] xl:gap-[600px] transform ${translateClass} animated-transform`}
          id="navbar-sticky"
        >
          <a
            onClick={() => scrollToSection('#dev', true)}
            className={`block rounded md:p-0 ${
              activeHash === '#dev'
                ? 'text-white font-bold animated-transform translate-y-[45%] md:translate-y-[45%] scale-130'
                : 'text-gray-900 animated-transform rotate-[18deg] translate-y-[10%] sm:rotate-12 md:translate-y-[0%] xl:rotate-3 opacity-40 font-bold 2xl:translate-y-[20%]'
            } ${activeHash === '#music' ? '-translate-y-[60%] md:-translate-y-[80%] 2xl:-translate-y-[50%]' : ''}`}
            aria-current={activeHash === '#dev' ? 'page' : undefined}
          >
            Dev
          </a>
          <a
            onClick={() => scrollToSection('#me', true)}
            className={`block pt-8 rounded md:p-0 ${
              activeHash === '#me'
                ? 'text-white font-bold animated-transform -translate-y-[20%] md:translate-y-[50%] scale-130'
                : 'text-gray-900 -translate-y-[40%] sm:-translate-y-[40%] animated-transform md:dark:hover:bg-transparent opacity-40 font-bold'
            } ${
              activeHash === '#music'
                ? 'rotate-[18deg]  sm:rotate-6 md:-translate-y-[0%] 2xl:translate-y-[15%] lg:rotate-3'
                : activeHash === '#dev'
                ? '-rotate-[18deg] sm:-rotate-6  md:translate-y-[0%]  2xl:translate-y-[15%] lg:-rotate-3'
                : ''
            }`}
          >
            Me
          </a>
          <a
            onClick={() => scrollToSection('#music', true)}
            className={`block rounded md:p-0 ${
              activeHash === '#music'
                ? 'text-white font-bold animated-transform translate-y-[45%] scale-130 -rotate-1'
                : 'text-gray-900 -rotate-[18deg] translate-y-[10%] sm:-rotate-12 md:translate-y-[0%] xl:-rotate-3 animated-transform opacity-40 font-bold 2xl:translate-y-[20%]'
            } ${activeHash === '#dev' ? '-translate-y-[60%] md:-translate-y-[80%] 2xl:-translate-y-[50%]' : ''}`}
          >
            Music
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
