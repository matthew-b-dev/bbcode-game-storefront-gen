import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { convertCurrency } from '../utils/utils';
import { CurrencyRadio } from './CurrencyRadio';
import { FormatRadio } from './FormatRadio';
import { StoreRadio } from './StoreRadio';

const FormContent = ({
  formatSelection,
  storeSelection,
  currencySelection,
  setStoreSelection,
  setCurrencySelection,
  setFormatSelection,
  handleTextAreaChange,
  textContent,
}: {
  formatSelection: string;
  storeSelection: string;
  currencySelection: string;
  setStoreSelection: Dispatch<SetStateAction<string>>;
  setCurrencySelection: Dispatch<SetStateAction<string>>;
  setFormatSelection: Dispatch<SetStateAction<string>>;
  handleTextAreaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  textContent: string;
}) => {
  return (
    <>
      <div className="mb-1 text-md font-bold text-white">1. Select a store</div>
      <StoreRadio
        selectedValue={storeSelection}
        onSelect={(e) => setStoreSelection(e.target.value)}
      />
      <div className="mb-1 mt-8 text-md font-medium text-white">
        2. Select a currency
      </div>
      <CurrencyRadio
        selectedValue={currencySelection}
        onSelect={(e) => setCurrencySelection(e.target.value)}
      />

      <div className="mb-1 mt-8 text-md font-bold text-white">
        3. Select an input format
        <div className="text-sm text-gray-500 font-normal ml-5">
          How will you input your list?
        </div>
      </div>
      <FormatRadio
        selectedValue={formatSelection}
        onSelect={(e) => setFormatSelection(e.target.value)}
        currency={currencySelection}
      />

      <label htmlFor="message" className="block mb-2 mt-8">
        <div className="text-md font-bold text-white">
          4. Paste/input games and prices
          <div className="text-sm text-gray-500 font-normal ml-5">
            One game per line. Game names do not need to be exact.
          </div>
        </div>
      </label>
      <textarea
        id="message"
        rows={4}
        className="ml-5 block p-2.5 w-full text-sm rounded-lg border border-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder={`Peggle Deluxe ${
          formatSelection === 'dash' ? '- ' : ''
        }${convertCurrency(currencySelection)}3.50`}
        value={textContent}
        onChange={handleTextAreaChange}
      ></textarea>
    </>
  );
};

export default FormContent;
