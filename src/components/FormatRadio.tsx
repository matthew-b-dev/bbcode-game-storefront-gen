import { convertCurrency } from '../utils/utils';
import { RadioOption } from './RadioOption';
import { ChangeEventHandler } from 'react';

export const FormatRadio = ({
  selectedValue,
  onSelect,
  currency,
}: {
  selectedValue: string;
  onSelect: ChangeEventHandler<HTMLInputElement>;
  currency: string;
}) => {
  return (
    <ul className="grid w-full gap-2 md:grid-cols-3 ml-5">
      <RadioOption
        optionId="dash"
        optionName="format"
        optionValue="dash"
        optionText={`Peggle Deluxe - ${convertCurrency(currency)}3.50`}
        optionSubtext="(dash)"
        selectedValue={selectedValue}
        onSelect={onSelect}
        mono
      />
      <RadioOption
        optionId="colon"
        optionName="format"
        optionValue="colon"
        optionText={`Peggle Deluxe: ${convertCurrency(currency)}3.50`}
        optionSubtext="(colon)"
        selectedValue={selectedValue}
        onSelect={onSelect}
        mono
      />
      <RadioOption
        optionId="space"
        optionName="format"
        optionValue="space"
        optionText={`Peggle Deluxe ${convertCurrency(currency)}3.50`}
        optionSubtext="(space)"
        selectedValue={selectedValue}
        onSelect={onSelect}
        mono
      />
    </ul>
  );
};
