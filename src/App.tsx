import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './App.css';
import { convertCurrency, Game } from './utils/utils';
import FormContent from './components/FormContent';
import OutputContent from './components/OutputContent';
import PreviewContent from './components/PreviewContent';
import { GitHubIcon } from './components/icons/GitHubIcon';

const App = () => {
  const [textContent, setTextContent] = useState<string>('');
  const [outputContent, setOutputContent] = useState<string>('');
  const [gameObjects, setGameObjects] = useState<Game[]>([]);
  const [storeSelection, setStoreSelection] = useState<string>('steam+store');
  const [currencySelection, setCurrencySelection] = useState<string>('dollar');
  const [formatSelection, setFormatSelection] = useState<string>('dash');
  const [showPreview, setShowPreview] = useState(false);

  /* Parse input into various forms of output: BBCode, HTML, and Plaintext */
  const updateOutput = useCallback(
    (text: string) => {
      let regex;
      if (formatSelection === 'dash') {
        regex = /(.*) - ([$£€]+)(\d+(\.\d+)?)/;
      } else if (formatSelection === 'space') {
        regex = /(.*) ([$£€]+)(\d+(\.\d{2})?)/;
      } else {
        regex = /(.*): ([$£€]+)(\d+(\.\d{2})?)/;
      }
      const outputLines: string[] = [];
      const tempGameObjects: Game[] = [];
      text.split('\n').forEach((fullLine) => {
        if (fullLine.trim().length > 0) {
          const result = regex.exec(fullLine);
          if (result && result.length >= 4) {
            const url = `https://duckduckgo.com/?q=!ducky+${storeSelection}+${encodeURI(
              result[1]
            ).replace(/'/g, '%27')}`;
            tempGameObjects.push({
              name: result[1],
              price: `${convertCurrency(currencySelection)}${result[3]}`,
              url: url,
              raw: fullLine,
            });
            outputLines.push(
              `[URL='${url}']${result[1]}[/URL] - ${convertCurrency(
                currencySelection
              )}${result[3]}`
            );
          } else {
            tempGameObjects.push({
              raw: fullLine,
            });
            outputLines.push(fullLine);
          }
        }
      });
      setGameObjects(tempGameObjects);
      setOutputContent(outputLines.join('\n'));
    },
    [currencySelection, formatSelection, storeSelection]
  );

  /* If any games could not be parsed, render an error explaining how many games errored*/
  let parseErrorContent = null;
  const gamesWithoutLinks = outputContent
    .split('\n')
    .filter((line) => !line.includes('URL='));
  if (gamesWithoutLinks.length > 0) {
    const plural = gamesWithoutLinks.length > 1;
    parseErrorContent = (
      <div className="ml-5 text-red-400">
        {`${gamesWithoutLinks.length} line${plural ? 's' : ''} ${
          plural ? 'were' : 'was'
        } formatted unexpectedly.`}
      </div>
    );
  }

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
    updateOutput(event.target.value);
  };

  useEffect(() => {
    updateOutput(textContent);
  }, [
    storeSelection,
    currencySelection,
    formatSelection,
    textContent,
    updateOutput,
  ]);

  const togglePreview = () => {
    setShowPreview(!showPreview);
    if (!showPreview) {
      setTimeout(function () {
        window.scrollTo(0, document.body.scrollHeight);
      }, 50);
    }
  };

  return (
    <div>
      <div className="lg:container mx-auto flex w-full flex-wrap items-center justify-between px-3 mb-8 mt-6 text">
        <h2 className="text-center w-full font-bold text-4xl ">
          BBCode Storefront Generator
        </h2>
        <div className="text-center w-full font-normal mt-2 text-gray-500">
          Generate store links for the games in your forum-post storefront
        </div>
        <div className="justify-center w-full font-normal mt-2 text-gray-500">
          <div className="flex justify-center">
            <a
              href="https://github.com/matthew-b-dev/bbcode-game-storefront-gen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="underline flex text-white align-middle items-center">
                <GitHubIcon />
                <span className="pl-2">matthew-b-dev</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:container mx-auto flex w-full flex-wrap items-center justify-between px-3">
        <FormContent
          setStoreSelection={setStoreSelection}
          setCurrencySelection={setCurrencySelection}
          setFormatSelection={setFormatSelection}
          handleTextAreaChange={handleTextAreaChange}
          formatSelection={formatSelection}
          storeSelection={storeSelection}
          currencySelection={currencySelection}
          textContent={textContent}
        />
        {textContent && textContent.trim().length !== 0 && (
          <>
            <OutputContent
              outputContent={outputContent}
              togglePreview={togglePreview}
              showPreview={showPreview}
              parseErrorContent={parseErrorContent}
            />
            {showPreview && <PreviewContent gameObjects={gameObjects} />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
