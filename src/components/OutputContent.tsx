import CopyButton from './CopyButton';
import { HideIcon } from './icons/HideIcon';
import { ShowIcon } from './icons/ShowIcon';

const OutputContent = ({
  outputContent,
  togglePreview,
  showPreview,
  parseErrorContent,
}: {
  outputContent: string;
  togglePreview: () => void;
  showPreview: boolean;
  parseErrorContent: JSX.Element | null;
}) => {
  return (
    <>
      <hr className="h-px mt-8 border-0 bg-gray-700 w-full" />{' '}
      <div className="mb-1 mt-4 ml-5 text-md font-bold text-white">
        <div className="flex align-middle items-center">
          Output
          <CopyButton textToCopy={outputContent} />
          <button
            type="button"
            onClick={togglePreview}
            className="flex min-w-[124px] max-h-[32px] align-middle items-center cursor-pointer px-3 py-2 ml-2 text-xs font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            {showPreview ? <HideIcon /> : <ShowIcon />}
            <span className="ml-1">
              {showPreview ? 'Hide' : 'Show'} Preview
            </span>
          </button>
        </div>
        <div className="text-sm text-gray-500 font-normal">
          This text can be pasted into a forum post. Links will auto-redirect to
          the first search result for the selected store.
        </div>
      </div>
      {parseErrorContent}
      <div className="mt-4 ml-5 w-full max-h-[126px] overflow-y-scroll border-2 border-gray-700 rounded">
        <pre className="w-full p-4 text-xs select-all whitespace-no-wrap cursor-pointer">
          {outputContent.split('\n').map((line, index) => (
            <div key={index}>
              {/* For any lines that could not be parse, render them as red plaintext */}
              {line.includes('[URL=') && <div>{line}</div>}
              {!line.includes('[URL=') && (
                <div className="text-red-400">{line}</div>
              )}
            </div>
          ))}
        </pre>
      </div>
    </>
  );
};

export default OutputContent;
