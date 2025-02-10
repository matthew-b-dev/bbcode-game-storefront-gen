import { Game } from '../utils/utils';

const PreviewContent = ({ gameObjects }: { gameObjects: Game[] }) => {
  return (
    <>
      <div className="mb-1 mt-8 ml-5 text-md font-bold text-white">
        Forum Preview
      </div>
      <div className="mt-4 ml-5 mb-12 p-4 text-sm w-full max-h-[126px] overflow-y-scroll border-2 border-gray-700 rounded">
        {gameObjects.map((game, index) => (
          <div key={index}>
            {game.name && (
              <>
                {/* Render a link for each successfully-parsed line */}
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {game.name}
                </a>
                {' - '}
                <span>{game.price}</span>
              </>
            )}
            {/* If the game was not successfully parsed, render plaintext */}
            {!game.name && game.raw && <div>{game.raw}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default PreviewContent;
