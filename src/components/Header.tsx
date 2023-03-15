import { useState } from 'react';
import { HamburgerButton, Close } from '@icon-park/react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { THEME_OPTION, changeTheme } from '../store/theme';
import { languageOption } from '../i18n/config';
import Select from './Select';

export default function Header() {
  const count = useSelector((state: any) => state.theme.current);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <header className="flex justify-between items-center py-4 px-2 bg-slate-200 text-black">
        <img src="/ico.svg" />
        <span>{t('header.hello')}</span>

        <div
          onClick={() => {
            setVisible(!visible);
            document.body.style.overflow = visible ? 'auto' : 'hidden';
          }}
        >
          {visible ? <Close theme="outline" size="24" fill="#333" /> : <HamburgerButton theme="outline" size="24" />}
        </div>
      </header>

      {visible && (
        <div className="bg-slate-200 fixed w-full" style={{ height: 'calc(100vh - 68px)', top: '68px' }}>
          <div>
            <Select
              title={t('header.language')}
              defaultData={i18n.language}
              option={languageOption}
              onChange={(item) => {
                i18n.changeLanguage(item.key);
                localStorage.lang = item.key;
              }}
            />

            <Select
              title={t('header.theme')}
              defaultData={count}
              option={THEME_OPTION}
              onChange={(item) => {
                dispatch(changeTheme(item.key));
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
