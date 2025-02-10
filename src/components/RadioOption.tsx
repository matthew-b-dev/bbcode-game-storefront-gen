import { ChangeEventHandler } from 'react';

export const RadioOption = ({
  optionId,
  optionName,
  optionValue,
  optionText,
  optionSubtext,
  icon,
  selectedValue,
  onSelect,
  mono,
}: {
  optionId: string;
  optionName: string;
  optionValue: string;
  optionText: string;
  optionSubtext?: string;
  icon?: () => JSX.Element;
  selectedValue: string;
  onSelect: ChangeEventHandler<HTMLInputElement>;
  mono?: boolean;
}) => {
  return (
    <li>
      <input
        type="radio"
        id={optionId}
        name={optionName}
        value={optionValue}
        className="hidden peer"
        required
        checked={selectedValue === optionValue}
        onChange={onSelect}
      />
      <label
        htmlFor={optionId}
        className="min-h-[40px] inline-flex items-center justify-between w-full py-1 px-3 border border-2 rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:bg-gray-700 peer-checked:text-white peer-checked:border-blue-600 text-gray-400 bg-gray-800 hover:bg-gray-700"
      >
        <div
          className={`flex align-middle items-center ${
            optionSubtext ? 'w-full' : ''
          }`}
        >
          {icon && <div className="w-full">{icon()}</div>}
          {!optionSubtext && (
            <div
              className={`${
                icon ? 'ml-2' : ''
              } text-lg font-semibold items-center`}
            >
              <div className={mono ? 'ml-2 font-mono' : 'font-normal '}>
                {optionText}
              </div>
            </div>
          )}

          {optionSubtext && (
            <div className="flex justify-between w-full">
              <div>
                <span className={mono ? 'ml-2 font-mono text-sm' : ''}>
                  {optionText}
                </span>
              </div>
              <div>
                <span className="italic text-gray-500 block md:hidden lg:block">
                  {optionSubtext}
                </span>
              </div>
            </div>
          )}
        </div>
      </label>
    </li>
  );
};
