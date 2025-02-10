import { RadioOption } from './RadioOption';
import { DollarIcon } from './icons/DollarIcon';
import { PoundIcon } from './icons/PoundIcon';
import { EuroIcon } from './icons/EuroIcon';
import { ChangeEventHandler } from 'react';

export const CurrencyRadio = ({
  selectedValue,
  onSelect,
}: {
  selectedValue: string;
  onSelect: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <ul className="grid grid-cols-3 w-full gap-2 ml-5">
      <RadioOption
        optionId="dollar"
        optionName="currency"
        optionValue="dollar"
        optionText="USD"
        icon={DollarIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <RadioOption
        optionId="euro"
        optionName="currency"
        optionValue="euro"
        optionText="Euro"
        icon={EuroIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <RadioOption
        optionId="gbp"
        optionName="currency"
        optionValue="gbp"
        optionText="GBP"
        icon={PoundIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
    </ul>
  );
};
