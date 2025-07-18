import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad2, Trophy, RefreshCw } from "lucide-react";

// Card images for the memory game
const cardIcons = [
  { id: 1, icon: "💻" },
  { id: 2, icon: "🌐" },
  { id: 3, icon: "⚛️" },
  { id: 4, icon: "🔥" },
  { id: 5, icon: "📱" },
  { id: 6, icon: "🎮" },
  { id: 7, icon: "🛠️" },
  { id: 8, icon: "📊" },
];

// Duplicate the cards to create pairs
const createCards = () => {
  const allCards = [...cardIcons, ...cardIcons];
  return allCards
    .map((card) => ({ ...card, matched: false, flipped: false, key: Math.random() }))
    .sort(() => Math.random() - 0.5);
};

const GameSection = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  // Initialize or reset the game
  const startGame = () => {
    setCards(createCards());
    setFlippedIndexes([]);
    setMoves(0);
    setGameStarted(true);
    setGameComplete(false);
  };

  // Handle card click
  const handleCardClick = (index: number) => {
    // Prevent clicking if the card is already flipped or matched
    if (cards[index].flipped || cards[index].matched) return;
    // Prevent clicking more than 2 cards at a time
    if (flippedIndexes.length === 2) return;

    // Update card state to show it's flipped
    const updatedCards = [...cards];
    updatedCards[index] = { ...updatedCards[index], flipped: true };
    setCards(updatedCards);

    // Add this card to flipped indexes
    const updatedFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(updatedFlippedIndexes);

    // If this is the second card flipped, check for match
    if (updatedFlippedIndexes.length === 2) {
      setMoves((prev) => prev + 1);

      const [firstIndex, secondIndex] = updatedFlippedIndexes;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        // Cards match!
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex] = { ...matchedCards[firstIndex], matched: true };
          matchedCards[secondIndex] = { ...matchedCards[secondIndex], matched: true };
          setCards(matchedCards);
          setFlippedIndexes([]);

          // Check if all cards are matched (game complete)
          const allMatched = matchedCards.every((card) => card.matched);
          if (allMatched) {
            setGameComplete(true);
            // Update best score
            if (bestScore === null || moves + 1 < bestScore) {
              setBestScore(moves + 1);
              localStorage.setItem("memoryGameBestScore", String(moves + 1));
            }
          }
        }, 500);
      } else {
        // Cards don't match, flip them back
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex] = { ...resetCards[firstIndex], flipped: false };
          resetCards[secondIndex] = { ...resetCards[secondIndex], flipped: false };
          setCards(resetCards);
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  };

  // Load best score from localStorage
  useEffect(() => {
    const savedBestScore = localStorage.getItem("memoryGameBestScore");
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore));
    }
  }, []);

  return (
    <section id="game" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading flex items-center gap-3 mb-8">
          <Gamepad2 className="h-10 w-10" />
          Take a Break & Play
        </h2>
        
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Challenge yourself with this memory card game! Match pairs of cards with the fewest moves possible. Perfect for a quick mental break.
        </p>

        <div className="glass rounded-xl p-6 max-w-4xl mx-auto transition-all duration-300 transform hover:scale-[1.01]">
          {!gameStarted ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 text-center">
              <div className="text-7xl animate-bounce">🎮</div>
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Memory Card Game
              </CardTitle>
              <CardDescription className="max-w-md">
                Test your memory by matching pairs of cards. Find all matches with the fewest moves possible!
              </CardDescription>
              
              {bestScore && (
                <div className="flex items-center gap-2 text-secondary">
                  <Trophy className="h-5 w-5" />
                  <span>Best Score: {bestScore} moves</span>
                </div>
              )}
              
              <Button 
                onClick={startGame}
                className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary)/0.5)] hover:shadow-[0_0_25px_rgba(var(--primary)/0.8)]"
              >
                Start Game
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div className="text-lg font-medium">Moves: {moves}</div>
                {bestScore && (
                  <div className="flex items-center gap-2 text-secondary">
                    <Trophy className="h-5 w-5" />
                    <span>Best: {bestScore}</span>
                  </div>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={startGame}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reset
                </Button>
              </div>

              {gameComplete && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm rounded-xl">
                  <div className="text-center p-8 glass rounded-xl animate-scale-in">
                    <div className="text-7xl mb-4">🏆</div>
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Congratulations!
                    </h3>
                    <p className="mb-4 text-lg">
                      You completed the game in <span className="font-bold text-accent">{moves} moves</span>!
                    </p>
                    <Button onClick={startGame} className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      Play Again
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                  <div 
                    key={card.key}
                    onClick={() => handleCardClick(index)}
                    className={`
                      aspect-square rounded-xl cursor-pointer transition-all duration-500 transform perspective-500
                      ${card.flipped || card.matched ? 'rotate-y-180' : ''}
                      hover:shadow-[0_0_15px_rgba(var(--primary)/0.5)]
                    `}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="absolute inset-0 backface-hidden glass flex items-center justify-center rounded-xl border-2 border-muted">
                      <span className="text-2xl">?</span>
                    </div>
                    <div 
                      className={`
                        absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-xl
                        ${card.matched ? 'bg-gradient-to-br from-primary/20 to-accent/20' : 'glass'}
                        border-2 ${card.matched ? 'border-accent' : 'border-primary/50'}
                      `}
                    >
                      <span className="text-4xl">{card.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameSection;