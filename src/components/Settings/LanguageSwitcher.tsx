import { Menu, MenuItem, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ChangeLanguageIcon from '@mui/icons-material/Language'; // Cambia esto si usas otro ícono
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'; // Puedes usar ArrowDropUp si prefieres

interface LanguageOption {
  code: string;
  name: string;
}

const LanguageSwitcher = ({ onClose }: { onClose: () => void }) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const languageOptions: LanguageOption[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onClose();
    setAnchorEl(null);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full gap-10">
        <Button
          variant="contained"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          style={{
            borderRadius: '20px', // Para hacerlo redondeado
            display: 'flex',
            alignItems: 'center',
          }}
          size='small'
        >
          <ChangeLanguageIcon style={{ marginRight: '8px' }} />
          {i18n.language === 'en' ? 'English' : 'Español'}
          <ArrowDropDown style={{ marginLeft: 'auto', transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          PaperProps={{
            style: {
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
            },
          }}
        >
          {languageOptions.map((lang) => (
            <MenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
              {lang.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default LanguageSwitcher;
