import { useState } from 'react';
import { Down, Up } from '@icon-park/react';

type Props = {
  title: string;
  option: Array<{ key: string; value: string }>;
  defaultData: string;
  className?: string;
  onChange: (item: { key: string; value: string }) => void;
};

const Select = (props: Props) => {
  const [folded, setFolded] = useState<boolean>(true);
  const [current, setCurrent] = useState<string>(props.defaultData);

  return (
    <div className={props.className + ' px-2 pt-2'}>
      <div className="bg-slate-300 rounded-md p-2">
        <div
          className="flex justify-between"
          onClick={() => {
            setFolded(!folded);
          }}
        >
          <span className="inline-block w-20">{props.title}</span>

          <div className="flex items-center gap-1">
            <span>{props.option.find((item) => item.key === current)?.value}</span>
            {folded ? <Down theme="outline" size="24" fill="#333" /> : <Up theme="outline" size="24" fill="#333" />}
          </div>
        </div>

        {!folded && (
          <div className="text-center">
            {props.option.map((item) => (
              <div
                key={item.key}
                className="leading-8"
                onClick={() => {
                  props.onChange(item);
                  setCurrent(item.key);
                  setFolded(true);
                }}
              >
                <span className={item.key === current ? 'text-red-600' : ''}> {item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
