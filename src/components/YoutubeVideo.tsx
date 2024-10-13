import React, { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoSrc from './../assets/final.mp4';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Sections } from '../utils/navbarTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';

export default function LocalVideoWithTooltip(): React.ReactElement {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const activeHash = useSelector((state: RootState) => state.hash.activeHash);
  const { t } = useTranslation();

  const handleVideoClick = (): void => {
    if (videoRef.current) {
      const mutedState = !isMuted;
      videoRef.current.muted = mutedState;
      setIsMuted(mutedState);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(activeHash === Sections.Music);
    }, activeHash === Sections.Music ? 3500 : 1500);

    return () => clearTimeout(timer);
  }, [activeHash]);

  const handleTooltipClick = (): void => {
    window.open('https://www.youtube.com/watch?v=Mfxv1jmkWlk', '_blank');
  };

  return (
    <div className="relative flex flex-col justify-between rounded-xl bg-gray-700">
      <video
        ref={videoRef}
        className="rounded-xl cursor-pointer"
        width={isMobile ? '110px' : '200px'}
        autoPlay
        loop
        muted={isMuted}
        onClick={handleVideoClick}
        title="Click to mute/unmute"
        playsInline
      >
        <source src={VideoSrc} type="video/mp4" />
      </video>

      <div className="absolute bottom-3 left-2">
        {isMuted ? <VolumeOffIcon className="text-white text-2xl" /> : <VolumeUpIcon className="text-white text-2xl" />}
      </div>

      <div
        className={`absolute -bottom-7 left-0 right-0 -z-10 transition-transform duration-1000 ease-in-out transform ${
          showTooltip ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        <Tooltip title={t('music.video.seeFullVideo')}>
          <span onClick={handleTooltipClick} className="cursor-pointer w-full"> 
            <a className="bg-gray-700 text-white w-full pt-4 pb-1 text-sm font-bold rounded-b-lg opacity-75 hover:opacity-80 transition-opacity block text-center">
              {t('music.video.clickMe')}
            </a>
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
