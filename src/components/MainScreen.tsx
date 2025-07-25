import React, { useState, useEffect } from 'react';
import { Agent, GameStats, GAME_MODES, GameMode } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

import { Play, Pause, RotateCcw, Trophy, RotateCw } from 'lucide-react';

interface MainScreenProps {
  agentCount: number;
  setAgentCount: (count: number) => void;
  selectedMode: GameMode;
  setSelectedMode: (mode: GameMode) => void;
  gameStats: GameStats;
  onStartGame: () => void;
  onStopGame: () => void;
  autoRestart: boolean;
  setAutoRestart: (enabled: boolean) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({
  agentCount,
  setAgentCount,
  selectedMode,
  setSelectedMode,
  gameStats,
  onStartGame,
  onStopGame,
  autoRestart,
  setAutoRestart,
}) => {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (gameStats.isGameOver && autoRestart && countdown === null) {
      setCountdown(10);
    } else if (!gameStats.isGameOver) {
      setCountdown(null);
    }
  }, [gameStats.isGameOver, autoRestart, countdown]);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCountdown(null);
      onStartGame();
    }
  }, [countdown, onStartGame]);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/90 backdrop-blur">
      <div className="max-w-md w-full mx-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-game-primary to-game-secondary to-game-accent bg-clip-text text-transparent mb-4">
            Rock Paper Scissors
          </h1>
          <p className="text-xl text-muted-foreground">
            Watch them battle it out!
          </p>
        </div>

        <Card className="p-6 bg-card/50 backdrop-blur border-arena-border">
          {gameStats.isGameOver && gameStats.winningShape && (
            <div className="text-center mb-6 p-4 bg-game-primary/20 rounded-lg border border-game-primary/30">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-game-secondary" />
              <p className="text-lg font-bold text-game-secondary">
                {gameStats.winningShape.name} Wins!
              </p>
              <div className="text-3xl mt-2">{gameStats.winningShape.emoji}</div>
              {autoRestart && countdown !== null && (
                <div className="mt-4 p-3 bg-accent/20 rounded-lg border border-accent/30">
                  <div className="text-sm font-medium text-accent-foreground">
                    Auto-restarting in {countdown} seconds...
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Agents: {agentCount}
              </label>
              <Slider
                value={[agentCount]}
                onValueChange={([value]) => setAgentCount(value)}
                min={50}
                max={1000}
                step={10}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Game Mode
              </label>
              <select
                value={selectedMode.id}
                onChange={(e) => {
                  const mode = GAME_MODES.find(m => m.id === e.target.value);
                  if (mode) {
                    setSelectedMode(mode);
                  }
                }}
                className="w-full p-2 border border-arena-border rounded bg-background/90 text-white"
              >
                {GAME_MODES.map((mode) => (
                  <option key={mode.id} value={mode.id}>
                    {mode.name} {mode.shapes.slice(0, 10).map(s => s.emoji).join(' ')} {mode.shapes.length > 10 && '...'}
                  </option>
                ))}
              </select>
              <p className="text-xs text-muted-foreground mt-1">
                {selectedMode.description}
              </p>
            </div>

            <div className="flex gap-2">
                <Button 
                  onClick={onStartGame} 
                  className="flex-1 hover:opacity-90"
                  style={{ background: 'var(--gradient-button)' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Battle
                </Button>
                <Button
                  variant={autoRestart ? "default" : "outline"}
                  size="icon"
                  onClick={() => setAutoRestart(!autoRestart)}
                  className="px-3"
                  title="Auto-restart after battle"
                >
                  <RotateCw className={`w-4 h-4 ${autoRestart ? 'animate-pulse' : ''}`} />
                </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MainScreen; 