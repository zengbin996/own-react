import React from 'react';
import { SunOne, Translate, Riding, Github } from '@icon-park/react';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();

  const activityLangCss = type => {
    if (type) {
      return 'cursor-pointer text-sky-500 hover:text-sky-500';
    }
    return 'cursor-pointer hover:text-sky-500';
  };
  const languageElement = (
    <div className="w-24 text-center leading-8 text-black">
      <div
        className={activityLangCss(i18n.language === 'zh')}
        onClick={() => i18n.changeLanguage('zh')}
      >
        中文
      </div>
      <div
        className={activityLangCss(i18n.language === 'en')}
        onClick={() => i18n.changeLanguage('en')}
      >
        English
      </div>
    </div>
  );

  const themeElement = (
    <div className="w-24 text-center leading-8 text-black">
      <div className="cursor-pointer hover:text-sky-500">{t('header.light')}</div>
      <div className="cursor-pointer hover:text-sky-500">{t('header.dark')}</div>
      <div className="cursor-pointer hover:text-sky-500">{t('header.auto')}</div>
    </div>
  );

  return (
    <header className="border-b">
      <div className="container mx-auto h-16 flex justify-between items-center">
        <Riding theme="outline" size="48" fill="#333" />

        <div className="flex items-center">
          <div className="flex gap-4">
            <a href="https://www.apple.com">{t('header.music')}</a>
            <a href="https://www.apple.com">{t('header.wallpaper')}</a>
            <a href="https://www.apple.com">{t('header.camera')}</a>
          </div>

          <div className="w-px border-l mx-4 h-4"></div>

          <Tooltip title={themeElement} className="cursor-pointer" color="#FFF">
            <SunOne theme="outline" size="24" fill="#333" className="mr-4" />
          </Tooltip>
          <Tooltip title={languageElement} className="cursor-pointer" color="#FFF">
            <Translate theme="outline" size="24" fill="#333" className="mr-4" />
          </Tooltip>

          <Github theme="outline" size="24" fill="#333" className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
