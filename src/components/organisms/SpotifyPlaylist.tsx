import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useTranslation } from 'react-i18next';

export default function SpotifyPlaylist(): React.ReactElement {
  const isMobile = useIsMobile();
  const { t } = useTranslation()
  
  return (
    <div className="flex flex-col justify-between h-full p-4  rounded-xl bg-gray-200 dark:bg-gray-800">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-300">
        {t('music.favoritePlaylist.title')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t('music.favoritePlaylist.description')}
        </p>
      </div>
      
      <div className="mt-auto">
        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/playlist/2Z8vIZcBXeeCfcmkffrTlR?utm_source=generator"
          width='100%'
          height={isMobile ? "152px" : "379px"}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
