import { useState, useRef } from 'react';
import { CopyIcon } from './icons/CopyIcon';

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = async () => {
    textAreaRef.current?.select();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div>
      <textarea
        ref={textAreaRef}
        value={textToCopy}
        style={{ position: 'absolute', left: '-9999px' }}
        readOnly
      />
      <button
        type="button"
        onClick={copyToClipboard}
        className={`${
          isCopied
            ? 'bg-green-700 hover:bg-green-900'
            : 'bg-blue-500 hover:bg-blue-800'
        } min-w-[110px] cursor-pointer px-3 py-2 ml-2 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300`}
      >
        {isCopied ? (
          <span>Copied!</span>
        ) : (
          <div className="flex">
            <CopyIcon />
            <div className="ml-1">Copy Output</div>
          </div>
        )}
      </button>
    </div>
  );
};

export default CopyButton;
