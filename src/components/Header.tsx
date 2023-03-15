import React, { useState, useRef } from 'react';
import { HamburgerButton } from '@icon-park/react';
import { useTranslation } from 'react-i18next';
import { languageOption } from '../i18n/config';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [Visible, setVisible] = useState<boolean>(false);
  const mySelect = useRef<HTMLSelectElement>(null);

  return (
    <>
      <header className="flex justify-between items-center py-4 px-2 bg-slate-200 text-black">
        <img src="/ico.svg" />
        <span>{t('header.hello')}</span>
        <HamburgerButton
          theme="outline"
          size="24"
          onClick={() => {
            setVisible(true);
          }}
        />
      </header>

      <div className="bg-slate-200 p-2">
        <div>
          <p className="bg-slate-300 rounded-md p-2">
            <span className="inline-block w-20">{t('header.language')}</span>
            <select
              name="language"
              ref={mySelect}
              onChange={() => {
                i18n.changeLanguage(languageOption[mySelect!.current!.selectedIndex].key);
              }}
            >
              {languageOption.map((item) => (
                <option value={item.key} key={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
          </p>
          <p className="bg-slate-300 rounded-md mt-2 p-2">
            <span className="inline-block w-20">夜间模式</span>

            <div></div>
          </p>
        </div>
      </div>
    </>
  );
}
