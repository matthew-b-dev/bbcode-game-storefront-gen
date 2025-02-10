import { RadioOption } from './RadioOption';
import { SteamIcon } from './icons/SteamIcon';
import { GOGIcon } from './icons/GOGIcon';
import { PlaystationIcon } from './icons/PlaystationIcon';
import { ChangeEventHandler } from 'react';
import { OriginIcon } from './icons/OriginIcon';
import { EpicIcon } from './icons/EpicIcon';
import { XboxIcon } from './icons/XboxIcon';

export const StoreRadio = ({
  selectedValue,
  onSelect,
}: {
  selectedValue: string;
  onSelect: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <ul className="grid w-full gap-2 md:grid-cols-3 ml-5">
      <RadioOption
        optionId="steam+store"
        optionName="store"
        optionValue="steam+store"
        optionText="Steam"
        icon={SteamIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <RadioOption
        optionId="gog-store"
        optionName="store"
        optionValue="gog-store"
        optionText="gog.com"
        icon={GOGIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <RadioOption
        optionId="playstation+store"
        optionName="store"
        optionValue="playstation+store"
        optionText="Playstation"
        icon={PlaystationIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <RadioOption
        optionId="origin+store"
        optionName="store"
        optionValue="origin+store"
        optionText="Origin"
        icon={OriginIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <RadioOption
        optionId="epic+store"
        optionName="store"
        optionValue="epic+store"
        optionText="Epic"
        icon={EpicIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <RadioOption
        optionId="xbox+store"
        optionName="store"
        optionValue="xbox+store"
        optionText="Xbox"
        icon={XboxIcon}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
    </ul>
  );
};
